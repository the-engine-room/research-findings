module.exports = function(grunt) {

  //Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/* <%= pkg.name %> <%= grunt.template.today("dd/mm/yyyy") %> */\n'
      },
      build: {
        src: 'src/js/script.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    less: {
      build: {
        options: {
          paths: ['src/less']
        },
        files: {
          'dist/css/main.css': 'src/less/main.less'
        }
      }
    },
    copy: {
			build: {
				files: [
					{
						src: 'src/vendor/jquery/dist/jquery.min.js',
						dest: 'dist/js/vendor/jquery.min.js'
					}
        ]
      }
    },

    watch: {
      uglify: {
        files: 'src/js/script.js',
        tasks: 'uglify:build'
      },
      less: {
        files: 'src/less/*',
        tasks: 'less:build'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', [
    'copy:build',
    'less:build',
    'uglify:build'
  ]);

}
