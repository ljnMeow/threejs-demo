<template>
  <div id="canvas" ref="canvas"></div>
  <div
    class="website-view"
    ref="scrollview"
    @mousewheel="mouseWheelHandle"
    @DOMMouseScroll="mouseWheelHandle"
    @scroll="handingScrolling"
  >
    <div class="view-page">
      <transition name="left">
        <div class="title" v-if="elementStatus.pageOnetitle">
          𝟥𝒟 𝒲𝑒𝒷𝒮𝒾𝓉𝑒<br />
          𝒹𝑒𝓂𝑜
        </div>
      </transition>
      <transition name="top">
        <div
          class="start"
          v-if="elementStatus.pageOneStart"
          @click="goNextPage"
        >
          ↓
        </div>
      </transition>
    </div>
    <div class="view-page">
      <transition name="text-fade">
        <div class="text" v-if="elementStatus.pageTwoText">
          𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫
          𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨
          𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫 𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐, 𝑨 𝑻𝒉𝒓𝒆𝒆𝒋𝒔 3𝑫
          𝑾𝒆𝒃𝑺𝒊𝒕𝒆 𝑫𝒆𝒎𝒐
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
const scrollview = ref<any>(null); // 滚动视图
const pageScrollingData = reactive({
  scrollviewHeight: 0, // 滚动视图高度
  pageHeight: 0, // 每页高度
  totalPage: 5, // 总页数
  currentPage: 1, // 当前页面
  isScrolling: false, // 是否正在滚动
  scrollPos: 0, // 滚轮滚动位置
  ending: false, // 是否滚动到底部
});
let scene: THREE.Scene; // 场景

let camera: THREE.PerspectiveCamera; // 相机
let cameraPostion: THREE.Vector3; // 相机位置

let renderer: THREE.WebGLRenderer; // 渲染器
let controls: any; // 控制器
let stats: any;

let buildingModel: THREE.Group; // 建筑模型
let originalModelPos = ref<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

const manager = new THREE.LoadingManager(); // 加载器管理器
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(manager); // 纹理加载器
let skyEnvMap: THREE.CubeTexture;

const dracoLoader: DRACOLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
dracoLoader.preload();

const gltfLoader: GLTFLoader = new GLTFLoader(manager);
gltfLoader.setDRACOLoader(dracoLoader);

const elementStatus = reactive({
  pageOnetitle: false,
  pageOneStart: false,
  pageTwoText: false,
});

