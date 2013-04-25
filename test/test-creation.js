/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('assemble generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('assemble:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '_config.yml',
      'Gruntfile.js',
      'package.json',
      'dist',
      'src'
    ];
    /*
    helpers.mockPrompt(this.app, {
      'someOption': 'Y'
    });
    */
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});