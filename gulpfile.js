let gulp = require('gulp');
let runSequence = require('run-sequence').use(gulp);

require('require-dir')('./gulp-tasks');

gulp.task('build', (done) => {
  runSequence(
    'to-do',
    'set build vars',
    'copy temp',
    'compile',
    'copy out',
    'bundle',
    'remove temp',
    done
  );
});

gulp.task('default', (done) => {
  runSequence(
    'to-do',
    'set build vars',
    'copy temp',
    'compile',
    'copy out',
    'test',
    done
  );
});

gulp.task('watch', (done) => {
  gulp.watch('features/**/*.{js,feature}', ['test'])
  gulp.watch('src/**/*.ts', ['default'])
});
