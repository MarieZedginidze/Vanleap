import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
let scene = new THREE.Scene();

/**
 * Overlay
 */
const overlayGeometry = new THREE.PlaneGeometry(2, 1.55, 1, 1);
const overlayMaterial = new THREE.ShaderMaterial({
  transparent: true,
  vertexShader: `
      void main()
      {
          gl_Position = vec4(position, 1.0);
      }
  `,
  fragmentShader: `
  uniform float uAlpha;
      void main()
      {
        gl_FragColor = vec4(1.0, 1.0, 1.0, uAlpha);
      }
  `,
  uniforms: {
    uAlpha: { value: 1 },
  },
});
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
scene.add(overlay);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.set(2, 2, 2);
scene.add(light);

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
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  preserveDrawingBuffer: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xffffff, 1);
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

/**
 *  Controls
 */
// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 1, 0);
controls.enableDamping = true;

controls.minDistance = 8;
controls.maxDistance = 20;

// Changed how far you can orbit vertically, upper and lower limits.
controls.minPolarAngle = 0; // radians
controls.maxPolarAngle = 1.3; // radians

// controls.enabled = false;

// Transform Controls
const transformControls = new TransformControls(camera, renderer.domElement);
transformControls.setSize(0.8, 0.8, 0.8);
scene.add(transformControls);

/**
 *  Loader
 */
let loadingTextSection = document.querySelector(".loading-text");
let retrieviedVanSize = JSON.parse(localStorage.getItem("carType"));
if (retrieviedVanSize === "Ford Transit") {
  loadingTextSection.textContent = "Mercedes Benz L2H2";
} else {
  loadingTextSection.textContent = "Mercedes Benz L3H3";
}
const loadingManager = new THREE.LoadingManager(
  // Loaded
  () => {
    gsap.to(overlayMaterial.uniforms.uAlpha, {
      duration: 3,
      value: 0,
      delay: 1,
    });

    loadingTextSection.classList.add("ended");
  },

  // Progress
  () => {}
);

const gltfLoader = new GLTFLoader(loadingManager);

// Generating and Passing Coordinates for Models
function passingPositions() {
  let x = -0.5;
  let y = 0.8;
  let z = 0;
  return { x, y, z };
}

/**
 * Create Models UI
 */
// Load and Pass a Cabinet Model
const cupboardPath = "/models/cabinet.glb";
let cupboard = document.querySelector(".cabinet");

cupboard.addEventListener("click", () => {
  createModel(cupboardPath, passingPositions());
});

// Load and Pass a Cabinet with Basin Model
const CabinetWithBasinPath = "/models/cabinetWithBasin.glb";
let CabinetWithBasin = document.querySelector(".cabinet-with-basin");

CabinetWithBasin.addEventListener("click", () => {
  createModel(CabinetWithBasinPath, passingPositions());
});

// Load and Pass a Drawers Model
const drawersPath = "/models/drawers.glb";
let drawers = document.querySelector(".drawers");
drawers.addEventListener("click", () => {
  createModel(drawersPath, passingPositions());
});

// Load and Pass a glass Door Cabinet Model
const glassDoorCabinetPath = "/models/glassDoorCabinet.glb";
let glassDoorCabinet = document.querySelector(".glassDoorCabinet");
glassDoorCabinet.addEventListener("click", () => {
  createModel(glassDoorCabinetPath, passingPositions());
});

// Load and Pass a smaller Upper Cabinet Model
const smallerUpperCabinetPath = "/models/smallerUpperCabinet.glb";
let smallerUpperCabinet = document.querySelector(".smallerUpperCabinet");
smallerUpperCabinet.addEventListener("click", () => {
  createModel(smallerUpperCabinetPath, passingPositions());
});

// Load and Pass a smaller Shower Base Model
const showerCabinPath = "/models/showerCabin.glb";
let showerCabin = document.querySelector(".showerCabin");
showerCabin.addEventListener("click", () => {
  createModel(showerCabinPath, passingPositions());
});

