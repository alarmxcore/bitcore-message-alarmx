'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-gobyte');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
