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