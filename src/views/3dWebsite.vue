<template>
  <div id="canvas" ref="canvas"></div>
  <div class="website-view">
    <div class="view-page">
      <transition name="left">
        <div class="title" v-if="showTitle">
          𝟥𝒟 𝒲𝑒𝒷𝒮𝒾𝓉𝑒<br />
          𝒹𝑒𝓂𝑜
        </div>
      </transition>
      <transition name="top">
        <div class="start" v-if="showStart">↓</div>
      </transition>
    </div>
    <div class="view-page"></div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { nextTick, ref } from "vue";
import { getAssetsFile, debounce } from "../utils";
import gsap from "gsap";

const canvas = ref<any>(null); // 画布
let scene: THREE.Scene; // 场景

let camera: THREE.PerspectiveCamera; // 相机
let cameraPostion: THREE.Vector3; // 相机位置
let originaCameraPos: THREE.Vector3; // 初始相机位置

let renderer: THREE.WebGLRenderer; // 渲染器
let controls: any; // 控制器
let stats: any;

let isMouseMove = ref<Boolean>(true); // 状态 控制鼠标移动画面是否交互
let mouse: THREE.Vector2 = new THREE.Vector2(); // 鼠标二位坐标
let timer: any; // 定时器-处理滚动状态

let buildingModel: THREE.Group; // 建筑模型
let originalModelPos: THREE.Vector3;

const preScrollPos = ref<Number>(window.scrollY);

const manager = new THREE.LoadingManager(); // 加载器管理器
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(manager); // 纹理加载器
let skyEnvMap: THREE.CubeTexture;

const dracoLoader: DRACOLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
dracoLoader.preload();

const gltfLoader: GLTFLoader = new GLTFLoader(manager);
gltfLoader.setDRACOLoader(dracoLoader);

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
  originaCameraPos = cameraPostion.clone();
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

const loadBuildingModel = () => {
  gltfLoader.load(getAssetsFile("building/building.glb"), (gltf) => {
    gltf.scene.scale.set(0.05, 0.05, 0.05);

    originalModelPos = new THREE.Vector3(14, -40.8, 0);

    gltf.scene.position.copy(originalModelPos);

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

const onDocumentMouseMove = (event: any) => {
  if (isMouseMove.value) {
    mouse.x = event.clientX / canvas.value.clientWidth + 0.5;
    mouse.y = event.clientY / canvas.value.clientHeight + 0.5;

    console.log('111', originaCameraPos)

    gsap.to(camera.position, {
      x: originaCameraPos.x + mouse.x,
      y: originaCameraPos.y - mouse.y,
      ease: "Power2.inOut",
      duration: 2,
    });
  }
};

window.addEventListener("mousemove", onDocumentMouseMove, false);

// window.addEventListener(
//   "mouseleave",
//   () => {
//     gsap.to(camera.position, {
//       x: originaCameraPos.x,
//       y: originaCameraPos.y,
//       z: originaCameraPos.z,
//       ease: "Power2.inOut",
//       duration: 2,
//     });
//   },
//   false
// );

window.addEventListener(
  "scroll",
  (event: any) => {
    isMouseMove.value = false;

    const currentScrollPos: number = window.scrollY;
    const windowHeight: number = window.innerHeight;
    const documentHeight: number = document.documentElement.scrollHeight;
    const scrollLength: number = documentHeight - windowHeight;
    const offset = currentScrollPos / scrollLength;

    let newModelPos: THREE.Vector3 = originalModelPos
      .clone()
      .add(new THREE.Vector3(offset * 8, offset * 12, offset * 8));

    if (currentScrollPos === 0) {
      newModelPos.copy(originalModelPos);
    }

    gsap.to(camera.position, {
      x: offset * 18,
      y: cameraPostion.y + offset * 10,
      ease: "Power2.inOut",
      duration: 0.5,
    });

    console.log('==', camera.position, originaCameraPos)
    originaCameraPos = camera.position.clone()

    gsap.to(buildingModel.position, {
      x: newModelPos.x,
      y: newModelPos.y,
      z: newModelPos.z,
      ease: "Power2.inOut",
      duration: 0.5,
    });

    preScrollPos.value = currentScrollPos;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      isMouseMove.value = true;
    }, 1000);
  },
  { passive: true }
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
  }
}

.left-enter-active {
  animation: left 1s linear 0s;
}
@keyframes left {
  0% {
    opacity: 0;
    transform: translate(-100px, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0, -50%);
  }
}

.top-enter-active {
  animation: top 1s linear 0s;
}
@keyframes top {
  0% {
    opacity: 0;
    top: 100%;
  }
  100% {
    opacity: 1;
    top: 70%;
  }
}
</style>
