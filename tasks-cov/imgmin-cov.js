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
_$jscoverage_init(_$jscoverage, "tasks/imgmin-cov.js",[2,3,4,5,6,7,9,11,12,13,14,15,16,18,19,22,23,24,25,27,31,32,33,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,54,55,56,57,58,59,60,62,63,64,65,66,67,69,70,72,73,74,75,77,78,79,80,81,82,84,85]);
_$jscoverage_init(_$jscoverage_cond, "tasks/imgmin-cov.js",[4,6,11,15,58,65,65,80]);
_$jscoverage["tasks/imgmin-cov.js"].source = ["// instrument by jscoverage, do not modifly this file","(function () {","  var BASE;","  if (typeof global === 'object') {","    BASE = global;","  } else if (typeof window === 'object') {","    BASE = window;","  } else {","    throw new Error('[jscoverage] unknow ENV!');","  }","  if (!BASE._$jscoverage) {","    BASE._$jscoverage = {};","    BASE._$jscoverage_cond = {};","    BASE._$jscoverage_done = function (file, line, express) {","      if (arguments.length === 2) {","        BASE._$jscoverage[file][line] ++;","      } else {","        BASE._$jscoverage_cond[file][line] ++;","        return express;","      }","    };","    BASE._$jscoverage_init = function (base, file, lines) {","      var tmp = [];","      for (var i = 0; i < lines.length; i ++) {","        tmp[lines[i]] = 0;","      }","      base[file] = tmp;","    };","  }","})();","_$jscoverage_init(_$jscoverage, \"tasks/imgmin.js\",[11,12,13,14,20,22,24,26,29,30,31,32,35,37,38,40,43,44,47,50,51,54]);","_$jscoverage_init(_$jscoverage_cond, \"tasks/imgmin.js\",[31,37,37,50]);","_$jscoverage[\"tasks/imgmin.js\"].source = [\"/*\",\" * grunt-imgmin\",\" * https://github.com/crowjonah/grunt-imgmin\",\" *\",\" * Copyright (c) 2013 Crow Norlander\",\" * Licensed under the MIT license.\",\" */\",\"\",\"'use strict';\",\"\",\"module.exports = function(grunt) {\",\"  var path = require('path');\",\"  var fs = require('fs');\",\"  var filesize = require('filesize');\",\"  //var shell = require('grunt-shell');\",\"\",\"  // Please see the Grunt documentation for more information regarding task\",\"  // creation: http://gruntjs.com/creating-tasks\",\"\",\"  grunt.registerMultiTask('imgmin', 'Use @rflynn\\\\'s aggressive, lossy image optimizer, imgmin', function() {\",\"    // Merge task-specific and/or target-specific options with these defaults.\",\"    var options = this.options();\",\"\",\"    grunt.util.async.forEach(this.files, function (files, next) {\",\"      // Iterate over all specified file groups.\",\"      files.src.forEach(function(src) {\",\"        \",\"        function processed(err, result, code){\",\"          var saved, savedMsg;\",\"          grunt.log.writeln('code: ' + code);\",\"          if (err) {\",\"              grunt.log.writeln(err);\",\"          }\",\"\",\"          saved = originalSize - fs.statSync(dest).size;\",\"\",\"          if (result.stderr.indexOf('already optimized') !== -1 || saved < 10) {\",\"              savedMsg = 'already optimized';\",\"          } else {\",\"              savedMsg = 'saved ' + filesize(saved);\",\"          }\",\"\",\"          grunt.log.writeln('✔ '.green + src + (' (' + savedMsg + ')').grey);\",\"          next();\",\"        }\",\"\",\"        var originalSize = fs.statSync(src).size,\",\"            dest = files.dest,\",\"            cp;\",\"        if (path.extname(dest) === '') {\",\"            dest = path.join(dest, path.basename(src));\",\"        }\",\"\",\"        cp = grunt.util.spawn({\",\"            cmd: 'imgmin',\",\"            args: [src, dest]\",\"        }, processed);\",\"        \",\"\",\"      });\",\"    }.bind(this), this.async());\",\"\",\"  });\",\"\",\"};\",\"\"];","\"use strict\";","","_$jscoverage_done(\"tasks/imgmin.js\", 11);","module.exports = function(grunt) {","    _$jscoverage_done(\"tasks/imgmin.js\", 12);","    var path = require(\"path\");","    _$jscoverage_done(\"tasks/imgmin.js\", 13);","    var fs = require(\"fs\");","    _$jscoverage_done(\"tasks/imgmin.js\", 14);","    var filesize = require(\"filesize\");","    _$jscoverage_done(\"tasks/imgmin.js\", 20);","    grunt.registerMultiTask(\"imgmin\", \"Use @rflynn's aggressive, lossy image optimizer, imgmin\", function() {","        _$jscoverage_done(\"tasks/imgmin.js\", 22);","        var options = this.options();","        _$jscoverage_done(\"tasks/imgmin.js\", 24);","        grunt.util.async.forEach(this.files, function(files, next) {","            _$jscoverage_done(\"tasks/imgmin.js\", 26);","            files.src.forEach(function(src) {","                function processed(err, result, code) {","                    _$jscoverage_done(\"tasks/imgmin.js\", 29);","                    var saved, savedMsg;","                    _$jscoverage_done(\"tasks/imgmin.js\", 30);","                    grunt.log.writeln(\"code: \" + code);","                    _$jscoverage_done(\"tasks/imgmin.js\", 31);","                    if (_$jscoverage_done(\"tasks/imgmin.js\", 31, err)) {","                        _$jscoverage_done(\"tasks/imgmin.js\", 32);","                        grunt.log.writeln(err);","                    }","                    _$jscoverage_done(\"tasks/imgmin.js\", 35);","                    saved = originalSize - fs.statSync(dest).size;","                    _$jscoverage_done(\"tasks/imgmin.js\", 37);","                    if (_$jscoverage_done(\"tasks/imgmin.js\", 37, result.stderr.indexOf(\"already optimized\") !== -1) || _$jscoverage_done(\"tasks/imgmin.js\", 37, saved < 10)) {","                        _$jscoverage_done(\"tasks/imgmin.js\", 38);","                        savedMsg = \"already optimized\";","                    } else {","                        _$jscoverage_done(\"tasks/imgmin.js\", 40);","                        savedMsg = \"saved \" + filesize(saved);","                    }","                    _$jscoverage_done(\"tasks/imgmin.js\", 43);","                    grunt.log.writeln(\"✔ \".green + src + (\" (\" + savedMsg + \")\").grey);","                    _$jscoverage_done(\"tasks/imgmin.js\", 44);","                    next();","                }","                _$jscoverage_done(\"tasks/imgmin.js\", 47);","                var originalSize = fs.statSync(src).size, dest = files.dest, cp;","                _$jscoverage_done(\"tasks/imgmin.js\", 50);","                if (_$jscoverage_done(\"tasks/imgmin.js\", 50, path.extname(dest) === \"\")) {","                    _$jscoverage_done(\"tasks/imgmin.js\", 51);","                    dest = path.join(dest, path.basename(src));","                }","                _$jscoverage_done(\"tasks/imgmin.js\", 54);","                cp = grunt.util.spawn({","                    cmd: \"imgmin\",","                    args: [ src, dest ]","                }, processed);","            });","        }.bind(this), this.async());","    });","};"];
_$jscoverage_done("tasks/imgmin-cov.js", 2);
(function() {
    _$jscoverage_done("tasks/imgmin-cov.js", 3);
    var BASE;
    _$jscoverage_done("tasks/imgmin-cov.js", 4);
    if (_$jscoverage_done("tasks/imgmin-cov.js", 4, typeof global === "object")) {
        _$jscoverage_done("tasks/imgmin-cov.js", 5);
        BASE = global;
    } else {
        _$jscoverage_done("tasks/imgmin-cov.js", 6);
        if (_$jscoverage_done("tasks/imgmin-cov.js", 6, typeof window === "object")) {
            _$jscoverage_done("tasks/imgmin-cov.js", 7);
            BASE = window;
        } else {
            _$jscoverage_done("tasks/imgmin-cov.js", 9);
            throw new Error("[jscoverage] unknow ENV!");
        }
    }
    _$jscoverage_done("tasks/imgmin-cov.js", 11);
    if (_$jscoverage_done("tasks/imgmin-cov.js", 11, !BASE._$jscoverage)) {
        _$jscoverage_done("tasks/imgmin-cov.js", 12);
        BASE._$jscoverage = {};
        _$jscoverage_done("tasks/imgmin-cov.js", 13);
        BASE._$jscoverage_cond = {};
        _$jscoverage_done("tasks/imgmin-cov.js", 14);
        BASE._$jscoverage_done = function(file, line, express) {
            _$jscoverage_done("tasks/imgmin-cov.js", 15);
            if (_$jscoverage_done("tasks/imgmin-cov.js", 15, arguments.length === 2)) {
                _$jscoverage_done("tasks/imgmin-cov.js", 16);
                BASE._$jscoverage[file][line]++;
            } else {
                _$jscoverage_done("tasks/imgmin-cov.js", 18);
                BASE._$jscoverage_cond[file][line]++;
                _$jscoverage_done("tasks/imgmin-cov.js", 19);
                return express;
            }
        };
        _$jscoverage_done("tasks/imgmin-cov.js", 22);
        BASE._$jscoverage_init = function(base, file, lines) {
            _$jscoverage_done("tasks/imgmin-cov.js", 23);
            var tmp = [];
            _$jscoverage_done("tasks/imgmin-cov.js", 24);
            for (var i = 0; i < lines.length; i++) {
                _$jscoverage_done("tasks/imgmin-cov.js", 25);
                tmp[lines[i]] = 0;
            }
            _$jscoverage_done("tasks/imgmin-cov.js", 27);
            base[file] = tmp;
        };
    }
})();

