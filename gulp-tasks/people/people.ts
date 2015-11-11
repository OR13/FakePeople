/// <reference path="../../reference.ts"/>

var gulp = require('gulp');
var gutil = require('gulp-util');

import person = require('../../types/Person');

module.exports = function(options) {

    var prettyPrintPerson = function(p: person.Person){
        gutil.log( 'Name:     ', gutil.colors.yellow( `${p.firstName} ${p.lastName}` ) );
        gutil.log( 'Gender:   ', gutil.colors.yellow( `${p.gender}` ) );
        gutil.log( 'Age:      ', gutil.colors.yellow( `${p.getAge()}` ) );
        gutil.log( 'Address:  ', gutil.colors.yellow( `${p.address}` ) );
    };

    gulp.task('people', function() {
        gutil.log(gutil.colors.green('Generating fake people....'));
        var p = new person.Person();
        prettyPrintPerson(p);
    });

};


