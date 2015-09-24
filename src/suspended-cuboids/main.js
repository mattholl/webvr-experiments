var _ = require('lodash');
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

addLights();

createCuboids({
  'number' : 1,
  'locationNear' : 0,
  'locationFar' : 100,
  'sizeMin' : 0.2,
  'sizeMax' : 5
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

function addLights() {
    var ambientLight = new THREE.AmbientLight( 0x000000 );
    scene.add( ambientLight );

    var lights = [];
    lights[0] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[1] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[2] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[0].position.set( 0, 200, 0 );
    lights[1].position.set( 100, 200, 100 );
    lights[2].position.set( -100, -200, -100 );

    scene.add( lights[0] );
    scene.add( lights[1] );
    scene.add( lights[2] );
}

function createCuboids(opts) {

  for(var i = 0; i < opts.number; i++) {
    var width = _.random(opts.sizeMin, opts.sizeMax);
    var height = _.random(opts.sizeMin, opts.sizeMax);
    var depth = _.random(opts.sizeMin, opts.sizeMax);

    // var geometry = new THREE.BoxGeometry( width, height, depth );
    var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );

    // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // var material = new THREE.MeshNormalMaterial();
    var material = new THREE.MeshPhongMaterial({
      color: 0x156289,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      shading: THREE.FlatShading
    });

    var cube = new THREE.Mesh( geometry, material );

    var positionX = _.random(opts.locationNear, opts.locationFar);
    var positionY = _.random(opts.locationNear, opts.locationFar);
    var positionZ = _.random(opts.locationNear, opts.locationFar);

    // cube.position.x = positionX;
    // cube.position.y = positionY;
    // cube.position.z = -positionZ;

    cube.position.z = -1;

    cube.verticesNeedUpdate = true;

    scene.add( cube );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setup();
  animate();
}, false);