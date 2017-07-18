/*
 * grunt-mathjax-node-page
 * https://github.com/dougalsutherland/grunt-mathjax-node-page
 *
 * Copyright (c) 2017 Dougal J. Sutherland
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint only.
  grunt.registerTask('default', ['jshint']);

};
