const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const image = require('gulp-image');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
// const concat = require('gulp-concagt');


gulp.task('sass', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});


// gulp.task('image', function () {
//     gulp.src('./public/img/**/*')
//         .pipe(image())
//         .pipe(gulp.dest('./public/img'));
// });

gulp.task('babel', function () {
        gulp.src('src/js/script.js')
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(gulp.dest('public/js'))
    }
);

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: ""
    });
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);
});

gulp.task('watch', ['sass'], function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/script.js', ['babel']);
});


gulp.task('default', ['watch','babel','sass','serve']);