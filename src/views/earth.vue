<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "stats.js";
import { nextTick, ref } from "vue";
import { getAssetsFile } from "../utils";

import starPng from "../assets/star.png";

const canvas = ref<any>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any;
let stats: any;
let stars: THREE.Points;
const starCount: number = 10000;
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
const earthGroup: THREE.Group = new THREE.Group();

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

const render = (): void => {
  controls.update();
  renderer.render(scene, camera);
  if (stats) {
    stats.update();
  }
  requestAnimationFrame(render);
};

const initLight = (): void => {
  let ambientLight: THREE.AmbientLight = new THREE.AmbientLight();
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

  let starTexture: THREE.Texture = textureLoader.load(starPng);
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

const createSatellite = (): void => {
  const length: number = 100, radius: number = 8, pointsArr: THREE.Vector3[] = [];

  for (let i = 0; i <= length; i++) {
    pointsArr.push(new THREE.Vector3(radius * Math.cos(Math.PI * 2 * i / length), radius * Math.sin(Math.PI * 2 * i / length), 0))
  }
  const curve: THREE.CatmullRomCurve3 = new THREE.CatmullRomCurve3(pointsArr, true, 'catmullrom', 0.5);

  const points = curve.getPoints(50);
	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  const curveObject = new THREE.Line(geometry, material);
  curveObject.rotation.set( 1.7, 0.5, 1 );
  
	scene.add(curveObject)
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