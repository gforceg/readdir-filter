var { defineSupportCode } = require('cucumber');

function CustomWorld() {

  this.expressions = {
    alpha: /^[a-z]/i,
    number: /^[0-9]/
  }

  this.fso_types = {
    folders: 'isDirectory',
    files: 'isFile'
  }

  this.objects = []
}

defineSupportCode(function ({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld)
})