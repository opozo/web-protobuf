module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    shell: {
      pypb_compile: {
        command: [
          'cd protobuf-2.6.0/examples',
          'make pypb'
        ].join('&&')
      },
      jspb_compile: {
        command: [
          'cd protobuf-2.6.0/examples',
          'make jspb'
        ].join('&&')
      },
      soy_compile: {
        command: [
          'cd frontend/js/closure-template',
          'make compile'
        ].join('&&')
      },
      gss_compile: {
        command: [
          'cd frontend/css/closure-stylesheet',
          'make compile',
        ].join('&&')
      },
      js_plovr: {
        command: [
          'cd frontend/js',
          'make run'
        ].join('&&')
      },
      css_compile: {
        command: [
          'cd frontend/css/yui-compressor',
          'make compile'
        ].join('&&')
      },
      js_compile: {
        command: [
          'cd frontend/js/closure-compiler',
          'make compile'
        ].join('&&')
      },
      webcomponents_compile: {
        command: [
          'cd frontend/components',
          'make vulcanize'
        ].join('&&')
      }
    },

    // Hotswap proto, soy, ng, and gss files for dev.
    watch: {
      proto: {
        files: ['protobuf-2.6.0/examples/*.proto'],
        tasks: [
          'shell:pypb_compile',
          'shell:jspb_compile'
        ]
      },
      soy: {
        files: ['frontend/soy/*.soy'],
        tasks: ['shell:soy_compile']
      },
      ng: {
        files: ['frontend/ng/*.ng'],
        tasks: ['ngtemplates']
      },
      gss: {
        files: ['frontend/css/*.gss'],
        tasks: ['shell:gss_compile']
      }
    },

    // Compile/Bundle Angular templates.
    ngtemplates: {
      app: {
        cwd: 'frontend',
        src: 'ng/*.ng',
        dest: 'frontend/js/src/ng/templates.ng.js',
        options: {
          prefix: '/',
          module: 'webproto.ng',
          bootstrap: function(module, script) {
            return "goog.provide('webproto.ng');\n" +
                   "webproto.ng = angular.module('" + module + "', []).\n" +
                   "\t\trun(['$templateCache',\n" +
                   "\t\t\t\t function($templateCache) {\n" +
                   script + '\n' +
                   "}]);";
          },
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeComments: true
          }
        }
      }
    },

    // Run plovr and watch and show log concurrently.
    concurrent: {
      main: {
        tasks: ['shell:js_plovr', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-shell');

  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('plovr', [
    'shell:js_plovr'
  ]);

  grunt.registerTask('dev', [
    'shell:pypb_compile',
    'shell:jspb_compile',
    'ngtemplates',
    'shell:soy_compile',
    'shell:gss_compile',
    'concurrent'
  ]);

  grunt.registerTask('prod', [
    'shell:pypb_compile',
    'shell:jspb_compile',
    'ngtemplates',
    'shell:soy_compile',
    'shell:gss_compile',
    'shell:css_compile',
    'shell:js_compile',
    'shell:webcomponents_compile'
  ]);

  grunt.registerTask('default', [
    'dev'
  ]);

};
