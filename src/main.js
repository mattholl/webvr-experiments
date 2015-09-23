var ParticleSystem = require('./particle-system.js');

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 10000);

// Apply VR headset positional data to camera.
var controls = new THREE.VRControls(camera);

var effect = new THREE.VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

// Create a VR manager helper to enter and exit VR mode.
var manager = new WebVRManager(renderer, effect, {hideButton: false});

var scene = new THREE.Scene();
var particles = new ParticleSystem();

function setup() {
  document.body.appendChild( renderer.domElement );

  // create the particle system
  particles.setup({
    scene : scene,
    number : 1000,
    size : 5
  });

  animate();
}

function update() {
  controls.update();
  particles.update();
}


function animate(timestamp) {
  requestAnimationFrame( animate );
  update();
  manager.render( scene, camera, timestamp );
}

document.addEventListener('DOMContentLoaded', function() {
  setup();
  animate();
}, false);