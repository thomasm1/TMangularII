"use strict";

module.exports = function(grunt) {

    
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // var appConfig = { app: 'ui' };

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'src/*.js'], //,'spec/*.js'
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish'),
            curly: true, // {} around blocks in loops and conditionals
            eqeqeq: true,  //    === better than  ==
            eqnull: false,  //  == null comparisons
            globals: {
                jQuery: true
          }
        }
      },

      // Test settings
      karma: {
          unit: {
          configFile: 'karma.conf.js',
          singleRun: true
          }
      },

      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['test']
      }
    });
  
    grunt.registerTask('test', [
        'karma',
        'jshint'
      ]);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['test']);
  
  };