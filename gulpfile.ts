/// <reference path="reference.ts"/>

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var options = {
    errorHandler: function(title) {
        return function(err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    }
};

wrench.readdirSyncRecursive('./gulp-tasks')
    .filter(function(file) {
        return (/\.js$/i).test(file);
    })
    .map(function(file) {
       require('./gulp-tasks/' + file)(options);
    });



gulp.task('default', function() {
    // Default task code
    gutil.log('-------------------------------------------------------');
    gutil.log('------------- ', gutil.colors.red('Warning Experimental Tool'), '--------------');
    gutil.log('-------------------------------------------------------');
    gutil.log(gutil.colors.magenta('gulp debug     '), ' -- useful for debugging gulp.');
    gutil.log('-------------------------------------------------------');
});







