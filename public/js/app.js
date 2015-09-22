(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// var ParticleSystem = require('particle-system.js');


var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);

var effect = new THREE.VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

// Create a VR manager helper to enter and exit VR mode.
var manager = new WebVRManager(renderer, effect, {hideButton: false});

var scene = new THREE.Scene();

var app = {
  setup : function() {
    document.body.appendChild( renderer.domElement );

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 10000);

    // Apply VR headset positional data to camera.
    this.controls = new THREE.VRControls(this.camera);

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
    // renderer.render(scene, app.camera, timestamp);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  app.setup();
}, false);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vLyB2YXIgUGFydGljbGVTeXN0ZW0gPSByZXF1aXJlKCdwYXJ0aWNsZS1zeXN0ZW0uanMnKTtcblxuXG52YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IHRydWUgfSk7XG5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcblxudmFyIGVmZmVjdCA9IG5ldyBUSFJFRS5WUkVmZmVjdChyZW5kZXJlcik7XG5lZmZlY3Quc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuLy8gQ3JlYXRlIGEgVlIgbWFuYWdlciBoZWxwZXIgdG8gZW50ZXIgYW5kIGV4aXQgVlIgbW9kZS5cbnZhciBtYW5hZ2VyID0gbmV3IFdlYlZSTWFuYWdlcihyZW5kZXJlciwgZWZmZWN0LCB7aGlkZUJ1dHRvbjogZmFsc2V9KTtcblxudmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbnZhciBhcHAgPSB7XG4gIHNldHVwIDogZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjMsIDEwMDAwKTtcblxuICAgIC8vIEFwcGx5IFZSIGhlYWRzZXQgcG9zaXRpb25hbCBkYXRhIHRvIGNhbWVyYS5cbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLlZSQ29udHJvbHModGhpcy5jYW1lcmEpO1xuXG4gICAgdmFyIGN1YmVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEwMCwgMTAwICk7XG4gICAgdmFyIGN1Yk1hdCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMGZmMDAgfSApO1xuICAgIHZhciBjdWJlID0gbmV3IFRIUkVFLk1lc2goIGN1YmVHZW9tLCBjdWJNYXQgKTtcbiAgICBjdWJlLm5hbWUgPSAnY3ViZSc7XG4gICAgY3ViZS5wb3NpdGlvbiA9IC0xLjA7XG4gICAgc2NlbmUuYWRkKCBjdWJlICk7XG5cbiAgICAvLyAvLyBjcmVhdGUgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICAgIC8vIHZhciBwYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oe1xuICAgIC8vICAgbnVtYmVyIDogMTAsXG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfSxcbiAgdXBkYXRlIDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIFZSIGhlYWRzZXQgcG9zaXRpb24gYW5kIGFwcGx5IHRvIGNhbWVyYS5cbiAgICBhcHAuY29udHJvbHMudXBkYXRlKCk7XG4gICAgdmFyIGN1YmUgPSBzY2VuZS5nZXRPYmplY3RCeU5hbWUoIFwiY3ViZVwiICk7XG4gICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMTtcbiAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xuICB9LFxuICBhbmltYXRlIDogZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhcHAuYW5pbWF0ZSApO1xuICAgIGFwcC51cGRhdGUoKTtcbiAgICBtYW5hZ2VyLnJlbmRlciggc2NlbmUsIGFwcC5jYW1lcmEsIHRpbWVzdGFtcCApO1xuICAgIC8vIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgYXBwLmNhbWVyYSwgdGltZXN0YW1wKTtcbiAgfVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBhcHAuc2V0dXAoKTtcbn0sIGZhbHNlKTsiXX0=
