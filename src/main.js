// BASIC IMPORTS REQUIRED FOR FUNCTIONING
import './style.css';
import * as THREE from 'three';

// material effects exports
import {IridescentMaterial} from './IridescentMaterial';
import {ThinFilmFresnelMap} from './ThinFilmFresnelMap';
 
// GLB/GLTF model loader import
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

//
// BASIC SCENE SETUP
//
const canvas = document.getElementById('background');

// normal scene
const scene = new THREE.Scene();
scene.position.set(-35, 0, -10);
scene.rotateY(1);
scene.background = null;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1001);

// outline scene
const outlineScene = new THREE.Scene();
outlineScene.background = null;
const outlineCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1001);

// camera group
const cameraGroup = new THREE.Group()
cameraGroup.position.set(0, 0, -5)
outlineScene.add(cameraGroup)
cameraGroup.add(outlineCamera)

outlineScene.add(scene)

const textureLoader = new THREE.TextureLoader();

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: "high-performance",
  alpha: true
});

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setY(-7);
outlineCamera.position.setZ(30);
outlineCamera.position.setY(-7);
      
const glbLoader = new GLTFLoader();

renderer.render(outlineScene, outlineCamera);
renderer.autoClear = false;
renderer.render(scene, camera);

// responsive resizing handler
function onWindowResize() {
  outlineCamera.aspect = window.innerWidth / window.innerHeight;
  outlineCamera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize, false);



//
// LIGHTS
//
// hexidecimal value in that pointlight
const topPointLight = new THREE.PointLight(0xff00ff, 1);
const bottomPointLight = new THREE.PointLight(0xccffcc, 1);
// position x y z away from center so that it actually lights the object
topPointLight.position.set(5, 10, 0);
bottomPointLight.position.set(-15, 5, 20);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(topPointLight, bottomPointLight, ambientLight);



//
// SKYBOX & IRIDESCENCE EFFECT
//
// Skybox (required for iridescence functioning)
const radiance = loadCubeMap("src/img/skybox/radiance");
const irradiance = loadCubeMap("src/img/skybox/irradiance");

function loadCubeMap(path) {
  const files = [
    path + "/posX.jpg",
    path + "/negX.jpg",
    path + "/posY.jpg",
    path + "/negY.jpg",
    path + "/posZ.jpg",
    path + "/negZ.jpg"
  ];

  const cubeLoader = new THREE.CubeTextureLoader();
  return cubeLoader.load(files);
}
// Iridescence
let iridescenceLookUp = new ThinFilmFresnelMap();
const iridescentMaterial = new IridescentMaterial(irradiance, radiance, iridescenceLookUp);
iridescenceLookUp.filmThickness = 576;
iridescenceLookUp.refractiveIndexFilm = 1.52;
iridescenceLookUp.refractiveIndexBase = 15;
iridescenceLookUp.boost = 5;


//
// FLOWER
//
glbLoader.load('src/models/daisy_flower.glb', (gltf) => {
  const flowerModel = gltf.scene;
  flowerModel.name = 'flower';
  flowerModel.position.set(-10, -32, 0);
  flowerModel.scale.set(2, 2, 2);
  flowerModel.rotation.set(0.3, 270, -0.2)
  outlineScene.add(flowerModel); 

  // material adjustments
  const flowerMaterial = flowerModel.getObjectByName('Object_9').material;

  flowerMaterial.color = { r: 1, g: 0, b: 1}
  flowerMaterial.map = undefined;

  flowerMaterial.emissive = {r: 0.80, g: 1, b: 0.85};
  flowerMaterial.emissiveMap = textureLoader.load('src/img/texture4.jpg');
  flowerMaterial.emissiveIntensity = 1;

  flowerMaterial.metalness = 1;
  flowerMaterial.roughness  = 0.25;
  flowerMaterial.reflectivity = 1;
  flowerMaterial.transmission = 1;
  flowerMaterial.iridescence = 1;
  flowerMaterial.attenuationColor = {r: 1, g: 0, b: 1};
  
  flowerMaterial.sheen = 1;
  flowerMaterial.sheenRoughness = 1;
  
}, undefined, function (error) {
console.error(error);
});


//
// SPLASHED LIQUID MODEL
//
glbLoader.load('src/models/splash.glb', (gltf) => {
  const liquidModel = gltf.scene;
  liquidModel.name = 'liquid';
  liquidModel.position.set(10, -17, -10);
  liquidModel.scale.set(10, 20, 40);
  liquidModel.rotation.set(0, -0.1, -0.5);
  scene.add(liquidModel); 
  

  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial;
  });
  
}, undefined, function (error) {
console.error(error);
});


const objectsDistance = 50;
const sectionMeshes = [];

