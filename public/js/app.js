(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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



    // var cubeGeom = new THREE.BoxGeometry( 100, 100, 100 );
    // var cubMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( cubeGeom, cubMat );
    // cube.name = 'cube';
    // cube.position = -1.0;
    // scene.add( cube );

  // Create 3D objects.
  var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  var material = new THREE.MeshNormalMaterial();
  var cube = new THREE.Mesh(geometry, material);

  // Position cube mesh
  cube.position.z = -1;

  // Add cube mesh to your three.js scene
  scene.add(cube);

    // // create the particle system
    // var particles = new ParticleSystem({
    //   number : 10,
    // });

    animate();
}

function update() {


    // var cube = scene.getObjectByName( "cube" );
    // cube.rotation.x += 0.1;
    // cube.rotation.y += 0.1;

    controls.update();
}


function animate(timestamp) {
  requestAnimationFrame( animate );
  update();
  manager.render( scene, camera, timestamp );
    // renderer.render(scene, app.camera, timestamp);
}
//   animate : function(timestamp) {

//   }
// };

document.addEventListener('DOMContentLoaded', function() {
  setup();
  animate();
}, false);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gdmFyIFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSgncGFydGljbGUtc3lzdGVtLmpzJyk7XG5cblxudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUsIGFscGhhOiB0cnVlIH0pO1xucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG5cbnZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjMsIDEwMDAwKTtcblxuLy8gQXBwbHkgVlIgaGVhZHNldCBwb3NpdGlvbmFsIGRhdGEgdG8gY2FtZXJhLlxudmFyIGNvbnRyb2xzID0gbmV3IFRIUkVFLlZSQ29udHJvbHMoY2FtZXJhKTtcblxudmFyIGVmZmVjdCA9IG5ldyBUSFJFRS5WUkVmZmVjdChyZW5kZXJlcik7XG5lZmZlY3Quc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuLy8gQ3JlYXRlIGEgVlIgbWFuYWdlciBoZWxwZXIgdG8gZW50ZXIgYW5kIGV4aXQgVlIgbW9kZS5cbnZhciBtYW5hZ2VyID0gbmV3IFdlYlZSTWFuYWdlcihyZW5kZXJlciwgZWZmZWN0LCB7aGlkZUJ1dHRvbjogZmFsc2V9KTtcblxudmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cblxuXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG5cblxuICAgIC8vIHZhciBjdWJlR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMTAwLCAxMDAsIDEwMCApO1xuICAgIC8vIHZhciBjdWJNYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDBmZjAwIH0gKTtcbiAgICAvLyB2YXIgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBjdWJlR2VvbSwgY3ViTWF0ICk7XG4gICAgLy8gY3ViZS5uYW1lID0gJ2N1YmUnO1xuICAgIC8vIGN1YmUucG9zaXRpb24gPSAtMS4wO1xuICAgIC8vIHNjZW5lLmFkZCggY3ViZSApO1xuXG4gIC8vIENyZWF0ZSAzRCBvYmplY3RzLlxuICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC41LCAwLjUsIDAuNSk7XG4gIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoKTtcbiAgdmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gIC8vIFBvc2l0aW9uIGN1YmUgbWVzaFxuICBjdWJlLnBvc2l0aW9uLnogPSAtMTtcblxuICAvLyBBZGQgY3ViZSBtZXNoIHRvIHlvdXIgdGhyZWUuanMgc2NlbmVcbiAgc2NlbmUuYWRkKGN1YmUpO1xuXG4gICAgLy8gLy8gY3JlYXRlIHRoZSBwYXJ0aWNsZSBzeXN0ZW1cbiAgICAvLyB2YXIgcGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKHtcbiAgICAvLyAgIG51bWJlciA6IDEwLFxuICAgIC8vIH0pO1xuXG4gICAgYW5pbWF0ZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG5cblxuICAgIC8vIHZhciBjdWJlID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKCBcImN1YmVcIiApO1xuICAgIC8vIGN1YmUucm90YXRpb24ueCArPSAwLjE7XG4gICAgLy8gY3ViZS5yb3RhdGlvbi55ICs9IDAuMTtcblxuICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xufVxuXG5cbmZ1bmN0aW9uIGFuaW1hdGUodGltZXN0YW1wKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xuICB1cGRhdGUoKTtcbiAgbWFuYWdlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEsIHRpbWVzdGFtcCApO1xuICAgIC8vIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgYXBwLmNhbWVyYSwgdGltZXN0YW1wKTtcbn1cbi8vICAgYW5pbWF0ZSA6IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xuXG4vLyAgIH1cbi8vIH07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgc2V0dXAoKTtcbiAgYW5pbWF0ZSgpO1xufSwgZmFsc2UpOyJdfQ==
