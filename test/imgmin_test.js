'use strict';

var grunt = require('grunt');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

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
