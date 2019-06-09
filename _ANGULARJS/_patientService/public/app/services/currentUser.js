(function () {

    angular.module('app')
        .factory('currentUser', currentUser);


    function currentUser() {

        return {
            lastPatientEdited: lastPatientEdited
        };

        var lastPatientEdited = {};

    }

}());