'use strict';

module.exports = function(grunt) {
  var path = require('path');
  var fs = require('fs');
  var filesize = require('filesize');

  grunt.registerMultiTask('imgmin', 'Use @rflynn\'s aggressive, lossy image optimizer, imgmin', function() {
    var options = this.options();

    grunt.util.async.forEach(this.files, function (files, next) {
      // Iterate over all specified file groups.
      files.src.forEach(function(src) {
        
        function processed(err, result, code){
          var saved, savedMsg;
          
          if (err) {
              grunt.log.error('Error code: ' + code);
              grunt.log.error(err);
              if (code === 127) {
                  grunt.log.error('Make sure you\'ve installed `imgmin` properly: https://github.com/rflynn/imgmin');
              }
          }
          else {
            grunt.log.writeln('code: ' + code);
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
