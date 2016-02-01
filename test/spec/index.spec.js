var Validator = require('../../');
var expect = require('expect.js');


describe('validator',function(){
  describe('validateSchemaFile',function(){
    it('validate with $schema',function(){
      var validator = new Validator();
      expect(validator.schemaFile('test/fixture/response.body.json')).to.be.ok();
    });
    it('invalid propety type',function(){
      var validator = new Validator();
      try{
        validator.schemaFile('test/fixture/invalid.json');
        expect().fail('no error was thrown');
      } catch(e) {

      }

    });
    it('invalid schema url',function(){
      var validator = new Validator();
      try{
        validator.schemaFile('test/fixture/invalid2.json');
        expect().fail('no error was thrown');
      }catch(e){

      }
    });
  });
});
