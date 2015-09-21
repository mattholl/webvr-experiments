
// var ParticleSystem = require('particle-system.js');

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);

var effect = new THREE.VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

// Create a VR manager helper to enter and exit VR mode.
var manager = new WebVRManager(renderer, effect, {hideButton: false});

var scene = new THREE.Scene();

var app = {
  setup : function() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var cubeGeom = new THREE.BoxGeometry( 100, 100, 100 );
    var cubMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( cubeGeom, cubMat );
    cube.name = 'cube';
    scene.add( cube );


    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 10000);

    // Apply VR headset positional data to camera.
    this.controls = new THREE.VRControls(this.camera);


    // // create the particle system
    // var particles = new ParticleSystem({
    //   number : 10,

    // });

    this.animate();
  },
  update : function() {
    // Update VR headset position and apply to camera.
    app.controls.update();
    var cube = scene.getObjectByName( "cube" );
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
  },
  animate : function(timestamp) {
    requestAnimationFrame( app.animate );
    app.update();
    manager.render( scene, app.camera, timestamp );
  }
};

document.addEventListener('DOMContentLoaded', function() {
  app.setup();
}, false);