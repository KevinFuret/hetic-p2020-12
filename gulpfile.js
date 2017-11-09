var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-csso');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var sync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pxtorem = require('gulp-pxtorem');

/////////////
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var processors = [
  autoprefixer
];
////////////////

var isProd = process.env.NODE_ENV === 'production';

/**
 * SCSS
 */

function scss() {
  return gulp.src('src/scss/main.scss')
  .pipe(gulpif(!isProd, sourcemaps.init()))
  .pipe(sass())
  .pipe(gulpif(isProd, minifyCSS()))
  .pipe(postcss(processors))
  .pipe(pxtorem())
  .pipe(gulpif(!isProd, sourcemaps.write('.')))
  .pipe(gulp.dest('assets/css'))
  .pipe(sync.stream())
}

/**
 * JS
 */

function js() {
  return browserify({entries: ['src/js/main.js'], debug: true})
    .transform(babelify, {presets: 'es2015'})
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulpif(!isProd, sourcemaps.init({loadMaps: true})))
    .pipe(uglify())
    .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(gulp.dest('assets/js'))
    .pipe(sync.stream());
};

/**
 * IMAGES
 */

function images() {
  return gulp.src('src/img/**/*')
    .pipe(gulpif(isProd, imagemin({verbose: true})))
    .pipe(gulp.dest('assets/img'));
}

/**
 * FONTS
 */

function fonts() {
  return gulp.src('src/fonts.scss/**/*')
    .pipe(gulp.dest('assets/fonts.scss'));
}

/**
 * GLOBAL
 */

function clean() {
  return del(['assets']);
}

gulp.task('clean', clean);

gulp.task('build', gulp.series(clean, gulp.parallel(scss, js, images, fonts)));

gulp.task('default', gulp.parallel(scss, js, images, fonts, function(done) {
  sync.init({
  //   server: {
  //   baseDir: ''
  // },
    proxy: "http://localhost:8888/hetic-p2020-12"
  });

  gulp.watch('src/**/*.scss', scss);
  gulp.watch('src/**/*.js', js);

  done();
}));
