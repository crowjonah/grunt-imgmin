# grunt-imgmin

Use rflynn's aggressive, lossy image optimizer, imgmin, in grunt! Unfortunately, you'll have to deal with [the dependencies](https://github.com/rflynn/imgmin) on your own, and it's a particularly wiley bunch. This is just a wrapper to automate running it on a buncha files.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-imgmin --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-imgmin');
```

## The "imgmin" task

### Overview
In your project's Gruntfile, add a section named `imgmin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  imgmin: {
    dist: {
        files: {
          'dest/img.jpg': 'src/img.jpg',
          'dest/img.png': 'src/img.png'
        }
      }
  },
})
```

It's pretty darn slow, so I'd be careful about giving it too many files.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2013-04-03 v0.1.1 Update dependencies to include `filesize`
* 2013-03-01 v0.1.0 Initial release.