//
// SMILE ICON
//
glbLoader.load('src/models/smile_icon.glb', (gltf) => {
  const smileModel = gltf.scene;
  smileModel.position.set(20, -9, 44);
  smileModel.rotateY(1.5)
  smileModel.scale.set(70, 70, 70);
  scene.add(smileModel); 

  let smallSmile = smileModel.clone();
  smallSmile.name = "smile";
  smallSmile.position.set(2, 22, -10);
  smallSmile.position.y -= objectsDistance * 1.2 * 5;
  scene.add(smallSmile)

  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial;
  });

  sectionMeshes.push(smallSmile);
  
}, undefined, function (error) {
console.error(error);
});

//
// EDUCATION ICON
//
glbLoader.load('src/models/education.glb', (gltf) => {
  const educationModel = gltf.scene;
  educationModel.name = "education";
  educationModel.position.set(2.5, -5, -10);
  educationModel.position.y -= objectsDistance * 1.5;
  educationModel.scale.set(8, 11, 8);
  educationModel.rotateX(0.3);
  scene.add(educationModel); 

  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial;
  });

  sectionMeshes.push(educationModel);
  
}, undefined, function (error) {
console.error(error);
});


//
// BRIEFCASE ICON
//
glbLoader.load('src/models/briefcase.glb', (gltf) => {
  const briefcaseModel = gltf.scene;
  briefcaseModel.name = "briefcase";
  briefcaseModel.position.set(2.5, -5, -10);
  briefcaseModel.position.y -= objectsDistance * 1.3 * 2;
  briefcaseModel.scale.set(4, 4.7, 4);
  scene.add(briefcaseModel); 

  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial;
  });

  sectionMeshes.push(briefcaseModel);
  
}, undefined, function (error) {
console.error(error);
});

//
// COG ICON
//
glbLoader.load('src/models/cog.glb', (gltf) => {
  const cogModel = gltf.scene;
  cogModel.name = "cog";
  cogModel.position.set(3, 5, -10);
  cogModel.position.y -= objectsDistance *1.2 * 3;
  cogModel.scale.set(6.5, 7, 6.5);
  cogModel.rotateX(1.5);
  scene.add(cogModel); 

  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial;
  });

  sectionMeshes.push(cogModel);
  
}, undefined, function (error) {
console.error(error);
});

//
// LAPTOP ICON
//
glbLoader.load('src/models/laptop.glb', (gltf) => {
  const laptopModel = gltf.scene;
  laptopModel.name = "laptop";
  laptopModel.position.set(5, 25, -10);
  laptopModel.position.y -= objectsDistance * 1.3 * 4;
  laptopModel.scale.set(0.2, 0.2, 0.2);
  laptopModel.rotateX(0.3);
  laptopModel.rotateY(0.2)
  scene.add(laptopModel); 

  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial
  });
  
  sectionMeshes.push(laptopModel);

}, undefined, function (error) {
console.error(error);
});




//
// STICKY MOUSE
//
const cursor = {};
cursor.x = 0;
cursor.y = 0;

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / window.innerWidth - 0.5;
  cursor.y = event.clientY / window.innerHeight - 0.5;
})

//
// SCROLL EVENT LISTENER
//
let scrollY = window.scrollY;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
})


// ANIMATION
let step = 0;
const speed = 0.004;

function animate() {
  requestAnimationFrame(animate);

  // icons rotation
  if (sectionMeshes.length >= 5) {
    step += speed;
    for(const mesh of sectionMeshes)
    {
      mesh.rotation.y = Math.sin(step * 15) * 0.2;
      if (mesh.name === 'laptop' || mesh.name === 'education')
        mesh.rotation.y = Math.sin(step * 15) * 0.07;
    }
  }

  // scroll parallax movement and rotations
  const liquidModel = scene.getObjectByName('liquid');
  if (liquidModel) {
    liquidModel.position.y = - scrollY / window.innerHeight * objectsDistance * 0.95 - 17;
    liquidModel.position.x = 0.002 * scrollY + 10;
    liquidModel.rotation.x = 0.00005 * scrollY;
    liquidModel.rotation.y = - 0.000085 * scrollY;
  }
  const flowerModel = outlineScene.getObjectByName('flower');
  if (flowerModel) {
    flowerModel.position.x = 0.0001 * scrollY - 10;
    flowerModel.position.y = - scrollY / window.innerHeight * objectsDistance * 1.004 - 28;
    flowerModel.position.z = - 0.0005 * scrollY;
    flowerModel.rotation.x = 0.00005 * scrollY + 0.3;
    flowerModel.rotation.y = - 0.00005 * scrollY - 0.1 + 270;
  }

  // sticky mouse parallax 
  const parallaxX = cursor.x;
  const parallaxY = - cursor.y;
  
  cameraGroup.position.x += (parallaxX - cameraGroup.position.x);
  cameraGroup.position.y += (parallaxY - cameraGroup.position.y);

  // Animate camera
  outlineCamera.position.y = -scrollY / window.innerHeight * objectsDistance - 7.3;

  renderer.render(outlineScene, outlineCamera);
}

animate();