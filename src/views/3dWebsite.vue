<template>
  <div id="canvas" ref="canvas" @click="getScene()"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { nextTick, ref } from "vue";
import { getAssetsFile } from "../utils";

const canvas = ref<any>(null); // 画布
let scene: THREE.Scene; // 场景
let camera: THREE.PerspectiveCamera; // 相机
let renderer: THREE.WebGLRenderer; // 渲染器
let controls: any; // 控制器
let stats: any;
const manager = new THREE.LoadingManager(); // 加载器管理器

const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(manager); // 纹理加载器

const dracoLoader: DRACOLoader = new DRACOLoader()
dracoLoader.setDecoderPath("draco/");
dracoLoader.preload();

const gltfLoader: GLTFLoader = new GLTFLoader(manager)
gltfLoader.setDRACOLoader(dracoLoader);

nextTick(() => {
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initAxesHelper();
  initControls();
  initStats();
  render();
  initLight();
  loadBuildingModel();
});

const initScene = (): void => {
  scene = new THREE.Scene();

  const skyBg = [
    getAssetsFile("sky/posx.jpg"),
    getAssetsFile("sky/negx.jpg"),
    getAssetsFile("sky/posy.jpg"),
    getAssetsFile("sky/negy.jpg"),
    getAssetsFile("sky/posz.jpg"),
    getAssetsFile("sky/negz.jpg"),
  ];
  const cubeLoader: THREE.CubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeLoader.load(skyBg);
};

const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);

  const newPosition = new THREE.Vector3(9.5, -2.5, -8)
  camera.position.copy(newPosition);

  scene.add(camera);
};

const initRenderer = (width: number, height: number): void => {
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
  });
  renderer.setSize(width, height);
  canvas.value.appendChild(renderer.domElement);
  renderer.render(scene, camera);
};

const initAxesHelper = (): void => {
  const axesHelper: THREE.AxesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);
};

const initLight = (): void => {
  const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(
    new THREE.Color("rgb(143, 178, 201)")
  );

  const directionalLight1: THREE.DirectionalLight = new THREE.DirectionalLight(
    new THREE.Color('rgb(255, 255, 255)'), 1
  );
  directionalLight1.position.set(50, 20, 85)
  const directionalLightHelper1 = new THREE.DirectionalLightHelper(directionalLight1, 5);

  const directionalLight2: THREE.DirectionalLight = new THREE.DirectionalLight(
    new THREE.Color('rgb(255, 255, 255)'), 1
  );
  directionalLight2.position.set(50, 50, -140)
  const directionalLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 5);

  scene.add(ambientLight, directionalLight1, directionalLight2, directionalLightHelper1, directionalLightHelper2);
};

const loadBuildingModel = () => {
  gltfLoader.load(getAssetsFile('building/building.glb'), gltf => {
    gltf.scene.scale.set(0.01, 0.01, 0.01)
    gltf.scene.position.set(0, -8.5, -3.5)
    scene.add(gltf.scene)
  })
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
  //摄像机缩放的速度
  controls.zoomSpeed = 1.8;

  // controls.maxPolarAngle = Math.PI / 2 - 0.01
};

const getScene = () => {
  console.log("camera", camera)
  console.log("controls", controls)
  const target = controls.target.clone(); // 获取目标点

  const distance = camera.position.distanceTo(target); // 计算相机到目标点的距离
  const direction = camera.getWorldDirection(new THREE.Vector3()); // 获取相机的方向向量

  const newPosition = new THREE.Vector3().copy(target).add(direction.multiplyScalar(distance)); // 根据方向向量和距离计算新位置
  // camera.position.copy(newPosition); // 将新位置赋值给相机的位置属性
  console.log(newPosition)
}

const initStats = (): void => {
  stats = new Stats();
  canvas.value.appendChild(stats.dom);
};

const render = (): void => {
  controls.update();
  renderer.render(scene, camera);

  stats && stats.update()

  requestAnimationFrame(render);
};

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

<style lang="less" scoped></style>
