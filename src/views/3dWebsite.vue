<template>
  <div id="canvas" ref="canvas"></div>
  <div class="website-view" @mousewheel="DOMMouseScroll">
    <div class="view-page">
      <transition name="left">
        <div class="title" v-if="showTitle">
          𝟥𝒟 𝒲𝑒𝒷𝒮𝒾𝓉𝑒<br />
          𝒹𝑒𝓂𝑜
        </div>
      </transition>
      <transition name="top">
        <div class="start" v-if="showStart" @click="goNextPage">↓</div>
      </transition>
    </div>
    <div class="view-page">
      <transition>
        <div class="text">
          𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫
          𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐,
          𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐
        </div>
      </transition>
    </div>
    <div class="view-page" style="color: red">3dsadwads</div>
    <div class="view-page" style="color: red">7894615160</div>
    <div class="view-page" style="color: red">-=0--90wdaudosa</div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { nextTick, ref, reactive } from "vue";
import { getAssetsFile } from "../utils";
import gsap from "gsap";

const canvas = ref<any>(null); // 画布
let scene: THREE.Scene; // 场景

let camera: THREE.PerspectiveCamera; // 相机
let cameraPostion: THREE.Vector3; // 相机位置

let renderer: THREE.WebGLRenderer; // 渲染器
let controls: any; // 控制器
let stats: any;

let isMouseMove = ref<Boolean>(true); // 状态 控制鼠标移动画面是否交互
let timer: any; // 定时器-处理滚动状态

let buildingModel: THREE.Group; // 建筑模型
let originalModelPos = ref<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

const preScrollPos = ref<Number>(window.scrollY);

const manager = new THREE.LoadingManager(); // 加载器管理器
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(manager); // 纹理加载器
let skyEnvMap: THREE.CubeTexture;

const dracoLoader: DRACOLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
dracoLoader.preload();

const gltfLoader: GLTFLoader = new GLTFLoader(manager);
gltfLoader.setDRACOLoader(dracoLoader);

type PageScrollType = {
  current: number;
  isScrolling: boolean;
  deltaY: number;
}
const pageScroll: PageScrollType = reactive({
  current: 1,
  isScrolling: false,
  deltaY: 0
})

const showTitle = ref<Boolean>(false);
const showStart = ref<Boolean>(false);

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

  setTimeout(() => {
    showTitle.value = true;
    showStart.value = true;
  }, 1000);
});

const initScene = (): void => {
  scene = new THREE.Scene();

  const skyBg = [
    getAssetsFile("sky/px.jpg"),
    getAssetsFile("sky/nx.jpg"),
    getAssetsFile("sky/py.jpg"),
    getAssetsFile("sky/ny.jpg"),
    getAssetsFile("sky/pz.jpg"),
    getAssetsFile("sky/nz.jpg"),
  ];
  const cubeLoader: THREE.CubeTextureLoader = new THREE.CubeTextureLoader();
  skyEnvMap = cubeLoader.load(skyBg);
  scene.background = skyEnvMap;
};

const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  cameraPostion = new THREE.Vector3(0, -13, 48);
  camera.position.copy(cameraPostion);

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
    2
  );
  directionalLight.position.set(-220, 30, 50);
  const directionalLightHelper = new THREE.DirectionalLightHelper(
    directionalLight,
    5
  );

  scene.add(ambientLight, directionalLight, directionalLightHelper);
};

const loadBuildingModel = (): void => {
  gltfLoader.load(getAssetsFile("building/building.glb"), (gltf) => {
    gltf.scene.scale.set(0.05, 0.05, 0.05);

    originalModelPos.value = new THREE.Vector3(14, -40.8, 0);

    gltf.scene.position.copy(originalModelPos.value);

    const currentRotation = gltf.scene.rotation.clone();
    const newRotation = new THREE.Euler(
      currentRotation.x,
      currentRotation.y - (131 * Math.PI) / 180,
      currentRotation.z,
      currentRotation.order
    );
    gltf.scene.rotation.copy(newRotation);

    const ObjectGroup = gltf.scene.children;
    for (let i = 0; i < ObjectGroup.length; i++) {
      if (
        ObjectGroup[i] instanceof THREE.Group &&
        ObjectGroup[i].name === "AB1_OBJ_02"
      ) {
        ObjectGroup[i].children &&
          ObjectGroup[i].children.forEach((item) => {
            if (item instanceof THREE.Mesh && item.name === "AB1_OBJ_02_1") {
              item.material.envMap = skyEnvMap;
              item.material.envMapIntensity = 0.5;
            }
          });
      }
    }

    buildingModel = gltf.scene;

    scene.add(buildingModel);
  });
};

