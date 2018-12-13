'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var RoverPhotosController = (function () {
            function RoverPhotosController(roverPhotoDataService, roverConfig) {
                this.roverPhotoDataService = roverPhotoDataService;
                this.roverConfig = roverConfig;
                this.data = {};
                this.photosToDroolOver = [];
                this.today = new Date();
                this.photoDate = this.today.getFullYear().toString() + '-' + this.today.getMonth().toString() + '-' + this.today.getDate().toString();
                this.roverCamera = '';
                this.roverPhotoUrl = '';
                // since there is a lag on photo upload from Mars (imagine that)
                // get photos from a few weeks ago
                this.today.setTime(this.today.getTime() - ((24 * 60 * 60 * 1000) * 84));
                this.photoDate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate().toString();
                this.roverCamera = this.roverConfig.camera;
                this.getPhotos(this.roverCamera);
            }
            // todo: interface out the photo object and other objects from rest call
            RoverPhotosController.prototype.getPhotos = function (currentCamera) {
                var _this = this;
                this.roverPhotoDataService.getPhotos(this.photoDate, currentCamera).then(function (data) {
                    _this.photosToDroolOver = data.photos;
                    _this.photosToDroolOver.forEach(function (photo) {
                        _this.roverPhotoUrl = photo.img_src;
                        _this.cameras = photo.rover.cameras;
                    });
                }, function (reason) { _this.roverError = reason; });
            };
            RoverPhotosController.$inject = ['roverPhotoDataService', 'roverConfig'];
            return RoverPhotosController;
        }());
        virtdog.RoverPhotosController = RoverPhotosController;
        virtdog.getModuleRoverPhotos().controller('roverPhotosController', RoverPhotosController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm92ZXJQaG90b3NDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm92ZXJQaG90b3NDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsT0FBTyxDQWdDaEI7QUFoQ0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBZ0N4QjtJQWhDaUIsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUN6QjtZQVdFLCtCQUFvQixxQkFBNEMsRUFBVSxXQUF3QjtnQkFBOUUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtnQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtnQkFWM0YsU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixzQkFBaUIsR0FBRyxFQUFFLENBQUM7Z0JBRXZCLFVBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNuQixjQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakksZ0JBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUt4QixnRUFBZ0U7Z0JBQ2hFLGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFDRCx3RUFBd0U7WUFDakUseUNBQVMsR0FBaEIsVUFBaUIsYUFBcUI7Z0JBQXRDLGlCQVFDO2dCQVBDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO29CQUM1RSxLQUFJLENBQUMsaUJBQWlCLEdBQVMsSUFBSyxDQUFDLE1BQU0sQ0FBQztvQkFDNUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7d0JBQ2xDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQWxCTSw2QkFBTyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFtQjVELDRCQUFDO1FBQUQsQ0FBQyxBQTdCRCxJQTZCQztRQTdCWSw2QkFBcUIsd0JBNkJqQyxDQUFBO1FBQ0QsNEJBQW9CLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNwRixDQUFDLEVBaENpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFnQ3hCO0FBQUQsQ0FBQyxFQWhDUyxPQUFPLEtBQVAsT0FBTyxRQWdDaEIifQ==