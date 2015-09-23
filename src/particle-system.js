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