const initControls = (): void => {
  controls = new OrbitControls(camera, renderer.domElement);

  // 控制器是否相应
  controls.enabled = true;
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = true;
  //是否可以缩放
  controls.enableZoom = true;
  //是否自动旋转
  controls.autoRotate = false;
  //是否开启右键拖拽
  controls.enablePan = true;
  //摄像机缩放的速度
  controls.zoomSpeed = 1;

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

const goNextPage = (): void => {
  const windowHeight: number = window.innerHeight;

  window.scrollTo({
    top: windowHeight,
    behavior: "smooth",
  });
};

const DOMMouseScroll = (): void => {
  const documentHeight: number = document.documentElement.scrollHeight;
  const scrollTop: number = window.scrollY;
  const screenHeight: number = documentHeight / 5

  // 计算当前屏幕的索引
  const currentScreenIndex = Math.floor(scrollTop / screenHeight)
  // 每次滚动一个屏幕高度
  window.scrollTo({
    top: currentScreenIndex * screenHeight,
    behavior: 'smooth'
  })
}

const handleWindowScroll = (): void => {
  isMouseMove.value = false;

  const currentScrollPos: number = window.scrollY;
  const windowHeight: number = window.innerHeight;
  const documentHeight: number = document.documentElement.scrollHeight;
  const scrollLength: number = documentHeight - windowHeight;
  const offset = currentScrollPos / (scrollLength / 4);

  let newModelPos: THREE.Vector3 =
    originalModelPos.value &&
    originalModelPos.value
      .clone()
      .add(new THREE.Vector3(offset * 10, offset * 8, offset * 13));

  if (currentScrollPos === 0) {
    newModelPos.copy(originalModelPos.value);
  }
  if (scrollLength / 4 > currentScrollPos) {
    camera.position.x = offset * 18
    camera.position.y = cameraPostion.y + offset * 14

    buildingModel.position.x = newModelPos.x
    buildingModel.position.y = newModelPos.y
    buildingModel.position.z = newModelPos.z
  }

  preScrollPos.value = currentScrollPos;

  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    isMouseMove.value = true;
  }, 2000);
};

window.addEventListener("scroll", () => handleWindowScroll(), { passive: true });

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
  z-index: -1;
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
      user-select: none;
    }

    .start {
      position: absolute;
      top: 70%;
      left: 14%;
      width: 4vw;
      height: 4vw;
      text-align: center;
      line-height: 4vw;
      color: #a5a2a2;
      font-size: 20px;
      border: 1px solid #724b40;
      border-radius: 100%;
      cursor: pointer;
      user-select: none;
    }

    .text {
      position: relative;
      left: 6%;
      top: 50%;
      transform: translateY(-50%);
      width: 40%;
      line-height: 40px;
      font-family: "Archivo";
      font-weight: 100;
      font-size: 26px;
      color: #304150;
    }
  }
}

.left-enter-active {
  animation: leftEnter 1s linear 0s;
}
.left-leave-active {
  animation: leftLeave 1s linear 0s;
}
@keyframes leftEnter {
  0% {
    opacity: 0;
    transform: translate(-100px, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0, -50%);
  }
}
@keyframes leftLeave {
  0% {
    opacity: 1;
    transform: translate(0, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-100px, -50%);
  }
}

.top-enter-active {
  animation: topEnter 1s linear 0s;
}
.top-leave-active {
  animation: topLeave 1s linear 0s;
}
@keyframes topEnter {
  0% {
    opacity: 0;
    top: 100%;
  }
  100% {
    opacity: 1;
    top: 70%;
  }
}
@keyframes topLeave {
  0% {
    opacity: 1;
    top: 70%;
  }
  100% {
    opacity: 0;
    top: 100%;
  }
}
</style>
