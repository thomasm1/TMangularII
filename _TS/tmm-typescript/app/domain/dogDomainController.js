var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogDomainController = (function () {
            function DogDomainController($rootScope, dogPlaces, eventNames) {
                this.$rootScope = $rootScope;
                this.dogPlaces = dogPlaces;
                this.eventNames = eventNames;
                this.placeObjects = [];
                this.places = [];
                this.initializeDomain();
            }
            DogDomainController.prototype.domainSelected = function (domain) {
                this.$rootScope.$broadcast(this.eventNames.changeDomain, domain);
            };
            // default initialization is home
            DogDomainController.prototype.initializeDomain = function () {
                this.place = this.dogPlaces.home;
                this.places.push(this.dogPlaces.home);
                this.places.push(this.dogPlaces.backYard);
                this.places.push(this.dogPlaces.frontYard);
                this.places.push(this.dogPlaces.park);
                this.places.push(this.dogPlaces.bathroom);
                this.placeObjects.push(new virtdog.DogObject('Really Nice Couch', true, false));
                this.placeObjects[0].expensive = true;
                this.placeObjects[0].monetaryValue = 2000;
            };
            DogDomainController.$inject = ['$rootScope', 'dogPlaces', 'eventNames'];
            return DogDomainController;
        }());
        virtdog.DogDomainController = DogDomainController;
        virtdog.getModuleDogDomain().controller('dogDomainController', DogDomainController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nRG9tYWluQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvZ0RvbWFpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBK0JoQjtBQS9CRCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0ErQnhCO0lBL0JpQixXQUFBLE9BQU8sRUFBQyxDQUFDO1FBQ3pCO1lBTUUsNkJBQW9CLFVBQWdDLEVBQVMsU0FBb0IsRUFBVSxVQUFzQjtnQkFBN0YsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7Z0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztnQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO2dCQUwxRyxpQkFBWSxHQUFnQixFQUFFLENBQUM7Z0JBRS9CLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO2dCQUk5QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDO1lBRU0sNENBQWMsR0FBckIsVUFBc0IsTUFBaUI7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFFRCxpQ0FBaUM7WUFDekIsOENBQWdCLEdBQXhCO2dCQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQixJQUFJLGlCQUFTLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUNoRCxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzVDLENBQUM7WUF0Qk0sMkJBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUE7WUF1QjVELDBCQUFDO1FBQUQsQ0FBQyxBQTVCRCxJQTRCQztRQTVCWSwyQkFBbUIsc0JBNEIvQixDQUFBO1FBQ0QsMEJBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM5RSxDQUFDLEVBL0JpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUErQnhCO0FBQUQsQ0FBQyxFQS9CUyxPQUFPLEtBQVAsT0FBTyxRQStCaEIifQ==