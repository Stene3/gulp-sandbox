var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache');

gulp.task('images', function () {
	return gulp.src('src/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('build/assets/images'))
		.pipe(notify({ message: 'Images task complete' }));
});