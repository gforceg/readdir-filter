let chalk = require('chalk');
let child_process = require('child_process');
// let config = require('../config/tasks-config.js');

module.exports = function () {
  /**
   * run a command in terminal
   */
  this.Given(/^that I execute "([^"]*)"$/, function (command, callback) {
    let y = child_process.execSync(command, 'utf8');
    console.log(chalk.red(y.toString('utf8')));
    callback(null);
  });
}