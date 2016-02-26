var gulp = require('gulp');
var notifier = require('node-notifier');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var cache = require('gulp-cached');
var notify = require('gulp-notify');

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(cache('linting'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('script', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(cache('linting'))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['script']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch(['src/**/*.js','src/**/*.html'], browserSync.reload);
});


//default task
gulp.task('default', ['watch', 'script','html'], function () {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    notifier.notify({
        'title': 'success！',
        'message': 'Gulp running!'
    });
});