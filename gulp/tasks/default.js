var gulp = require('gulp');

gulp.task('default', ['clean'], function() {
	gulp.start('html', 'styles', 'scripts', 'images');
});