// Load and Pass a toilet Model
const toiletPath = "/models/toilet.glb";
let toilet = document.querySelector(".toilet");
toilet.addEventListener("click", () => {
  createModel(toiletPath, passingPositions());
});

// Load and Pass a bed Model
const doubleBedPath = "/models/doubleBed.glb";
let doubleBed = document.querySelector(".doubleBed");
doubleBed.addEventListener("click", () => {
  createModel(doubleBedPath, passingPositions());
});
// Load and Pass a Sofa Model
const sofaPath = "/models/sofa.glb";
let sofa = document.querySelector(".sofa");
sofa.addEventListener("click", () => {
  createModel(sofaPath, passingPositions());
});

// Load and Pass a Armchair Model
const armchairPath = "/models/armchair.glb";
let armchair = document.querySelector(".armchair");
armchair.addEventListener("click", () => {
  createModel(armchairPath, passingPositions());
});
// Load and Pass a Table Model
const tablePath = "/models/table.glb";
let table = document.querySelector(".table");
table.addEventListener("click", () => {
  createModel(tablePath, passingPositions());
});
// Load and Pass a chair Model
const chairPath = "/models/chair.glb";
let chair = document.querySelector(".chair");
chair.addEventListener("click", () => {
  createModel(chairPath, passingPositions());
});
// Load and Pass a Fridge Model
const fridgePath = "/models/fridge.glb";
let fridge = document.querySelector(".fridge");
fridge.addEventListener("click", () => {
  createModel(fridgePath, passingPositions());
});
// Load and Pass a Cooker Model
const cookerPath = "/models/cooker.glb";
let cooker = document.querySelector(".cooker");
cooker.addEventListener("click", () => {
  createModel(cookerPath, passingPositions());
});
// Load and Pass a Cube Model
const cubePath = "/models/cube.glb";
let cube = document.querySelector(".cube");
cube.addEventListener("click", () => {
  createModel(cubePath, passingPositions());
});
// Load and Pass a Sphere Model
const spherePath = "/models/sphere.glb";
let sphere = document.querySelector(".sphere");
sphere.addEventListener("click", () => {
  createModel(spherePath, passingPositions());
});

let models = [];
// Define General Create Model Function
const createModel = (path, positions) => {
  // Load a Model, Add it to the Scene and to the Models' array
  gltfLoader.load(path, (gltf) => {
    let model = gltf.scene;
    model.position.copy(positions);
    transformControls.attach(model);
    models.push({ model });
    scene.add(model);
  });
};

/**
 *  Vans
 */

let van;

let backPlane;
let floorPlane;
let truckPlane;
let sidePlane;
let topPlane;
let frontPlane;

let backPlanebbox;
let floorPlanebbox;
let truckPlanebbox;
let sidePlanebbox;
let topPlanebbox;
let frontPlanebbox;

// Load Van Depending on the Questionary Results
let vanType;

let retrievedVanType = JSON.parse(localStorage.getItem("carType"));
if (retrievedVanType === "Ford Transit") {
  vanType = "Ford Transit";
  gltfLoader.load("/models/l2h2.glb", (gltf) => {
    van = gltf.scene;

    backPlane = van.getObjectByName("backPlane");
    floorPlane = van.getObjectByName("floorPlane");
    truckPlane = van.getObjectByName("truckPlane");
    sidePlane = van.getObjectByName("sidePlane");
    topPlane = van.getObjectByName("topPlane");
    frontPlane = van.getObjectByName("frontPlane");

    backPlane.visible = false;
    floorPlane.visible = false;
    truckPlane.visible = false;
    sidePlane.visible = false;
    topPlane.visible = false;
    frontPlane.visible = false;
    scene.position.set(0, -0.3, 0);
    scene.add(van);
  });
}
if (retrievedVanType === "Mercedes Benz") {
  gltfLoader.load("/models/l3h3.glb", (gltf) => {
    vanType = "Mercedes Benz";
    van = gltf.scene;
    backPlane = van.getObjectByName("backPlane");
    floorPlane = van.getObjectByName("floorPlane");
    truckPlane = van.getObjectByName("truckPlane");
    sidePlane = van.getObjectByName("sidePlane");
    topPlane = van.getObjectByName("topPlane");
    frontPlane = van.getObjectByName("frontPlane");

    backPlane.visible = false;
    floorPlane.visible = false;
    truckPlane.visible = false;
    sidePlane.visible = false;
    topPlane.visible = false;
    frontPlane.visible = false;
    scene.position.set(0, -0.3, 0);
    scene.add(van);
  });
}

