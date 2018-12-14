/// <reference path="../typings/index.d.ts" />
'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        angular.module('app', [
            // Everybody has access to these
            // so centralize registration here 
            // so feature modules don't need to register them 
            'app.core',
            // Feature Modules
            'app.dogObject',
            'app.dog',
            'app.people',
            'app.roverPhotos',
            'app.otherAnimal',
            'app.dogDomain'
        ]);
        // we don't ever refer to the app module except in tests
        // but the other modules may be refered 2+ times
        function getModuleApp() {
            return angular.module('app');
        }
        virtdog.getModuleApp = getModuleApp;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDO0FBQzlDLFlBQVksQ0FBQztBQUNiLElBQVUsT0FBTyxDQXNCaEI7QUF0QkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBc0J4QjtJQXRCaUIsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNwQixnQ0FBZ0M7WUFDaEMsbUNBQW1DO1lBQ25DLGtEQUFrRDtZQUVsRCxVQUFVO1lBRVYsa0JBQWtCO1lBRWxCLGVBQWU7WUFDZixTQUFTO1lBQ1QsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsZUFBZTtTQUNoQixDQUFDLENBQUM7UUFDSCx3REFBd0Q7UUFDeEQsZ0RBQWdEO1FBQ2hEO1lBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUZlLG9CQUFZLGVBRTNCLENBQUE7SUFDSCxDQUFDLEVBdEJpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFzQnhCO0FBQUQsQ0FBQyxFQXRCUyxPQUFPLEtBQVAsT0FBTyxRQXNCaEIifQ==