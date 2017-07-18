/*
 * grunt-mathjax-node-page
 * https://github.com/dougalsutherland/grunt-mathjax-node-page
 *
 * Copyright (c) 2017 Dougal J. Sutherland
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk');

module.exports = function(grunt) {
  var mjpage = require("mathjax-node-page").mjpage;

  grunt.registerMultiTask('mathjax_node_page', 'Prerender MathJax in HTML pages.', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      page: {},
      mjnode: {svg: true}
    });

    this.files.forEach(function(f) {
      if (f.src.length !== 1) {
        grunt.log.warn("One source file per dest, please; got " + f.src);
        return false;
      }
      if (!grunt.file.exists(f.src[0])) {
        grunt.log.warn("Can't find source file '" + f.src[0] + "'.");
        return false;
      }

      var src = grunt.file.read(f.src);
      mjpage(src, options.page, options.mjnode, function(result) {
        grunt.file.write(f.dest, result);
      });
    });
  });
};
