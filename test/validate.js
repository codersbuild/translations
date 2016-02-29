var grunt = require('grunt');
var expected = require('./valid.json');

module.exports = function(data) {

  var errors = [];
  var currentFile = '';
  var keys = [];

  function validateJSON(testedObject, expectedObject, keyCheck, firstLevel){
    if(typeof testedObject === 'object' && typeof expectedObject === 'object'){
      for (var key in testedObject) {
        if(firstLevel){
          keys = Object.keys(testedObject);
          currentFile = keys[keys.indexOf(key)] + '.json';
        }
        if( !expectedObject.hasOwnProperty(key)){
          if(keyCheck){
            errors.push('\n • missing key "' + key + '" in ' + currentFile);
          } else {
            errors.push('\n • invalid key "' + key + '" in ' + currentFile);
          }
        } else {
          if(typeof testedObject[key] === 'object' && typeof expectedObject[key] === 'object'){
            validateJSON(testedObject[key], expectedObject[key], keyCheck, false);
          }
        }
      }
    }
  }

  // Make sure Parsed Data keys exist in Expected Data Set
  validateJSON(data, expected, false, true);

  // We also need to make sure that all keys in Expected Data Set exist in Parsed Data
  validateJSON(expected, data, true, true);

  // Throw Grunt error if JSON has issues
  if (errors.length > 0){
    return grunt.fatal('\n' + errors.join('') + '\n');
  }
};