_$jscoverage_done("tasks/imgmin-cov.js", 31);
_$jscoverage_init(_$jscoverage, "tasks/imgmin.js", [ 11, 12, 13, 14, 20, 22, 24, 26, 29, 30, 31, 32, 35, 37, 38, 40, 43, 44, 47, 50, 51, 54 ]);

_$jscoverage_done("tasks/imgmin-cov.js", 32);
_$jscoverage_init(_$jscoverage_cond, "tasks/imgmin.js", [ 31, 37, 37, 50 ]);

_$jscoverage_done("tasks/imgmin-cov.js", 33);
_$jscoverage["tasks/imgmin.js"].source = [ "/*", " * grunt-imgmin", " * https://github.com/crowjonah/grunt-imgmin", " *", " * Copyright (c) 2013 Crow Norlander", " * Licensed under the MIT license.", " */", "", "'use strict';", "", "module.exports = function(grunt) {", "  var path = require('path');", "  var fs = require('fs');", "  var filesize = require('filesize');", "  //var shell = require('grunt-shell');", "", "  // Please see the Grunt documentation for more information regarding task", "  // creation: http://gruntjs.com/creating-tasks", "", "  grunt.registerMultiTask('imgmin', 'Use @rflynn\\'s aggressive, lossy image optimizer, imgmin', function() {", "    // Merge task-specific and/or target-specific options with these defaults.", "    var options = this.options();", "", "    grunt.util.async.forEach(this.files, function (files, next) {", "      // Iterate over all specified file groups.", "      files.src.forEach(function(src) {", "        ", "        function processed(err, result, code){", "          var saved, savedMsg;", "          grunt.log.writeln('code: ' + code);", "          if (err) {", "              grunt.log.writeln(err);", "          }", "", "          saved = originalSize - fs.statSync(dest).size;", "", "          if (result.stderr.indexOf('already optimized') !== -1 || saved < 10) {", "              savedMsg = 'already optimized';", "          } else {", "              savedMsg = 'saved ' + filesize(saved);", "          }", "", "          grunt.log.writeln('✔ '.green + src + (' (' + savedMsg + ')').grey);", "          next();", "        }", "", "        var originalSize = fs.statSync(src).size,", "            dest = files.dest,", "            cp;", "        if (path.extname(dest) === '') {", "            dest = path.join(dest, path.basename(src));", "        }", "", "        cp = grunt.util.spawn({", "            cmd: 'imgmin',", "            args: [src, dest]", "        }, processed);", "        ", "", "      });", "    }.bind(this), this.async());", "", "  });", "", "};", "" ];

