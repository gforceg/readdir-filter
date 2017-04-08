let gulp = require('gulp');
let runSequence = require('run-sequence').use(gulp);

require('require-dir')('./gulp-tasks');

//fixme: auto gitignore configs.BUNDLE_DIR

gulp.task('build', (done) => {
  runSequence(
    'to-do',
    'set build vars',
    'make barrel',
    'copy temp',
    // do stuff in .tmp/
    'copy out',
    'compile',
    'bundle',
    'remove temp',
    done
  );
});

gulp.task('default', (done) => {
  runSequence(
    'to-do',
    'set build vars',
    'make barrel',
    'copy temp',
    // do stuff in .tmp/
    'copy out',
    'compile',
    'test',
    done
  );
});
gulp.task('watch', (done) => {
  gulp.watch('features/**/*.{js,feature}', ['test'])
  gulp.watch('src/**/*.ts', ['default'])
});