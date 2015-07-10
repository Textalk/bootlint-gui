var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src([
    'node_modules/bootlint-gui/dist/bootlint-gui.js',
    'node_modules/bootlint-gui/dist/bootlint-gui.css'
  ]).pipe(gulp.dest('bootlint-gui/'));
});
