
# grunt-bower-install-simple

Grunt Task for Installing Bower Dependencies

<p/>
<img src="https://nodei.co/npm/grunt-bower-install-simple.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/grunt-bower-install-simple.png" alt=""/>

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/)
before, be sure to check out the [Getting
Started](http://gruntjs.com/getting-started) guide, as it explains how
to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
npm install grunt-bower-install-simple --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-bower-install-simple");
```

## Task Options

- `color` (default `true`): Whether output is colorized.
  The equivalent of `bower --config.color=<value>`.

- `cwd` (default `process.cwd()`): The directory from which Bower should run.
  All relative paths in Bower will be calculated according to this.
  The equivalent of ``bower --config.cwd=`pwd` ``.

- `forceLatest` (default `false`): Force latest dependency version on conflict.
  The equivalent of `bower install --force-latest`.

- `production` (default `false`): Do not install project `devDependencies`.
  The equivalent of `bower install --production`.

- `interactive` (default `true`): Makes Bower interactive, prompting whenever necessary.
  The equivalent of `bower --config.interactive=true`.

- `directory` (default `undefined`): The path in which installed components should be saved.
  If `undefined` (or not specified) this defaults in Bower to `bower_components`.
  The equivalent of `bower --config.directory=<dir>`.

## Task Calling

_Run this task with the `grunt bower-install-simple` command._

Task targets, files and options may be specified according to the Grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## Usage Example

Assuming we have the following build environment:

- `Gruntfile.js`:

```js
// [...]
grunt.initConfig({
    "bower-install-simple": {
        options: {
            color:       true,
            production:  false,
            directory:   "lib"
        }
    }
});
grunt.registerTask("bower-install", [ "bower-install-simple" ]);
// [...]
```

- `bower.json`:

```json
{
    "name": "sample",
    "version": "0.0.0",
    "devDependencies": {
        "componentjs":    "~1.0.1",
        "jquery":         "~2.0.3",
        "lodash":         "~2.3.0"
    }
}
```

Then running `grunt bower-install` is functionality-wise equivalent
to running `bower --config.color=false --config.directory=lib install
--production`. It will read the `bower.json` and install ComponentJS,
jQuery and Lo-Dash into the local `lib` directory.

