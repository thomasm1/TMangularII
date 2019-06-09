(function() {

    var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngResource']);

    app.provider('patients', ['constants', function (constants) {

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };

        this.$get = function () {

            var appName = constants.APP_TITLE;
            var version = constants.APP_VERSION;

            if (includeVersionInTitle) {
                appName += ' ' + version;
            }

            var appDesc = constants.APP_DESCRIPTION;

            return {
                appName: appName,
                appDesc: appDesc
            };
        };

    }]);

    app.config(['patientsProvider', '$routeProvider', '$logProvider', '$httpProvider', '$provide', function (patientsProvider, $routeProvider, $logProvider, $httpProvider, $provide) {

        $provide.decorator('$log', ['$delegate', 'patients', logDecorator]);

        patientsProvider.setIncludeVersionInTitle(true);
        $logProvider.debugEnabled(true);

        $httpProvider.interceptors.push('patientLoggerInterceptor');

        $routeProvider
            .when('/', {
                templateUrl: '/app/templates/patients.html',
                controller: 'PatientsController',
                controllerAs: 'patients'
            })
            .when('/AddPatient', {
                templateUrl: '/app/templates/addPatient.html',
                controller: 'AddPatientController',
                controllerAs: 'patientAdder'
            })
            .when('/EditPatient/:patientID', {
                templateUrl: '/app/templates/editPatient.html',
                controller: 'EditPatientController',
                controllerAs: 'patientEditor'
            })
            .otherwise('/');

    }]);

    app.run(['$rootScope', function($rootScope) {

        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {

            //console.log('successfully changed routes');

        });

        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {

            console.log('error changing routes');

            console.log(event);
            console.log(current);
            console.log(previous);
            console.log(rejection);

        });

    }]);

    function logDecorator($delegate, patients) {

        function log(message) {
            message += ' - ' + new Date() + ' (' + patients.appName + ')';
            $delegate.log(message);
        }

        function info(message) {
            $delegate.info(message);
        }

        function warn(message) {
            $delegate.warn(message);
        }

        function error(message) {
            $delegate.error(message);
        }

        function debug(message) {
            $delegate.debug(message);
        }

        function awesome(message) {
            message = 'Awesome!!! - ' + message;
            $delegate.debug(message);
        }

        return {
            log: log,
            info: info,
            warn: warn,
            error: error,
            debug: debug,
            awesome: awesome
        };

    }

}());