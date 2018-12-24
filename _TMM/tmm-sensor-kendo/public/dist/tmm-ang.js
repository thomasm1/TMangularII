 
 
var tmm = angular.module('tmm', ['ui.router']);
 
tmm.config(function($stateProvider) {

  var tmmHomeState = {
    name: 'home',
    url: '/',
    component: 'home' 
  }
  
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'views/about.html'
  }
 
  var servicesState = {
    name: 'services',
    url: '/services',
    templateUrl: 'views/services.html'
  }  
  var mapsState = {
    name: 'maps',
    url: '/maps',
    templateUrl: 'views/maps.html'
  }

  $stateProvider.state(tmmHomeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(servicesState);
  $stateProvider.state(mapsState); 

});
/*
tmm.controller('tmmController', function tmmController($scope) {
  $scope.posts = [
    {
      did:"08-01-18",title:"1"
    }, {
      did:"08-04-18",title:"2"
    }, {
      did:"08-05-18",title:"3"
    }, {
      did:"08-01-18",title:"4"
    }, {
      did:"08-04-18",title:"5"
    }, {
      did:"08-05-18",title:"6"
    }
  ];
});
 */