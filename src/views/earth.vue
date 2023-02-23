<template>
  <div>
    <Transition>
      <div class="loading" v-if="loading">
        <div class="content">
          <div class="box">
            <div class="process" :style="{ width: `${process}%` }"></div>
          </div>
          <p>{{ `${process}%` }} Loading......</p>
        </div>
      </div>
    </Transition>
    <div id="canvas" ref="canvas"></div>
  </div>
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
import gsap from "gsap";
import { nextTick, ref } from "vue"
import { getAssetsFile } from "../utils"
import { Vector3 } from "three"

const canvas = ref<any>(null); // 画布
let scene: THREE.Scene; // 场景
let camera: THREE.PerspectiveCamera; // 相机
let renderer: THREE.WebGLRenderer; // 渲染器
let controls: any; // 控制器
let stats: any; // 性能监测器
let stars: THREE.Points; // 星空
const earthGroup: THREE.Group = new THREE.Group(); // 地球和大气层组合
let torus: THREE.Mesh; // 星轨圆环
let satellite: THREE.Group; // 卫星
const meshGroup: THREE.Group = new THREE.Group(); // 场景内除星空、灯光外所有内容的组合
const starCount: number = 10000; // 星星数量
const manager = new THREE.LoadingManager(); // 加载器管理器
const textureLoader: THREE.TextureLoader = new THREE.TextureLoader(manager); // 纹理加载器
const objLoader: OBJLoader = new OBJLoader(manager) // OBJ模型加载器
const mTLLoader: MTLLoader = new MTLLoader(manager) // MTL资源加载器
const process = ref<number>(0); // 加载进度
const loading = ref<boolean>(true); // 加载中
let composer: EffectComposer; // 效果合成器
let curve: THREE.CatmullRomCurve3; // 三维曲线
let progress = 0; // 运动路径初始位置
const velocity = 0.001 // 速度
const wareArr: THREE.Mesh[] = []
const lnglatData = [
  {
    lnglat: [[116.40, 39.91], [109.51, 18.25]],
    color: 'rgb(192, 44, 56)'
  },
  {
    lnglat: [[113.26, 23.13], [169.14, 67.74]],
    color: 'rgb(129, 60, 133)'
  },
  {
    lnglat: [[101.78, 36.54], [22.90, 51.23]],
    color: 'rgb(32, 161, 98)'
  },
  {
    lnglat: [[100.22, 26.72], [35.75, -6.17]],
    color: 'rgb(255, 20, 147)'
  },
  {
    lnglat: [[119.36, 26.13], [-56.89, -14.54]],
    color: 'rgb(255, 153, 0)'
  }
]

manager.onProgress = function(item, loaded, total) {
  let value = loaded / total * 100
  process.value = Math.ceil(value)

  if(value === 100) {
    setTimeout(() => {
      loading.value = false

      gsap.to(meshGroup.position, {
        z: 0,
        ease: "Power2.inOut",
        duration: 1,
      })
      // gsap.to(earthGroup.rotation, {
      //   y: 10,
      //   ease: "Power2.inOut",
      //   duration: 2,
      // })
    }, 1000)
  }
};

nextTick(() => {
  initScene();
  initCamera(canvas.value.clientWidth, canvas.value.clientHeight);
  initRenderer(canvas.value.clientWidth, canvas.value.clientHeight);
  initControls();
  render();
  initStats();
  // initAxesHelper();
  initLight();
  createStar();
  createEarth();
  createStarOrbit();
  createMoveTrack();
  createSatellite();
  drawPointOnEarth();

  meshGroup.position.set(0, 0, -100)
  scene.add(meshGroup)
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
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
  });
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
    depthTest: true,
    depthWrite: false,
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
  const cloudTexture: THREE.Texture = textureLoader.load(getAssetsFile("earth/earth_cloud.png"));
  const cloudMaterial: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  })
  const cloud: THREE.Mesh = new THREE.Mesh(cloudGeo, cloudMaterial)
  earthGroup.add(cloud)

  // earthGroup.rotation.set( 0.6, 3.0, 0.1 );

  meshGroup.add(earthGroup)
  scene.add(meshGroup)
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

  meshGroup.add(torus)
}

