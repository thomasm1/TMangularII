(function () {

    angular.module('app')
        .factory('PatientsResource', ['$resource', PatientsResource]);

    function PatientsResource($resource) {

        return $resource('/api/patients/:patient_id', {patient_id: '@patient_id'},
            {
                'update': {method: 'PUT'}
            }
        );
    }

}());