_$jscoverage_done("tasks/imgmin-cov.js", 34);
"use strict";

_$jscoverage_done("tasks/imgmin-cov.js", 36);
_$jscoverage_done("tasks/imgmin.js", 11);

_$jscoverage_done("tasks/imgmin-cov.js", 37);
module.exports = function(grunt) {
    _$jscoverage_done("tasks/imgmin-cov.js", 38);
    _$jscoverage_done("tasks/imgmin.js", 12);
    _$jscoverage_done("tasks/imgmin-cov.js", 39);
    var path = require("path");
    _$jscoverage_done("tasks/imgmin-cov.js", 40);
    _$jscoverage_done("tasks/imgmin.js", 13);
    _$jscoverage_done("tasks/imgmin-cov.js", 41);
    var fs = require("fs");
    _$jscoverage_done("tasks/imgmin-cov.js", 42);
    _$jscoverage_done("tasks/imgmin.js", 14);
    _$jscoverage_done("tasks/imgmin-cov.js", 43);
    var filesize = require("filesize");
    _$jscoverage_done("tasks/imgmin-cov.js", 44);
    _$jscoverage_done("tasks/imgmin.js", 20);
    _$jscoverage_done("tasks/imgmin-cov.js", 45);
    grunt.registerMultiTask("imgmin", "Use @rflynn's aggressive, lossy image optimizer, imgmin", function() {
        _$jscoverage_done("tasks/imgmin-cov.js", 46);
        _$jscoverage_done("tasks/imgmin.js", 22);
        _$jscoverage_done("tasks/imgmin-cov.js", 47);
        var options = this.options();
        _$jscoverage_done("tasks/imgmin-cov.js", 48);
        _$jscoverage_done("tasks/imgmin.js", 24);
        _$jscoverage_done("tasks/imgmin-cov.js", 49);
        grunt.util.async.forEach(this.files, function(files, next) {
            _$jscoverage_done("tasks/imgmin-cov.js", 50);
            _$jscoverage_done("tasks/imgmin.js", 26);
            _$jscoverage_done("tasks/imgmin-cov.js", 51);
            files.src.forEach(function(src) {
                function processed(err, result, code) {
                    _$jscoverage_done("tasks/imgmin-cov.js", 53);
                    _$jscoverage_done("tasks/imgmin.js", 29);
                    _$jscoverage_done("tasks/imgmin-cov.js", 54);
                    var saved, savedMsg;
                    _$jscoverage_done("tasks/imgmin-cov.js", 55);
                    _$jscoverage_done("tasks/imgmin.js", 30);
                    _$jscoverage_done("tasks/imgmin-cov.js", 56);
                    grunt.log.writeln("code: " + code);
                    _$jscoverage_done("tasks/imgmin-cov.js", 57);
                    _$jscoverage_done("tasks/imgmin.js", 31);
                    _$jscoverage_done("tasks/imgmin-cov.js", 58);
                    if (_$jscoverage_done("tasks/imgmin-cov.js", 58, _$jscoverage_done("tasks/imgmin.js", 31, err))) {
                        _$jscoverage_done("tasks/imgmin-cov.js", 59);
                        _$jscoverage_done("tasks/imgmin.js", 32);
                        _$jscoverage_done("tasks/imgmin-cov.js", 60);
                        grunt.log.writeln(err);
                    }
                    _$jscoverage_done("tasks/imgmin-cov.js", 62);
                    _$jscoverage_done("tasks/imgmin.js", 35);
                    _$jscoverage_done("tasks/imgmin-cov.js", 63);
                    saved = originalSize - fs.statSync(dest).size;
                    _$jscoverage_done("tasks/imgmin-cov.js", 64);
                    _$jscoverage_done("tasks/imgmin.js", 37);
                    _$jscoverage_done("tasks/imgmin-cov.js", 65);
                    if (_$jscoverage_done("tasks/imgmin-cov.js", 65, _$jscoverage_done("tasks/imgmin.js", 37, result.stderr.indexOf("already optimized") !== -1)) || _$jscoverage_done("tasks/imgmin-cov.js", 65, _$jscoverage_done("tasks/imgmin.js", 37, saved < 10))) {
                        _$jscoverage_done("tasks/imgmin-cov.js", 66);
                        _$jscoverage_done("tasks/imgmin.js", 38);
                        _$jscoverage_done("tasks/imgmin-cov.js", 67);
                        savedMsg = "already optimized";
                    } else {
                        _$jscoverage_done("tasks/imgmin-cov.js", 69);
                        _$jscoverage_done("tasks/imgmin.js", 40);
                        _$jscoverage_done("tasks/imgmin-cov.js", 70);
                        savedMsg = "saved " + filesize(saved);
                    }
                    _$jscoverage_done("tasks/imgmin-cov.js", 72);
                    _$jscoverage_done("tasks/imgmin.js", 43);
                    _$jscoverage_done("tasks/imgmin-cov.js", 73);
                    grunt.log.writeln("✔ ".green + src + (" (" + savedMsg + ")").grey);
                    _$jscoverage_done("tasks/imgmin-cov.js", 74);
                    _$jscoverage_done("tasks/imgmin.js", 44);
                    _$jscoverage_done("tasks/imgmin-cov.js", 75);
                    next();
                }
                _$jscoverage_done("tasks/imgmin-cov.js", 77);
                _$jscoverage_done("tasks/imgmin.js", 47);
                _$jscoverage_done("tasks/imgmin-cov.js", 78);
                var originalSize = fs.statSync(src).size, dest = files.dest, cp;
                _$jscoverage_done("tasks/imgmin-cov.js", 79);
                _$jscoverage_done("tasks/imgmin.js", 50);
                _$jscoverage_done("tasks/imgmin-cov.js", 80);
                if (_$jscoverage_done("tasks/imgmin-cov.js", 80, _$jscoverage_done("tasks/imgmin.js", 50, path.extname(dest) === ""))) {
                    _$jscoverage_done("tasks/imgmin-cov.js", 81);
                    _$jscoverage_done("tasks/imgmin.js", 51);
                    _$jscoverage_done("tasks/imgmin-cov.js", 82);
                    dest = path.join(dest, path.basename(src));
                }
                _$jscoverage_done("tasks/imgmin-cov.js", 84);
                _$jscoverage_done("tasks/imgmin.js", 54);
                _$jscoverage_done("tasks/imgmin-cov.js", 85);
                cp = grunt.util.spawn({
                    cmd: "imgmin",
                    args: [ src, dest ]
                }, processed);
            });
        }.bind(this), this.async());
    });
};