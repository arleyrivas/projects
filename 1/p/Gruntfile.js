module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        folders: {
            webapp: {
                root: 'app/',
                build: 'src/main/webapp/WEB-INF/'
            }
        },

        banner: '/*!\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed \n*/\n',
        concat: {
                script: {
                    src: ['<%= folders.webapp.root %>/assets/**/*.js'],
                    dest: '<%= folders.webapp.build %>js/script.js'
                },
                css: {
                    src: ['<%= folders.webapp.root %>/assets/css/bootstrap.min.css', '<%= folders.webapp.root %>/assets/css/ng-tags-input.min.css', '<%= folders.webapp.root %>/assets/css/paraiso.dark.css', '<%= folders.webapp.root %>/assets/css/all.css', '<%= folders.webapp.root %>/assets/css/font-awesome.min.css', '<%= folders.webapp.root %>/assets/css/spia-custom.css', '<%= folders.webapp.root %>/app/**/*.css', '<%= folders.webapp.root %>/assets/css/bootstrap.calendar.css', '<%= folders.webapp.root %>/assets/css/bootstrap.calendar.custom.css', '<%= folders.webapp.root %>/assets/css/fullcalendar.min.css'],
                    dest: '<%= folders.webapp.build %>style/app.css'
                },
            },    
        copy: {
            app: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/app/es/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>app/es/'
            },
            tomcat: {
                src: ['<%= folders.webapp.root %>/web.xml'],
                dest: '<%= folders.webapp.build %>/web.xml'
            },
            resources: {
                src: ['<%= folders.webapp.root %>/jboss-deployment-structure.xml'],
                dest: '<%= folders.webapp.build %>/jboss-deployment-structure.xml'
                },
            config: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/config/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>config/'
            },
            img: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/assets/img/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>img/'
            },
            fonts: {
                expand: true,
                flatten: true,
                cwd: '<%= folders.webapp.root %>/assets/fonts/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>fonts/'
            },
            css0: {
                src: ['<%= folders.webapp.root %>assets/css/spia-handheld-custom.css'],
                dest: '<%= folders.webapp.build %>style/spia-handheld-custom.css'
            },
            css1: {
                src: ['<%= folders.webapp.root %>assets/css/payu-response.css'],
                dest: '<%= folders.webapp.build %>style/payu-response.css'
            },
            css2: {
                src: ['<%= folders.webapp.root %>assets/css/bootstrap-3.1.1.min.css'],
                dest: '<%= folders.webapp.build %>style/bootstrap-3.1.1.min.css'
            },
            css3: {
                src: ['<%= folders.webapp.root %>assets/css/login.css'],
                dest: '<%= folders.webapp.build %>style/login.css'
            },
            public: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/public/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>public/'
            },
            mails: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/mails/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>mails/'
            },
            log: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/log/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>log/'
            },
            jwt: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/jwt-user-token/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>jwt-user-token/'
            },
            jwt1: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/jwt-user-temp/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>jwt-user-temp/'
            },
            handheld: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/handheld/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>handheld/'
            },
            reports: {
                expand: true,
                cwd: '<%= folders.webapp.root %>/reports/',
                src: ['**/**/*'],
                dest: '<%= folders.webapp.build %>reports/'
            },
            activate: {
                src: ['<%= folders.webapp.root %>activate.jsp'],
                dest: '<%= folders.webapp.build %>activate.jsp'
            },
            error: {
                src: ['<%= folders.webapp.root %>error.jsp'],
                dest: '<%= folders.webapp.build %>error.jsp'
            },
            error1: {
                src: ['<%= folders.webapp.root %>/app/error.jsp'],
                dest: '<%= folders.webapp.build %>app/error.jsp'
            },
            payu: {
                src: ['<%= folders.webapp.root %>payuResponse.jsp'],
                dest: '<%= folders.webapp.build %>payuResponse.jsp'
            },
            login: {
                src: ['<%= folders.webapp.root %>login.conf'],
                dest: '<%= folders.webapp.build %>login.conf'
            },
            bower: {
                src: ['<%= folders.webapp.root %>bower.json'],
                dest: '<%= folders.webapp.build %>bower.json'
            },
            jboss: {
                src: ['<%= folders.webapp.root %>jboss-web.xml'],
                dest: '<%= folders.webapp.build %>jboss-web.xml'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
			dist:  {
                src: ['<%= folders.webapp.build %>/js/lib.js','<%= folders.webapp.build %>js/script.js', '<%= folders.webapp.build %>/jss/app.js'],
                dest: '<%= folders.webapp.build %>js/lib.min.js'
            }
        },
        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ]
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['copy', 'concat', 'uglify']);
    grunt.registerTask('build', ['copy', 'concat', 'uglify']);

    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
        grunt.task.run([
            //'clean:server',
            'wiredep',
            'concurrent:server',
            'autoprefixer:server',
            'configureProxies:server', // added just before connect
            'connect:livereload',
            'watch'
        ]);
    });


};
