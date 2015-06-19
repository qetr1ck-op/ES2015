/*var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('src/js/arrow_function.js')
    .pipe(babel())
    .pope(gulp.dest('dist'));
})*/

var gulp = require("gulp"),
    babel = require("gulp-babel"),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload');

var JS_PATH = 'src/js/*.js';

/*gulp.task("default", function () {
    return gulp.src('src/js/!*.js')
        .pipe(watch('src/js/!*.js'))
        //.pipe(babel())
        .pipe(gulp.dest("dist"));
});*/

gulp.task('default', function () {
    //livereload.listen();
    return gulp.src(JS_PATH)
        .pipe(watch(JS_PATH))
        .pipe(babel())
        .pipe(gulp.dest('dist/js'))
        //.pipe(livereload());
});