const createMoveTrack = (): void => {
  const length: number = 300, radius: number = 9, pointsArr: THREE.Vector3[] = [];
  for (let i = 0; i <= length; i++) {
    pointsArr.push(new THREE.Vector3(radius * Math.cos(Math.PI * 2 * i / length), radius * Math.sin(Math.PI * 2 * i / length), 0))
  }
  curve = new THREE.CatmullRomCurve3(pointsArr, true, 'catmullrom', 0.5);
  const points: THREE.Vector3[] = curve.getPoints(50);
	const lineGeo: THREE.BufferGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineMaterial: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({ transparent: true, opacity: 0 })
  const line = new THREE.Line(lineGeo, lineMaterial)
  line.rotation.set( 1.7, 0.5, 1 );

  const matrix = new THREE.Matrix4();
  matrix.makeRotationFromEuler(torus.rotation);

  for (let i = 0; i < curve.points.length; i++) {
    curve.points[i].applyMatrix4(matrix);
  }

  meshGroup.add(line)
}

const createSatellite = (): void => {
  mTLLoader.load(getAssetsFile('satellite/Satellite.mtl'), (material) => {
    material.preload()

    objLoader.setMaterials(material).load(getAssetsFile('satellite/Satellite.obj'), (obj) => {
      obj.position.copy(curve.points[0])
      satellite = obj
      meshGroup.add(satellite)
    })
  })
}

const lglnToxyz = (lg: number, lt: number, radius: number): THREE.Vector3 => {
  // 竖直面
  const theta = (90 + lg) * (Math.PI / 180)
  // 水平面
  const phi = (90 - lt) * (Math.PI / 180)
  // 球坐标
  const spherical = new THREE.Spherical(radius, phi, theta)
  // 三维向量
  const xyz = new THREE.Vector3()
  // 从球坐标中设置该向量
  xyz.setFromSpherical(spherical)

  return xyz
}

const createEarthPoint = (localton: THREE.Vector3, color: string): THREE.Group => {
  const pointGroup: THREE.Group = new THREE.Group();

  const waveGeo: THREE.PlaneGeometry = new THREE.PlaneGeometry( 0.3, 0.3 );
  const waveTexture: THREE.Texture = textureLoader.load(getAssetsFile("wave.png"));
  const waveMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
    map: waveTexture,
    color: color,
    transparent: true,
    opacity: 1.0,
    side: THREE.DoubleSide,
    depthWrite: false,
  })
  let waveMesh: THREE.Mesh = new THREE.Mesh(waveGeo, waveMaterial);
  (waveMesh as any).size = 5.1 * 0.3;
  (waveMesh as any)._s = Math.random() * 1.0 + 1.0;

  wareArr.push(waveMesh)

  const lightGeo: THREE.CylinderGeometry = new THREE.CylinderGeometry(0, 0.05, 0.5, 32)
  const lightTexture: THREE.Texture = textureLoader.load(getAssetsFile("lightray.png"))
  const lightMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
    map: lightTexture,
    color: color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.0,
    depthWrite: false,
  })
  const lightMesh: THREE.Mesh = new THREE.Mesh(lightGeo, lightMaterial)
  lightMesh.rotateX(Math.PI / 2)
  lightMesh.position.z = 0.25
  

  pointGroup.add(waveMesh, lightMesh)

  pointGroup.position.set(localton.x, localton.y, localton.z)
  const coordVec3 = new THREE.Vector3( localton.x, localton.y, localton.z ).normalize();
  const meshNormal = new THREE.Vector3( 0, 0, 1 );
  pointGroup.quaternion.setFromUnitVectors( meshNormal, coordVec3 );

  return pointGroup
}

