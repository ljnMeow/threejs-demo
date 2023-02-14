<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import Stats from "stats.js"
import { nextTick, ref } from "vue"
import { getAssetsFile } from "../utils"

const canvas = ref<any>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any;
let stats: any;
let stars: THREE.Points;
let torus: THREE.Mesh;
let satellite: THREE.Group;
const starCount: number = 10000;
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
const objLoader: OBJLoader = new OBJLoader()
const mTLLoader: MTLLoader = new MTLLoader()
const earthGroup: THREE.Group = new THREE.Group();
let composer: EffectComposer;
let movePosition: THREE.Vector3[] = []

nextTick(() => {
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initControls();
  render();
  initStats();
  initAxesHelper();
  initLight();
  createStar();
  createEarth();
  createStarOrbit();
  createSatellite();
});

const initScene = (): void => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x020924 );
  scene.fog = new THREE.Fog( 0x020924, 200, 1000 );
}

const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
  camera.position.set(0, 0, 14);
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
  //摄像机缩放的速度
  controls.zoomSpeed = 1.8;
};

var target = 1;
var speed = 0.1;

const render = (): void => {
  controls.update();
  renderer.render(scene, camera);
  if (stats) {
    stats.update();
  }
  if(composer) {
    composer.render();
  }
  if(stars){
    stars.rotation.y += 0.0009;
    stars.rotation.z -= 0.0003;
  }
  earthGroup && (earthGroup.rotation.y += 0.001)

  // if(satellite) {
  //   var distance = satellite.position.distanceTo(movePosition[target]);
  //   if (distance < speed) {
  //     target = (target + 1) % movePosition.length;
  //   }
  //   var position = satellite.position.clone();
  //   position.lerp(movePosition[target], speed / distance);
  //   satellite.position.copy(position);

  //   var direction = new THREE.Vector3().subVectors(movePosition[target], satellite.position);
  //   satellite.lookAt(satellite.position.clone().add(direction));
  // }

  requestAnimationFrame(render);
};

const initLight = (): void => {
  const ambientLight: THREE.AmbientLight = new THREE.AmbientLight( new THREE.Color('rgb(222, 237, 255)'));
  scene.add(ambientLight);
};

const createStar = (): void => {
  let geometry: THREE.BufferGeometry = new THREE.BufferGeometry();
  let vertices: Float32Array = new Float32Array(starCount * 3);
  let colors: Float32Array = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    let x = (Math.random() - 0.5) * 1000;
    let y = (Math.random() - 0.5) * 1000;
    let z = (Math.random() - 0.5) * 1000;
    vertices[i * 3 + 0] = x;
    vertices[i * 3 + 1] = y;
    vertices[i * 3 + 2] = z;

    let color: THREE.Color = new THREE.Color();
    color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55);
    colors[i * 3 + 0] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  let starTexture: THREE.Texture = textureLoader.load(getAssetsFile("star.png"));
  let starMaterial = new THREE.PointsMaterial({
    map: starTexture,
    size: 1,
    transparent: true,
    opacity: 1,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  stars = new THREE.Points(geometry, starMaterial);

  scene.add(stars);
};

const createEarth = () => {
  const earthGeo: THREE.SphereGeometry = new THREE.SphereGeometry(5, 32, 32);
  const earthTexture: THREE.Texture = textureLoader.load(getAssetsFile("earth/earth.png"));
  const earthBumpTexture: THREE.Texture = textureLoader.load(getAssetsFile("earth/earth_bump.png"));
  const earthSpecTexture: THREE.Texture = textureLoader.load(getAssetsFile("earth/earth_spec.png"));
  const earthMaterial: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    bumpMap: earthBumpTexture,
    bumpScale: 0.15,
    specularMap: earthSpecTexture,
    specular: new THREE.Color("#909090"),
    shininess: 5,
    transparent: true,
    side: THREE.DoubleSide
  });
  const earth: THREE.Mesh = new THREE.Mesh(earthGeo, earthMaterial)
  earthGroup.add(earth)

  const cloudGeo: THREE.SphereGeometry = new THREE.SphereGeometry(5.1, 40, 40)
  const cloudTexture: THREE.Texture = textureLoader.load(getAssetsFile("earth_cloud.png"));
  const cloudMaterial: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  })
  const cloud: THREE.Mesh = new THREE.Mesh(cloudGeo, cloudMaterial)
  earthGroup.add(cloud)

  earthGroup.rotation.set( 0.6, 3.0, 0.1 );

  scene.add(earthGroup)
};

const createStarOrbit = (): void => {
	const torusGeo: THREE.TorusGeometry = new THREE.TorusGeometry(8.0, 0.2, 2, 200)
  const torusMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("rgb(147, 181, 207)"),
    wireframe: false,
    transparent: true,
    opacity: 0.4
  });
  torus = new THREE.Mesh(torusGeo, torusMaterial);
  torus.rotation.set( 1.7, 0.5, 1 );
  torus.updateMatrix();

  composer = new EffectComposer( renderer )

  const renderPass: RenderPass = new RenderPass( scene, camera );
  composer.addPass( renderPass );
  
  const outlinePass: OutlinePass = new OutlinePass( new THREE.Vector2( canvas.value.clientWidth, canvas.value.clientHeight ), scene, camera );
  composer.addPass( outlinePass );

  outlinePass.pulsePeriod = 0; // 数值越大，律动越慢
  outlinePass.visibleEdgeColor.set( new THREE.Color("rgb(147, 181, 207)") ); // 高光颜色
  outlinePass.usePatternTexture = false; // 使用纹理覆盖
  outlinePass.edgeStrength = 2; // 高光边缘强度
  outlinePass.edgeGlow = 1; // 边缘微光强度
  outlinePass.edgeThickness = 1; // 高光厚度

  outlinePass.selectedObjects = [torus]; // 需要高光的Mesh

  const vertices = (torus.geometry.getAttribute('position') as any).array;

  // 将每个顶点数据转换为THREE.Vector3对象
  for (let i = 0; i < vertices.length; i++) {
    movePosition.push(new THREE.Vector3(vertices[i * 3 + 0], vertices[i * 3 + 1], vertices[i * 3 + 2]))
  }
  // 创建一个变换矩阵
  const matrix = new THREE.Matrix4();
  matrix.makeRotationFromEuler(torus.rotation);

  for (let i = 0; i < movePosition.length; i++) {
    movePosition[i].applyMatrix4(matrix);
  }

	scene.add(torus)
}

const createSatellite = (): void => {
  mTLLoader.load(getAssetsFile('satellite/Satellite.mtl'), (material) => {
    material.preload()

    objLoader.setMaterials(material).load(getAssetsFile('satellite/Satellite.obj'), (obj) => {
      obj.position.copy(movePosition[0])
      satellite = obj
      scene.add(satellite)
    })
  })
}

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