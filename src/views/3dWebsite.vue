<template>
  <div id="canvas" ref="canvas"></div>
  <div class="website-view">
    <div class="view-page">
      <div class="title">𝟥𝒟 𝒲𝑒𝒷𝒮𝒾𝓉𝑒<br/> 𝒹𝑒𝓂𝑜</div>
      <div class="start">↓</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { nextTick, ref } from "vue";
import { getAssetsFile } from "../utils";
import gsap from "gsap";

const canvas = ref<any>(null); // 画布
let scene: THREE.Scene; // 场景
let camera: THREE.PerspectiveCamera; // 相机
let renderer: THREE.WebGLRenderer; // 渲染器
let controls: any; // 控制器
let stats: any;
let isMouseMove = ref<Boolean>(true); // 状态 控制鼠标移动画面是否交互
let mouse: THREE.Vector2 = new THREE.Vector2(); // 鼠标二位坐标
const manager = new THREE.LoadingManager(); // 加载器管理器

const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(manager); // 纹理加载器

const dracoLoader: DRACOLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
dracoLoader.preload();

const gltfLoader: GLTFLoader = new GLTFLoader(manager);
gltfLoader.setDRACOLoader(dracoLoader);

nextTick(() => {
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initAxesHelper();
  initControls();
  // initStats();
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
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  const newPosition = new THREE.Vector3(9.5, -2.5, -8);
  camera.position.copy(newPosition);

  scene.add(camera);
};

const initRenderer = (width: number, height: number): void => {
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
  });
  renderer.setSize(width, height);
  renderer.outputEncoding = THREE.sRGBEncoding;
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

  const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
    new THREE.Color("rgb(255, 99, 71)"),
    1
  );
  directionalLight.position.set(110, 20, 85);
  const directionalLightHelper = new THREE.DirectionalLightHelper(
    directionalLight,
    5
  );

  scene.add(ambientLight, directionalLight, directionalLightHelper);
};

const loadBuildingModel = () => {
  gltfLoader.load(getAssetsFile("building/building.glb"), (gltf) => {
    gltf.scene.scale.set(0.01, 0.01, 0.01);
    gltf.scene.position.set(0, -8.5, -3.5);
    console.log(gltf);
    scene.add(gltf.scene);
  });
};

const initControls = (): void => {
  controls = new OrbitControls(camera, renderer.domElement);

  // 控制器是否相应
  controls.enabled = false;
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = true;
  //是否可以缩放
  controls.enableZoom = false;
  //是否自动旋转
  controls.autoRotate = false;
  //是否开启右键拖拽
  controls.enablePan = false;
  //摄像机缩放的速度
  controls.zoomSpeed = 1.8;

  // controls.maxPolarAngle = Math.PI / 2 - 0.01
};

const initStats = (): void => {
  stats = new Stats();
  canvas.value.appendChild(stats.dom);
};

const render = (): void => {
  stats && stats.update();

  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(render);
};

const onDocumentMouseMove = (event: any) => {
  if (isMouseMove.value) {
    mouse.x = event.clientX / canvas.value.clientWidth - 0.5;
    mouse.y = event.clientY / canvas.value.clientHeight - 0.5;

    const mouseYPos = Math.min(Math.max(mouse.y + -2.5, -2.7), -2.3);
    const mouseXPos = Math.min(Math.max(mouse.x + -8, -8.5), -7.5);

    gsap.to(camera.position, {
      y: mouseYPos,
      z: mouseXPos,
      ease: "Power2.inOut",
      duration: 2,
    });
  }
};

document.addEventListener("mousemove", onDocumentMouseMove, false);

document.addEventListener(
  "mouseleave",
  () => {
    gsap.to(camera.position, {
      y: -2.5,
      z: -8,
      ease: "Power2.inOut",
      duration: 2,
    });
  },
  false
);

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

<style lang="less" scoped>
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1
}
.website-view {
  .view-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    .title {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      font-size: 8vw;
      letter-spacing: -2px;
      line-height: 8vw;
      color: #a5a2a2;
    }
    .start {
      position: absolute;
      top: 70%;
      left: 14%;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      color: #724b40;
      font-size: 40px;
      border: 1px solid #724b40;
      border-radius: 100%;
    }
  }
}
</style>
