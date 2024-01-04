<template>
  <div id="canvas" ref="canvas"></div>
  <div class="right">
    <div
      class="box"
      v-for="(item, index) in textureArr"
      :key="index"
      @click.stop.prevent="changeMeshTexture(item)"
    >
      <div
        v-if="item.type === 'color'"
        :style="{
          backgroundColor: item.texture,
          width: '100%',
          height: '100%',
        }"
      ></div>
      <img
        v-else-if="item.type === 'image'"
        :src="item.texture"
        width="50"
        height="50"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import Stats from "stats.js";
import { ref, nextTick } from "vue";
import { getAssetsFile } from "../utils";
import gsap from "gsap";

const canvas = ref<any>(null);
let scene: THREE.Scene = new THREE.Scene();
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any;
let stats: any;
const gltfLoader: GLTFLoader = new GLTFLoader(); // 模型加载器
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(); // 纹理加载器
const raycaster = new THREE.Raycaster(); // 射线检测器
let composer: EffectComposer; // 效果合成器
let outlinePass: OutlinePass; // 高亮通道
let modelData: THREE.Group | null = null; // 模型数据缓存
// 贴图数据集合
const textureArr = [
  {
    type: "color",
    texture: "rgb(137, 78, 84)",
  },
  {
    type: "color",
    texture: "rgb(231, 124, 142)",
  },
  {
    type: "color",
    texture: "rgb(188, 132, 168)",
  },
  {
    type: "color",
    texture: "rgb(82, 82, 136)",
  },
  {
    type: "color",
    texture: "rgb(26, 148, 188)",
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Fabric_035_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/White fabric_200_DB.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Fabric_036_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Fabric_Rug_006_COLOR.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Fabric_Knitted_004_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Fabric_Alcantara_001_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Wood_Wicker_009_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Wood_026_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Wood_025_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Bark_06_basecolor.jpg"),
  },
  {
    type: "image",
    texture: getAssetsFile("sofa/texture/Merano_diffuse_02.jpg"),
  },
];

// 场景
const initScene = (): void => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color("rgb(226, 225, 225)");
};
// 相机
const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(100, width / height, 0.01, 1000);
  camera.position.set(-1, 1, 2);
  scene.add(camera);
};
// 渲染器
const initRenderer = (width: number, height: number): void => {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.shadowMap.enabled = true; // 开启阴影
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 可根据需要选择阴影类型
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio); // 设置像素比例
  canvas.value.appendChild(renderer.domElement);
  renderer.render(scene, camera);
};
// 性能监测
const initStats = (): void => {
  stats = new Stats();
  canvas.value.appendChild(stats.dom);
};
// 控制器
const initControls = (): void => {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableZoom = true; //是否可以缩放
  controls.autoRotate = false; //是否自动旋转
  controls.enablePan = true; //是否开启右键拖拽
  controls.minDistance = 1.8; // 设置相机向内移动上限
  controls.maxDistance = 5; // 设置相机向外移动上限
  controls.minPolarAngle = Math.PI / 4; // 最小极角
  controls.maxPolarAngle = Math.PI / 2.1; // 最大极角
};
// 灯光
const initLight = (): void => {
  const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(
    new THREE.Color("rgb(206, 206, 206)")
  );
  const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
    new THREE.Color("rgb(128, 128, 128)")
  );
  directionalLight.position.set(5.5, 4, 4.5);
  directionalLight.castShadow = true; // 产生阴影

  // 配置阴影属性
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 500;
  directionalLight.shadow.camera.left = -10;
  directionalLight.shadow.camera.right = 10;
  directionalLight.shadow.camera.top = 10;
  directionalLight.shadow.camera.bottom = -10;

  scene.add(ambientLight, directionalLight);
};
// 效果合成器
const initComposer = (): void => {
  composer = new EffectComposer(renderer);

  // 创建渲染通道
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  outlinePass = new OutlinePass(
    new THREE.Vector2(canvas.value.clientWidth, canvas.value.clientHeight),
    scene,
    camera
  );
  outlinePass.visibleEdgeColor.set(new THREE.Color("rgb(255, 0, 0)")); // 设置轮廓线颜色
  outlinePass.edgeThickness = 2; // 轮廓的宽度
  outlinePass.edgeStrength = 10; // 轮廓线强
  outlinePass.edgeGlow = 0.1; //发光度
  outlinePass.pulsePeriod = 1.5; //闪烁
  composer.addPass(outlinePass);

  // 创建SMAAPass抗锯齿通道
  const smaaPass = new SMAAPass(
    canvas.value.clientWidth,
    canvas.value.clientHeight
  );
  composer.addPass(smaaPass);
};
// 渲染
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
// 模型加载
const initModel = (): void => {
  gltfLoader.load(getAssetsFile("sofa/sofa.glb"), (gltf) => {
    gltf.scene.traverse((mesh) => {
      if (mesh instanceof THREE.Mesh) {
        if (mesh.name === "plane") {
          mesh.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("rgb(211, 211, 211)"),
          });
          mesh.receiveShadow = true; // 设置面板接受阴影
        } else {
          mesh.castShadow = true; // 设置椅子其他mesh产生阴影
        }
      }
    });
    gltf.scene.scale.set(0.02, 0.02, 0.02);
    gltf.scene.position.set(0, -1.4, 0);
    modelData = gltf.scene;
    scene.add(gltf.scene);
  });
};
// 物体选中
const selectMesh = (event: MouseEvent): void => {
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
    const selectedObject = intersects[0].object;
    if (selectedObject.name === "plane") {
      outlinePass.selectedObjects = [];
      return;
    }
    outlinePass.selectedObjects = [selectedObject];
  } else {
    outlinePass.selectedObjects = [];
  }
};
// 点击更改贴图 
const changeMeshTexture = (textureData: { type: String; texture: any }) => {
  if (outlinePass.selectedObjects.length === 0) return;
  const meshName = outlinePass.selectedObjects[0].name;
  const mesh = modelData!.getObjectByName(meshName) as THREE.Mesh;
  if (textureData.type === "color") {
    const color = new THREE.Color(textureData.texture);
    const material = mesh.material as THREE.MeshStandardMaterial;
    material.color.set(color);
    material.map = null
    material.needsUpdate = true;
  } else if (textureData.type === "image") {
    const material = mesh.material as THREE.MeshStandardMaterial;
    textureLoader.load(textureData.texture, (texture) => {
      material.color.set(new THREE.Color(1, 1, 1));
      material.map = texture;
      material.needsUpdate = true;
    });
  }
};

window.addEventListener("click", selectMesh, false);

nextTick(() => {
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initControls();
  render();
  initStats();
  initLight();
  initComposer();
  initModel();
});

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
.right {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  .box {
    width: 50px;
    height: 50px;
  }
}
</style>