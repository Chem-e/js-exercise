/* jshint node: true */


var globalConfig = {};
module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    globalConfig: globalConfig,

    jshint: {
      all: {
        src: ["exercises/**/*.js"],
        options: {
          jshintrc: '.jshintrc'
        }
      },

      spec: {
        src: ['spec/<%= globalConfig.file %>Spec.js', 'exercises/<%= globalConfig.file %>.js'],
        options: {
          jshintrc: '.jshintrc'
        }
      }
    },

    jasmine: {
      all: {
        src: 'exercises/exercise10.js',
        options: {
          specs: ['spec/exercise10Spec.js']
        }
      },
      spec: {
        src: 'exercises/exercise10Spec.js',
        options: {
          specs: ['spec/<%= globalConfig.file %>Spec.js']
        }
      }
    },

    watch: {
      files: ['exercises/**.js', 'spec/**.js'],
      tasks: ['jshint:spec','jasmine:spec'],
      options: {
          event: ['all'],
          spawn: false,
          livereload: 35729
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.event.on('watch', function(action, filepath) {
    var pathCompt = filepath.split('/');
    var fileName = (pathCompt[pathCompt.length - 1]).replace('.js','');
    globalConfig.file = fileName;
    console.log(action, filepath, fileName);
  });


  grunt.registerTask('test', ['jasmine:all']);
  grunt.registerTask('default', ['watch']);

  // run one file at a time grunt spec:fileName
  grunt.registerTask('spec', 'Runs a task on a specified file', function (fileName) {
    globalConfig.file = fileName;
    grunt.task.run('jasmine:spec');
  });


};