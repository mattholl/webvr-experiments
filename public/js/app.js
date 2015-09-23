(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./particle-system.js":2}],2:[function(require,module,exports){
var ParticleSystem = function() {

};

ParticleSystem.prototype.createParticles = function() {
  var geometry = new THREE.Geometry();

  for (var i = 0; i < this.numParticles; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * 2000 - 1000;
    vertex.y = Math.random() * 2000 - 1000;
    vertex.z = Math.random() * 2000 - 1000;

    geometry.vertices.push( vertex );
  }

  var material = new THREE.PointsMaterial( { size: this.pointSize } );

  var particles = new THREE.Points( geometry, material );

  this.scene.add( particles );

};

ParticleSystem.prototype.setup = function(opts) {
  this.numParticles = opts.number || 100;
  this.pointSize = opts.size || 5;
  this.particles = [];

  if(!opts.scene) {
    console.log('No scene');
  } else {
    this.scene = opts.scene;
    this.createParticles();
  }
};

ParticleSystem.prototype.update = function() {
  // Move the particles towards the viewer - negative z direction
  // if they are beyond the visible distance then remove from the particles array
  // add particles to replace the ones removed
  var points = this.scene.children[0].geometry.vertices;
  this.scene.children[0].geometry.verticesNeedUpdate = true;

  points.forEach(function(point) {
    point.z += 1;
  });

};

module.exports = ParticleSystem;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9wYXJ0aWNsZS1zeXN0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUGFydGljbGVTeXN0ZW0gPSByZXF1aXJlKCcuL3BhcnRpY2xlLXN5c3RlbS5qcycpO1xuXG52YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IHRydWUgfSk7XG5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcblxudmFyIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMywgMTAwMDApO1xuXG4vLyBBcHBseSBWUiBoZWFkc2V0IHBvc2l0aW9uYWwgZGF0YSB0byBjYW1lcmEuXG52YXIgY29udHJvbHMgPSBuZXcgVEhSRUUuVlJDb250cm9scyhjYW1lcmEpO1xuXG52YXIgZWZmZWN0ID0gbmV3IFRIUkVFLlZSRWZmZWN0KHJlbmRlcmVyKTtcbmVmZmVjdC5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4vLyBDcmVhdGUgYSBWUiBtYW5hZ2VyIGhlbHBlciB0byBlbnRlciBhbmQgZXhpdCBWUiBtb2RlLlxudmFyIG1hbmFnZXIgPSBuZXcgV2ViVlJNYW5hZ2VyKHJlbmRlcmVyLCBlZmZlY3QsIHtoaWRlQnV0dG9uOiBmYWxzZX0pO1xuXG52YXIgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbnZhciBwYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oKTtcblxuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcblxuICAvLyBjcmVhdGUgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICBwYXJ0aWNsZXMuc2V0dXAoe1xuICAgIHNjZW5lIDogc2NlbmUsXG4gICAgbnVtYmVyIDogMTAwMCxcbiAgICBzaXplIDogNVxuICB9KTtcblxuICBhbmltYXRlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29udHJvbHMudXBkYXRlKCk7XG4gIHBhcnRpY2xlcy51cGRhdGUoKTtcbn1cblxuXG5mdW5jdGlvbiBhbmltYXRlKHRpbWVzdGFtcCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcbiAgdXBkYXRlKCk7XG4gIG1hbmFnZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCB0aW1lc3RhbXAgKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBzZXR1cCgpO1xuICBhbmltYXRlKCk7XG59LCBmYWxzZSk7IiwidmFyIFBhcnRpY2xlU3lzdGVtID0gZnVuY3Rpb24oKSB7XG5cbn07XG5cblBhcnRpY2xlU3lzdGVtLnByb3RvdHlwZS5jcmVhdGVQYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBhcnRpY2xlczsgaSsrKSB7XG4gICAgdmFyIHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgdmVydGV4LnggPSBNYXRoLnJhbmRvbSgpICogMjAwMCAtIDEwMDA7XG4gICAgdmVydGV4LnkgPSBNYXRoLnJhbmRvbSgpICogMjAwMCAtIDEwMDA7XG4gICAgdmVydGV4LnogPSBNYXRoLnJhbmRvbSgpICogMjAwMCAtIDEwMDA7XG5cbiAgICBnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKCB2ZXJ0ZXggKTtcbiAgfVxuXG4gIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCggeyBzaXplOiB0aGlzLnBvaW50U2l6ZSB9ICk7XG5cbiAgdmFyIHBhcnRpY2xlcyA9IG5ldyBUSFJFRS5Qb2ludHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG4gIHRoaXMuc2NlbmUuYWRkKCBwYXJ0aWNsZXMgKTtcblxufTtcblxuUGFydGljbGVTeXN0ZW0ucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24ob3B0cykge1xuICB0aGlzLm51bVBhcnRpY2xlcyA9IG9wdHMubnVtYmVyIHx8IDEwMDtcbiAgdGhpcy5wb2ludFNpemUgPSBvcHRzLnNpemUgfHwgNTtcbiAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcblxuICBpZighb3B0cy5zY2VuZSkge1xuICAgIGNvbnNvbGUubG9nKCdObyBzY2VuZScpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2NlbmUgPSBvcHRzLnNjZW5lO1xuICAgIHRoaXMuY3JlYXRlUGFydGljbGVzKCk7XG4gIH1cbn07XG5cblBhcnRpY2xlU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gTW92ZSB0aGUgcGFydGljbGVzIHRvd2FyZHMgdGhlIHZpZXdlciAtIG5lZ2F0aXZlIHogZGlyZWN0aW9uXG4gIC8vIGlmIHRoZXkgYXJlIGJleW9uZCB0aGUgdmlzaWJsZSBkaXN0YW5jZSB0aGVuIHJlbW92ZSBmcm9tIHRoZSBwYXJ0aWNsZXMgYXJyYXlcbiAgLy8gYWRkIHBhcnRpY2xlcyB0byByZXBsYWNlIHRoZSBvbmVzIHJlbW92ZWRcbiAgdmFyIHBvaW50cyA9IHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0uZ2VvbWV0cnkudmVydGljZXM7XG4gIHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0uZ2VvbWV0cnkudmVydGljZXNOZWVkVXBkYXRlID0gdHJ1ZTtcblxuICBwb2ludHMuZm9yRWFjaChmdW5jdGlvbihwb2ludCkge1xuICAgIHBvaW50LnogKz0gMTtcbiAgfSk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVTeXN0ZW07Il19
