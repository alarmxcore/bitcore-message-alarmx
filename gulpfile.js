'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-alarmx');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
