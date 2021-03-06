const gulp = require('gulp');
const gutil = require('gulp-util');

const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('dev', function () {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
    gulp.watch(["index.html", "assets/js/*.js", "assets/css/*.css"]).on('change', browserSync.reload);
});


gulp.task('js', function () {
    gulp.src([
        'assets/js/plugins/*.js',
        'config.js',
        'assets/js/*.js'
    ])
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('css', function () {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('default', ['js', 'css']);
