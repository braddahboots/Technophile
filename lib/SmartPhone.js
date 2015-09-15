var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  this.systemName = 'Smart Phone';
}


module.exports = SmartPhone;