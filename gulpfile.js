'use strict'

const gulp = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browserSync');
/*Properties*/
const BUILD_DIR = "app/build";
const SOURC_DIR_JS = "app/src/**/*.js";

gulp.task("browser-sync", () => {
  browserSync.init({
    server:{
      baseDir:"./tmp"
    }
  });
});

gulp.task('default', () => {
  return gulp.src(SOURC_DIR_JS)
  .pipe(babel())
  .pipe(gulp.dest(BUILD_DIR))
})
