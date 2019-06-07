(function() {

    angular.module('app')
        .controller('PatientsController', ['$q', 'patients', 'dataService', 'badgeService', '$cookies', '$cookieStore', '$log', '$route', 'currentUser', PatientsController]);


    function PatientsController($q, patients, dataService, badgeService, $cookies, $cookieStore, $log, $route, currentUser) {

        var vm = this;

        vm.appName = patients.appName;

        dataService.getUserSummary()
            .then(getUserSummarySuccess);

        function getUserSummarySuccess(summaryData) {
            //$log.log(summaryData);
            vm.summaryData = summaryData;
        }


        dataService.getAllPatients()
            .then(getPatientsSuccess, null, getPatientsNotification)
            .catch(errorCallback)
            .finally(getAllPatientsComplete);

        function getPatientsSuccess(patients) {
            //throw 'error in success handler';
            vm.allPatients = patients;
        }

        function getPatientsNotification(notification) {
            //console.log('Promise Notification: ' + notification);
        }

        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }

        function getAllPatientsComplete() {
            //console.log('getAllPatients has completed');
        }

        dataService.getAllReaders()
            .then(getReadersSuccess)
            .catch(errorCallback)
            .finally(getAllReadersComplete);

        function getReadersSuccess(readers) {
            vm.allReaders = readers;
        }

        function getAllReadersComplete() {
            $log.awesome('All readers retrieved');
        }

        vm.getBadge = badgeService.retrieveBadge;

        vm.favoritePatient = $cookies.favoritePatient;

        vm.currentUser = currentUser;

        vm.deletePatient = function (patientID) {

            dataService.deletePatient(patientID)
                .then(deletePatientSuccess)
                .catch(deletePatientError);

        };

        function deletePatientSuccess(message) {
            $log.info(message);
            $route.reload();
        }

        function deletePatientError(errorMessage) {
            $log.error(errorMessage);
        }

    }

}());