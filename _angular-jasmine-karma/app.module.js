'use strict';

// Define the `postcatApp` module
angular.module('postcatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'postDetail',
  'postList',
  'dTech',
  'modalFormApp'
]);

angular.
  module('postcatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider.
      when('/dailytech', {
        template: '<d-tech></d-tech>'
      }).
        when('/posts', {
          template: '<post-list></post-list>'
        }).
        when('/posts/:postId', {
          template: '<post-detail></post-detail>'
        }).
        otherwise('/posts');
    }
  ]);
