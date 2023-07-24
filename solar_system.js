// Get the container element
const container = document.getElementById('solar-system');

// Initialize Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);

// Load the sun
const sunTexture = new THREE.TextureLoader().load('https://www.universetoday.com/wp-content/uploads/2022/09/Hbeta1_yellow-scaled-1-2000x1200.jpg');
const sunGeometry = new THREE.SphereGeometry(4, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Load the planets
// ... (similar to loading models in the previous example)

// Camera position and controls
camera.position.z = 30;
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Animate the solar system
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  // Update planet positions and rotations based on real celestial data
  // ...
  renderer.render(scene, camera);
}

animate();
