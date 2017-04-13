var { defineSupportCode } = require('cucumber')
const readdirFilter = require('../../index').default

function CustomWorld () {
  this.objects = []

  this.starts_with_expressions = {
    alpha: /^[a-z]/i,
    number: /^[0-9]/
  }

  this.ends_with_expressions = {
    '.txt': /\.txt$/i,
    '.zip': /\.zip$/i
  }

  this.fso_types = {
    folders: 'isDirectory',
    files: 'isFile'
  }

  this.fso_type
  this.starts_with
  this.ends_with

  this.validate_expression = (dict, e) => {
    if (dict === undefined) {
      throw new Error('not a valid dict' + dict)
    }

    if (dict[e] === undefined) {
      throw new Error('the only options for arg2 are: ' + Object.getOwnPropertyNames(dict))
    }
  }

  this.validate_fso_type = () => {
    if (this.fso_types[this.fso_type] === undefined) {
      throw new Error('the only options for arg1 are: ' + Object.getOwnPropertyNames(this.fso_types))
    }
  }

  this.starts_with_filter = (fsoName, stats) => {
    this.validate_expression(this.starts_with_expressions, this.starts_with_expr)
    this.validate_fso_type()

    return fsoName.match(this.starts_with_expressions[this.starts_with_expr]) &&
      stats[this.fso_types[this.fso_type]]()
  }

  this.ends_with_filter = (fsoName, stats) => {
    this.validate_expression(this.ends_with_expressions, this.ends_with_expr)
    this.validate_fso_type()
    return fsoName.match(this.ends_with_expressions[this.ends_with_expr]) && stats[this.fso_types[this.fso_type]]()
  }

  this.filter_objects = (filter, callback) => {
    readdirFilter('tests/', filter)
      .then((filesArr) => {
        this.objects = filesArr
        callback()
      }, (ex) => { throw ex })
  }
}

defineSupportCode(function ({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld)
})