/**
 * Toggle Items Menu
 */
let kitchenAppliances = document.querySelector(".kitchen-appliances");
let bathroomAppliances = document.querySelector(".bathroom-appliances");
let furniture = document.querySelector(".furniture");
let kitchenItems = document.querySelector(".kitchen-items");
let shapes = document.querySelector(".shapes");
let menuButtons = document.querySelectorAll(".menu-buttons");

for (const menuButton of menuButtons) {
  menuButton.addEventListener("click", toggleMenu);
}

function toggleMenu(e) {
  if (e.target.id === "kitchen-menu-btn") {
    if (kitchenAppliances.style.display == "block") {
      kitchenAppliances.style.display = "none";
    } else {
      kitchenAppliances.style.display = "block";
      bathroomAppliances.style.display = "none";
      furniture.style.display = "none";
      kitchenItems.style.display = "none";
      shapes.style.display = "none";
    }
  }
  if (e.target.id === "bathroom-menu-btn") {
    if (bathroomAppliances.style.display == "block") {
      bathroomAppliances.style.display = "none";
    } else {
      bathroomAppliances.style.display = "block";
      kitchenAppliances.style.display = "none";
      furniture.style.display = "none";
      kitchenItems.style.display = "none";
      shapes.style.display = "none";
    }
  }
  if (e.target.id === "furniture-menu-btn") {
    if (furniture.style.display == "block") {
      furniture.style.display = "none";
    } else {
      furniture.style.display = "block";
      kitchenAppliances.style.display = "none";
      bathroomAppliances.style.display = "none";
      kitchenItems.style.display = "none";
      shapes.style.display = "none";
    }
  }
  if (e.target.id === "kitchen-items-menu-btn") {
    if (kitchenItems.style.display == "block") {
      kitchenItems.style.display = "none";
    } else {
      kitchenItems.style.display = "block";
      kitchenAppliances.style.display = "none";
      bathroomAppliances.style.display = "none";
      furniture.style.display = "none";
      shapes.style.display = "none";
    }
  }
  if (e.target.id === "shape-menu-btn") {
    if (shapes.style.display == "block") {
      shapes.style.display = "none";
    } else {
      shapes.style.display = "block";
      kitchenAppliances.style.display = "none";
      bathroomAppliances.style.display = "none";
      furniture.style.display = "none";
      kitchenItems.style.display = "none";
    }
  }
}
/**
 *  Track Mouse Events
 */
let mousedownCoords = new THREE.Vector2();
let mouseupCoords = new THREE.Vector2();