const drawPointOnEarth = (): void => {
  const localtionGroup: THREE.Group = new THREE.Group();
  for(let i  = 0; i < lnglatData.length; i++) {
    lnglatData[i].lnglat.forEach((lnglat: number[]) => {
      const xyz = lglnToxyz(lnglat[0], lnglat[1], 5.1)
      localtionGroup.add(createEarthPoint(xyz, lnglatData[i].color))
    })

    const from = lglnToxyz(lnglatData[i].lnglat[0][0], lnglatData[i].lnglat[0][1], 5.1)
    const to = lglnToxyz(lnglatData[i].lnglat[1][0], lnglatData[i].lnglat[1][1], 5.1)
    createRayLine(from, to)
  }
  scene.add(localtionGroup)
}

const createRayLine = (v0: THREE.Vector3, v3: THREE.Vector3): void => {
  // v0.angleTo(v3)计算v0和v3之间的夹角，单位为弧度，(弧度 * 180) / Math.PI 将弧度转化为角度，单位为度
  const angle: number = (v0.angleTo(v3) * 180) / Math.PI;
  const horizontal: number = angle * 2.5; // 计算控制点的水平距离，将夹角 * 常数(这个常数是个经验值，根据实际情况调整，它的作用是控制曲线的弯曲程度)
  const vertical: number = angle * angle * 50; // 计算了控制点的垂直距离，将夹角的平方 * 常数(这个常数是个经验值，根据实际情况调整，它的作用是控制曲线的高度)
  const p0: THREE.Vector3 = new THREE.Vector3(0, 0, 0); // 法线向量，球心
  const centerPoint: THREE.Vector3 = v0.add(v3).divideScalar(2); // 计算起始点到终止点两点间的中间点，即两向量的平均值
  const rayLine: THREE.Ray = new THREE.Ray(p0, centerPoint); // 用于检测是否与球体相交
  let vtop = new THREE.Vector3();
  vtop.lerpVectors(p0, rayLine.at(1, new THREE.Vector3()), vertical / rayLine.at(1, new THREE.Vector3()).distanceTo(p0));

  let v1 = getLenVcetor(v0.clone(), vtop, horizontal);      
  let v2 = getLenVcetor(v3.clone(), vtop, horizontal);  

  const curve: THREE.CubicBezierCurve3 = new THREE.CubicBezierCurve3( v0, v1, v2, v3 );
  const points: THREE.Vector3[] = curve.getSpacedPoints( 100 );
  const lineGeo: THREE.BufferGeometry = new THREE.BufferGeometry().setFromPoints(points)
  const lineMaterial = new THREE.LineBasicMaterial( {
    color: 0xffffff,
    linewidth: 1,
  });
  const line: THREE.Line = new THREE.Line(lineGeo, lineMaterial)
  scene.add(line)
}

const getLenVcetor = (v1: THREE.Vector3, v2: THREE.Vector3, len: number) => {   
    let v1v2Len = v1.distanceTo(v2);   
    return v1.lerp(v2, len / v1v2Len);
}

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

  // earthGroup && (earthGroup.rotation.y += 0.001)

  if(satellite) {
    if (progress <= 1 - velocity) {
      const satelliteMovePosition  = curve.getPointAt(progress + velocity)
      progress += velocity
      satellite.position.copy(satelliteMovePosition)
    } else {
      progress = 0
    }
  }

  // 涟漪动画
  if(wareArr.length) {
    wareArr.forEach((ware: any) => {
      ware._s += 0.01;
      ware.scale.set( ware.size * ware._s, ware.size * ware._s, ware.size * ware._s );
      if (ware._s <= 1.5) {
        //mesh._s=1，透明度=0 mesh._s=1.5，透明度=1
        ware.material.opacity = ( ware._s - 1 ) * 2;
      } else if (ware._s > 1.5 && ware._s <= 2) {
        //mesh._s=1.5，透明度=1 mesh._s=2，透明度=0
        ware.material.opacity = 1 - ( ware._s - 1.5 ) * 2;
      } else {
        ware._s = 1.0;
      }
    })
  }

  requestAnimationFrame(render);
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
  // 更新效果合成器
  composer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
});
</script>

<style lang="less" scoped>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>