nextTick(() => {
  initScrollViewData();
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initAxesHelper();
  initControls();
  // initStats();
  render();
  initLight();
  loadBuildingModel();

  handingElementshow();
});
// 初始化滚动视图数据
const initScrollViewData = (): void => {
  pageScrollingData.pageHeight = window.innerHeight;
  pageScrollingData.scrollviewHeight =
    pageScrollingData.pageHeight * pageScrollingData.totalPage;
};
// 初始化场景
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
// 初始化相机
const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  cameraPostion = new THREE.Vector3(0, -13, 48);
  camera.position.copy(cameraPostion);

  scene.add(camera);
};
// 初始化渲染器
const initRenderer = (width: number, height: number): void => {
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
  });
  renderer.setSize(width, height);
  renderer.outputEncoding = THREE.sRGBEncoding;
  canvas.value.appendChild(renderer.domElement);
  renderer.render(scene, camera);
};
// 初始化轴辅助线
const initAxesHelper = (): void => {
  const axesHelper: THREE.AxesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);
};
// 初始化灯光
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
// 加载建筑模型
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
// 初始化控制器
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
// 初始化状态监控
const initStats = (): void => {
  stats = new Stats();
  canvas.value.appendChild(stats.dom);
};
// 渲染
const render = (): void => {
  stats && stats.update();

  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(render);
};
// 页面移动方向处理
const pageTurning = (direction: boolean): void => {
  if (direction) {
    if (pageScrollingData.currentPage + 1 <= pageScrollingData.totalPage) {
      pageScrollingData.currentPage += 1;
      pageMove(pageScrollingData.currentPage);
    }
  } else {
    if (pageScrollingData.currentPage - 1 > 0) {
      pageScrollingData.currentPage -= 1;
      pageMove(pageScrollingData.currentPage);
    }
  }
};
// 页面移动
const pageMove = (pageNo: number): void => {
  pageScrollingData.isScrolling = true;
  const scrollHeight = -(pageNo - 1) * pageScrollingData.pageHeight + "px";
  scrollview.value.style.transform = `translateY(${scrollHeight})`;
  pageScrollingData.currentPage = pageNo;
  handingScrolling();
  setTimeout(() => {
    pageScrollingData.isScrolling = false;
  }, 1000);
};
// 鼠标滚轮滚动控制
const mouseWheelHandle = (event: any): void | boolean => {
  const evt = event || window.event;
  if (evt.stopPropagation) {
    evt.stopPropagation();
  } else {
    evt.returnValue = false;
  }
  if (pageScrollingData.isScrolling) {
    return false;
  }
  const e = event.originalEvent || event;
  pageScrollingData.scrollPos = e.deltaY || e.detail;
  if (pageScrollingData.scrollPos > 0) {
    pageTurning(true);
  } else if (pageScrollingData.scrollPos < 0) {
    pageTurning(false);
  }
};
// 点击下一页
const goNextPage = (): void => {
  pageScrollingData.currentPage += 1;
  pageMove(pageScrollingData.currentPage);
};
// 滚动时相机和模型动画
const handingScrolling = (): void => {
  const pos = pageScrollingData.ending
    ? 2 - 1
    : pageScrollingData.currentPage - 1;
  const newModelPos: THREE.Vector3 =
    originalModelPos.value &&
    originalModelPos.value
      .clone()
      .add(new THREE.Vector3(pos * 10, pos * 8.6, pos * 13));
  if (pageScrollingData.currentPage === 1) {
    newModelPos.copy(originalModelPos.value);
  }
  if (pageScrollingData.currentPage <= 2 || pageScrollingData.ending) {
    gsap.to(camera.position, {
      x: pos * 18,
      y: cameraPostion.y + pos * 14,
      ease: "Power2.inOut",
      duration: 1,
    });
    gsap.to(buildingModel.position, {
      x: newModelPos.x,
      y: newModelPos.y,
      z: newModelPos.z,
      ease: "Power2.inOut",
      duration: 1,
    });
    pageScrollingData.ending = false;
  } else if (pageScrollingData.currentPage === 5) {
    gsap.to(camera.position, {
      x: -24,
      y: -30,
      ease: "Power2.inOut",
      duration: 1,
    });
    gsap.to(buildingModel.position, {
      x: -6,
      y: -59,
      z: 18,
      ease: "Power2.inOut",
      duration: 1,
    });
    pageScrollingData.ending = true;
  }
  handingElementshow();
};
// 处理元素出现或隐藏
const handingElementshow = (): void => {
  setTimeout(() => {
    switch (pageScrollingData.currentPage) {
      case 1:
        elementStatus.pageOnetitle = true;
        elementStatus.pageOneStart = true;
        elementStatus.pageTwoText = false;
        break;
      case 2:
        elementStatus.pageOnetitle = false;
        elementStatus.pageOneStart = false;
        elementStatus.pageTwoText = true;
        break;
    }
  }, 1000);
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

<style lang="less" scoped>
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.website-view {
  width: 100vw;
  height: 100vh;
  transition: all linear 1s;
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
.text-fade-enter-active {
  animation: textFadeEnter 1s linear 0s;
}
.text-fade-leave-active {
  animation: textFadeLeave 1s linear 0s;
}
@keyframes textFadeEnter {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 6%;
  }
}
@keyframes textFadeLeave {
  0% {
    opacity: 1;
    left: 6%;
  }
  100% {
    opacity: 0;
    left: 20%;
  }
}
</style>
