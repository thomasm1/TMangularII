 
    

app.controller('patientsController', ['$scope', '$resource',
    function($scope, $resource) {

        const Patient = $resource('/api/patients');

        Patient.query(function (results) {
            $scope.patients = results;
        })
        
        $scope.patients = []
       /* $scope.patients = [
            {
                "_id": ObjectId("5cef2a5a420b366a58fdadb3"),
                "name": "patient1",
                "age": "23",
                "gender": "male",
                "email": "thomasm1.maestas@gmail.com",
                "height": "60",
                "dob": "09/03/1996",
                "address": "2300 calle de real"
            },
            { 
                "_id" : ObjectId("5cef2ea5c1a79acbaab3f5ee"),
                "name": "patient2",
                "age": "33",
                "gender": "female",
                "email": "thomasm1.maestas@gmail.com",
                "height": "54",
                "dob": "12/05/1986",
                "address": "2 Teal Dr."
            }
        ] */

    $scope.createPatient = function () {
        const patient = new Patient();
        patient.name = $scope.patientName;
        patient.$save(function (result) {
            $scope.patients.push(result);
            $scope.patientName = '';
        });
    //  $scope.patients.push({ name: $scope.patientName });
    //  $scope.patientName = '';
    }
}]); 