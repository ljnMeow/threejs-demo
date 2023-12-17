<template>
  <div class="box">
    <button @click="switchModel('chassis')">模型一</button>
    <button @click="switchModel('car')">模型二</button>
  </div>
  <div id="canvas" ref="canvas"></div>
  <div class="mask" v-if="loading">{{ loadingText }}</div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import Stats from "stats.js";
import gsap from "gsap";
import { ref, nextTick } from "vue";
import { getAssetsFile } from "../utils";

const canvas = ref<any>(null);
let scene: THREE.Scene = new THREE.Scene();
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any;
let stats: any;
let skyEnvMap: THREE.CubeTexture;
let modelData: (THREE.Group & { decomposition: boolean }) | null = null;
const gltfLoader: GLTFLoader = new GLTFLoader();
const raycaster = new THREE.Raycaster();
let composer: EffectComposer; // 效果合成器
let outlinePass: OutlinePass;

const modelPathArr = {
  chassis: getAssetsFile("chassis/CUSTOM GAMING PC.glb"),
  car: getAssetsFile("car/car.glb"),
};
const modelPool: THREE.Group[] = [];

const loading = ref(false);
const loadingText = ref();

nextTick(() => {
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initControls();
  render();
  initStats();
  initLight();
  initComposer();
  switchModel("chassis");

  canvas.value.addEventListener("dblclick", () => {
    if (!modelData?.decomposition) {
      modelData!.decomposition = true;
      modelData?.traverse((obj: THREE.Object3D) => {
        const mesh = obj as THREE.Object3D & {
          isMesh: boolean;
          material: THREE.Material;
          fromPosition: THREE.Vector3;
          toPosition: THREE.Vector3;
        };
        gsap.to(mesh.position, {
          x: mesh.toPosition.x,
          y: mesh.toPosition.y,
          z: mesh.toPosition.z,
          ease: "Power2.inOut",
          duration: 5,
        });
      });
    } else {
      modelData!.decomposition = false;
      modelData?.traverse((obj: THREE.Object3D) => {
        const mesh = obj as THREE.Object3D & {
          isMesh: boolean;
          material: THREE.Material;
          fromPosition: THREE.Vector3;
          toPosition: THREE.Vector3;
        };
        gsap.to(mesh.position, {
          x: mesh.fromPosition.x,
          y: mesh.fromPosition.y,
          z: mesh.fromPosition.z,
          ease: "Power2.inOut",
          duration: 5,
        });
      });
    }
  });
});

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
  const cubeLoader: THREE.CubeTextureLoader = new THREE.CubeTextureLoader();
  skyEnvMap = cubeLoader.load(skyBg);
  // 设置场景背景
  scene.background = skyEnvMap;
};

const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
  camera.position.set(0, 0, 20);
  scene.add(camera);
};

const initRenderer = (width: number, height: number): void => {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  canvas.value.appendChild(renderer.domElement);
  renderer.render(scene, camera);
};

const initStats = (): void => {
  stats = new Stats();
  canvas.value.appendChild(stats.dom);
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
  if (composer) {
    composer.render();
  }
  requestAnimationFrame(render);
};

// 初始化灯光
const initLight = (): void => {
  // 环境光
  const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(
    new THREE.Color("rgb(255, 255, 255)")
  );
  scene.add(ambientLight);
};

const switchModel = (key: string) => {
  const modelPath = modelPathArr[key as keyof typeof modelPathArr];

  if (modelData) {
    modelData.visible = false;
  }

  // 查找可重用的模型
  let newModel = findReusableModel() as
    | (THREE.Group & { decomposition: boolean })
    | null;
  // console.log(newModel)
  if (newModel) {
    // 重用可用的模型
    newModel.visible = true;
    modelData = newModel;
  } else {
    createModal(modelPath);
  }
};

const findReusableModel = () => {
  for (let i = 0; i < modelPool.length; i++) {
    const model = modelPool[i];
    if (!model.visible && model !== modelData) {
      return model;
    }
  }
  return null;
};

const createModal = (path: string): void => {
  gltfLoader.load(
    path,
    (gltf) => {
      gltf.scene.rotateY(-0.2);
      gltf.scene.traverse((obj: THREE.Object3D) => {
        const mesh = obj as THREE.Object3D & {
          isMesh: boolean;
          material: THREE.Material;
          fromPosition: THREE.Vector3;
          toPosition: THREE.Vector3;
        };
        mesh.fromPosition = mesh.position.clone();
        mesh.toPosition = mesh.position.clone().multiplyScalar(3);
      });
      modelData = gltf.scene as THREE.Group & { decomposition: boolean };
      modelData.decomposition = false;
      modelPool.push(modelData);
      scene.add(modelData);
    },
    (xhr) => {
      // 模型加载进度的回调函数
      loading.value = true

      const percent = (xhr.loaded / xhr.total) * 100;
      console.log(percent)
      loadingText.value = `模型加载进度：${percent.toFixed(2)}%`

      if(percent === 100) {
        setTimeout(() => {
          loading.value = false
        }, 800)
      }
    }
  );
};

const selectMesh = (event: MouseEvent) => {
  // 创建鼠标向量
  const mouse = new THREE.Vector2();
  // 计算鼠标点击位置的归一化设备坐标（NDC）
  // NDC 坐标系的范围是 [-1, 1]，左下角为 (-1, -1)，右上角为 (1, 1)
  if (!canvas.value) return;
  mouse.x = (event.clientX / canvas.value.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / canvas.value.clientHeight) * 2 + 1;

  // 更新射线的起点和方向
  raycaster.setFromCamera(mouse, camera);

  // 执行射线与物体的相交测试
  const intersects = raycaster.intersectObjects(scene.children);

  // 检查是否有相交的物体
  if (intersects.length > 0) {
    const selectedObject = intersects[0].object as THREE.Mesh;
    outlinePass.selectedObjects = [selectedObject];
  } else {
    outlinePass.selectedObjects = [];
  }
};

const initComposer = () => {
  outlinePass = new OutlinePass(
    new THREE.Vector2(canvas.value.clientWidth, canvas.value.clientHeight),
    scene,
    camera
  );
  outlinePass.visibleEdgeColor.set(0xff0000); // 设置轮廓线颜色为红色
  outlinePass.edgeStrength = 10; // 设置轮廓线强度

  // 添加 OutlinePass 到渲染器的通道中
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(outlinePass);
};

window.addEventListener("mousemove", selectMesh, false);

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
.box {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 100vh;
}
</style>