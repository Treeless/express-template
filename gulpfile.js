(function() {
  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    del = require('del'),
    autoprefix = require('gulp-autoprefixer');

  gulp.task('style', function() {
    del.sync('./public/css/main.css');

    return gulp.src(['main.scss', './views/pages/**/*.scss'])
      .pipe(concat('main.css'))
      .pipe(sass().on('error', function(err) {
        console.log("SASS ERROR: " + err.message);
      }))
      .pipe(cssnano())
      .pipe(autoprefix())
      .pipe(gulp.dest('./public/css/'));
  });


  gulp.task('default', ['style']);
}());
