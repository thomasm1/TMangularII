(function () {

    angular.module('app')
        .controller('AllSchoolsController', ['dataService', 'notifier', AllSchoolsController]);

    function AllSchoolsController(dataService, notifier) {

        var vm = this;
        message = 'no message yet ..';

        dataService.getAllSchools()
            .then(function(schools) {
                vm.allSchools = schools;
            })
            .catch(showError);
            console.log(message,' AllSchool');
 
        function showError(message) {
            notifier.error(message);
        }
 
    }

}());