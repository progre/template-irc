/// <reference path="../typings/tsd.d.ts"/>
var runSequence = require('run-sequence');
var tsc: IGulpPlugin = require('gulp-tsc');
var tsd: IGulpPlugin = require('gulp-tsd');

export = typescript;
function typescript(gulp: gulp.Gulp) {
    gulp.task('typescript', callback =>
        runSequence('tsd', 'ts', callback));
    gulp.task('tsd', callback =>
        tsd({ command: 'reinstall', config: './tsd.json' }, callback));
    gulp.task('ts', () =>
        gulp.src('src/**/*.ts')
            .pipe(tsc({ noImplicitAny: true, sourcemap: true }))
            .pipe(gulp.dest('app/')));
}