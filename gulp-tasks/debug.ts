/// <reference path="../reference.ts"/>

var gulp = require('gulp');
var gutil = require('gulp-util');
var args = require('yargs').argv;

module.exports = function (options) {

    gulp.task('debug', function () {
        gutil.log(gutil.colors.red('DEBUG'), args);
        gutil.log(gutil.colors.magenta('DEBUG'), args);
    });

};


