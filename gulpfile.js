const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function() {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('css', function () {
  return gulp.src('./css/*.css')
    .pipe(uglifycss({      
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});