/// <reference path="./typings/tsd.d.ts"/>
require('es6-promise').polyfill();
var merge = require('event-stream').merge;
var runSequence = require('run-sequence');
import gulp = require('gulp');
var node = require('node-dev');

require('./gulp/typescript')(gulp);

gulp.task('default', () => {
    runSequence('build', 'serve');
});

gulp.task('build', ['typescript']);

gulp.task('serve', () => {
    node(['app']);

    gulp.watch('src/**/*.ts', ['ts']);
});
