var gulp = require('gulp'),
	livereload = require('gulp-livereload');

gulp.task('watch', function () {

	// create livereload server
	livereload.listen();

	// Watch html files
	gulp.watch('src/*.{html,php}', ['html']);

	// Watch .less files
	gulp.watch('src/styles/**/*.less', ['styles']);

	// Watch .js files
	gulp.watch('src/scripts/**/*.js', ['scripts']);

	// Watch image files
	gulp.watch('src/images/**/*', ['images']);

	// reload
	gulp.watch(['build/**']).on('change', livereload.changed);

});