import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import GUI from "lil-gui";

// Debug
const gui = new GUI();
const debugObject = {};

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(-8, 4, 8);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 *  Controls
 */

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 1, 0);
controls.enableDamping = true;
// controls.enabled = false;

/**
 *  Models
 */

// Instantiate GLTF Loader
const gltfLoader = new GLTFLoader();

// Load a Room
gltfLoader.load("/models/wallsAndFloor.glb", (gltf) => {
  const room = gltf.scene.children[0];
  room.rotation.y = 5;
  scene.add(room);
});

// Models Array
let models = [];
console.log(models);

// Generating and Passing Random Coordinates for Models
function passingRandomPositions() {
  let x = (Math.random() - 0.5) * 6;
  let y = 1;
  let z = (Math.random() - 0.5) * 7;
  return { x, y, z };
}

// Create a Fridge
const fridgePath = "/models/fridge.glb";
debugObject.createFridge = () => {
  createModel(fridgePath, passingRandomPositions());
};
// Create a Fridge
const chairPath = "/models/chair.glb";
debugObject.createChair = () => {
  createModel(chairPath, passingRandomPositions());
};

// Define Create General Model Function
const createModel = (path, positions) => {
  // Load a Chair add it to the Scene
  gltfLoader.load(path, (gltf) => {
    const model = gltf.scene;
    model.position.copy(positions);
    scene.add(model);

    // Push Model to the Object's array
    models.push({
      model: model,
    });

    // Adding Transform Controls
    const transformControls = new TransformControls(
      camera,
      renderer.domElement
    );
    transformControls.addEventListener("change", () =>
      renderer.render(scene, camera)
    );
    transformControls.setSpace("local");
    scene.add(transformControls);
    transformControls.attach(model);

    // Checking if Dragging and Disable Orbit Controls
    transformControls.addEventListener("dragging-changed", function (event) {
      controls.enabled = !event.value;
    });
  });
};

// adding creation functions to the GUI buttons
gui.add(debugObject, "createFridge");
gui.add(debugObject, "createChair");

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();