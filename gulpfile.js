'use strict';

const gulp = require('gulp');
const del = require('del');
const uglify = require('gulp-uglify');
const webserver = require('gulp-webserver');

let paths = {
  dist: 'dist',
  lib: 'lib/**.js'
};

gulp.task('clean:dist', () => {
  return del(paths.dist);
});

gulp.task('uglify', ['clean:dist'], () => {
  return gulp.src(paths.lib)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', () => {
  gulp.watch(paths.lib, ['uglify']);
});

gulp.task('serve', () => {
  return gulp.src('./')
    .pipe(webserver({
      directoryListing: false,
      open: true,
      port: process.env.PORT || '8080',
      host: process.env.IP || 'localhost'
    }));
});

gulp.task('dist', ['uglify']);
