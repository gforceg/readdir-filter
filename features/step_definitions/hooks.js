const assert = require('assert')
const { defineSupportCode } = require('cucumber')

defineSupportCode(function ({ After, Given, Then }) {
  Given('all the {stringInDoubleQuotes} in tests that start with a {stringInDoubleQuotes}',
    function (fsoType, expr, callback) {
      this.fso_type = fsoType
      this.starts_with_expr = expr
      this.filter_objects(this.starts_with_filter, callback)
    })

  Given('all the {stringInDoubleQuotes} in tests that end with {stringInDoubleQuotes}',
    function (fsoType, expr, callback) {
      this.fso_type = fsoType
      this.ends_with_expr = expr
      this.filter_objects(this.ends_with_filter, callback)
    })

  Then('there should be \'{int}\' objects',
    function (fsoCount, callback) {
      console.dir(fsoCount)
      console.dir(this.objects.length)
      assert(this.objects.length === fsoCount)
      callback()
    })
})
