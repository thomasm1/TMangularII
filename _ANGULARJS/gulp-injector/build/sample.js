
// ngAnnotate samples

    angular
        .module('mymod', [])
        .config(['$routeProvider', function($routeProvider) { }])
        .controller('Ctrl1', /* @ngInject */ ['$scope', '$timeout', function($scope, $timeout) { }])
        .controller('Ctrl2', Ctrl2)
        .run(['$log', function($log){ }]);

    function Ctrl2 ($scope, $timeout) { }
    Ctrl2.$inject = ['$scope', '$timeout'];

    // Won't get proper injection
    function foo1($scope) {}

    // Won't get proper injection
    var bar = function($scope) {}

    foo2 = {
        // Won't get proper injection
        controller: function($http) {},
        // Won't get proper injection
        resolve: {
            data: function(some) {}
        }
    };

    /* @ngInject */
    function foo2($scope) {}
    foo2.$inject = ['$scope'];

    /* @ngInject */
    var bar2 = function($scope) {}
    bar2.$inject = ['$scope'];

    foo3 = /*@ngInject*/ {
        controller: ['$http', function($http) {}],
        resolve: {
            data: ['thing', function(thing) {}]
        }
    };
