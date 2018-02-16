var util = {
  debug: false,
  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  },
  extend: function(dest, source) {
    source = source || {};
    for(var key in source) {
      if(source.hasOwnProperty(key)) {
        dest[key] = source[key];
      }
    }
    return dest;
  },
  randomId: function (ip) {
          return (Math.random().toString(36)).substr(2, 5)+":"+ip.substr(7);
      },
  prettyError: function (msg) {
    console.log('ERROR PeerServer: ', msg);
  }
};

module.exports = util;
