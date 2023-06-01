<template>
  <transition name="loading">
    <div class="loading" v-if="loading">
      <div class="content">
        <div class="box">
          <div class="process" :style="{ width: `${process}%` }"></div>
        </div>
        <p>{{ `${process}%` }} Loading......</p>
      </div>
    </div>
  </transition>
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
    <div class="view-page">
      <transition name="left-image-fade">
        <img
          v-if="elementStatus.pageThreeLeftImage"
          class="left-image"
          src="https://bu.dusays.com/2023/05/22/646b1f90b338e.jpeg"
          alt="image"
        />
      </transition>
      <transition name="header-image-fade">
        <div class="header-pic" v-if="elementStatus.pageThreeHeader">
          <img
            src="https://p3-passport.byteimg.com/img/user-avatar/e883ad00f4c080eae18ebdb3c35aa9d8~180x180.awebp"
            alt="header-pic"
          />
          <p>Caliis Lin</p>
        </div>
      </transition>
      <transition name="right-text-fade">
        <div class="right-text" v-if="elementStatus.pageThreeRightText">
          𝑨 𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆, 𝑨
          𝒕𝒉𝒓𝒆𝒆 𝒋𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒋𝒆𝒄𝒕 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝑽𝒖𝒆 + 𝑻𝒚𝒑𝒆𝒔𝒄𝒓𝒊𝒑𝒕 + 𝑽𝒊𝒕𝒆
        </div>
      </transition>
    </div>
    <div class="view-page">
      <div class="background"></div>
      <transition name="a-left-text-fade">
        <a
          v-if="elementStatus.pageFourALeftText"
          href="https://ljn1998codeing.love"
          target="_blank"
          class="my-blog"
          >Visite my blog: https://ljn1998codeing.love</a
        >
      </transition>
      <transition name="a-right-text-fade">
        <a
          v-if="elementStatus.pageFourArightText"
          href="https://juejin.cn/user/4274499823866622"
          target="_blank"
          class="juejin"
          >Visite juejin: https://juejin.cn/user/4274499823866622</a
        >
      </transition>
    </div>
    <div class="view-page">
      <button class="explorar" @click="explorarModel">EXPLORAR</button>
    </div>
  </div>
  <button
    class="quit"
    @click="quitExporarModel(buttonText.key)"
    v-if="elementStatus.quitButton"
  >
    {{ buttonText.value }}
  </button>
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

type Info = {
  text?: string;
  otherScene?: boolean;
  ware?: boolean;
  size?: number;
  _s?: number;
};

type PointType = {
  x: number;
  y: number;
  z: number;
} & Info;

type NewObject3d = THREE.Object3D<THREE.Event> & Info;

const canvas = ref<any>(null); // 画布
const scrollview = ref<any>(null); // 滚动视图
// 页面滚动数据
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
let cameraFov: number = 45; // 相机广角

let renderer: THREE.WebGLRenderer; // 渲染器
let controls: any; // 控制器
let stats: any;

let buildingModel: THREE.Group; // 建筑模型
let originalModelPos = ref<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
const pointGroup: THREE.Group = new THREE.Group(); // 标点
pointGroup.name = "pointGroup";
const angle = ref(0);

const manager = new THREE.LoadingManager(); // 加载器管理器
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(manager); // 纹理加载器
let skyEnvMap: THREE.CubeTexture;

const dracoLoader: DRACOLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
dracoLoader.preload();

const gltfLoader: GLTFLoader = new GLTFLoader(manager);
gltfLoader.setDRACOLoader(dracoLoader);

// 控制页面元素数据
const elementStatus = reactive({
  pageOnetitle: false,
  pageOneStart: false,
  pageTwoText: false,
  pageThreeLeftImage: false,
  pageThreeHeader: false,
  pageThreeRightText: false,
  pageFourALeftText: false,
  pageFourArightText: false,
  quitButton: false,
});
const buttonText = reactive({
  key: 1,
  value: "QUIT",
});

const process = ref<number>(0); // 加载进度
const loading = ref<boolean>(true); // 加载中

