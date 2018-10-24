
var routerApp = angular.module('routerApp', ['ui.router']); 

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html'
    })
    .state('home.list', {
        url: '/list',
        templateUrl: 'views/partial-home-list.html',
        controller: function($scope) {
            $scope.titles = ['title-A', 'title-B', 'title-C'];
        }
    })
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'string-template from home.paragraph'
    })
    .state('about', {
        url: '/about',
        views: {
            '': { templateUrl: 'views/partial-about.html' },
            'columnOne@about': {template: 'This is columnOne@about ...'},
            'columnTwo@about': {
                templateUrl: 'views/table-data.html',
                controller: 'tableController'
            } 
        }
    });
});

routerApp.controller('tableController', function($scope) {
    $scope.message = 'test message from tableController';
    $scope.tables =  [
        { 
        name: 'name 1',
        price: 50
},
{
    name: 'name 2',
    price: 220
}
    ];
});
