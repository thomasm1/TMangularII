(function() {

    angular.module('app')
        .factory('dataService', ['$q', '$timeout', '$http', 'constants', '$cacheFactory', dataService]);


    function dataService($q, $timeout, $http, constants, $cacheFactory) {

        return {
            getAllPatients: getAllPatients,
            getAllReaders: getAllReaders,
            getPatientByID: getPatientByID,
            updatePatient: updatePatient,
            addPatient: addPatient,
            deletePatient: deletePatient,
            getUserSummary: getUserSummary
        };

        function getUserSummary() {

            var deferred = $q.defer();

            var dataCache = $cacheFactory.get('patientLoggerCache');

            if (!dataCache) {
                dataCache = $cacheFactory('patientLoggerCache');
            }

            var summaryFromCache = dataCache.get('summary');

            if (summaryFromCache) {

                //console.log('returning summary from cache');
                deferred.resolve(summaryFromCache);

            } else {

                //console.log('gathering new summary data');

                var patientsPromise = getAllPatients();
                var readersPromise = getAllReaders();

                $q.all([patientsPromise, readersPromise])
                    .then(function (patientLoggerData) {

                        var allPatients = patientLoggerData[0];
                        var allReaders = patientLoggerData[1];

                        var grandTotalMinutes = 0;

                        allReaders.forEach(function (currentReader, index, array) {
                            grandTotalMinutes += currentReader.totalMinutesRead;
                        });

                        var summaryData = {
                            patientCount: allPatients.length,
                            readerCount: allReaders.length,
                            grandTotalMinutes: grandTotalMinutes
                        };

                        dataCache.put('summary', summaryData);
                        deferred.resolve(summaryData);

                    });

            }

            return deferred.promise;

        }

        function deleteSummaryFromCache() {

            var dataCache = $cacheFactory.get('patientLoggerCache');
            dataCache.remove('summary');

        }

        function getAllPatients() {

            return $http({
                method: 'GET',
                url: 'api/patients',
                headers: {
                    'PS-PatientLogger-Version': constants.APP_VERSION
                },
                transformResponse: transformGetPatients,
                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetPatientsError)

        }

        function deleteAllPatientsResponseFromCache() {

            var httpCache = $cacheFactory.get('$http');
            httpCache.remove('api/patients');

        }


        function transformGetPatients(data, headersGetter) {

            var transformed = angular.fromJson(data);

            transformed.forEach(function (currentValue, index, array) {
                currentValue.dateDownloaded = new Date();
            });

            //console.log(transformed);
            return transformed;

        }

        function sendResponseData(response) {

            return response.data;

        }

        function sendGetPatientsError(response) {

            return $q.reject('Error retrieving patient(s). (HTTP status: ' + response.status + ')');

        }

        function getPatientByID(patientID) {

            return $http.get('api/patients/' + patientID)
            .then(sendResponseData)
            .catch(sendGetPatientsError);

        }

        function updatePatient(patient) {

            deleteSummaryFromCache();
            deleteAllPatientsResponseFromCache();

            return $http({
                method: 'PUT',
                url: 'api/patients/' + patient.patient_id,
                data: patient
            })
            .then(updatePatientSuccess)
            .catch(updatePatientError);

        }

        function updatePatientSuccess(response) {

            return 'Patient updated: ' + response.config.data.title;

        }

        function updatePatientError(response) {

            return $q.reject('Error updating patient.(HTTP status: ' + response.status + ')');

        }

        function addPatient(newPatient) {

            deleteSummaryFromCache();
            deleteAllPatientsResponseFromCache();

            return $http.post('api/patients', newPatient, {
                transformRequest: transformPostRequest
            })
            .then(addPatientSuccess)
            .catch(addPatientError);
        }

        function transformPostRequest(data, headersGetter) {

            data.newPatient = true;

            console.log(data);

            return JSON.stringify(data);
        }

        function addPatientSuccess(response) {

            return 'Patient added: ' + response.config.data.title;

        }

        function addPatientError(response) {

            return $q.reject('Error adding patient. (HTTP status: ' + response.status + ')');

        }

        function deletePatient(patientID) {

            deleteSummaryFromCache();
            deleteAllPatientsResponseFromCache();

            return $http({
                method: 'DELETE',
                url: 'api/patients/' + patientID
            })
                .then(deletePatientSuccess)
                .catch(deletePatientError);

        }

        function deletePatientSuccess(response) {

            return 'Patient deleted.';

        }

        function deletePatientError(response) {

            return $q.reject('Error deleting patient. (HTTP status: ' + response.status + ')');

        }

        function getAllReaders() {

            var readersArray = [
                {
                    reader_id: 1,
                    name: 'Marie',
                    weeklyReadingGoal: 315,
                    totalMinutesRead: 5600
                },
                {
                    reader_id: 2,
                    name: 'Daniel',
                    weeklyReadingGoal: 210,
                    totalMinutesRead: 3000
                },
                {
                    reader_id: 3,
                    name: 'Lanier',
                    weeklyReadingGoal: 140,
                    totalMinutesRead: 600
                }
            ];

            var deferred = $q.defer();

            $timeout(function() {

                deferred.resolve(readersArray);

            }, 1500);

            return deferred.promise;
        }
    }

}());