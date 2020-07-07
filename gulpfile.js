const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
})

gulp.task(
  'default',
  gulp.series('sass', function () {
    browserSync.init({
      server: './',
    })
    gulp.watch('./scss/**/*.scss', gulp.series('sass'))
    gulp.watch('./css/*.css').on('change', browserSync.reload)
    gulp.watch('./js/*.js').on('change', browserSync.reload)
    gulp.watch('./*.html').on('change', browserSync.reload)
    return
  })
)
