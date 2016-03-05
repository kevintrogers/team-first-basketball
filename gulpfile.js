var gulp = require('gulp'),
 sass = require('gulp-sass'),
 watch = require('gulp-watch'),
 jshint= require('jshint-stylish'),
  browserSync = require('browser-sync').create();

// create a default task and just log a message
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('monkey-playground/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});



gulp.task('build-css', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
/* updated watch task to include sass */

gulp.task('watch', function() {
  gulp.watch('js/javascript/**/*.js', ['jshint']);
  gulp.watch('scss/**/*.scss', ['build-css']);
});
