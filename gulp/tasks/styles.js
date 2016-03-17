var gulp = require('gulp'),
	less = require('gulp-less'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	autoprefix = require('less-plugin-autoprefix'),
	combineMediaQuery = require('gulp-combine-media-queries');

// set autoprefix plugin
var autoprefixDefiniton = new autoprefix({
	browsers: [
		'chrome >= 35',
		'ie >= 10',
		'iOS >= 6',
		'ff >= 24',
		'safari >= 5.1'
	]
});

gulp.task('styles', function () {
	return gulp.src('src/styles/loader.less')
		.pipe(less({
			plugins: [autoprefixDefiniton]
		}).on('error', function (err) {
			notify({ message: err });
			this.emit('end');
		}))
		.pipe(combineMediaQuery())
		.pipe(minifyCSS())
		.pipe(rename({
			basename: 'all',
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/assets/css'));
});