/**
 * Created by mike on 05.09.2016.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    compass = require('gulp-sass'), //Подключаем Sass пакет,
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

//error notification settings for plumber
var errorHandler = function (err) {
    console.log(err);
    this.emit('end');
};

gulp.task('compass', function () {
    gulp.src('../sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber(errorHandler))
        .pipe(compass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('../css'))
});


// Compile scss in the background.
gulp.task('compass-watch', function () {
    gulp.watch('../sass/*.scss', ['compass']);
});