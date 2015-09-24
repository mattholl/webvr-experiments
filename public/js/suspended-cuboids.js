(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc3VzcGVuZGVkLWN1Ym9pZHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogdHJ1ZSB9KTtcbnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuXG52YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4zLCAxMDAwMCk7XG5cbi8vIEFwcGx5IFZSIGhlYWRzZXQgcG9zaXRpb25hbCBkYXRhIHRvIGNhbWVyYS5cbnZhciBjb250cm9scyA9IG5ldyBUSFJFRS5WUkNvbnRyb2xzKGNhbWVyYSk7XG5cbnZhciBlZmZlY3QgPSBuZXcgVEhSRUUuVlJFZmZlY3QocmVuZGVyZXIpO1xuZWZmZWN0LnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbi8vIENyZWF0ZSBhIFZSIG1hbmFnZXIgaGVscGVyIHRvIGVudGVyIGFuZCBleGl0IFZSIG1vZGUuXG52YXIgbWFuYWdlciA9IG5ldyBXZWJWUk1hbmFnZXIocmVuZGVyZXIsIGVmZmVjdCwge2hpZGVCdXR0b246IGZhbHNlfSk7XG5cbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG52YXIgY3Vib2lkcyA9IGNyZWF0ZUN1Ym9pZHMoe1xuICAnbnVtYmVyJyA6IDEwLFxuICAnbG9jYXRpb25OZWFyJyA6IDAsXG4gICdsb2NhdGlvbkZhcicgOiAxMDAsXG4gICdzaXplTWluJyA6IDEwLFxuICAnc2l6ZU1heCcgOiAxMDBcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG4gIGFuaW1hdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb250cm9scy51cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XG4gIHVwZGF0ZSgpO1xuICBtYW5hZ2VyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgdGltZXN0YW1wICk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgc2V0dXAoKTtcbiAgYW5pbWF0ZSgpO1xufSwgZmFsc2UpOyJdfQ==
