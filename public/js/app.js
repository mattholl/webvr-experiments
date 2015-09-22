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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8vIHZhciBQYXJ0aWNsZVN5c3RlbSA9IHJlcXVpcmUoJ3BhcnRpY2xlLXN5c3RlbS5qcycpO1xuXG5cbnZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogdHJ1ZSB9KTtcbnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuXG52YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4zLCAxMDAwMCk7XG5cbi8vIEFwcGx5IFZSIGhlYWRzZXQgcG9zaXRpb25hbCBkYXRhIHRvIGNhbWVyYS5cbnZhciBjb250cm9scyA9IG5ldyBUSFJFRS5WUkNvbnRyb2xzKGNhbWVyYSk7XG5cbnZhciBlZmZlY3QgPSBuZXcgVEhSRUUuVlJFZmZlY3QocmVuZGVyZXIpO1xuZWZmZWN0LnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbi8vIENyZWF0ZSBhIFZSIG1hbmFnZXIgaGVscGVyIHRvIGVudGVyIGFuZCBleGl0IFZSIG1vZGUuXG52YXIgbWFuYWdlciA9IG5ldyBXZWJWUk1hbmFnZXIocmVuZGVyZXIsIGVmZmVjdCwge2hpZGVCdXR0b246IGZhbHNlfSk7XG5cbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG5cblxuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcblxuXG5cbiAgICB2YXIgY3ViZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMTAwLCAxMDAgKTtcbiAgICB2YXIgY3ViTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwZmYwMCB9ICk7XG4gICAgdmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggY3ViZUdlb20sIGN1Yk1hdCApO1xuICAgIGN1YmUubmFtZSA9ICdjdWJlJztcbiAgICBjdWJlLnBvc2l0aW9uID0gLTEuMDtcbiAgICBzY2VuZS5hZGQoIGN1YmUgKTtcblxuICAgIC8vIC8vIGNyZWF0ZSB0aGUgcGFydGljbGUgc3lzdGVtXG4gICAgLy8gdmFyIHBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbSh7XG4gICAgLy8gICBudW1iZXIgOiAxMCxcbiAgICAvLyB9KTtcblxuICAgIGFuaW1hdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSBWUiBoZWFkc2V0IHBvc2l0aW9uIGFuZCBhcHBseSB0byBjYW1lcmEuXG4gICAgY29udHJvbHMudXBkYXRlKCk7XG4gICAgdmFyIGN1YmUgPSBzY2VuZS5nZXRPYmplY3RCeU5hbWUoIFwiY3ViZVwiICk7XG4gICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMTtcbiAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICAgICAgLy8gVXBkYXRlIFZSIGhlYWRzZXQgcG9zaXRpb24gYW5kIGFwcGx5IHRvIGNhbWVyYS5cbiAgICBjb250cm9scy51cGRhdGUoKTtcbiAgICB2YXIgY3ViZSA9IHNjZW5lLmdldE9iamVjdEJ5TmFtZSggXCJjdWJlXCIgKTtcbiAgICBjdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xuICAgIGN1YmUucm90YXRpb24ueSArPSAwLjE7XG59XG5cbiAgLy8gc2V0dXAgOiBmdW5jdGlvbigpIHtcblxuICAvLyB9LFxuICAvLyB1cGRhdGUgOiBmdW5jdGlvbigpIHtcblxuICAvLyB9LFxuZnVuY3Rpb24gYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XG4gIHVwZGF0ZSgpXG4gIG1hbmFnZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCB0aW1lc3RhbXAgKTtcbiAgICAvLyByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGFwcC5jYW1lcmEsIHRpbWVzdGFtcCk7XG59XG4vLyAgIGFuaW1hdGUgOiBmdW5jdGlvbih0aW1lc3RhbXApIHtcblxuLy8gICB9XG4vLyB9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHNldHVwKCk7XG59LCBmYWxzZSk7Il19
