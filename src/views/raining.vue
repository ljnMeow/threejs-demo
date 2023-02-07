<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";
import Stats from "stats.js";
import { nextTick, ref } from "vue";
import rainingPng from "../assets/rain.png";

const canvas = ref<any>(null);
let scene: THREE.Scene = new THREE.Scene();
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any;
let stats: any;
let point: THREE.Points;
const pointCount: number = 5000;

nextTick(() => {
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initLight();
  // initAxesHelper();
  initControls();
  render();
  initStats();
  initGui();
  // createRaining();
});

const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 40);
  camera.position.set(0, 0, 40);
  scene.add(camera);
};

const initRenderer = (width: number, height: number): void => {
  renderer = new THREE.WebGL1Renderer();
  renderer.setSize(width, height);
  canvas.value.appendChild(renderer.domElement);
  renderer.render(scene, camera);
};

const initStats = (): void => {
  stats = new Stats();
  canvas.value.appendChild(stats.dom);
};

const initLight = (): void => {
  let ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  let directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
    0xffffff
  );
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
};

const initAxesHelper = (): void => {
  const axesHelper: THREE.AxesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);
};

const initControls = (): void => {
  controls = new OrbitControls(camera, renderer.domElement);
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = true;
  //是否可以缩放
  controls.enableZoom = true;
  //是否自动旋转
  controls.autoRotate = false;
  //是否开启右键拖拽
  controls.enablePan = true;
};

const render = (): void => {
  controls.update();
  renderer.render(scene, camera);
  if (stats) {
    stats.update();
  }
  if (point) {
    const positions = (point.geometry.getAttribute("position") as any).array;
    for (let i = 0; i < pointCount * 3; i += 3) {
      positions[i + 1] -= Math.random() * 1;
      if (positions[i + 1] < -40) {
        positions[i + 1] = 40;
      }
    }
    point.geometry.getAttribute("position").needsUpdate = true;
  }
  requestAnimationFrame(render);
};

const initGui = (): void => {
  const datGui = new dat.GUI();
  const guiConfig = {
    size: 1,
    transparent: true,
    opacity: 0.5,
    vertexColors: false,
    sizeAttenuation: true,
    color: 0xededed,
    rotateSystem: false,
    reDraw: () => {
      if (point) {
        scene.remove(point);
      }
      createRaining(
        guiConfig.size,
        guiConfig.transparent,
        guiConfig.opacity,
        guiConfig.vertexColors,
        guiConfig.sizeAttenuation,
        guiConfig.color,
      );
      controls.autoRotate = guiConfig.rotateSystem;
    },
  };
  datGui.add(guiConfig, "size", 0.1, 3).onChange(guiConfig.reDraw);
  datGui.add(guiConfig, "transparent").onChange(guiConfig.reDraw);
  datGui.add(guiConfig, "opacity", 0.1, 1).onChange(guiConfig.reDraw);
  datGui.add(guiConfig, "vertexColors").onChange(guiConfig.reDraw);
  datGui.add(guiConfig, "sizeAttenuation").onChange(guiConfig.reDraw);
  datGui.addColor(guiConfig, "color").onChange(guiConfig.reDraw);
  datGui.add(guiConfig, "rotateSystem").onChange(guiConfig.reDraw);

  guiConfig.reDraw();
};

const createRaining = (
  size: number,
  transparent: boolean,
  opacity: number,
  vertexColors: boolean,
  sizeAttenuation: boolean,
  color: number,
): void => {
  let geometry: THREE.BufferGeometry = new THREE.BufferGeometry();

  let positions: Float32Array = new Float32Array(pointCount * 3);
  for (let i = 0; i < pointCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  let textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
  let rainTexture: THREE.Texture = textureLoader.load(rainingPng);
  let material: THREE.PointsMaterial = new THREE.PointsMaterial({
    size: size,
    transparent: transparent,
    opacity: opacity,
    vertexColors: vertexColors,
    sizeAttenuation: sizeAttenuation,
    color: color,
    depthTest: true,
    depthWrite: false,
    map: rainTexture,
    alphaMap: rainTexture,
    blending: THREE.AdditiveBlending,
  });

  point = new THREE.Points(geometry, material);
  scene.add(point);
};

// 监听画面变化更新渲染画面
window.addEventListener("resize", () => {
  // 更新摄像机
  camera.aspect = canvas.value.clientWidth / canvas.value.clientHeight;
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
  // 设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});
</script>
