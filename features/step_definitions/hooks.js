const assert = require('assert')
// const chalk = require('chalk')
// const child_process = require('child_process')
const { defineSupportCode } = require('cucumber')
// const readdirFilter = require('../../index').default

defineSupportCode(function ({ After, Given, Then }) {
  Given('all the {stringInDoubleQuotes} in tests that start with a {stringInDoubleQuotes}',
    function (fsoType, expr, callback) {
      this.fso_type = fsoType
      this.starts_with_expr = expr
      this.filter_objects(this.starts_with_filter, callback)
      // readdirFilter('tests/', this.starts_with_filter)
      //   .then((filesArr) => {
      //     this.objects = filesArr
      //     callback()
      //   }, (ex) => { throw ex })
    })

  Given('all the {stringInDoubleQuotes} in tests that end with {stringInDoubleQuotes}',
    function (fsoType, expr, callback) {
      this.fso_type = fsoType
      this.ends_with_expr = expr
      this.filter_objects(this.ends_with_filter, callback)
    })
  //   readdirFilter('tests/', this.ends_with_filter)
  //     .then((filesArr) => {
  //       this.objects = filesArr
  //       callback()
  //     }, (ex) => { throw ex })
  // })
  // Write code here that turns the phrase above into concrete actions
  //   callback(null, 'pending')
  // })

  Then('there should be \'{int}\' objects',
    function (fsoCount, callback) {
      console.dir(fsoCount)
      console.dir(this.objects.length)
      assert(this.objects.length === fsoCount)
      callback()
    })
})
