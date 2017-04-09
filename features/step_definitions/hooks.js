let chalk = require('chalk')
let child_process = require('child_process')
let { defineSupportCode } = require('cucumber')
let readdirFilter = require('../../readdir-filter/readdir-filter').readdirFilter

defineSupportCode(function ({ After, Given, Then }) {

  Given('all the {stringInDoubleQuotes} in tests that start with a {stringInDoubleQuotes}',
    function (fso_type, prefixed_with, callback) {


      if (this.expressions[prefixed_with == undefined])
      throw 'the only options for arg2 are "alpha" or "number"'
      if (this.fso_types[fso_type] == undefined)
      throw 'the only options for arg1 are "file" or "folder"'

      let is_the_right_type = this.fso_types[fso_type]
      let prefix = this.expressions[prefixed_with]

      callback(null, 'pending');
    });

  Then('there should be \'{int}\' {stringInDoubleQuotes}',
    function (fso_count, fso_type, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });

})
