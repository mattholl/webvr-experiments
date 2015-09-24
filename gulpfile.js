var gulp = require('gulp'),
    livereload = require('gulp-livereload');
    browserify = require('browserify');
    transform = require('vinyl-transform');
    uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');

// gulp.task('default', function() {
//   gulp.src('public/js/*.js')
//     // .pipe(less())
//     // .pipe(gulp.dest('dist/styles'))
//     .pipe(livereload());
// });

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("styles.css"))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('javascript-starfield', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: 'src/starfield/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('starfield.js'))
    .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true}))
    //     // Add transformation tasks to the pipeline here.
    //     .pipe(uglify())
    //     .on('error', gutil.log)
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(livereload());
});

gulp.task('javascript-suspended-cuboids', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: 'src/suspended-cuboids/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('suspended-cuboids.js'))
    .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true}))
    //     // Add transformation tasks to the pipeline here.
    //     .pipe(uglify())
    //     .on('error', gutil.log)
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(livereload());
});

gulp.task('copy-files', function() {
  gulp.src([
    'bower_components/threejs/build/three.js',
    'bower_components/threejs/examples/js/controls/VRControls.js',
    'bower_components/threejs/examples/js/effects/VREffect.js',
    'bower_components/webvr-polyfill/build/webvr-polyfill.js',
    'lib/webvr-manager.js',
    'lib/device-info.js'
    ]).pipe(gulp.dest('./public/js/lib'));
});

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch('./src/starfield/*.js', ['javascript-starfield', 'copy-files']);
  gulp.watch('./src/suspended-cuboids/*.js', ['javascript-suspended-cuboids', 'copy-files']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});