(function () {

    angular.module('app')
        .controller('EditPatientController', ['$routeParams', 'patients', '$cookies', '$cookieStore', 'dataService', '$log', '$location', 'currentUser', EditPatientController]);

    function EditPatientController($routeParams, patients, $cookies, $cookieStore, dataService, $log, $location, currentUser) {

        var vm = this;

        dataService.getPatientByID($routeParams.patientID)
            .then(getPatientSuccess)
            .catch(getPatientError);

        function getPatientSuccess(patient) {
            vm.currentPatient = patient;
            currentUser.lastPatientEdited = vm.currentPatient;
        }

        function getPatientError(reason) {
            $log.error(reason);
        }

        vm.setAsFavorite = function() {

            $cookies.favoritePatient = vm.currentPatient.title;

        };

        vm.savePatient = function() {

            dataService.updatePatient(vm.currentPatient)
                .then(updatePatientSuccess)
                .catch(updatePatientError);

        };

        function updatePatientSuccess(message) {
            $log.info(message);
            $location.path('/');
        }

        function updatePatientError(errorMessage) {
            $log.error(errorMessage);
        }


    }

}());