function mousedown(event) {
  // calculate Pointer Position in Normalized Device Coordinates (-1 to +1) for Both Components
  mousedownCoords.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousedownCoords.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function mouseup(event) {
  mouseupCoords.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseupCoords.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // Check if mousedown coordinates are different from mouse up coordinates
  if (
    mousedownCoords.x === mouseupCoords.x &&
    mousedownCoords.y === mouseupCoords.y
  ) {
    attachControls(mousedownCoords);
  }
}

canvas.addEventListener("mousedown", mousedown);
canvas.addEventListener("mouseup", mouseup);

/**
 * Track Key Down and Interaction Icons Events
 */
// Change Transform Control Modes with Shortcut Keys
function setShotrCutKey(event) {
  switch (event.keyCode) {
    case 87: // W = translate
      transformControls.setMode("translate");
      break;
    case 69: // E = rotate
      transformControls.setMode("rotate");
      break;
    case 82: // R = scale
      transformControls.setMode("scale");
      break;
  }
}
window.addEventListener("keydown", setShotrCutKey, true);

let interactionIcons = document.querySelectorAll(".interaction-icon-button");
function changeTransformMode(e) {
  if (e.target.id === "move-btn") {
    transformControls.mode = "translate";
  }
  if (e.target.id === "rotate-btn") {
    transformControls.mode = "rotate";
  }
  if (e.target.id === "scale-btn") {
    transformControls.mode = "scale";
  }
}
for (const interactionIcon of interactionIcons) {
  interactionIcon.addEventListener("click", changeTransformMode);
}

/**
 * Display and Close the Info Sidebar
 */
let lengthInfo = document.getElementById("info-length");
let heightInfo = document.getElementById("info-height");
let widthInfo = document.getElementById("info-width");

let infoSidebar = document.querySelector(".info-sidebar");

function displaySidebar(modelName) {
  if (modelName.indexOf("cabinet") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/contributions/cabinet.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("cabinetWithBasin") > -1) {
    document.getElementById("model-image").src =
      "  https://www.sweethome3d.com/models/contributions/cabinetWithBasin.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("drawers") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/contributions/drawers.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("glassDoorCabinet") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/contributions/glassdoorCabinet.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("smallerUpperCabinet") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/contributions/upperCabinet.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("water") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/lucapresidente/water.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("showerCabin") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/scopia/shower-cabin-with-seat.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("doubleBed") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/bed.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }

  if (modelName.indexOf("sofa") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/scopia/rattanSofa.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("armchair") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/scopia/rattanArmchair.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("table") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/lucapresidente/raccordo80W.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("chair") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/scopia/chair.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }

  if (modelName.indexOf("cooker") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/blendswap-cc-by/largeStove.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName.indexOf("fridge") > -1) {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/fridge.png";
    document.querySelector(".info-sidebar").style.display = "block";
  }
  if (modelName === "Cube") {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/box.png";
  }
  if (modelName === "Sphere") {
    document.getElementById("model-image").src =
      "https://www.sweethome3d.com/models/contributions/sphere.png";
  }

  infoSidebar.style.display = "block";
}

// Close the Info Sidebar
let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  infoSidebar.style.display = "none";
});

// Get Model from the attachControls Function
let modelFromIntersection;

function toggleDeleteBtn(model) {
  if (model) {
    // If there is an intersecting model, enable the button
    deleteBtn.classList.remove("disabled");
  } else {
    // If there is no intersecting model, disable the button
    deleteBtn.classList.add("disabled");
  }
}

/**
 * Delete the Model
 */
let deleteBtn = document.getElementById("delete-btn");
function deleteModel() {
  if (modelFromIntersection) {
    let uuid = modelFromIntersection.uuid;
    const newData = models.splice(models.indexOf(uuid), 1);
    console.log(newData);
    localStorage.setItem("localModels", JSON.stringify(newData));

    while (modelFromIntersection.children.length > 0) {
      modelFromIntersection.remove(modelFromIntersection.children[0]);
    }

    // remove model from the scene
    transformControls.detach(modelFromIntersection);
    // Hide info Sidebar
    infoSidebar.style.display = "none";
  }
}
deleteBtn.addEventListener("click", deleteModel);

// Display Sizes of the Models into the Info Sidebar Inputs
let modelBoundingBox;
let modelSize;

function displayModelSizes(model) {
  if (model) {
    modelBoundingBox = new THREE.Box3().setFromObject(model);
    modelSize = modelBoundingBox.getSize(new THREE.Vector3());
    lengthInfo.textContent =
      "Length in meters: " +
      Math.round((modelSize.x + Number.EPSILON) * 100) / 100;
    heightInfo.textContent =
      "Height in meters: " +
      Math.round((modelSize.y + Number.EPSILON) * 100) / 100;
    widthInfo.textContent =
      "Width in meters: " +
      Math.round((modelSize.z + Number.EPSILON) * 100) / 100;
  }
}

