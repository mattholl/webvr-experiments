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

  // Set up the particle system
  particles.setup({
    scene : scene,
    number : 10000,
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
  this.far = 5000;
  this.near = 1000;
  this.velocity = new THREE.Vector3(0, 0, -10);
};

ParticleSystem.prototype.createParticles = function() {
  var geometry = new THREE.Geometry();

  for (var i = 0; i < this.numParticles; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * this.far - this.near;
    vertex.y = Math.random() * this.far - this.near;
    vertex.z = Math.random() * this.far - this.near;

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
  // Move the particles towards the camera
  // If they are beyond the far distance then remove from the particles array
  // Add particles to replace the ones removed
  var points = this.scene.children[0].geometry.vertices;
  this.scene.children[0].geometry.verticesNeedUpdate = true;

  for (var i = points.length - 1; i >= 0; i--) {
    points[i].sub(this.velocity);
    // Remove the point if it's gone too far
    if(points[i].z > this.far) {
      points.splice(i, 1);
      this.addPoint();
    }

  }
};

ParticleSystem.prototype.addPoint = function() {
  var points = this.scene.children[0].geometry.vertices;
  this.scene.children[0].geometry.verticesNeedUpdate = true;

  var vertex = new THREE.Vector3();
  vertex.x = Math.random() * this.far - this.near;
  vertex.y = Math.random() * this.far - this.near;
  vertex.z = Math.random() * this.far - this.near;

  points.push( vertex );
};

module.exports = ParticleSystem;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc3RhcmZpZWxkL21haW4uanMiLCJzcmMvc3RhcmZpZWxkL3BhcnRpY2xlLXN5c3RlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSgnLi9wYXJ0aWNsZS1zeXN0ZW0uanMnKTtcblxudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUsIGFscGhhOiB0cnVlIH0pO1xucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG5cbnZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjMsIDEwMDAwKTtcblxuLy8gQXBwbHkgVlIgaGVhZHNldCBwb3NpdGlvbmFsIGRhdGEgdG8gY2FtZXJhLlxudmFyIGNvbnRyb2xzID0gbmV3IFRIUkVFLlZSQ29udHJvbHMoY2FtZXJhKTtcblxudmFyIGVmZmVjdCA9IG5ldyBUSFJFRS5WUkVmZmVjdChyZW5kZXJlcik7XG5lZmZlY3Quc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuLy8gQ3JlYXRlIGEgVlIgbWFuYWdlciBoZWxwZXIgdG8gZW50ZXIgYW5kIGV4aXQgVlIgbW9kZS5cbnZhciBtYW5hZ2VyID0gbmV3IFdlYlZSTWFuYWdlcihyZW5kZXJlciwgZWZmZWN0LCB7aGlkZUJ1dHRvbjogZmFsc2V9KTtcblxudmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG52YXIgcGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKCk7XG5cbmZ1bmN0aW9uIHNldHVwKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XG5cbiAgLy8gU2V0IHVwIHRoZSBwYXJ0aWNsZSBzeXN0ZW1cbiAgcGFydGljbGVzLnNldHVwKHtcbiAgICBzY2VuZSA6IHNjZW5lLFxuICAgIG51bWJlciA6IDEwMDAwLFxuICAgIHNpemUgOiA1XG4gIH0pO1xuXG4gIGFuaW1hdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb250cm9scy51cGRhdGUoKTtcbiAgcGFydGljbGVzLnVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlKHRpbWVzdGFtcCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcbiAgdXBkYXRlKCk7XG4gIG1hbmFnZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCB0aW1lc3RhbXAgKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBzZXR1cCgpO1xuICBhbmltYXRlKCk7XG59LCBmYWxzZSk7IiwidmFyIFBhcnRpY2xlU3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZmFyID0gNTAwMDtcbiAgdGhpcy5uZWFyID0gMTAwMDtcbiAgdGhpcy52ZWxvY2l0eSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xMCk7XG59O1xuXG5QYXJ0aWNsZVN5c3RlbS5wcm90b3R5cGUuY3JlYXRlUGFydGljbGVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1QYXJ0aWNsZXM7IGkrKykge1xuICAgIHZhciB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIHZlcnRleC54ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuZmFyIC0gdGhpcy5uZWFyO1xuICAgIHZlcnRleC55ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuZmFyIC0gdGhpcy5uZWFyO1xuICAgIHZlcnRleC56ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuZmFyIC0gdGhpcy5uZWFyO1xuXG4gICAgZ2VvbWV0cnkudmVydGljZXMucHVzaCggdmVydGV4ICk7XG4gIH1cblxuICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoIHsgc2l6ZTogdGhpcy5wb2ludFNpemUgfSApO1xuXG4gIHZhciBwYXJ0aWNsZXMgPSBuZXcgVEhSRUUuUG9pbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcbiAgdGhpcy5zY2VuZS5hZGQoIHBhcnRpY2xlcyApO1xufTtcblxuUGFydGljbGVTeXN0ZW0ucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24ob3B0cykge1xuICB0aGlzLm51bVBhcnRpY2xlcyA9IG9wdHMubnVtYmVyIHx8IDEwMDtcbiAgdGhpcy5wb2ludFNpemUgPSBvcHRzLnNpemUgfHwgNTtcbiAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcblxuICBpZighb3B0cy5zY2VuZSkge1xuICAgIGNvbnNvbGUubG9nKCdObyBzY2VuZScpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2NlbmUgPSBvcHRzLnNjZW5lO1xuICAgIHRoaXMuY3JlYXRlUGFydGljbGVzKCk7XG4gIH1cbn07XG5cblBhcnRpY2xlU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gTW92ZSB0aGUgcGFydGljbGVzIHRvd2FyZHMgdGhlIGNhbWVyYVxuICAvLyBJZiB0aGV5IGFyZSBiZXlvbmQgdGhlIGZhciBkaXN0YW5jZSB0aGVuIHJlbW92ZSBmcm9tIHRoZSBwYXJ0aWNsZXMgYXJyYXlcbiAgLy8gQWRkIHBhcnRpY2xlcyB0byByZXBsYWNlIHRoZSBvbmVzIHJlbW92ZWRcbiAgdmFyIHBvaW50cyA9IHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0uZ2VvbWV0cnkudmVydGljZXM7XG4gIHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0uZ2VvbWV0cnkudmVydGljZXNOZWVkVXBkYXRlID0gdHJ1ZTtcblxuICBmb3IgKHZhciBpID0gcG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgcG9pbnRzW2ldLnN1Yih0aGlzLnZlbG9jaXR5KTtcbiAgICAvLyBSZW1vdmUgdGhlIHBvaW50IGlmIGl0J3MgZ29uZSB0b28gZmFyXG4gICAgaWYocG9pbnRzW2ldLnogPiB0aGlzLmZhcikge1xuICAgICAgcG9pbnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMuYWRkUG9pbnQoKTtcbiAgICB9XG5cbiAgfVxufTtcblxuUGFydGljbGVTeXN0ZW0ucHJvdG90eXBlLmFkZFBvaW50ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwb2ludHMgPSB0aGlzLnNjZW5lLmNoaWxkcmVuWzBdLmdlb21ldHJ5LnZlcnRpY2VzO1xuICB0aGlzLnNjZW5lLmNoaWxkcmVuWzBdLmdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XG5cbiAgdmFyIHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gIHZlcnRleC54ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuZmFyIC0gdGhpcy5uZWFyO1xuICB2ZXJ0ZXgueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmZhciAtIHRoaXMubmVhcjtcbiAgdmVydGV4LnogPSBNYXRoLnJhbmRvbSgpICogdGhpcy5mYXIgLSB0aGlzLm5lYXI7XG5cbiAgcG9pbnRzLnB1c2goIHZlcnRleCApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZVN5c3RlbTsiXX0=
