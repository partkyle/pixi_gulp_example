var gulp = require('gulp');
var bower = require('gulp-bower');
var server = require('gulp-server-livereload');

gulp.task('src', function() {
  gulp.src('src/**/*').pipe(gulp.dest('./build/'))
});

gulp.task('bower', function() {
  return bower().pipe(gulp.dest('./build/vendor/'))
});

gulp.task('server', function() {
  gulp.src('./build').pipe(server())
});

gulp.task('default', ['bower', 'src']);
