var gulp = require('gulp');
var notifier = require('node-notifier');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('script', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch('js/**/*.js', ['script']);
    gulp.watch(['**/*.js','**/*.html'],browserSync.reload);
});

//default task
gulp.task('default', ['watch','script'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    notifier.notify({
        'title': 'success！',
        'message': 'Gulp running!'
    });
});