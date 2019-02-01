(function () {

    angular.module('app')
        .controller('ProfileController', ['profileService', '$q', '$log',   '$state',   ProfileController]);

    function ProfileController(profileService, $q, $log, $state) {

        var vm = this; 
        profileService.getAll().then(function(response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function(response) {
            $log.error('profileService returns ...' + response.statusText);
            return $q.reject('here, reject');
        })
    }

}());