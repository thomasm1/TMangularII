const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel = require('babel-core');
const concat = require('gulp-concat');


// Logs Message
gulp.task('message', function(){
    return console.log('Gulp TMM is running...');
  });

// Copy All HTML files
gulp.task('copyHtml', function(){
    gulp.src('/*.html')
        .pipe(gulp.dest('dist/'));
  });
  
// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
 
// Optimize img
gulp.task('imageMin', () =>
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);

// Minify JS
gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
  });

// Scripts
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
  });
  
// Watch Sass & Serve
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass' , 'serve']);
