<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Stats from "stats.js";
import { nextTick, ref } from "vue";

import starPng from "../assets/star.png";

const canvas = ref<any>(null);
let scene: THREE.Scene = new THREE.Scene();
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any;
let stats: any;
let stars: THREE.Points;
const starCount: number = 10000;
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();

nextTick(() => {
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initControls();
  render();
  initStats();
  initAxesHelper();
  initLight();
  createStar();
  createEarth();
});

const initCamera = (width: number, height: number): void => {
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 100);
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
  const loader: OBJLoader = new OBJLoader();
  const modal: string = new URL('../assets/model/earth/earth.obj', import.meta.url).href
  loader.load(modal, async (obj) => {
    const cloudTexture: THREE.Texture = await new Promise((resolve, reject) => {
      const cloudPng: string = new URL('../assets/model/earth/texture/Clouds_2K.png', import.meta.url).href
      textureLoader.load(cloudPng, resolve, undefined, reject)
    })

    const atmosphereTexture: THREE.Texture = await new Promise((resolve, reject) => {
      const atmospherePng: string = new URL('../assets/model/earth/texture/Bump_2K.png', import.meta.url).href
      textureLoader.load(atmospherePng, resolve, undefined, reject)
    })

    const earthTexture: THREE.Texture = await new Promise((resolve, reject) => {
      const earthPng: string = new URL('../assets/model/earth/texture/Diffuse_2K.png', import.meta.url).href
      textureLoader.load(earthPng, resolve, undefined, reject)
    })

    for(let i = 0; i < obj.children.length; i++) {
      let mesh: any = obj.children[i]
      if(mesh.name === 'Clouds_Cube.000') {
        mesh.material.map = cloudTexture
        mesh.material.blending = THREE.AdditiveBlending
        mesh.material.depthTest = false
      }
      if(mesh.name === 'Atmosphere_Cube.001') {
        mesh.material.map = atmosphereTexture
        mesh.material.blending = THREE.AdditiveBlending
      }
      if(mesh.name === 'Earth_Cube.002') {
        mesh.material.map = earthTexture
      }
    }
    obj.scale.set(10, 10, 10)
    scene.add(obj)
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