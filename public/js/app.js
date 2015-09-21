(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gdmFyIFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSgncGFydGljbGUtc3lzdGVtLmpzJyk7XG5cbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUsIGFscGhhOiB0cnVlIH0pO1xucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG5cbnZhciBlZmZlY3QgPSBuZXcgVEhSRUUuVlJFZmZlY3QocmVuZGVyZXIpO1xuZWZmZWN0LnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbi8vIENyZWF0ZSBhIFZSIG1hbmFnZXIgaGVscGVyIHRvIGVudGVyIGFuZCBleGl0IFZSIG1vZGUuXG52YXIgbWFuYWdlciA9IG5ldyBXZWJWUk1hbmFnZXIocmVuZGVyZXIsIGVmZmVjdCwge2hpZGVCdXR0b246IGZhbHNlfSk7XG5cbnZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG52YXIgYXBwID0ge1xuICBzZXR1cCA6IGZ1bmN0aW9uKCkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XG5cbiAgICB2YXIgY3ViZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMTAwLCAxMDAgKTtcbiAgICB2YXIgY3ViTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwZmYwMCB9ICk7XG4gICAgdmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggY3ViZUdlb20sIGN1Yk1hdCApO1xuICAgIGN1YmUubmFtZSA9ICdjdWJlJztcbiAgICBzY2VuZS5hZGQoIGN1YmUgKTtcblxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjMsIDEwMDAwKTtcblxuICAgIC8vIEFwcGx5IFZSIGhlYWRzZXQgcG9zaXRpb25hbCBkYXRhIHRvIGNhbWVyYS5cbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLlZSQ29udHJvbHModGhpcy5jYW1lcmEpO1xuXG5cbiAgICAvLyAvLyBjcmVhdGUgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICAgIC8vIHZhciBwYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oe1xuICAgIC8vICAgbnVtYmVyIDogMTAsXG5cbiAgICAvLyB9KTtcblxuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9LFxuICB1cGRhdGUgOiBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgVlIgaGVhZHNldCBwb3NpdGlvbiBhbmQgYXBwbHkgdG8gY2FtZXJhLlxuICAgIGFwcC5jb250cm9scy51cGRhdGUoKTtcbiAgICB2YXIgY3ViZSA9IHNjZW5lLmdldE9iamVjdEJ5TmFtZSggXCJjdWJlXCIgKTtcbiAgICBjdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xuICAgIGN1YmUucm90YXRpb24ueSArPSAwLjE7XG4gIH0sXG4gIGFuaW1hdGUgOiBmdW5jdGlvbih0aW1lc3RhbXApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFwcC5hbmltYXRlICk7XG4gICAgYXBwLnVwZGF0ZSgpO1xuICAgIG1hbmFnZXIucmVuZGVyKCBzY2VuZSwgYXBwLmNhbWVyYSwgdGltZXN0YW1wICk7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgYXBwLnNldHVwKCk7XG59LCBmYWxzZSk7Il19