/*
 * Check For Intersecting Models and Toggle Transform Controls
 */
let raycaster = new THREE.Raycaster();

function attachControls(pointer) {
  let modelsArray = [];
  let firstObject;

  // Update the Picking Ray with the Camera and Pointer Position
  raycaster.setFromCamera(pointer, camera);
  // If there is only one model, only check for a single model
  if (models.length === 1) {
    for (const modelGroup of models) {
      let intersectModel = raycaster.intersectObject(modelGroup.model);
      // If we have intersected model, attach controls, if not- detach
      if (intersectModel.length) {
        let intersectedObject = intersectModel[0].object.parent;
        transformControls.attach(intersectedObject);

        // Check Model's Names and Send it to the Sidebar Function
        displaySidebar(intersectModel[0].object.name);
        toggleDeleteBtn(intersectModel[0].object);
        displayModelSizes(intersectedObject);
        modelFromIntersection = intersectedObject;

        //Get Bounding Boxes to Restrict the Movement
        modelBoundingBox = new THREE.Box3().setFromObject(modelGroup.model);
        modelSize = modelBoundingBox.getSize(new THREE.Vector3());
      } else {
        transformControls.detach();
        toggleDeleteBtn(undefined);
      }
    }
  }
  // If we have more than one model in the scene, push models' group directly to the modelsArray
  if (models.length > 1) {
    for (let i = 0; i < models.length; i++) {
      modelsArray.push(models[i].model);
    }
    let intersectModels = raycaster.intersectObjects(modelsArray);
    // If we have intersected models, check for the first face and take its parent and attach controls to it,
    // if we don't have any intersections, remove controls
    if (intersectModels.length) {
      firstObject = intersectModels[0].object.parent;
      transformControls.attach(firstObject);
      // Check Model's Names and Send it to the Sidebar Function
      displaySidebar(firstObject.children[0].name);
      toggleDeleteBtn(firstObject.children[0]);
      displayModelSizes(firstObject);
      modelFromIntersection = firstObject;
    } else {
      transformControls.detach();
      toggleDeleteBtn(undefined);
    }
  }
}
/**
 * update Model Sizes
 *
 */
function updateModelSizes() {
  backPlanebbox = new THREE.Box3().setFromObject(backPlane);
  floorPlanebbox = new THREE.Box3().setFromObject(floorPlane);
  truckPlanebbox = new THREE.Box3().setFromObject(truckPlane);
  sidePlanebbox = new THREE.Box3().setFromObject(sidePlane);
  topPlanebbox = new THREE.Box3().setFromObject(topPlane);
  frontPlanebbox = new THREE.Box3().setFromObject(topPlane);

  for (const modelGroup of models) {
    let model = modelGroup.model;
    let modelBoundingBox = new THREE.Box3().setFromObject(model);
    let modelSize = modelBoundingBox.getSize(new THREE.Vector3());

    // restricting movement on the x axis with black plane
    if (transformControls.mode === "translate") {
      if (modelBoundingBox.min.x < backPlanebbox.min.x) {
        model.position.x = backPlane.position.x + modelSize.x / 2.3;
      }
      // restricting movement on the y axis with top plane
      if (modelBoundingBox.max.y > topPlanebbox.max.y) {
        model.position.y = topPlane.position.y - modelSize.y / 2;
      }
      // // restricting movement on the z axis with side plane
      if (modelBoundingBox.min.z < sidePlanebbox.min.z) {
        -(model.position.z = sidePlane.position.z + modelSize.z / 4);
      }
      // restricting movement on the x axis with truck plane
      if (modelBoundingBox.max.x > truckPlanebbox.max.x) {
        model.position.x = truckPlane.position.x - modelSize.x / 3;
      }
      // restricting movement on the y axis with floor plane
      if (modelBoundingBox.min.y < floorPlanebbox.min.y) {
        model.position.y = floorPlane.position.y + modelSize.y / 2;
      }
      // restricting movement on the y axis with floor plane
      if (modelBoundingBox.max.z > frontPlanebbox.max.z + 3) {
        model.position.z = frontPlane.position.z - modelSize.z / 2;
      }
    }
    displayModelSizes(model);
  }
}

