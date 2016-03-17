var gulp = require('gulp'),
	del = require('del');

gulp.task('clean', function (cb) {
	del(['build/*.{html,php}'], cb);
	del(['build/assets/css', 'build/assets/js', 'build/assets/images', 'build/assets'], cb);
});