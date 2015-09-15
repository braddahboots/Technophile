var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function NintendoDS() {
  this.systemName = 'Nintendo DS';
}

module.exports = NintendoDS;