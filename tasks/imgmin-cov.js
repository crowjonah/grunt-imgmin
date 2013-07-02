// instrument by jscoverage, do not modifly this file
(function () {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (!BASE._$jscoverage) {
    BASE._$jscoverage = {};
    BASE._$jscoverage_cond = {};
    BASE._$jscoverage_done = function (file, line, express) {
      if (arguments.length === 2) {
        BASE._$jscoverage[file][line] ++;
      } else {
        BASE._$jscoverage_cond[file][line] ++;
        return express;
      }
    };
    BASE._$jscoverage_init = function (base, file, lines) {
      var tmp = [];
      for (var i = 0; i < lines.length; i ++) {
        tmp[lines[i]] = 0;
      }
      base[file] = tmp;
    };
  }
})();
_$jscoverage_init(_$jscoverage, "tasks/imgmin.js",[11,12,13,14,20,22,24,26,29,30,31,32,35,37,38,40,43,44,47,50,51,54]);
_$jscoverage_init(_$jscoverage_cond, "tasks/imgmin.js",[31,37,37,50]);
_$jscoverage["tasks/imgmin.js"].source = ["/*"," * grunt-imgmin"," * https://github.com/crowjonah/grunt-imgmin"," *"," * Copyright (c) 2013 Crow Norlander"," * Licensed under the MIT license."," */","","'use strict';","","module.exports = function(grunt) {","  var path = require('path');","  var fs = require('fs');","  var filesize = require('filesize');","  //var shell = require('grunt-shell');","","  // Please see the Grunt documentation for more information regarding task","  // creation: http://gruntjs.com/creating-tasks","","  grunt.registerMultiTask('imgmin', 'Use @rflynn\\'s aggressive, lossy image optimizer, imgmin', function() {","    // Merge task-specific and/or target-specific options with these defaults.","    var options = this.options();","","    grunt.util.async.forEach(this.files, function (files, next) {","      // Iterate over all specified file groups.","      files.src.forEach(function(src) {","        ","        function processed(err, result, code){","          var saved, savedMsg;","          grunt.log.writeln('code: ' + code);","          if (err) {","              grunt.log.writeln(err);","          }","","          saved = originalSize - fs.statSync(dest).size;","","          if (result.stderr.indexOf('already optimized') !== -1 || saved < 10) {","              savedMsg = 'already optimized';","          } else {","              savedMsg = 'saved ' + filesize(saved);","          }","","          grunt.log.writeln('✔ '.green + src + (' (' + savedMsg + ')').grey);","          next();","        }","","        var originalSize = fs.statSync(src).size,","            dest = files.dest,","            cp;","        if (path.extname(dest) === '') {","            dest = path.join(dest, path.basename(src));","        }","","        cp = grunt.util.spawn({","            cmd: 'imgmin',","            args: [src, dest]","        }, processed);","        ","","      });","    }.bind(this), this.async());","","  });","","};",""];
"use strict";

_$jscoverage_done("tasks/imgmin.js", 11);
module.exports = function(grunt) {
    _$jscoverage_done("tasks/imgmin.js", 12);
    var path = require("path");
    _$jscoverage_done("tasks/imgmin.js", 13);
    var fs = require("fs");
    _$jscoverage_done("tasks/imgmin.js", 14);
    var filesize = require("filesize");
    _$jscoverage_done("tasks/imgmin.js", 20);
    grunt.registerMultiTask("imgmin", "Use @rflynn's aggressive, lossy image optimizer, imgmin", function() {
        _$jscoverage_done("tasks/imgmin.js", 22);
        var options = this.options();
        _$jscoverage_done("tasks/imgmin.js", 24);
        grunt.util.async.forEach(this.files, function(files, next) {
            _$jscoverage_done("tasks/imgmin.js", 26);
            files.src.forEach(function(src) {
                function processed(err, result, code) {
                    _$jscoverage_done("tasks/imgmin.js", 29);
                    var saved, savedMsg;
                    _$jscoverage_done("tasks/imgmin.js", 30);
                    grunt.log.writeln("code: " + code);
                    _$jscoverage_done("tasks/imgmin.js", 31);
                    if (_$jscoverage_done("tasks/imgmin.js", 31, err)) {
                        _$jscoverage_done("tasks/imgmin.js", 32);
                        grunt.log.writeln(err);
                    }
                    _$jscoverage_done("tasks/imgmin.js", 35);
                    saved = originalSize - fs.statSync(dest).size;
                    _$jscoverage_done("tasks/imgmin.js", 37);
                    if (_$jscoverage_done("tasks/imgmin.js", 37, result.stderr.indexOf("already optimized") !== -1) || _$jscoverage_done("tasks/imgmin.js", 37, saved < 10)) {
                        _$jscoverage_done("tasks/imgmin.js", 38);
                        savedMsg = "already optimized";
                    } else {
                        _$jscoverage_done("tasks/imgmin.js", 40);
                        savedMsg = "saved " + filesize(saved);
                    }
                    _$jscoverage_done("tasks/imgmin.js", 43);
                    grunt.log.writeln("✔ ".green + src + (" (" + savedMsg + ")").grey);
                    _$jscoverage_done("tasks/imgmin.js", 44);
                    next();
                }
                _$jscoverage_done("tasks/imgmin.js", 47);
                var originalSize = fs.statSync(src).size, dest = files.dest, cp;
                _$jscoverage_done("tasks/imgmin.js", 50);
                if (_$jscoverage_done("tasks/imgmin.js", 50, path.extname(dest) === "")) {
                    _$jscoverage_done("tasks/imgmin.js", 51);
                    dest = path.join(dest, path.basename(src));
                }
                _$jscoverage_done("tasks/imgmin.js", 54);
                cp = grunt.util.spawn({
                    cmd: "imgmin",
                    args: [ src, dest ]
                }, processed);
            });
        }.bind(this), this.async());
    });
};