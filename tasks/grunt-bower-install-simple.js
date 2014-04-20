/*
**  grunt-bower-install-simple -- Grunt Task for Installing Bower Dependencies
**  Copyright (c) 2013-2014 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* global module:  false */
/* global require: false */
/* global process: false */

/*  foreign modules  */
var chalk         = require("chalk");
var bower         = require("bower");
var bowerRenderer = require("bower/lib/renderers/StandardRenderer");

module.exports = function (grunt) {
    grunt.registerTask("bower-install-simple", "Install Bower Dependencies", function () {
        /*  prepare options  */
        var options = this.options({
            /*  bower configuration options (renderer specific)  */
            color:        true,               /*  bower --config.color=true        */
            cwd:          process.cwd(),      /*  bower --config.cwd=`pwd`         */

            /*  bower install command options  */
            forceLatest:  false,              /*  bower install --force-latest     */
            production:   false,              /*  bower install --production       */

            /*  bower configuration options (general)  */
            interactive:  true,               /*  bower --config.interactive=true  */
            directory:    undefined           /*  bower --config.directory=<dir>   */
        });
        grunt.verbose.writeflags(options, "Options");

        /*  display header to explicitly inform user about our operation  */
        if (options.color)
            grunt.log.writeln(chalk.green("Install Bower Dependencies"));
        else
            grunt.log.writeln("Install Bower Dependencies");

        /*  run programatically the functionality behind
            the official "bower install" command  */
        var done = this.async();
        var renderer = new bowerRenderer("install", {
            color:          options.color,
            cwd:            options.cwd
        });
        bower.commands.install([], {
            "force-latest": options.forceLatest,
            production:     options.production
        }, {
            interactive:    options.interactive,
            directory:      options.directory
        })
        .on("log", function (log) {
            renderer.log(log);
        })
        .on("prompt", function (prompt, callback) {
            renderer.prompt(prompt).then(function(answer) {
                callback(answer);
            });
        })
        .on("error", function (err) {
            renderer.error(err);
            done(false);
        })
        .on("end", function (data) {
            renderer.end(data);
            done();
        });
    });
};

