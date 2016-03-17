var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	notify = require('gulp-notify');

gulp.task('html', function () {
	return gulp.src('src/*.{html,php}')
		.pipe(htmlmin({
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeComments: true,
			quoteCharacter: '"'
		}))
		.pipe(gulp.dest('build'))
		.pipe(notify({ message: 'Html task complete' }));
});