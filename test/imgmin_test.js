'use strict';

var grunt = require('grunt');
var fs = require('fs');

exports.imgmin = {
  minifyPng: function (test) {
    test.expect(1);

    var actual = fs.statSync(process.cwd() + '/tmp/sublime.png').size;
    var original = fs.statSync(process.cwd() + '/test/fixtures/sublime.png').size;
    test.ok(actual > 0 && actual < original, 'should minify PNG images');

    test.done();
  },
  minifyJpg: function (test) {
    test.expect(1);

    var actual = fs.statSync(process.cwd() + '/tmp/polaroid.jpg').size;
    var original = fs.statSync(process.cwd() + '/test/fixtures/polaroid.jpg').size;
    test.ok(actual > 0 && actual  < original, 'should minify JPG images');

    test.done();
  }
};
