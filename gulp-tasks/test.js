let gulp = require('gulp');
let exec = require('child_process').exec

let config = require('../config/tasks-config.js');

gulp.task('test', (done) => {
  exec('npm test', (error, stdout, stderr) => {
    if (error) { console.log(error) }
    if (stdout) { console.log(stdout) }
    if (stderr) { console.log(stderr) }
    done()
  })
});
