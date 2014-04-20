
/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        "bower-install-simple": {
            options: {
                color:       true,
                production:  false,
                directory:   "lib"
            }
        },
        clean: {
            clean:     [ ],
            distclean: [ "node_modules", "lib" ]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadTasks("../tasks");

    grunt.registerTask("default", [ "bower-install-simple" ]);
};

