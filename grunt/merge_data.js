var validate = require('../test/validate.js');
var path = require('path');

module.exports = {
  options: {
    asConfig: 'translate.path',
    data: function (data) {
      return validate(data);
    }
  },
  dist: {
    expand: true,
    src: ['*/*.json'],
    cwd: 'src',
    dest: 'dist',
    rename: function(dest, src) {
      var language = src.split(path.sep).slice(0, 1)[0];
      return path.join(dest, language + '.json');
    }
  }
};
