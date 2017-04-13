const assert = require('assert')
// const chalk = require('chalk')
// const child_process = require('child_process')
const { defineSupportCode } = require('cucumber')
const readdirFilter = require('../../index').default

defineSupportCode(function ({ After, Given, Then }) {
  Given('all the {stringInDoubleQuotes} in tests that start with a {stringInDoubleQuotes}',
    function (fsoType, expr, callback) {
      this.fso_type = fsoType
      this.starts_with_expr = expr

      readdirFilter('tests/', this.starts_with_filter)
        .then((filesArr) => {
          this.objects = filesArr
          callback()
        }, (ex) => { throw ex })
    })

  Given('all the {stringInDoubleQuotes} in tests that end with {stringInDoubleQuotes}',
    function (fsoType, expr, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending')
    })

  Then('there should be \'{int}\' objects',
    function (fsoCount, callback) {
      console.dir(fsoCount)
      console.dir(this.objects.length)
      assert(this.objects.length === fsoCount)
      callback()
    })
})
