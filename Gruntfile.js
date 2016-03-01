module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        name: 'ifteam',

		banner: '/*!\n' +
				' * ifteam.github.io <%= pkg.version %> by <%= pkg.author %>\n' +
				' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' * Licensed under the <%= pkg.license %> license\n' +
				' */\n',

		clean: {
			dist: 'dist'
		},

		watch: {
			css: {
                files: "src/less/*.less",
	            tasks: ["less"]
            },

            js: {
                files: ["src/js/*.js", "src/js/*.jsx"],
                tasts: ["babel"]
            }
		},

		less: {
			compileCore: {
				options: {
					strictMath: true,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: '<%= name %>.css.map',
					sourceMapFilename: 'dist/css/<%= name %>.css.map'
				},

				src: "src/less/<%= name %>.less",
				dest: "dist/css/<%= name %>.css"
			}
		},

		autoprefixer: {
			options: {
				browsers: [
					'Android >= 4',
					'Chrome >= 20',
					'Firefox >= 24',
					'Explorer >= 9',
					'iOS >= 6',
					'Opera >= 16',
					'Safari >= 6'
				]
			},
			dist: {
				options: {
					map: true
				},
				src: 'dist/css/<%= name %>.css'
			}
		},

		csslint: {
			options: {
				csslintrc: 'src/less/.csslintrc'
			},
			dist: [ 'dist/css/<%= name %>.css']
		},

		cssmin: {
			options: {
				compatibility: 'ie9',
				keepSpecialComments: '*',
				advanced: false
			},
			minifyCore: {
				src: 'dist/css/<%= name %>.css',
				dest: 'dist/css/<%= name %>.min.css'
			}
		},

		csscomb: {
			options: {
				config: 'src/less/.csscomb.json'
			},
			dist: {
                cwd: 'src/less',
				expand: true,
				src: ['*.css', '!*.min.css'],
				dest: 'dist/css'
			}
		},

        babel: {
            options: {
                sourceMap: true,
                presets: ['react', 'es2015']
            },
            dist: {
                files: [{
                    cwd: 'src/js',
                    expand: true,
    				src: ['*.js', '*.jsx'],
    				dest: 'dist/js'
                }]
            }
        },

		jshint: {
    		files: ['Gruntfile.js', 'dist/js/*.js'],
    		options: {
        		globals: {
        		    jQuery: true
                }
            }
		},

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: false
			},
			dist: {
				src: [
					'dist/js/*.js'
				],
				dest: 'dist/js/<%= name %>.js'
			}
		},

		uglify: {
			options: {
				preserveComments: 'some'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/js/<%= name %>.min.js'
			}
		}
	});

	grunt.registerTask('default', ['less', 'babel']);
	grunt.registerTask('dist-css', ['less', 'autoprefixer', 'csslint', 'csscomb', 'cssmin']);
	grunt.registerTask('dist-js', ['babel', 'jshint', 'concat', 'uglify']);
	grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js']);
    grunt.registerTask('watch-css', ['watch:css']);
    grunt.registerTask('watch-js', ['watch:js']);
};
