// BASIC IMPORTS REQUIRED FOR FUNCTIONING
import './style.css';
import * as THREE from 'three';

// material effects exports
import {IridescentMaterial} from './IridescentMaterial';
import {ThinFilmFresnelMap} from './ThinFilmFresnelMap';
 
// GLB/GLTF model loader import
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

// GSAP IMPORTS
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

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

  let flowerModel = outlineScene.getObjectByName('flower');
  if (flowerModel) {
      if (window.innerWidth <= 1700) {
        outlineScene.remove(flowerModel);
      }
  }

  if (sectionMeshes.length >= 4) {
    for(const mesh of sectionMeshes) {
      if (window.innerWidth <= 1200)
        scene.remove(mesh);
      if (window.innerWidth <= 1500 && window.innerWidth > 1200) {
        mesh.position.x = 15;
        mesh.position.z = 0;
      }
      if (window.innerWidth <= 1700 && window.innerWidth > 1500) {
        mesh.position.x = 8;
        mesh.position.z = -7;
      }
      if (window.innerWidth > 1700) {
        mesh.position.x = 7;
        mesh.position.z = -10;
      }
    }
  }
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
// only loading the flower for the desktop version 
if (window.innerWidth > 1700) {
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
}


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

const sectionMeshes = [];
const objectsDistance = 50;

// only loading icons for the desktop & tablet version 
if (window.innerWidth > 1200) {
  //
  // SMILE ICON
  //
  glbLoader.load('src/models/smile_icon.glb', (gltf) => {
    const smileModel = gltf.scene;
    smileModel.position.set(20, -9, 44);
    smileModel.rotateY(1.5)
    smileModel.scale.set(70, 70, 70);
    // only adding the big smile for the desktop & tablet version 
    if (window.innerWidth > 900) 
      scene.add(smileModel); 

    let smallSmile = smileModel.clone();
    smallSmile.name = "smile";
    smallSmile.position.set(4, -10, -10);
    smallSmile.scale.set(72, 72, 72);
    if (window.innerWidth <= 1500 && window.innerWidth > 1200) {
      smallSmile.position.x = 15;
      smallSmile.position.y = -4;
      smallSmile.position.z = 0;
    }
    if (window.innerWidth <= 1700 && window.innerWidth > 1500) {
      smallSmile.position.x = 8;
      smallSmile.position.y = -5;
      smallSmile.position.z = -7;
    }
    smallSmile.rotateY(1.5)
    smallSmile.position.y -= objectsDistance * 6;
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
    educationModel.position.set(4, -13, -10);
    if (window.innerWidth <= 1500 && window.innerWidth > 1200) {
      educationModel.position.x = 15;
      educationModel.position.y = -10;
      educationModel.position.z = 0;
    }
    if (window.innerWidth <= 1700 && window.innerWidth > 1500) {
      educationModel.position.x = 8;
      educationModel.position.y = -12;
      educationModel.position.z = -7;
    }
    educationModel.position.y -= objectsDistance;
    educationModel.scale.set(8.5, 11, 8.5);
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
  // LAPTOP ICON
  //
  glbLoader.load('src/models/laptop.glb', (gltf) => {
    const laptopModel = gltf.scene;
    laptopModel.name = "laptop";
    laptopModel.position.set(4, -15, -10);
    if (window.innerWidth <= 1500 && window.innerWidth > 1200) {
      laptopModel.position.x = 17;
      laptopModel.position.y = -15;
      laptopModel.position.z = 0;
    }
    if (window.innerWidth <= 1700 && window.innerWidth > 1500) {
      laptopModel.position.x = 10;
      laptopModel.position.y = -13;
      laptopModel.position.z = -7;
    }
    laptopModel.position.y -= objectsDistance * 2;
    laptopModel.scale.set(0.18, 0.18, 0.18);
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
}
  //
  // COG ICON
  //
  glbLoader.load('src/models/cog.glb', (gltf) => {
    const cogModel = gltf.scene;
    cogModel.name = "cog";
    cogModel.position.set(4, -10, -10);
    if (window.innerWidth <= 1500 && window.innerWidth > 1200) {
      cogModel.position.x = 15;
      cogModel.position.y = -6;
      cogModel.position.z = 0;
    }
    if (window.innerWidth <= 1700 && window.innerWidth > 1500) {
      cogModel.position.x = 8;
      cogModel.position.y = -8;
      cogModel.position.z = -7;
    }
    cogModel.position.y -= objectsDistance * 3;
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
let currentSection = 0;
let currentMesh;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    let previousSection;

    const newSection = Math.round(scrollY / window.innerHeight);
    
    if (newSection != currentSection) {
        previousSection = currentSection;
        let previousMesh;

        currentSection = newSection;

        console.log('changed', currentSection)

        if (sectionMeshes.length >= 4 && window.innerWidth > 1200) {
          switch (currentSection) {
            case 1:
              currentMesh = scene.getObjectByName('education');
              break;

            case 2:
              currentMesh = scene.getObjectByName('laptop');
              break;

            case 3:
                currentMesh = scene.getObjectByName('cog');
                break;

            case 6:
              currentMesh = scene.getObjectByName('smile');
              break;
              
            default:
              break;
          }

          switch (previousSection) {
            case 1:
              previousMesh = scene.getObjectByName('education');
              break;

            case 2:
              previousMesh = scene.getObjectByName('laptop');
              break;

            case 3:
              previousMesh = scene.getObjectByName('cog');
                break;

            case 6:
              previousMesh = scene.getObjectByName('smile');
              break;
              
            default:
              break;
          }

          if (currentMesh) {
            gsap.to(
                currentMesh.position,
                {
                    duration: 0.5,
                    ease: 'power2.inOut',
                    y: '+=10', 
                }
            )
          }

          if (previousMesh) {
            gsap.to(
                previousMesh.position,
                {
                    duration: 1.5,
                    ease: 'power2.inOut',
                    y: '-=10', 
                }
            )
          }
        }
      }
})

// ANIMATION
let step = 0;
const speed = 0.004;

function animate() {
  requestAnimationFrame(animate);

  // icons rotation
  if (currentMesh && sectionMeshes.length >= 4 && window.innerWidth > 1200) {
    step += speed;

    if (currentMesh.name === 'laptop' || currentMesh.name === 'smile')
      currentMesh.rotation.y = Math.sin(step * 15) * 0.07;
    if (currentMesh.name === 'education' || currentMesh.name === 'cog')
      currentMesh.rotation.y =+ step * 1.5;
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
  if (window.innerWidth > 900) {
    const parallaxX = cursor.x;
    const parallaxY = - cursor.y;
    
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x);
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y);
  }

  // Animate camera
  outlineCamera.position.y = -scrollY / window.innerHeight * objectsDistance - 7.3;

  renderer.render(outlineScene, outlineCamera);
}

animate();