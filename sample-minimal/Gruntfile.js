
/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        "bower-install-simple": {
            "standard": { }
        },
        clean: {
            clean:     [ ],
            distclean: [ "node_modules", "bower_components" ]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadTasks("../tasks");

    grunt.registerTask("default", [ "bower-install-simple" ]);
};

