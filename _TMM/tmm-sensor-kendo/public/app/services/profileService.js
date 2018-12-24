(function () {

    angular.module('app')
        .factory('profileService', ['$http', '$q', '$log', '$timeout',   profileService]);

        function profileService($http, $q, $log, $timeout) {

            return {
                getAll: getAll
            };
            function getAll() {
            return $http.get('api/schools')
                .then(function(response) {
                
 console.log(response.data);
 console.log('profileService');
  
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving schools: ' + response.statusText);
                    return $q.reject('Error retrieving schools.');
                
                });
            }
                
        }


}());