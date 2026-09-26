import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

export function initGameBoyModel({ canvas, stage, screen, onAction, onReady, onError }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  camera.position.set(0, 0, 8.2);
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(4, 5, 6);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0x25d6d1, 0.75);
  fillLight.position.set(-4, 2, 3);
  scene.add(fillLight, new THREE.AmbientLight(0xffffff, 1.4));
  const modelGroup = new THREE.Group();
  scene.add(modelGroup);
  const screenTexture = new THREE.CanvasTexture(screen);
  screenTexture.colorSpace = THREE.SRGBColorSpace;
  screenTexture.magFilter = THREE.NearestFilter;
  screenTexture.minFilter = THREE.LinearFilter;
  screenTexture.generateMipmaps = false;
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const targets = [];
  const listeners = new AbortController();
  const drag = { pointerId: null, startX: 0, startY: 0, lastX: 0, lastY: 0, moved: false, action: null, x: 0, y: 0, targetX: 0, targetY: 0 };
  let frame = 0;
  let lastTime = 0;
  let visible = true;
  let ready = false;
  let disposed = false;
  let hovered = null;
  let feedbackUntil = 0;
  let feedbackAction = null;
  let transitionStart = -Infinity;
  let wipe;
  let materialCreator;

  function makeSurface(width, height, x, y, z, material) {
    const surface = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
    surface.rotation.x = -Math.PI / 2;
    surface.position.set(x, y, z);
    return surface;
  }

  function addControls(object) {
    // Coordinates are in the original OBJ space: the front is +Y, the top is -Z.
    object.add(makeSurface(2.2, 1.8, 0, 1.105, -1.4, new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false })));
    wipe = makeSurface(2.2, 1.8, 0, 1.11, -1.4, new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { progress: { value: 1 } },
      vertexShader: "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `
        varying vec2 vUv;
        uniform float progress;
        void main() {
          float row = floor(vUv.y * 12.0);
          float edge = progress * 1.2 - mod(row, 3.0) * 0.08;
          float covered = step(edge, floor(vUv.x * 16.0) / 16.0);
          gl_FragColor = vec4(0.31, 0.48, 0.28, covered);
        }
      `
    }));
    wipe.visible = false;
    object.add(wipe);
    const controls = [
      { action: "previous", x: -1.4, z: 0.95, w: 0.38, h: 0.4 },
      { action: "next", x: -0.7, z: 0.95, w: 0.38, h: 0.4 },
      { action: "previous", x: -1.05, z: 0.6, w: 0.4, h: 0.38 },
      { action: "next", x: -1.05, z: 1.3, w: 0.4, h: 0.38 },
      { action: "open", x: 1.35, z: 0.75, w: 0.6, h: 0.6 }
    ];
    controls.forEach(({ action, x, z, w, h }) => {
      const target = makeSurface(w, h, x, 1.215, z, new THREE.MeshBasicMaterial({ color: 0xc6ff65, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
      target.userData.action = action;
      targets.push(target);
      object.add(target);
    });
    const keyLabel = document.createElement("canvas");
    keyLabel.width = keyLabel.height = 64;
    const labelContext = keyLabel.getContext("2d");
    labelContext.fillStyle = "#fff4d2";
    labelContext.font = "bold 48px monospace";
    labelContext.textAlign = "center";
    labelContext.textBaseline = "middle";
    labelContext.fillText("A", 32, 34);
    const labelTexture = new THREE.CanvasTexture(keyLabel);
    labelTexture.colorSpace = THREE.SRGBColorSpace;
    object.add(makeSurface(0.24, 0.24, 1.35, 1.22, 0.75, new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true, depthWrite: false, toneMapped: false })));
  }

  function releaseObject(object) {
    const materials = new Set();
    const textures = new Set();
    object.traverse((child) => {
      child.geometry?.dispose();
      if (child.material) (Array.isArray(child.material) ? child.material : [child.material]).forEach((material) => materials.add(material));
    });
    Object.values(materialCreator?.materials || {}).forEach((material) => materials.add(material));
    materials.forEach((material) => {
      if (material.map) textures.add(material.map);
      material.dispose();
    });
    textures.forEach((texture) => texture.dispose());
  }

  function loadObj(materials) {
    if (disposed) return;
    const loader = new OBJLoader().setPath("assets/GameBoy/");
    if (materials) loader.setMaterials(materials);
    loader.load("GameBoy1.obj", (object) => {
      if (disposed) { releaseObject(object); return; }
      const size = new THREE.Box3().setFromObject(object).getSize(new THREE.Vector3());
      object.scale.setScalar(4.75 / Math.max(size.x, size.y, size.z));
      object.rotation.x = Math.PI / 2;
      object.position.sub(new THREE.Box3().setFromObject(object).getCenter(new THREE.Vector3()));
      object.traverse((child) => {
        if (!child.isMesh) return;
        (Array.isArray(child.material) ? child.material : [child.material]).forEach((material) => {
          material.side = THREE.FrontSide;
          if (material.map) {
            material.map.colorSpace = THREE.SRGBColorSpace;
            material.map.magFilter = THREE.NearestFilter;
            material.map.minFilter = THREE.NearestFilter;
            material.map.needsUpdate = true;
          }
        });
      });
      addControls(object);
      modelGroup.add(object);
      ready = true;
      onReady();
      scheduleFrame();
    }, undefined, () => { if (!disposed) onError(); });
  }

  const loader = new MTLLoader().setPath("assets/GameBoy/").setResourcePath("assets/GameBoy/");
  loader.load("GameBoy1.mtl", (materials) => {
    if (disposed) return;
    materialCreator = materials;
    materials.preload();
    loadObj(materials);
  }, undefined, () => { if (!disposed) loadObj(null); });

  function resize() {
    const width = Math.max(1, Math.floor(stage.clientWidth));
    const height = Math.max(1, Math.floor(stage.clientHeight));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Fit the full handheld to either dimension, including clearance while it tilts.
    const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
    const heightDistance = 4.75 / (2 * Math.tan(halfFov) * 0.94);
    const widthDistance = 3.3 / (2 * Math.tan(halfFov) * camera.aspect * 0.94);
    camera.position.z = Math.max(heightDistance, widthDistance) + 0.45;
    camera.updateProjectionMatrix();
    scheduleFrame();
  }

  function hitTarget(event) {
    if (!ready) return null;
    const rect = canvas.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    scene.updateMatrixWorld(true);
    camera.updateMatrixWorld(true);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(targets, false)[0]?.object || null;
  }

  function updateHover(target) {
    if (hovered === target) return;
    hovered = target;
    stage.classList.toggle("gameboy-over-control", Boolean(target));
    scheduleFrame();
  }

  function resetDrag() {
    const pointerId = drag.pointerId;
    drag.pointerId = null;
    drag.targetX = 0;
    drag.targetY = 0;
    drag.action = null;
    if (pointerId !== null && canvas.hasPointerCapture(pointerId)) canvas.releasePointerCapture(pointerId);
    stage.classList.remove("gameboy-dragging");
    scheduleFrame();
  }

  canvas.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0 || drag.pointerId !== null) return;
    drag.pointerId = event.pointerId;
    drag.startX = drag.lastX = event.clientX;
    drag.startY = drag.lastY = event.clientY;
    drag.moved = false;
    drag.action = hitTarget(event)?.userData.action || null;
    canvas.setPointerCapture(event.pointerId);
    if (event.pointerType !== "touch") canvas.focus({ preventScroll: true });
  }, { signal: listeners.signal });

  canvas.addEventListener("pointermove", (event) => {
    if (drag.pointerId === null) { updateHover(event.pointerType === "touch" ? null : hitTarget(event)); return; }
    if (event.pointerId !== drag.pointerId) return;
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 8) drag.moved = true;
    if (drag.moved && !drag.action) {
      drag.targetY = THREE.MathUtils.clamp(drag.targetY + (event.clientX - drag.lastX) * 0.008, -0.6, 0.6);
      // Touch keeps vertical scrolling; mouse dragging can tilt in both directions.
      if (event.pointerType !== "touch") drag.targetX = THREE.MathUtils.clamp(drag.targetX + (event.clientY - drag.lastY) * 0.008, -0.3, 0.3);
      stage.classList.add("gameboy-dragging");
    }
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    scheduleFrame();
  }, { signal: listeners.signal });

  canvas.addEventListener("pointerup", (event) => {
    if (event.pointerId !== drag.pointerId) return;
    const action = !drag.moved && drag.action && hitTarget(event)?.userData.action === drag.action ? drag.action : null;
    resetDrag();
    if (action) {
      feedbackAction = action;
      feedbackUntil = performance.now() + 140;
      onAction(action);
    }
    updateHover(event.pointerType === "touch" ? null : hitTarget(event));
    scheduleFrame();
  }, { signal: listeners.signal });
  canvas.addEventListener("pointercancel", resetDrag, { signal: listeners.signal });
  canvas.addEventListener("lostpointercapture", () => { if (drag.pointerId !== null) resetDrag(); }, { signal: listeners.signal });
  canvas.addEventListener("pointerleave", () => updateHover(null), { signal: listeners.signal });

  function scheduleFrame() {
    if (!frame && !disposed && visible && !document.hidden) frame = requestAnimationFrame(animate);
  }

  function updateVisibility() {
    if (!visible || document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      resetDrag();
    } else scheduleFrame();
  }

  function animate(time) {
    frame = 0;
    if (disposed) return;
    const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 1 / 60;
    lastTime = time;
    const blend = motionPreference.matches ? 1 : 1 - Math.exp(-12 * delta);
    drag.x += (drag.targetX - drag.x) * blend;
    drag.y += (drag.targetY - drag.y) * blend;
    const idle = motionPreference.matches || drag.pointerId !== null ? 0 : 1;
    modelGroup.rotation.set(drag.x + Math.sin(time * 0.0005) * 0.018 * idle, drag.y + Math.sin(time * 0.00065) * 0.025 * idle, 0);
    modelGroup.position.y = Math.sin(time * 0.0013) * 0.045 * idle;
    const transitioning = !motionPreference.matches && time - transitionStart < 240;
    if (wipe) {
      wipe.visible = transitioning;
      wipe.material.uniforms.progress.value = Math.min(1, (time - transitionStart) / 240);
    }
    targets.forEach((target) => {
      target.material.opacity = target.userData.action === feedbackAction && time < feedbackUntil ? 0.38 : target === hovered ? 0.18 : 0;
    });
    renderer.render(scene, camera);
    if ((ready && !motionPreference.matches) || transitioning || time < feedbackUntil || Math.abs(drag.x - drag.targetX) + Math.abs(drag.y - drag.targetY) > 0.001) scheduleFrame();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updateVisibility();
  });
  visibilityObserver.observe(stage);
  document.addEventListener("visibilitychange", updateVisibility, { signal: listeners.signal });
  motionPreference.addEventListener("change", scheduleFrame, { signal: listeners.signal });
  canvas.addEventListener("webglcontextlost", (event) => { event.preventDefault(); onError(); }, { signal: listeners.signal });
  resize();

  return {
    refreshScreen() { screenTexture.needsUpdate = true; scheduleFrame(); },
    transitionScreen() { transitionStart = performance.now(); scheduleFrame(); },
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frame);
      listeners.abort();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      releaseObject(modelGroup);
      screenTexture.dispose();
      renderer.dispose();
    }
  };
}