manager.onProgress = function (item, loaded, total) {
  let value = Math.round((loaded / total) * 100);
  process.value = Math.ceil(value);

  if (value === 100) {
    setTimeout(() => {
      loading.value = false;
      handingElementshow();
    }, 1500);
  }
};

nextTick(() => {
  initScrollViewData();
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  // initAxesHelper();
  initControls();
  // initStats();
  render();
  initLight();
  loadBuildingModel();
});
// 初始化滚动视图数据
const initScrollViewData = (): void => {
  // 每一页高度 = 浏览器窗口viewport的高度
  pageScrollingData.pageHeight = window.innerHeight;
  // 滚动视图总高度 = 每页高度 * 总页数
  pageScrollingData.scrollviewHeight =
    pageScrollingData.pageHeight * pageScrollingData.totalPage;
};
// 初始化场景
const initScene = (): void => {
  scene = new THREE.Scene();
  // 天空图图片集合，指定顺序pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
  const skyBg = [
    getAssetsFile("sky/px.jpg"),
    getAssetsFile("sky/nx.jpg"),
    getAssetsFile("sky/py.jpg"),
    getAssetsFile("sky/ny.jpg"),
    getAssetsFile("sky/pz.jpg"),
    getAssetsFile("sky/nz.jpg"),
  ];
  const cubeLoader: THREE.CubeTextureLoader = new THREE.CubeTextureLoader(
    manager
  );
  skyEnvMap = cubeLoader.load(skyBg);
  // 设置场景背景
  scene.background = skyEnvMap;
};
// 初始化相机
const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(cameraFov, width / height, 1, 1000);

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
  // 指定输出编码格式，当设置renderer.outputEncoding为sRGBEncoding时，渲染器会将输出的颜色值转换为sRGB格式，以便正确呈现在屏幕上
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
  // 环境光
  const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(
    new THREE.Color("rgb(255, 255, 255)")
  );
  // 平行光
  const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
    new THREE.Color("rgb(255, 99, 71)"),
    2 // 光照强度为2
  );
  directionalLight.position.set(-220, 30, 50);

  scene.add(ambientLight, directionalLight);
};
// 加载建筑模型
const loadBuildingModel = (): void => {
  gltfLoader.load(getAssetsFile("building/building.glb"), (gltf) => {
    // 保存模型初始位置
    originalModelPos.value = new THREE.Vector3(14, -40.8, 0);
    // 设置模型位置
    gltf.scene.position.copy(originalModelPos.value);
    // 设置模型旋转角度
    const currentRotation = gltf.scene.rotation.clone();
    const newRotation = new THREE.Euler(
      currentRotation.x,
      currentRotation.y - (131 * Math.PI) / 180,
      currentRotation.z,
      currentRotation.order
    );
    gltf.scene.rotation.copy(newRotation);

    // 循环模型内Mesh并找到窗户所属的Mesh，设置该Mesh中材质的环境贴图以及环境贴图的强度
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

    // 保存模型数据，后面设置动画会直接使用到
    buildingModel = gltf.scene;

    scene.add(buildingModel);
  });
};
// 初始化控制器
const initControls = (): void => {
  controls = new OrbitControls(camera, renderer.domElement);

  // 控制器是否相应
  controls.enabled = false;
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = true;
  // 是否可以缩放
  controls.enableZoom = true;
  // 是否自动旋转
  controls.autoRotate = false;
  // 自转速度
  controls.autoRotateSpeed = 0.1;
  // 是否开启右键拖拽
  controls.enablePan = true;
  // 摄像机缩放的速度
  controls.zoomSpeed = 1;
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

  // 涟漪动画
  const pointGroup = scene.children.find((item) => item.name === "pointGroup"); // 查找标点组合
  if (pointGroup) {
    // 组合存在
    const wave: any =
      pointGroup.children.length &&
      pointGroup.children.find((sprite) => sprite.name === "wave"); // 找到涟漪精灵
    if (wave) {
      // 修改精灵的大小和材质的透明度达到涟漪的效果
      wave._s += 0.01;
      wave.scale.set(
        wave.size * wave._s,
        wave.size * wave._s,
        wave.size * wave._s
      );
      if (wave._s <= 1.5) {
        //mesh._s=1，透明度=0 mesh._s=1.5，透明度=1
        wave.material.opacity = (wave._s - 1) * 2;
      } else if (wave._s > 1.5 && wave._s <= 2) {
        //mesh._s=1.5，透明度=1 mesh._s=2，透明度=0
        wave.material.opacity = 1 - (wave._s - 1.5) * 2;
      } else {
        wave._s = 1.0;
      }
    }
  }

  if (elementStatus.quitButton) {
    spriteVisible();
  }

  requestAnimationFrame(render);
};
// 页面移动方向处理
const pageTurning = (direction: boolean): void => {
  if (direction) {
    // 往上滚动时，判断当前页码 + 1 是否 <= 总页码 ?？ 页码 + 1，执行页面滚动操作，
    if (pageScrollingData.currentPage + 1 <= pageScrollingData.totalPage) {
      pageScrollingData.currentPage += 1;
      pageMove(pageScrollingData.currentPage);
    }
  } else {
    // 同样往下滚动时，判断当前页码 - 1 是否 > 0 ?? 页码 - 1，执行页面滚动操作
    if (pageScrollingData.currentPage - 1 > 0) {
      pageScrollingData.currentPage -= 1;
      pageMove(pageScrollingData.currentPage);
    }
  }
};
// 页面滚动
const pageMove = (pageNo: number): void => {
  // 设置滚动状态
  pageScrollingData.isScrolling = true;
  // 计算滚动高度
  const scrollHeight = -(pageNo - 1) * pageScrollingData.pageHeight + "px";
  // 设置css样式
  scrollview.value.style.transform = `translateY(${scrollHeight})`;
  // 重新设置下当前页码
  pageScrollingData.currentPage = pageNo;
  handingScrolling();
  // 定时器做一个防抖，避免一秒内多次触发
  setTimeout(() => {
    pageScrollingData.isScrolling = false;
  }, 1500);
};
// 鼠标滚轮滚动控制
const mouseWheelHandle = (event: any): void | boolean => {
  const evt = event || window.event;
  // 阻止默认事件
  if (evt.stopPropagation) {
    evt.stopPropagation();
  } else {
    evt.returnValue = false;
  }
  // 当前正在滚动中则不做任何操作
  if (pageScrollingData.isScrolling) {
    return false;
  }
  const e = event.originalEvent || event;
  // 记录滚动位置
  pageScrollingData.scrollPos = e.deltaY || e.detail;
  if (pageScrollingData.scrollPos > 0) {
    // 当鼠标滚轮向上滚动时
    pageTurning(true);
  } else if (pageScrollingData.scrollPos < 0) {
    // 当鼠标滚轮向下滚动时
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
  // 判断是否滚动到最后一页，因为第3、4页模型的位置是不需要改变，也就是没有相对应地模型动画，所以当前页面是最后一页时，那么只能玩上滚动，并且需要执行第二页的模型动画
  const pos = pageScrollingData.ending
    ? 2 - 1
    : pageScrollingData.currentPage - 1;
  // 计算新的模型位置
  const newModelPos: THREE.Vector3 =
    originalModelPos.value &&
    originalModelPos.value
      .clone()
      .add(new THREE.Vector3(pos * 10, pos * 8.6, pos * 13));
  // 当前为第一页时，模型位置设置为初始值
  if (pageScrollingData.currentPage === 1) {
    newModelPos.copy(originalModelPos.value);
  }
  if (pageScrollingData.currentPage <= 2 || pageScrollingData.ending) {
    // 当前页码 <= 第2页时 或者 页面滚动到最底部，执行该动画
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
    // 当前页码 === 第5页时，执行该动画
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
  // 控制页面元素显示隐藏
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
        elementStatus.pageThreeLeftImage = false;
        elementStatus.pageThreeHeader = false;
        elementStatus.pageThreeRightText = false;
        break;
      case 3:
        elementStatus.pageTwoText = false;
        elementStatus.pageThreeLeftImage = true;
        elementStatus.pageThreeHeader = true;
        elementStatus.pageThreeRightText = true;
        elementStatus.pageFourALeftText = false;
        elementStatus.pageFourArightText = false;
        break;
      case 4:
        elementStatus.pageThreeLeftImage = false;
        elementStatus.pageThreeHeader = false;
        elementStatus.pageThreeRightText = false;
        elementStatus.pageFourALeftText = true;
        elementStatus.pageFourArightText = true;
        break;
      case 5:
        elementStatus.pageFourALeftText = false;
        elementStatus.pageFourArightText = false;
        break;
    }
  }, 1000);
};
// 探索模型
const explorarModel = (): void => {
  // 设置三维容器层级
  canvas.value.style.zIndex = 1;

  // 相机动画改变相机位置
  const cameraGasp: gsap.core.Tween = gsap.to(camera.position, {
    x: -6,
    y: 6,
    z: 80,
    ease: "Power0.inOut",
    duration: 2,
    onUpdate: () => {
      // 因为在第二场景设置了相机的fov属性，所以这里需要将fov属性恢复到原来的状态
      if (cameraFov < 50 && buttonText.key === 2) {
        cameraFov -= 1;
        camera.fov = cameraFov;
        camera.updateProjectionMatrix();

        elementStatus.quitButton = true;
      }
    },
    onComplete: () => {
      if (buttonText.key === 2) {
        buttonText.key = 1;
        buttonText.value = "QUIT";
        elementStatus.quitButton = true;
      }
    },
  });
  // 模型动画改变模型位置
  const buildingGasp: gsap.core.Tween = gsap.to(buildingModel.position, {
    x: 0,
    y: -22,
    z: 0,
    ease: "Power0.inOut",
    duration: 2,
  });
  // 控制器中心点
  const controlsGasp: gsap.core.Tween = gsap.to(controls.target, {
    x: 0,
    y: 0,
    z: 0,
    ease: "Power0.inOut",
    duration: 1,
  });
  // 等待执行
  const delayedCall: Promise<unknown> = new Promise((resolve) => {
    gsap.delayedCall(1, resolve);
  });
  // 当所有动画执行完成时的操作
  Promise.all([cameraGasp, buildingGasp, controlsGasp, delayedCall])
    .then(() => {
      elementStatus.quitButton = true; // 展示退出探索按钮
      controls.enabled = true; // 开启控制器交互
      controls.maxPolarAngle = Math.PI / 2 - 0.01; // 设置垂直旋转的角度的上限
      controls.autoRotate = true; // 开启自动旋转
      controls.minDistance = 40; // 设置相机向内移动上限
      controls.maxDistance = 86; // 设置相机向外移动上限
      addPointWithModel();
    })
    .catch((err) => {
      console.log(err);
    });
};
// 给模型添加标点
const addPointWithModel = (): void => {
  // 标点数据
  const pointArr: PointType[] = [
    {
      x: -16.979381448617573,
      y: -19.167911412787436,
      z: 1.4417293738365617,
      text: "aaaaa",
    },
    {
      x: 4.368890112320235,
      y: -12.020210823358955,
      z: 10.590562296036955,
      text: "bbbbb",
    },
    {
      x: -4.655517564465063,
      y: 12.146541899849993,
      z: 11.879293977258593,
      ware: true, // 是否展示涟漪动画
      otherScene: true, // 是否可以前往下一个场景
      text: "ccccc", // 弹框展示的文字
    },
  ];
  // 贴图加载
  const circleTexture: THREE.Texture = textureLoader.load(
    getAssetsFile("building/sprite.png")
  );
  const waveTexture: THREE.Texture = textureLoader.load(
    getAssetsFile("wave.png")
  );
  // 遍历标点数据创建精灵标点
  pointArr.forEach((item: PointType) => {
    const spriteMaterial: THREE.SpriteMaterial = new THREE.SpriteMaterial({
      map: circleTexture,
    });
    const sprite: THREE.Sprite & Info = new THREE.Sprite(spriteMaterial);
    sprite.name = "point";
    sprite.text = item.text;
    sprite.otherScene = item.otherScene;
    sprite.position.set(item.x, item.y + 0.2, item.z + 2);
    sprite.scale.set(1.4, 1.4, 1);

    // 需要涟漪动画则要创建一个涟漪精灵
    if (item.ware) {
      const waveMaterial: THREE.SpriteMaterial = new THREE.SpriteMaterial({
        map: waveTexture,
        color: new THREE.Color("rgb(255, 255, 255)"),
        transparent: true,
        opacity: 1.0,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      let waveSprite: THREE.Sprite & Info = new THREE.Sprite(waveMaterial);
      waveSprite.name = "wave";
      waveSprite.text = item.text;
      waveSprite.otherScene = item.otherScene;
      waveSprite.size = 8 * 0.3;
      waveSprite._s = Math.random() * 1.0 + 1.0;

      waveSprite.position.set(item.x, item.y + 0.2, item.z + 2);

      pointGroup.add(waveSprite);
    }

    pointGroup.add(sprite);
  });

  scene.add(pointGroup);
};
// 退出探索模型
const quitExporarModel = (key: number): void => {
  if (key === 1) {
    // 探索模型处于第一个场景时
    // 移除标点
    scene.remove(pointGroup);
    // 设置三维容器层级
    canvas.value.style.zIndex = -1;
    // 隐藏退出按钮
    elementStatus.quitButton = false;
    // 把控制器一些参数设置回初始值
    controls.maxPolarAngle = Math.PI;
    controls.enabled = false;
    controls.autoRotate = false;
    controls.minDistance = 0;
    controls.maxDistance = Infinity;
    // 执行动画操作
    gsap.to(camera.position, {
      x: -24,
      y: -30,
      z: 48,
      ease: "Power0.inOut",
      duration: 1,
    });
    gsap.to(buildingModel.position, {
      x: -6,
      y: -59,
      z: 18,
      ease: "Power0.inOut",
      duration: 1,
    });
    gsap.to(controls.target, {
      x: 0,
      y: 0,
      z: 0,
      ease: "Power0.inOut",
      duration: 1,
    });
  } else if (key === 2) {
    // 探索模型处于第二个场景时
    elementStatus.quitButton = false;
    explorarModel();
  }
};
// 检测鼠标与模型标点相交
const detectionMouseIntersectPoint = (
  event: any, // 鼠标事件参数
  isClick?: boolean // 是否点击，用于判断是mousemove还是mouseclick
): void => {
  if (!elementStatus.quitButton) return;
  // 创建射线
  const raycaster = new THREE.Raycaster();
  // 将终点设置为固定的点
  const rayEndpoint = new THREE.Vector3(0, 0, 0);
  // 创建鼠标向量
  const mouse = new THREE.Vector2();
  // 计算鼠标点击位置的归一化设备坐标（NDC）
  // NDC 坐标系的范围是 [-1, 1]，左下角为 (-1, -1)，右上角为 (1, 1)
  if (!canvas.value) return;
  mouse.x = (event.clientX / canvas.value.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / canvas.value.clientHeight) * 2 + 1;

  // 更新射线的起点和方向
  raycaster.setFromCamera(mouse, camera);
  // 将终点设置为距离相机100的位置
  raycaster.ray.at(100, rayEndpoint);

  // 计算射线与场景中的所有标点相交
  const intersects = raycaster.intersectObjects(pointGroup.children, true);

  // 如果存在相交点，则获取第一个相交点的坐标
  if (intersects.length > 0) {
    const object: NewObject3d = intersects[0].object;
    // 获取标点在屏幕上的位置
    const point = new THREE.Vector3().copy(object.position);
    // 标点从三维空间投影到二维屏幕上
    point.project(camera);
    // 判断下如果标点是隐藏状态就不做任何操作
    if (!object.visible) return;

    // isClick判断是否是点击事件，buttonText.key判断当前在第一场景还是第二场景
    if (isClick && buttonText.key !== 2) {
      // 监听点击事件所执行逻辑
      if (!object.otherScene) return;
      goOtherScene(object);
    } else {
      if (buttonText.key !== 2) {
        addTipElementOrRemove(object, point, true);
      }
    }
  } else {
    if (isClick) return;
    addTipElementOrRemove(null, null, false);
  }
};
// 添加或移除提示信息框
const addTipElementOrRemove = (
  object: NewObject3d | null, // 鼠标拾取到的对象
  point: THREE.Vector3 | null, // 对象在屏幕上的位置
  status: boolean // 状态 添加true  移除false
): void => {
  // 获取文档中ID为tooltip的元素
  const tooltipElement: HTMLElement | null = document.getElementById("tooltip");
  // 状态是true并且元素已存在，就不再执行添加操作
  if (status && tooltipElement) return;
  // 状态是true并且元素不存在执行添加操作
  if (!tooltipElement && status) {
    const tooltipDiv: HTMLElement = document.createElement("div");
    tooltipDiv.innerHTML = (object && object.text) || "";
    tooltipDiv.setAttribute("id", "tooltip");
    tooltipDiv.style.position = "absolute";
    tooltipDiv.style.left = `${
      point && ((point.x + 1) * canvas.value.clientWidth) / 2 + 10
    }px`;
    tooltipDiv.style.top = `${
      point && ((-point.y + 1) * canvas.value.clientHeight) / 2 + 10
    }px`;
    tooltipDiv.style.zIndex = "100";
    tooltipDiv.style.padding = "4px 6px";
    tooltipDiv.style.fontSize = "12px";
    tooltipDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tooltipDiv.style.border = "1px solid #ffffff";
    tooltipDiv.style.borderRadius = "6px";

    canvas.value.appendChild(tooltipDiv);
  } else {
    // 状态为false并且元素存在执行移除操作
    if (!status && tooltipElement) {
      canvas.value.removeChild(tooltipElement);
    }
  }
};
// 判断模型是否遮挡精灵
const spriteVisible = (): void => {
  // 创建一个Raycaster对象
  const raycaster = new THREE.Raycaster();
  raycaster.camera = camera;

  // 精灵标点集合
  const spriteArr: THREE.Object3D<THREE.Event>[] = [];
  pointGroup.children.forEach((sprite) => {
    spriteArr.push(sprite);
  });

  for (let i = 0; i < spriteArr.length; i++) {
    const sprite: THREE.Object3D<THREE.Event> = spriteArr[i];

    // 将Sprite的位置作为射线的起点
    // 创建一个新的 Vector3 对象，然后使用 setFromMatrixPosition 方法将该对象设置为 Sprite 对象在世界坐标系下的位置
    // 最终得到一个 Vector3 对象，表示了 Sprite 对象在世界坐标系下的位置。这个位置可以用于计算精灵与相机的相对位置，或者用于计算精灵的旋转方向
    const spritePosition: THREE.Vector3 =
      new THREE.Vector3().setFromMatrixPosition(sprite.matrixWorld);
    const rayOrigin: THREE.Vector3 = spritePosition.clone();

    // 将摄像机位置作为射线的终点
    const cameraPosition: THREE.Vector3 =
      new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
    // 计算spritePosition指向cameraPosition的单位向量代码
    // ameraPosition.clone() 将 cameraPosition 对象进行克隆，得到一个新的 Vector3 对象。这么做是为了避免修改原始的 cameraPosition 对象
    // sub(spritePosition) 将 spritePosition 对象从上一步得到的新的 Vector3 对象中减去，得到一个指向 spritePosition 的向量
    // normalize()：将上一步得到的指向 spritePosition 的向量进行标准化，得到一个单位向量，即长度为 1 的向量
    const rayDirection: THREE.Vector3 = cameraPosition
      .clone()
      .sub(spritePosition)
      .normalize();

    // 设置射线的起点和方向
    raycaster.set(rayOrigin, rayDirection);

    // 检查是否存在与Sprite相交的物体
    const intersects = raycaster.intersectObjects(buildingModel.children, true);
    let isOccluded = false;

    for (let j = 0; j < intersects.length; j++) {
      const intersection = intersects[j];
      const object = intersection.object;
      if (object !== sprite && object.name !== "Plane") {
        // 当前相交对象不是Sprite，那Sprite被遮挡了
        isOccluded = true;
        break;
      }
    }

    // 如果Sprite被遮挡了，将其隐藏，因为不能直接用gasp操作sprite.visible属性，所以只能改变opacity属性，并且当执行完成时需要隐藏精灵，要不然射线还会选到
    if (isOccluded) {
      gsap.to((sprite as THREE.Sprite).material, {
        opacity: 0,
        ease: "Power0.inOut",
        duration: 0.5,
        onComplete: () => {
          sprite.visible = false;
        },
      });
    } else {
      gsap.to((sprite as THREE.Sprite).material, {
        opacity: 1,
        ease: "Power0.inOut",
        duration: 0.5,
        onComplete: () => {
          sprite.visible = true;
        },
      });
    }
  }
};
// 点击前往第二个场景
const goOtherScene = (object: NewObject3d): void => {
  // 设置控制器属性
  controls.enabled = false;
  controls.enableZoom = false;
  controls.autoRotate = false;
  controls.minDistance = 0;
  controls.maxDistance = Infinity;

  // 遍历建筑模型，找到第二场景的位置
  buildingModel.traverse((child) => {
    if (child.name === "Area002") {
      const newPosition = new THREE.Vector3();
      child.updateMatrixWorld();

      newPosition.setFromMatrixPosition(child.matrixWorld);

      // 设置controls的中心点
      controls.target.set(newPosition.x, newPosition.y, newPosition.z);

      elementStatus.quitButton = false;

      // 相机动画
      gsap.to(camera.position, {
        x: newPosition.x - 4,
        y: newPosition.y + 2,
        z: newPosition.z,
        ease: "Power0.inOut",
        duration: 1,
        onUpdate: () => {
          // 设置相机的广角
          if (cameraFov < 50) {
            cameraFov += 1;
            camera.fov = cameraFov;
            camera.updateProjectionMatrix();
          }
        },
        onComplete: () => {
          controls.enabled = true;
          elementStatus.quitButton = true;
          buttonText.key = 2;
          buttonText.value = "OUT";
        },
      });
    }
  });
};

// 监听鼠标移动事件
window.addEventListener("mousemove", detectionMouseIntersectPoint, false);

// 监听鼠标点击事件
window.addEventListener(
  "click",
  (event) => detectionMouseIntersectPoint(event, true),
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
      position: absolute;
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
    .left-image {
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      width: 36%;
    }
    .header-pic {
      position: absolute;
      left: 40%;
      top: 50%;
      transform: translateY(-50%) scale(1);
      width: 14%;
      color: #c6c0be;
      img {
        width: 100%;
        background-color: rgb(215, 215, 215);
      }
      p {
        text-align: center;
        font-size: 30px;
      }
    }

    .right-text {
      position: absolute;
      right: 10%;
      width: 32%;
      color: #f9f0ec;
      font-size: 26px;
    }
    .background {
      width: 100vw;
      height: 100vh;
      background-color: #2c242efa;
      opacity: 0.8;
    }
    .my-blog,
    .juejin {
      font-size: 36px;
      font-weight: bold;
      font-family: "Archivo";
    }
    .my-blog {
      position: absolute;
      top: 40%;
      left: 10%;
      color: #ffffff;
    }
    .juejin {
      position: absolute;
      bottom: 40%;
      right: 10%;
      color: #d2a884;
    }
    .explorar {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 160px;
      height: 160px;
      line-height: 50px;
      text-align: center;
      border-radius: 100%;
      background-color: #ffffff;
      font-family: "Archivo";
      color: #000000;
      transition: 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      outline: 0;
      &:hover {
        transform: translate(-50%, -50%) scale(1.2);
        cursor: pointer;
      }
    }
  }
}
.quit {
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 100%;
  transition: 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  outline: 0;
  z-index: 10;
  &:hover {
    transform: translateX(-50%) scale(1.2);
    cursor: pointer;
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
.left-image-fade-enter-active {
  animation: leftImageFadeEnter 1s linear 0s;
}
.left-image-fade-leave-active {
  animation: leftImageFadeLeave 1s linear 0s;
}
@keyframes leftImageFadeEnter {
  0% {
    opacity: 0;
    left: -6%;
  }
  50% {
    opacity: 0.5;
    left: 8%;
  }
  100% {
    opacity: 1;
    left: 10%;
  }
}
@keyframes leftImageFadeLeave {
  0% {
    opacity: 1;
    left: 10%;
  }
  50% {
    opacity: 0.5;
    left: 8%;
  }
  100% {
    opacity: 0;
    left: -6%;
  }
}
.header-image-fade-enter-active {
  animation: headerImageFadeEnter 1s linear 0s;
}
.header-image-fade-leave-active {
  animation: headerImageFadeLeave 1s linear 0s;
}
@keyframes headerImageFadeEnter {
  0% {
    opacity: 0;
    transform: translateY(-50%) scale(2);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-50%) scale(1.5);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}
@keyframes headerImageFadeLeave {
  0% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-50%) scale(1.5);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) scale(2);
  }
}
.right-text-fade-enter-active {
  animation: rightTextFadeEnter 1s linear 0s;
}
.right-text-fade-leave-active {
  animation: rightTextFadeLeave 1s linear 0s;
}
@keyframes rightTextFadeEnter {
  0% {
    opacity: 0;
    right: -10%;
  }
  50% {
    opacity: 0.5;
    right: 0%;
  }
  100% {
    opacity: 1;
    right: 10%;
  }
}
@keyframes rightTextFadeLeave {
  0% {
    opacity: 1;
    right: 10%;
  }
  50% {
    opacity: 0.5;
    right: 0%;
  }
  100% {
    opacity: 0;
    right: -10%;
  }
}
.a-left-text-fade-enter-active {
  animation: aLeftTextFadeEnter 1s linear 0s;
}
.a-left-text-fade-leave-active {
  animation: aLeftTextFadeLeave 1s linear 0s;
}
@keyframes aLeftTextFadeEnter {
  0% {
    opacity: 0;
    left: -10%;
  }
  50% {
    opacity: 0.5;
    left: 0%;
  }
  100% {
    opacity: 1;
    left: 10%;
  }
}
@keyframes aLeftTextFadeLeave {
  0% {
    opacity: 1;
    left: 10%;
  }
  50% {
    opacity: 0.5;
    left: 0%;
  }
  100% {
    opacity: 0;
    left: -10%;
  }
}
.a-right-text-fade-enter-active {
  animation: aRightTextFadeEnter 1s linear 0s;
}
.a-right-text-fade-leave-active {
  animation: aRightTextFadeLeave 1s linear 0s;
}
@keyframes aRightTextFadeEnter {
  0% {
    opacity: 0;
    right: -10%;
  }
  50% {
    opacity: 0.5;
    right: 0%;
  }
  100% {
    opacity: 1;
    right: 10%;
  }
}
@keyframes aLeftTextFadeLeave {
  0% {
    opacity: 1;
    right: 10%;
  }
  50% {
    opacity: 0.5;
    right: 0%;
  }
  100% {
    opacity: 0;
    right: -10%;
  }
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #333333;
  z-index: 100000;

  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;

    .box {
      width: 100%;
      height: 30px;
      background: #1e1d1d;
      border-radius: 30px;
      box-shadow: 0 0 4px 4px #ffffff3c;
      overflow: hidden;

      .process {
        width: 0%;
        height: 100%;
        background-image: linear-gradient(45deg, #0a9798 0%, #0b75cf 100%);
        transition: all 1s;
      }
    }

    p {
      padding-top: 10px;
    }
  }
}

.loading-leave-active {
  animation: loadingLeave 2s linear 0s;
}
@keyframes loadingLeave {
  0% {
    opacity: 1;
    top: 0%;
  }
  50% {
    opacity: 0.5;
    top: -50%;
  }
  100% {
    opacity: 0;
    top: -100%;
  }
}
</style>
