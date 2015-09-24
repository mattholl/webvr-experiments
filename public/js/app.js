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
    number : 100,
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
    }

  }
};

module.exports = ParticleSystem;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9wYXJ0aWNsZS1zeXN0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBQYXJ0aWNsZVN5c3RlbSA9IHJlcXVpcmUoJy4vcGFydGljbGUtc3lzdGVtLmpzJyk7XG5cbnZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogdHJ1ZSB9KTtcbnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuXG52YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4zLCAxMDAwMCk7XG5cbi8vIEFwcGx5IFZSIGhlYWRzZXQgcG9zaXRpb25hbCBkYXRhIHRvIGNhbWVyYS5cbnZhciBjb250cm9scyA9IG5ldyBUSFJFRS5WUkNvbnRyb2xzKGNhbWVyYSk7XG5cbnZhciBlZmZlY3QgPSBuZXcgVEhSRUUuVlJFZmZlY3QocmVuZGVyZXIpO1xuZWZmZWN0LnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbi8vIENyZWF0ZSBhIFZSIG1hbmFnZXIgaGVscGVyIHRvIGVudGVyIGFuZCBleGl0IFZSIG1vZGUuXG52YXIgbWFuYWdlciA9IG5ldyBXZWJWUk1hbmFnZXIocmVuZGVyZXIsIGVmZmVjdCwge2hpZGVCdXR0b246IGZhbHNlfSk7XG5cbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xudmFyIHBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbSgpO1xuXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG4gIC8vIGNyZWF0ZSB0aGUgcGFydGljbGUgc3lzdGVtXG4gIHBhcnRpY2xlcy5zZXR1cCh7XG4gICAgc2NlbmUgOiBzY2VuZSxcbiAgICBudW1iZXIgOiAxMDAsXG4gICAgc2l6ZSA6IDVcbiAgfSk7XG5cbiAgYW5pbWF0ZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGNvbnRyb2xzLnVwZGF0ZSgpO1xuICBwYXJ0aWNsZXMudXBkYXRlKCk7XG59XG5cblxuZnVuY3Rpb24gYW5pbWF0ZSh0aW1lc3RhbXApIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XG4gIHVwZGF0ZSgpO1xuICBtYW5hZ2VyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgdGltZXN0YW1wICk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgc2V0dXAoKTtcbiAgYW5pbWF0ZSgpO1xufSwgZmFsc2UpOyIsInZhciBQYXJ0aWNsZVN5c3RlbSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmZhciA9IDUwMDA7XG4gIHRoaXMubmVhciA9IDEwMDA7XG4gIHRoaXMudmVsb2NpdHkgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMTApO1xufTtcblxuUGFydGljbGVTeXN0ZW0ucHJvdG90eXBlLmNyZWF0ZVBhcnRpY2xlcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtUGFydGljbGVzOyBpKyspIHtcbiAgICB2YXIgdmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICB2ZXJ0ZXgueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmZhciAtIHRoaXMubmVhcjtcbiAgICB2ZXJ0ZXgueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmZhciAtIHRoaXMubmVhcjtcbiAgICB2ZXJ0ZXgueiA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmZhciAtIHRoaXMubmVhcjtcblxuICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2goIHZlcnRleCApO1xuICB9XG5cbiAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKCB7IHNpemU6IHRoaXMucG9pbnRTaXplIH0gKTtcblxuICB2YXIgcGFydGljbGVzID0gbmV3IFRIUkVFLlBvaW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gIHRoaXMuc2NlbmUuYWRkKCBwYXJ0aWNsZXMgKTtcbn07XG5cblBhcnRpY2xlU3lzdGVtLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgdGhpcy5udW1QYXJ0aWNsZXMgPSBvcHRzLm51bWJlciB8fCAxMDA7XG4gIHRoaXMucG9pbnRTaXplID0gb3B0cy5zaXplIHx8IDU7XG4gIHRoaXMucGFydGljbGVzID0gW107XG5cbiAgaWYoIW9wdHMuc2NlbmUpIHtcbiAgICBjb25zb2xlLmxvZygnTm8gc2NlbmUnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNjZW5lID0gb3B0cy5zY2VuZTtcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlcygpO1xuICB9XG59O1xuXG5QYXJ0aWNsZVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIE1vdmUgdGhlIHBhcnRpY2xlcyB0b3dhcmRzIHRoZSBjYW1lcmFcbiAgLy8gSWYgdGhleSBhcmUgYmV5b25kIHRoZSBmYXIgZGlzdGFuY2UgdGhlbiByZW1vdmUgZnJvbSB0aGUgcGFydGljbGVzIGFycmF5XG4gIC8vIEFkZCBwYXJ0aWNsZXMgdG8gcmVwbGFjZSB0aGUgb25lcyByZW1vdmVkXG4gIHZhciBwb2ludHMgPSB0aGlzLnNjZW5lLmNoaWxkcmVuWzBdLmdlb21ldHJ5LnZlcnRpY2VzO1xuICB0aGlzLnNjZW5lLmNoaWxkcmVuWzBdLmdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XG5cbiAgZm9yICh2YXIgaSA9IHBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHBvaW50c1tpXS5zdWIodGhpcy52ZWxvY2l0eSk7XG4gICAgLy8gUmVtb3ZlIHRoZSBwb2ludCBpZiBpdCdzIGdvbmUgdG9vIGZhclxuICAgIGlmKHBvaW50c1tpXS56ID4gdGhpcy5mYXIpIHtcbiAgICAgIHBvaW50cy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVTeXN0ZW07Il19
