 
 
var tmm = angular.module('tmm', ['ui.router']);  
// inject the router instance into a `run` block by name
/*
tmm.run(function($uiRouter) {
  var pluginInstance = $uiRouter.plugin(Visualizer);
 });
 */

tmm.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})
tmm.config(function($stateProvider) {  
  
  var tmmState = {
    name: 'home',
    url: '/', 
    templateUrl: 'views/home.html' 
  };
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'views/about.html' 
  };
 
  var servicesState = {
    name: 'services',
    url: '/services',
    templateUrl: 'views/services.html'
  };
  var mapsState = {
    name: 'maps',
    url: '/maps',
    component: 'maps'
  }; 
 
  var registerState = {
    name: 'register',
    url: '/register', 
    templateUrl: 'views/register.html'
  }; 
 
  var datavizState = {
    name: 'dataviz',
    url: '/dataviz',
    templateUrl: 'views/dataviz.html' 
  }; 
 
  var postState = 
  {
    name: 'post',
    url: '/posts/{postId}',
    component: 'post',
    resolve: {
      post: function(PostsService, $transition) {
        return PostsService.getPost($transition.params().postId);
      }
    }
  };
  var postsState = {
    name: 'posts',
    url: '/posts',
    component: 'posts',
    resolve: {
      posts: function(PostsService) {
        return PostsService.getAllPosts();
      }
    }
  }; 
  var otherwise = {
    name: 'otherwise',
    url:'/*',
    templateUrl:'/'
  }

  
  $stateProvider.state(tmmState);
  $stateProvider.state(aboutState);
  $stateProvider.state(servicesState);
  $stateProvider.state(mapsState);   
  $stateProvider.state(postState);
  $stateProvider.state(postsState);   
  $stateProvider.state(datavizState);
  $stateProvider.state(registerState);  
  $stateProvider.state(otherwise); 

}); 
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
  $scope.refresh = function () {
    $state.reload();
  };
}); 