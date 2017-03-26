var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  // this.x = y;
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})