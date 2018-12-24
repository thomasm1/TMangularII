(function () {

    angular.module('app')
        .factory('notifier', notifier);

    function notifier() {

        toastr.options = {
            "showDuration": "300",
            "timeOut": "500" //2000
        };

        return {
            success: success,
            error:   success  // error disabled
        };

        function success(message) {  
            toastr.success(''); //message
        }

        function error(message) { // message
            toastr.error(''); // message
        }
    }

}());