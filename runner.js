/*
 * Copyright 2017, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// load RequireJS library
load(__DIR__ + "/require.js");

// allow RequireJS to load scripts through Nashorn
// see: https://github.com/requirejs/r.js/blob/27594a409b3d37427ec33bdc151ae8a9f67d6b2b/build/jslib/rhino.js
require.load = function(context, moduleName, url) {
    load(url);
    //Support anonymous modules.
    context.completeLoad(moduleName);
};

// apply RequireJS config
requirejs.config({
    waitSeconds: 0,
    enforceDefine: true,
    nodeIdCompat: true,
    baseUrl: __DIR__
});

// get command line arguments
var topLevelScriptArgs = arguments;

// load app's index script and run its main function
require(["index"], function(index) {
    index.main.apply(index, topLevelScriptArgs);
});
