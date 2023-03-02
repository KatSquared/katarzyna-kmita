// BASIC IMPORTS REQUIRED FOR FUNCTIONING
import './style.css';
import * as THREE from 'three';

// material effects exports
import {IridescentMaterial} from './IridescentMaterial';
import {SkyMaterial} from './SkyboxMaterial';
import {ThinFilmFresnelMap} from './ThinFilmFresnelMap';
 
// pass imports (filters)
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from './RenderPass';
import {ShaderPass} from './ShaderPass';
import {FXAAShader} from './FXAAShader';
import {SMAAPass} from 'three/examples/jsm/postprocessing/SMAAPass';
import {CustomOutlinePass} from './CustomOutlinePass';

// GLB/GLTF model loader import
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshBasicMaterial } from 'three';


//
// BASIC SCENE SETUP
//
const canvas = document.getElementById('background');

const scene = new THREE.Scene();
scene.position.set(-35, 0, -10);
scene.rotateY(1);
scene.background = null;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1001);

const outlineScene = new THREE.Scene();
outlineScene.position.set(0, 0, 5);
outlineScene.background = null;
const outlineCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1001);

outlineScene.add(scene)

const textureLoader = new THREE.TextureLoader();

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: "high-performance",
  alpha: true
});
renderer.setClearColor( 0x111100, 0 );

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
// OUTLINE EFFECT
//
// Set up post processing
const depthTexture = new THREE.DepthTexture();
const outlineRenderTarget = new THREE.WebGLRenderTarget(
  window.innerWidth,
  window.innerHeight,
  {
    depthTexture: depthTexture,
    depthBuffer: true,
  }
);
// Initial render pass
const outlineComposer = new EffectComposer(renderer, outlineRenderTarget);
const pass = new RenderPass(outlineScene, outlineCamera);
outlineComposer.addPass(pass);
// Outline pass
const customOutline = new CustomOutlinePass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  outlineScene,
  outlineCamera
);
outlineComposer.addPass(customOutline);
// Antialias pass
const effectFXAA = new ShaderPass(FXAAShader);
effectFXAA.uniforms["resolution"].value.set(
  1 / window.innerWidth,
  1 / window.innerHeight
  );
outlineComposer.addPass(effectFXAA);
// adjustments
const uniforms = customOutline.fsQuad.material.uniforms;
uniforms.outlineColor.value.set(0x999999);


//
// FLOWER
//
let mixer;
glbLoader.load('src/models/daisy_flower.glb', (gltf) => {
  const flowerModel = gltf.scene;
  flowerModel.position.set(0, -30, 5);
  flowerModel.scale.set(2, 2, 2);
  flowerModel.rotateY(270);
  flowerModel.rotateX(0.5);
  // outlineScene.add(flowerModel); 
  // animation
  mixer = new THREE.AnimationMixer(flowerModel);
  const clips = gltf.animations;
  const clip = THREE.AnimationClip.findByName(clips, 'Armature|Bloom');
  const action = mixer.clipAction(clip);
  action.play();
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
  liquidModel.position.set(10, -17, -10);
  liquidModel.scale.set(10, 20, 40);
  liquidModel.rotation.set(0, -0.1, -0.5)
  scene.add(liquidModel); 
  
  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial
  });
  
}, undefined, function (error) {
console.error(error);
});

//
// SMILE ICON
//
glbLoader.load('src/models/smile_icon.glb', (gltf) => {
  const smileModel = gltf.scene;
  smileModel.position.set(2, -3, -10);
  smileModel.scale.set(70, 70, 70);
  smileModel.name = "smile";
  scene.add(smileModel); 
  
  console.log(smileModel);

  scene.traverse(function(object) {
    if (object.material) 
      object.material = iridescentMaterial
  });
  
}, undefined, function (error) {
console.error(error);
});


// responsive resizing handler
function onWindowResize() {
  outlineCamera.aspect = window.innerWidth / window.innerHeight;
  outlineCamera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  outlineComposer.setSize(window.innerWidth, window.innerHeight);
  effectFXAA.setSize(window.innerWidth, window.innerHeight);
  customOutline.setSize(window.innerWidth, window.innerHeight);
  effectFXAA.uniforms["resolution"].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight
  );
}
window.addEventListener("resize", onWindowResize, false);


// ANIMATION
const clock = new THREE.Clock();
let step = 0;
const speed = 0.004;

function animate() {
  requestAnimationFrame(animate);

  if (mixer)
    mixer.update(clock.getDelta());

  const smileModel = scene.getObjectByName('smile');
  if (smileModel) {
    step += speed;
    smileModel.rotation.y = Math.sin(step * 10) * 0.4;
  }

  renderer.render(scene, camera);
  outlineComposer.render(outlineScene, outlineCamera);
}

animate()