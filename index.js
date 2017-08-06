
define(["lodash/forEach"], function(forEach) {
    return {
        main: function() {
            forEach(arguments, function(arg) {
                print(arg);
            });
        }
    };
});
