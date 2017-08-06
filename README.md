RequireJS on Nashorn
--------------------

This repo contains a [runner script](https://github.com/wilton-iot/requirejs-nashorn/blob/master/runner.js), that allows to use [RequireJS](http://requirejs.org/) modules
with [Nashorn](http://openjdk.java.net/projects/nashorn/).

[Lodash](https://lodash.com/) library (its [RequireJS modules branch](https://github.com/lodash/lodash/tree/amd)) is used as an example.

Usage
-----

 - write your code using RequireJS modules
 - add startup logic to [index.js](https://github.com/wilton-iot/requirejs-nashorn/blob/master/index.js)
 - start application using [jjs launcher](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jjs.html):

     jjs runner.js -- your app args

License information
-------------------

This project is released under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Changelog
---------

**2017-08-06**

 - initial public version
