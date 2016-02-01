var fs = require('fs');
var fetch = require('node-fetch');

var debug = require('debug')('cli-validator-for-jsonschema');

var AJV = require('ajv');


function Validator (option) {
  this.option = option;
}

/**
 *
 */
Validator.prototype.schemaFile = function(filePath) {
  debug('Validation start:' + filePath);
  var schemaString = fs.readFileSync(filePath).toString('utf8');

  return this.schemaString(schemaString);
};

/**
 *
 */
Validator.prototype.schemaString = function(schemaString) {
  var object = JSON.parse(schemaString);
  return this.schemaObject(object);
}

/**
 *
 */
Validator.prototype.schemaObject = function(schemaObject) {
  var ajv = AJV();
  ajv.validateSchema(schemaObject);

  if (ajv.errors) {
    var errors = ajv.errors.map(function(e){
      return JSON.stringify(e);
    });
    throw new Error(errors.join('\n'));
  }
  
  return true;
};



module.exports = Validator;
