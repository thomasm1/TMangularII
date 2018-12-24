(function() {

    var app = angular.module('app', ['ui.router',
    'kendo.directives']);

    app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {

        $logProvider.debugEnabled(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/templates/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/app/templates/register.html',
                controller: 'registerController' 
            }) 
            .state('profile', {
                url: '/profile',
                templateUrl: '/app/templates/profile.html',
                controller: 'ProfileController'
            }) 
            .state('about',  { 
                url: '/about',
                templateUrl: 'app/templates/about.html',
                controller: 'AboutController' 
            } )
            .state('chlor',  { 
                url: '/chloropleth',
                templateUrl: 'app/templates/chlor.html' 
            } ) 
            .state('dendro',  { 
                url: '/dendrogram',
                templateUrl: 'app/templates/dendrogram.html' 
            } ) 
            .state('post', {
                url: '/posts/{postId}',
                component: 'post',
                resolve: {
                post: function(PostsService, $transition) {
                    return PostsService.getPost($transition.params().postId);
                }
                } 
            })
            .state('posts', { 
                url: '/posts',
                component: 'posts',
                resolve: {
                  posts: function(PostsService) {
                    return PostsService.getAllPosts(); 
                  }
                }
            })
            .state('dataSource', {
                url: '/dataSource',
                templateUrl: 'app/services/dataSource.html',
                controller: 'dataSource' 
            })
            .state('dataViz', { 
                url: '/dataviz',
                templateUrl: 'app/templates/dataViz.html'  ,
                controller: 'dataViz' 
            }) 
            .state('schools', {
                url: '/schools',
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: '/app/templates/allSchools.html'
            })
            .state('classrooms', {
                url: '/classrooms',
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: '/app/templates/allClassrooms.html',
                // resolve: {
                //     promise: function() {
                //         throw 'error activaating js';
                //     }
                // },
                onEnter: function ($log) {
                    $log.debug('Entering the classrooms state.');
                },
                onExit: function ($log) {
                    $log.debug('Exiting the classrooms state.');
                }
            })
            .state('activities', {
                url: '/activities',
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html',
                resolve: {
                    activities: function (dataService) {
                        return dataService.getAllActivities();
                    }
                },
                data: {
                    name: 'Temperature',
                    desc: 'Indoor: 3 thermometers'
                },
                foo: {
                    myFoo: 'bar'
                }
            })
            .state('classroom_parent', {
                abstract: true,
                url: '/classrooms/:id',
                templateUrl: '/app/templates/classroom_parent.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom',
                params: {
                    classroomMessage: { value: 'Subsensor message!' }
                },
                resolve: {
                    classroom: function ($stateParams, dataService) {
                        return dataService.getClassroom($stateParams.id);
                    }
                }
            })
            .state('classroom_parent.classroom_summary', {
                url: '/summary',
                views: {
                    'classInfo': {
                        templateUrl: '/app/templates/classroom.html',
                        controller: 'ClassroomSummaryController',
                        controllerAs: 'classroomSummary'
                    },
                    'classMessage': {
                        templateUrl: '/app/templates/classroom_message.html',
                        controller: 'ClassroomMessageController',
                        controllerAs: 'classroomMessage'
                    }
                }
            })
            .state('classroom_parent.classroom_detail', {
                url: '/detail/{month}',
                views: {
                    'classInfo': {
                        templateUrl: '/app/templates/classroomDetail.html'
                    }
                }
            });


    }]);

    app.run(['$rootScope', '$log', function($rootScope, $log) {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        
           $log.debug('successfully changed states'); 
           $log.debug('event', event);
           console.log(event);
           $log.debug('toState', toState);
           console.log(toState);
           $log.debug('toParams', toParams);
           console.log(toParams);
           $log.debug('fromState', fromState);
           $log.debug('fromParams', fromParams);
        });

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

            $log.error('The requested state was not found: ', unfoundState);

        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

            $log.error('An error occurred while changing states: ', error);

            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });

    }]);

}());