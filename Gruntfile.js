/**
 * Created by miroslavcillik on 28/06/16.
 */

module.exports = function(grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "components/**/css/" run the "less"-task.
            files: "components/**/**/css/*.less",
            tasks: ["less"]
        },
        less: {
            common: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ['components/atoms/global/css']
                },
                files: {
                    "build/assets/css/sg.css": "assets/css/sg.less"
                }
            },
            kbcBootstrap: {
                files: [{
                    expand: true,
                    flatten: true,
                    dest: 'build/assets/css',
                    cwd: 'components',
                    src: ['**/**/css/*.less'],
                    ext: '.css'
                }]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};

