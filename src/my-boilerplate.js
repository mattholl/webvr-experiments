// Most of this comes from the webvr boilerplate, I just wanted to be able to use modules.
// And have a setup/update/draw loop
// https://github.com/borismus/webvr-boilerplate/blob/master/index.html

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

var cuboids = createCuboids({
  'number' : 10,
  'locationNear' : 0,
  'locationFar' : 100,
  'sizeMin' : 10,
  'sizeMax' : 100
});

function setup() {
  document.body.appendChild( renderer.domElement );

  animate();
}

function update() {
  controls.update();
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