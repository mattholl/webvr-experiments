(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var ParticleSystem = require('./particle-system.js');

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
    controls.update();
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHZhciBQYXJ0aWNsZVN5c3RlbSA9IHJlcXVpcmUoJy4vcGFydGljbGUtc3lzdGVtLmpzJyk7XG5cbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUsIGFscGhhOiB0cnVlIH0pO1xucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG5cbnZhciBlZmZlY3QgPSBuZXcgVEhSRUUuVlJFZmZlY3QocmVuZGVyZXIpO1xuZWZmZWN0LnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbi8vIENyZWF0ZSBhIFZSIG1hbmFnZXIgaGVscGVyIHRvIGVudGVyIGFuZCBleGl0IFZSIG1vZGUuXG52YXIgbWFuYWdlciA9IG5ldyBXZWJWUk1hbmFnZXIocmVuZGVyZXIsIGVmZmVjdCwge2hpZGVCdXR0b246IGZhbHNlfSk7XG5cbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG52YXIgYXBwID0ge1xuICBzZXR1cCA6IGZ1bmN0aW9uKCkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMywgMTAwMDApO1xuXG4gICAgLy8gQXBwbHkgVlIgaGVhZHNldCBwb3NpdGlvbmFsIGRhdGEgdG8gY2FtZXJhLlxuICAgIHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuVlJDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cbiAgICAvLyAvLyBjcmVhdGUgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICAgIC8vIHZhciBwYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oe1xuICAgIC8vICAgbnVtYmVyIDogMTAsXG5cbiAgICAvLyB9KTtcblxuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9LFxuICB1cGRhdGUgOiBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgVlIgaGVhZHNldCBwb3NpdGlvbiBhbmQgYXBwbHkgdG8gY2FtZXJhLlxuICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xuICB9LFxuICBhbmltYXRlIDogZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhcHAuYW5pbWF0ZSApO1xuICAgIGFwcC51cGRhdGUoKTtcbiAgICBtYW5hZ2VyLnJlbmRlciggc2NlbmUsIGFwcC5jYW1lcmEsIHRpbWVzdGFtcCApO1xuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGFwcC5zZXR1cCgpO1xufSwgZmFsc2UpOyJdfQ==
