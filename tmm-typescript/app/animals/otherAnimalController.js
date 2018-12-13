var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var OtherAnimalController = (function () {
            function OtherAnimalController($rootScope, eventNames) {
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.otherAnimals = [];
                this.lastAction = '';
                this.intializeAnimalList(eventNames);
            }
            OtherAnimalController.prototype.performAction = function () {
                // in future may keep track of last action so we can respond back and forth
                this.lastAction = this.selectedAnimal.defaultAction;
                this.$rootScope.$broadcast(this.selectedAnimal.defaultAction, this.selectedAnimal);
            };
            OtherAnimalController.prototype.intializeAnimalList = function (eventNames) {
                this.otherAnimals.push({
                    defaultAction: eventNames.catHiss,
                    familiarName: 'Alley Cat',
                    speciesName: ''
                });
                this.otherAnimals.push({
                    defaultAction: eventNames.decapitate,
                    familiarName: 'No Ordinary Rabbit',
                    speciesName: ''
                });
                this.otherAnimals.push({
                    defaultAction: eventNames.dogBark,
                    familiarName: 'Little Noisy Dog',
                    speciesName: ''
                });
                this.performAction = this.performAction.bind(this);
            };
            OtherAnimalController.$inject = ['$rootScope', 'eventNames'];
            return OtherAnimalController;
        }());
        virtdog.OtherAnimalController = OtherAnimalController;
        virtdog.getModuleOtherAnimal().controller('otherAnimalController', OtherAnimalController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXJBbmltYWxDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3RoZXJBbmltYWxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXdDaEI7QUF4Q0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBd0N4QjtJQXhDaUIsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUN6QjtZQU1FLCtCQUFvQixVQUFnQyxFQUFVLFVBQXNCO2dCQUFoRSxlQUFVLEdBQVYsVUFBVSxDQUFzQjtnQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO2dCQUw3RSxpQkFBWSxHQUFjLEVBQUUsQ0FBQztnQkFFN0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztnQkFJN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFFTSw2Q0FBYSxHQUFwQjtnQkFDRSwyRUFBMkU7Z0JBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRixDQUFDO1lBRU8sbURBQW1CLEdBQTNCLFVBQTRCLFVBQXNCO2dCQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7b0JBQ0UsYUFBYSxFQUFFLFVBQVUsQ0FBQyxPQUFPO29CQUNqQyxZQUFZLEVBQUUsV0FBVztvQkFDekIsV0FBVyxFQUFFLEVBQUU7aUJBQ2hCLENBQUMsQ0FBQztnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7b0JBQ0UsYUFBYSxFQUFFLFVBQVUsQ0FBQyxVQUFVO29CQUNwQyxZQUFZLEVBQUUsb0JBQW9CO29CQUNsQyxXQUFXLEVBQUUsRUFBRTtpQkFDaEIsQ0FBQyxDQUFDO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQjtvQkFDRSxhQUFhLEVBQUUsVUFBVSxDQUFDLE9BQU87b0JBQ2pDLFlBQVksRUFBRSxrQkFBa0I7b0JBQ2hDLFdBQVcsRUFBRSxFQUFFO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBL0JNLDZCQUFPLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFnQ2hELDRCQUFDO1FBQUQsQ0FBQyxBQXJDRCxJQXFDQztRQXJDWSw2QkFBcUIsd0JBcUNqQyxDQUFBO1FBQ0QsNEJBQW9CLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNwRixDQUFDLEVBeENpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUF3Q3hCO0FBQUQsQ0FBQyxFQXhDUyxPQUFPLEtBQVAsT0FBTyxRQXdDaEIifQ==