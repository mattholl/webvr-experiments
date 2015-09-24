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
  'number' : 750,
  'locationNear' : 20,
  'locationFar' : 400,
  'sizeMin' : 0.2,
  'sizeMax' : 15
});

function setup() {
  document.body.appendChild( renderer.domElement );

  animate();
}

function update() {
  controls.update();
}

function animate(timestamp) {
  update();
  requestAnimationFrame( animate );
  manager.render( scene, camera, timestamp );
}

document.addEventListener('DOMContentLoaded', function() {
  setup();
}, false);

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
    var geometry = new THREE.BoxGeometry( width, height, depth );

    // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // var material = new THREE.MeshNormalMaterial();

    var material = new THREE.MeshPhongMaterial({
      color: getRandomColor(),
      emissive: getRandomColor(),
      side: THREE.DoubleSide,
      shading: THREE.FlatShading
    });

    var cube = new THREE.Mesh( geometry, material );

    // Position the cuboid in a random sphere around the viewer
    var radius = _.random(opts.locationNear, opts.locationFar);
    var randomPos = randomSpherePoint(0, 0, 0, radius);

    cube.position.x = randomPos[0];
    cube.position.y = randomPos[1];
    cube.position.z = randomPos[2];

    cube.verticesNeedUpdate = true;
    scene.add( cube );
  }
}

/*
Returns a random point of a sphere, evenly distributed over the sphere.
The sphere is centered at (x0,y0,z0) with the passed in radius.
The returned point is returned as a three element array [x,y,z].
*/
// http://stackoverflow.com/a/15048260
function randomSpherePoint(x0,y0,z0,radius){
   var u = Math.random();
   var v = Math.random();
   var theta = 2 * Math.PI * u;
   var phi = Math.acos(2 * v - 1);
   var x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
   var y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
   var z = z0 + (radius * Math.cos(phi));
   return [x,y,z];
}

// http://stackoverflow.com/a/1484514
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}