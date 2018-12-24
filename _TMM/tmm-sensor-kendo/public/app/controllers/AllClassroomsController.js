(function () {

    angular.module('app')
        .controller('AllClassroomsController', ['dataService', 'notifier', AllClassroomsController]);

    function AllClassroomsController(dataService, notifier) {

        var vm = this;
        message = 'no message yet ..';

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
            })
            .catch(showError);

            console.log(message,' AllSchool');
 
        function showError(message) {
            notifier.error(message);
        }
 

    }

}());