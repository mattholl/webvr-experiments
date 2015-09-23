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

function setup() {
  document.body.appendChild( renderer.domElement );

  // create the particle system
  var particles = new ParticleSystem({
    scene : scene,
    number : 1000,
    size : 5
  });



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
},{"./particle-system.js":2}],2:[function(require,module,exports){
var ParticleSystem = function(opts) {
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

ParticleSystem.prototype.update = function() {
  // Move the particles towards the viewer - negative z direction
  // if they are beyond the visible distance then remove from the particles array
  // add particles to replace the ones removed
  //
};

module.exports = ParticleSystem;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9wYXJ0aWNsZS1zeXN0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSgnLi9wYXJ0aWNsZS1zeXN0ZW0uanMnKTtcblxudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUsIGFscGhhOiB0cnVlIH0pO1xucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG5cbnZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjMsIDEwMDAwKTtcblxuLy8gQXBwbHkgVlIgaGVhZHNldCBwb3NpdGlvbmFsIGRhdGEgdG8gY2FtZXJhLlxudmFyIGNvbnRyb2xzID0gbmV3IFRIUkVFLlZSQ29udHJvbHMoY2FtZXJhKTtcblxudmFyIGVmZmVjdCA9IG5ldyBUSFJFRS5WUkVmZmVjdChyZW5kZXJlcik7XG5lZmZlY3Quc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuLy8gQ3JlYXRlIGEgVlIgbWFuYWdlciBoZWxwZXIgdG8gZW50ZXIgYW5kIGV4aXQgVlIgbW9kZS5cbnZhciBtYW5hZ2VyID0gbmV3IFdlYlZSTWFuYWdlcihyZW5kZXJlciwgZWZmZWN0LCB7aGlkZUJ1dHRvbjogZmFsc2V9KTtcblxudmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbmZ1bmN0aW9uIHNldHVwKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XG5cbiAgLy8gY3JlYXRlIHRoZSBwYXJ0aWNsZSBzeXN0ZW1cbiAgdmFyIHBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbSh7XG4gICAgc2NlbmUgOiBzY2VuZSxcbiAgICBudW1iZXIgOiAxMDAwLFxuICAgIHNpemUgOiA1XG4gIH0pO1xuXG5cblxuICBhbmltYXRlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuXG5cbiAgY29udHJvbHMudXBkYXRlKCk7XG59XG5cblxuZnVuY3Rpb24gYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XG4gIHVwZGF0ZSgpO1xuICBtYW5hZ2VyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgdGltZXN0YW1wICk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgc2V0dXAoKTtcbiAgYW5pbWF0ZSgpO1xufSwgZmFsc2UpOyIsInZhciBQYXJ0aWNsZVN5c3RlbSA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgdGhpcy5udW1QYXJ0aWNsZXMgPSBvcHRzLm51bWJlciB8fCAxMDA7XG4gIHRoaXMucG9pbnRTaXplID0gb3B0cy5zaXplIHx8IDU7XG4gIHRoaXMucGFydGljbGVzID0gW107XG5cbiAgaWYoIW9wdHMuc2NlbmUpIHtcbiAgICBjb25zb2xlLmxvZygnTm8gc2NlbmUnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNjZW5lID0gb3B0cy5zY2VuZTtcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlcygpO1xuICB9XG59O1xuXG5QYXJ0aWNsZVN5c3RlbS5wcm90b3R5cGUuY3JlYXRlUGFydGljbGVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1QYXJ0aWNsZXM7IGkrKykge1xuICAgIHZhciB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIHZlcnRleC54ID0gTWF0aC5yYW5kb20oKSAqIDIwMDAgLSAxMDAwO1xuICAgIHZlcnRleC55ID0gTWF0aC5yYW5kb20oKSAqIDIwMDAgLSAxMDAwO1xuICAgIHZlcnRleC56ID0gTWF0aC5yYW5kb20oKSAqIDIwMDAgLSAxMDAwO1xuXG4gICAgZ2VvbWV0cnkudmVydGljZXMucHVzaCggdmVydGV4ICk7XG4gIH1cblxuICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoIHsgc2l6ZTogdGhpcy5wb2ludFNpemUgfSApO1xuXG4gIHZhciBwYXJ0aWNsZXMgPSBuZXcgVEhSRUUuUG9pbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuICB0aGlzLnNjZW5lLmFkZCggcGFydGljbGVzICk7XG5cbn07XG5cblBhcnRpY2xlU3lzdGVtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gTW92ZSB0aGUgcGFydGljbGVzIHRvd2FyZHMgdGhlIHZpZXdlciAtIG5lZ2F0aXZlIHogZGlyZWN0aW9uXG4gIC8vIGlmIHRoZXkgYXJlIGJleW9uZCB0aGUgdmlzaWJsZSBkaXN0YW5jZSB0aGVuIHJlbW92ZSBmcm9tIHRoZSBwYXJ0aWNsZXMgYXJyYXlcbiAgLy8gYWRkIHBhcnRpY2xlcyB0byByZXBsYWNlIHRoZSBvbmVzIHJlbW92ZWRcbiAgLy9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVTeXN0ZW07Il19
