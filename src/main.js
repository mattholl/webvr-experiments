
// var ParticleSystem = require('particle-system.js');


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



function setup() {
  document.body.appendChild( renderer.domElement );



    var cubeGeom = new THREE.BoxGeometry( 100, 100, 100 );
    var cubMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( cubeGeom, cubMat );
    cube.name = 'cube';
    cube.position = -1.0;
    scene.add( cube );

    // // create the particle system
    // var particles = new ParticleSystem({
    //   number : 10,
    // });

    animate();
}

function update() {
    // Update VR headset position and apply to camera.
    controls.update();
    var cube = scene.getObjectByName( "cube" );
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
}

function draw() {
      // Update VR headset position and apply to camera.
    controls.update();
    var cube = scene.getObjectByName( "cube" );
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
}

  // setup : function() {

  // },
  // update : function() {

  // },
function animate(timestamp) {
  requestAnimationFrame( animate );
  update()
  manager.render( scene, camera, timestamp );
    // renderer.render(scene, app.camera, timestamp);
}
//   animate : function(timestamp) {

//   }
// };

document.addEventListener('DOMContentLoaded', function() {
  setup();
}, false);