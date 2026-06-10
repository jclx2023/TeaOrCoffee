import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const canvas = document.getElementById("gameboyCanvas");
const stage = document.getElementById("modelStage");
const loading = document.getElementById("modelLoading");

if (canvas && stage) {
  initGameBoyModel();
}

function initGameBoyModel() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(4, 5, 6);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x25d6d1, 0.75);
  fillLight.position.set(-4, 2, 3);
  scene.add(fillLight);

  scene.add(new THREE.AmbientLight(0xffffff, 1.4));

  const modelGroup = new THREE.Group();
  scene.add(modelGroup);

  camera.position.set(0, 0.35, 8.8);

  const fallbackMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xd9d2ae, roughness: 0.7, metalness: 0.05 }),
    new THREE.MeshStandardMaterial({ color: 0x262626, roughness: 0.65, metalness: 0.05 }),
    new THREE.MeshStandardMaterial({ color: 0x8fac72, roughness: 0.8, metalness: 0.02 }),
    new THREE.MeshStandardMaterial({ color: 0xb43436, roughness: 0.65, metalness: 0.03 })
  ];

  loadMtlObj();

  function loadMtlObj() {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("assets/GameBoy/");
    mtlLoader.setResourcePath("assets/GameBoy/");
    mtlLoader.load(
      "GameBoy1.mtl",
      (materials) => {
        materials.preload();
        loadObj(materials);
      },
      undefined,
      () => loadObj(null)
    );
  }

  function loadObj(materials) {
    const objLoader = new OBJLoader();
    objLoader.setPath("assets/GameBoy/");
    if (materials) objLoader.setMaterials(materials);

    objLoader.load(
      "GameBoy1.obj",
      (object) => {
        prepareModel(object, materials ? null : fallbackMaterials, {
          rotation: new THREE.Euler(Math.PI / 2, 0, 0),
          scale: 4.75
        });
        modelGroup.add(object);
        if (loading) loading.hidden = true;
      },
      undefined,
      () => {
        if (loading) loading.textContent = "MODEL LOAD FAILED";
      }
    );
  }

  function prepareModel(object, materials, options = {}) {
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;

    object.position.sub(center);
    object.scale.setScalar((options.scale || 4.2) / maxAxis);
    object.rotation.copy(options.rotation || new THREE.Euler(0, 0, 0));

    let meshIndex = 0;
    object.traverse((child) => {
      if (!child.isMesh) return;
      if (materials) child.material = materials[meshIndex % materials.length];
      if (child.material) {
        const materialList = Array.isArray(child.material) ? child.material : [child.material];
        materialList.forEach((material) => {
          material.side = THREE.FrontSide;
          material.roughness = 0.75;
          material.metalness = 0;
          if (material.map) {
            material.map.colorSpace = THREE.SRGBColorSpace;
            material.map.magFilter = THREE.NearestFilter;
            material.map.minFilter = THREE.NearestFilter;
            material.map.needsUpdate = true;
          }
          material.needsUpdate = true;
        });
      }
      child.castShadow = false;
      child.receiveShadow = false;
      meshIndex += 1;
    });
  }

  function resize() {
    const rect = stage.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  const drag = {
    active: false,
    lastX: 0,
    lastY: 0,
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  };

  stage.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    drag.active = true;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    stage.setPointerCapture?.(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    if (!drag.active) return;
    event.preventDefault();
    const deltaX = event.clientX - drag.lastX;
    const deltaY = event.clientY - drag.lastY;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    drag.targetY += deltaX * 0.01;
    drag.targetX += deltaY * 0.01;
    drag.targetX = THREE.MathUtils.clamp(drag.targetX, -0.9, 0.9);
  });

  function releaseDrag(event) {
    drag.active = false;
    drag.targetX = 0;
    drag.targetY = 0;
    if (event?.pointerId != null) stage.releasePointerCapture?.(event.pointerId);
  }

  stage.addEventListener("pointerup", releaseDrag);
  stage.addEventListener("pointercancel", releaseDrag);
  stage.addEventListener("pointerleave", () => {
    if (drag.active) return;
    drag.targetX = 0;
    drag.targetY = 0;
  });

  function animate(time) {
    resize();
    const seconds = time * 0.001;
    drag.x += (drag.targetX - drag.x) * 0.12;
    drag.y += (drag.targetY - drag.y) * 0.12;
    modelGroup.rotation.y = Math.sin(seconds * 0.65) * 0.035 + drag.y;
    modelGroup.rotation.x = Math.sin(seconds * 0.5) * 0.025 + drag.x;
    modelGroup.position.y = 0.58 + Math.sin(seconds * 1.3) * 0.08;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