transformControls.addEventListener("change", updateModelSizes);

// check if user drags and disable orbit controls
transformControls.addEventListener("dragging-changed", (event) => {
  controls.enabled = !event.value;
});

/**
 * Database
 */

// Saving and Loading the Camera's Position and Location Seperately
function saveCameraLocation() {
  localStorage.setItem("camera.position.x", camera.position.x);
  localStorage.setItem("camera.position.y", camera.position.y);
  localStorage.setItem("camera.position.z", camera.position.z);

  localStorage.setItem("camera.rotation.x", camera.rotation.x);
  localStorage.setItem("camera.rotation.y", camera.rotation.y);
  localStorage.setItem("camera.rotation.z", camera.rotation.z);
}
function loadCameraLocation() {
  camera.position.x = parseFloat(localStorage.getItem("camera.position.x"));
  camera.position.y = parseFloat(localStorage.getItem("camera.position.y"));
  camera.position.z = parseFloat(localStorage.getItem("camera.position.z"));

  camera.rotation.x = parseFloat(localStorage.getItem("camera.rotation.x"));
  camera.rotation.y = parseFloat(localStorage.getItem("camera.rotation.y"));
  camera.rotation.z = parseFloat(localStorage.getItem("camera.rotation.z"));
}

// Save the Models and the Scene to the Localstorage
function saveScene() {
  saveCameraLocation();
  localStorage.setItem("localModels", JSON.stringify(models));

  // Save the whole scene
  let result = scene.toJSON();
  localStorage.savedScene = JSON.stringify(result);
}

// Load the Scene from Localstorage
function loadScene() {
  let loader = new THREE.ObjectLoader();

  let retrievedModels = JSON.parse(localStorage.getItem("localModels"));
  for (const modelGroup of retrievedModels) {
    loader.parse(modelGroup.model, function (e) {
      models.push({ model: e });
      scene.add(e);
    });
  }

  // parsing the whole scene
  let parsedScene = JSON.parse(localStorage.savedScene);
  loader.parse(parsedScene, function (e) {});
  loadCameraLocation();
}
// Save scene models to the localstorage under the existingModels array
let savingBtn = document.getElementById("save-btn");
savingBtn.addEventListener("click", saveScene);
// Add the models from the Locastorage existingModels array to the Scene
window.addEventListener("load", loadScene);

// Clear the Localstorage and the Models in the Scene
function resetScene() {
  localStorage.clear();
  localStorage.setItem("carType", JSON.stringify(vanType));
  location.reload();
}
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", resetScene);

function saveAsImage() {
  let imgData;

  try {
    let strMime = "image/jpeg";
    let strDownloadMime = "image/octet-stream";

    imgData = renderer.domElement.toDataURL(strMime);

    saveFile(imgData.replace(strMime, strDownloadMime), "my-van.jpg");
  } catch (e) {
    return;
  }
}
let saveFile = function (strData, filename) {
  let link = document.createElement("a");
  if (typeof link.download === "string") {
    document.body.appendChild(link); //Firefox requires the link to be in the body
    link.download = filename;
    link.href = strData;
    link.click();
    document.body.removeChild(link); //remove the link when done
  } else {
    location.replace(uri);
  }
};

// Download the Scene as a JPG
let exportBtn = document.getElementById("export-btn");
exportBtn.addEventListener("click", saveAsImage);

/**
 * Animate
 */
const tick = () => {
  // update matrix world
  for (const modelGroup of models) {
    modelGroup.model.updateMatrix();
  }
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
