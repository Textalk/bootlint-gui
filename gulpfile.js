var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
  return gulp.src(['node_modules/bootlint/dist/browser/bootlint.js', './src/*.js'])
    .pipe(concat('bootlint-gui.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
