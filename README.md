# grunt-mathjax-node-page

> Grunt plugin to prerender MathJax in your HTML pages, with mathjax-node-page.

## Getting Started
This plugin requires Grunt `^1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mathjax-node-page --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mathjax-node-page');
```

## The "mathjax_node_page" task

### Overview
In your project's Gruntfile, add a section named `mathjax_node_page` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mathjax_node_page: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.page
Type: `Object`
Default value: `{}`

`pageConfig` for [mathjax-node-page](https://github.com/pkra/mathjax-node-page/#Usage).
For example, you might want `{singleDollars: true}`.

#### options.mjnode
Type: `Object`
Default value: `{svg: true}`

Configuration options for [mathjax-node](https://github.com/mathjax/MathJax-node).
For example, you might do `{linebreaks: true, width: 80}` to break long equations
at 80ex.


### Usage Examples

Here is a simple example that renders `index.html` into `index-rendered.html`, allowing single dollar signs as inline math delimiters:

```js
grunt.initConfig({
  mathjax_node_page: {
    options: {
      page: {
        singleDollars: true
      }
    },
    files: {
      'index-rendered.html': ['index.html']
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2017-07-19   v0.1.2   Finish task properly.
 * 2017-07-19   v0.1.1   Fix README.
 * 2017-07-19   v0.1.0   Initial release.
