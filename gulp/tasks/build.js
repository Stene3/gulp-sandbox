// This task is used primarily before watch is set to make
// sure sure all file are regenerated.

var gulp = require('gulp');

gulp.task('build', ['html', 'styles', 'scripts', 'images', 'clean']);
