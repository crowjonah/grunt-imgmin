/*
 * grunt-imgmin
 * https://github.com/crowjonah/grunt-imgmin
 *
 * Copyright (c) 2013 Crow Norlander
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');
  var fs = require('fs');
  var filesize = require('filesize');
  //var shell = require('grunt-shell');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('imgmin', 'Use @rflynn\'s aggressive, lossy image optimizer, imgmin', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    grunt.util.async.forEach(this.files, function (files, next) {
      // Iterate over all specified file groups.
      files.src.forEach(function(src) {
        
        function processed(err, result, code){
          var saved, savedMsg;
          grunt.log.writeln('code: ' + code);
          if (err) {
              grunt.log.writeln(err);
          }

          saved = originalSize - fs.statSync(dest).size;

          if (result.stderr.indexOf('already optimized') !== -1 || saved < 10) {
              savedMsg = 'already optimized';
          } else {
              savedMsg = 'saved ' + filesize(saved);
          }

          grunt.log.writeln('✔ '.green + src + (' (' + savedMsg + ')').grey);
          next();
        }

        var originalSize = fs.statSync(src).size,
            dest = files.dest,
            cp;
        if (path.extname(dest) === '') {
            dest = path.join(dest, path.basename(src));
        }

        cp = grunt.util.spawn({
            cmd: 'imgmin',
            args: [src, dest]
        }, processed);
        

      });
    }.bind(this), this.async());

  });

};
