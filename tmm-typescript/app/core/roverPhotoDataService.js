var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var RoverPhotoDataService = (function () {
            function RoverPhotoDataService($http, roverConfig) {
                this.$http = $http;
                this.roverConfig = roverConfig;
            }
            RoverPhotoDataService.prototype.getPhotos = function (earthDate, camera) {
                if (earthDate === void 0) { earthDate = this.roverConfig.earthDate; }
                if (camera === void 0) { camera = this.roverConfig.camera; }
                var roverHttpConfig = {
                    method: 'GET',
                    params: {
                        'earth_date': earthDate,
                        'camera': camera,
                        'api_key': this.roverConfig.apiKey,
                        'preventIECache': new Date().getTime()
                    },
                    url: this.roverConfig.roverUrl
                };
                return this.$http(roverHttpConfig).then(function (results) {
                    return results.data;
                }, function (response) {
                    return response;
                });
            };
            RoverPhotoDataService.$inject = ['$http', 'roverConfig'];
            return RoverPhotoDataService;
        }());
        virtdog.RoverPhotoDataService = RoverPhotoDataService;
        virtdog.getModuleCore().service('roverPhotoDataService', RoverPhotoDataService);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm92ZXJQaG90b0RhdGFTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm92ZXJQaG90b0RhdGFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQTBCaEI7QUExQkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBMEJ4QjtJQTFCaUIsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUN6QjtZQUVFLCtCQUFvQixLQUFzQixFQUFVLFdBQXdCO2dCQUF4RCxVQUFLLEdBQUwsS0FBSyxDQUFpQjtnQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUFJLENBQUM7WUFFMUUseUNBQVMsR0FBaEIsVUFBaUIsU0FBOEMsRUFBRSxNQUF3QztnQkFBeEYseUJBQThDLEdBQTlDLFlBQW9CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUztnQkFBRSxzQkFBd0MsR0FBeEMsU0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO2dCQUN2RyxJQUFJLGVBQWUsR0FBc0I7b0JBQ3ZDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBRTt3QkFDTixZQUFZLEVBQUUsU0FBUzt3QkFDdkIsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07d0JBQ2xDLGdCQUFnQixFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO3FCQUN2QztvQkFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2lCQUMvQixDQUFDO2dCQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDckMsVUFBQyxPQUFPO29CQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUN0QixDQUFDLEVBQUUsVUFBQyxRQUFRO29CQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQXJCTSw2QkFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBc0I1Qyw0QkFBQztRQUFELENBQUMsQUF2QkQsSUF1QkM7UUF2QlksNkJBQXFCLHdCQXVCakMsQ0FBQTtRQUNELHFCQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUMxRSxDQUFDLEVBMUJpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUEwQnhCO0FBQUQsQ0FBQyxFQTFCUyxPQUFPLEtBQVAsT0FBTyxRQTBCaEIifQ==