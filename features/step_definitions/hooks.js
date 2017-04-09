const assert = require('assert')
const chalk = require('chalk')
const child_process = require('child_process')
const { defineSupportCode } = require('cucumber')
const readdirFilter = require('../../readdir-filter/readdir-filter').readdirFilter

defineSupportCode(function ({ After, Given, Then }) {

  Given('all the {stringInDoubleQuotes} in tests that start with a {stringInDoubleQuotes}',
    function (fso_type, prefixed_with, callback) {

      if (this.expressions[prefixed_with == undefined])
        throw 'the only options for arg2 are "alpha" or "number"'
      if (this.fso_types[fso_type] == undefined)
        throw 'the only options for arg1 are "file" or "folder"'

      let is_the_right_type = this.fso_types[fso_type]
      let prefix = this.expressions[prefixed_with]
      readdirFilter('tests/', (
        (fso_name, stats) => fso_name.match(prefix)
          && stats[is_the_right_type]())).then((files_arr) => {
            this.objects = files_arr
            callback()
          }, (ex) => { throw ex })
    });

  Then('there should be \'{int}\' objects',
    function (fso_count, callback) {
      assert(this.objects.length == fso_count)
      callback()
    });

})
