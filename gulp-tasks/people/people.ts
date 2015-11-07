/// <reference path="../../reference.ts"/>

var gulp = require('gulp');
var gutil = require('gulp-util');

module.exports = function (options) {

   gulp.task('people', function () {
       gutil.log(gutil.colors.green('Generating fake people....'));
   });

};


