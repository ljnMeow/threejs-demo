<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
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
const fbxLoader: FBXLoader = new FBXLoader(manager); // 模型加载器
const objLoader: OBJLoader = new OBJLoader(manager) // OBJ模型加载器
const mTLLoader: MTLLoader = new MTLLoader(manager) // MTL资源加载器
let buildingGroup: THREE.Group = new THREE.Group();

nextTick(() => {
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initAxesHelper();
  initControls();
  initStats();
  render();
  initLight();
  loadBuildingModal();
});

const initScene = (): void => {
  scene = new THREE.Scene();
  };

const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 3000);
  camera.position.set(0, 0, 1000);
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
    new THREE.Color("rgb(255, 255, 255)")
  );
  scene.add(ambientLight);
};

const loadBuildingModal = () => {
  // 贴图加载
  mTLLoader.load(getAssetsFile('building/Apartment_Building.mtl'), (material) => {
    material.preload()

    objLoader.setMaterials(material).load(getAssetsFile('building/Apartment_Building.obj'), (obj) => {
      console.log(obj)
      buildingGroup = obj
      scene.add(buildingGroup)
    })
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
};

const initStats = (): void => {
  stats = new Stats();
  canvas.value.appendChild(stats.dom);
};

const render = (): void => {
  controls.update();
  renderer.render(scene, camera);
  
  if (stats) {
    stats.update();
  }

  requestAnimationFrame(render);
};

window.addEventListener("resize", () => {
  // 更新摄像机
  // camera.aspect = canvas.value.clientWidth / canvas.value.clientHeight;
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
  // 设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});
</script>

<style lang="less" scoped></style>
