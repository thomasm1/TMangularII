(function() {

    angular.module('app')
        .service('logger', PatientAppLogger);

    function LoggerBase() { }

    LoggerBase.prototype.output = function(message) {
        console.log('LoggerBase: ' + message);
    };

    function PatientAppLogger() {

        LoggerBase.call(this);

        this.logPatient = function(patient) {
            console.log('Patient: ' + patient.title);
        }
    }

    PatientAppLogger.prototype = Object.create(LoggerBase.prototype);

}());