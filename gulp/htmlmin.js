(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //test
  gulp.task('htmlmin', function() {
    return gulp.src('test/test.html')
      .pipe($.htmlmin({
        removeEmptyAttributes: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: false,
        collapseWhitespace: true,
        removeComments:true,
        removeTagWhitespace:true,
        ignoreCustomComments: [
          /^\s+justify-start/,
          /^\s+justify-end/,
        ]
      }))
      .pipe($.rename({ extname: '.min.html'}))
      .pipe(gulp.dest('test'));

  });

}());
