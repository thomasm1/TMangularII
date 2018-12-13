var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var MasterAction = (function () {
            function MasterAction(actionName, actionFunc) {
                this.actionName = actionName;
                this.actionFunc = actionFunc;
            }
            return MasterAction;
        }());
        virtdog.MasterAction = MasterAction;
        var MasterController = (function () {
            function MasterController($rootScope, eventNames) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.speciesName = 'Homo Sapiens';
                this.masterActions = [];
                this.masterObjects = [];
                this.throwSomething = function (object) {
                    ///this.$rootScope.$broadcast(this.eventNames.masterThrow, object);
                    return _this.$rootScope.$broadcast(_this.eventNames.masterThrow, {});
                };
                this.feedTheDog = function (food) {
                    return _this.$rootScope.$broadcast(_this.eventNames.masterFeed, food);
                };
                this.familiarName = 'Dillon';
                this.initializeLists();
            }
            // --------------------- private stuff down here -------------------------------
            MasterController.prototype.initializeLists = function () {
                this.masterActions.push(new MasterAction('Throw Object', this.throwSomething));
                this.masterActions.push(new MasterAction('Feed', this.feedTheDog));
                var dogObject = new virtdog.DogObject('Babe Ruth autographed baseball', true, false);
                dogObject.bounces = true;
                dogObject.expensive = true;
                dogObject.irreplaceable = true;
                dogObject.monetaryValue = 100000;
                dogObject.chewLimit = 15;
                this.masterObjects.push(dogObject);
                dogObject = new virtdog.DogObject('ball', true, false);
                dogObject.bounces = true;
                dogObject.chewLimit = 100;
                this.masterObjects.push(dogObject);
                dogObject = new virtdog.DogObject('Frisbee', true, false);
                dogObject.flies = true;
                dogObject.chewLimit = 20;
                this.masterObjects.push(dogObject);
                this.masterObjects.push(new virtdog.DogObject('stick', true, false));
                this.masterObjects.push(new virtdog.DogObject('dog food', true, true));
                this.masterObjects.push(new virtdog.DogObject('table scraps', true, true));
            };
            MasterController.$inject = ['$rootScope', 'eventNames'];
            return MasterController;
        }());
        virtdog.MasterController = MasterController;
        virtdog.getModulePeople().controller('masterController', MasterController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc3RlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBMkRoQjtBQTNERCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0EyRHhCO0lBM0RpQixXQUFBLE9BQU8sRUFBQyxDQUFDO1FBQ3pCO1lBQ0Usc0JBQ1MsVUFBa0IsRUFDbEIsVUFBNkM7Z0JBRDdDLGVBQVUsR0FBVixVQUFVLENBQVE7Z0JBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1DO1lBQ2xELENBQUM7WUFDUCxtQkFBQztRQUFELENBQUMsQUFMRCxJQUtDO1FBTFksb0JBQVksZUFLeEIsQ0FBQTtRQUVEO1lBV0UsMEJBQW9CLFVBQWdDLEVBQVUsVUFBc0I7Z0JBWHRGLGlCQWlEQztnQkF0Q3FCLGVBQVUsR0FBVixVQUFVLENBQXNCO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBVjdFLGdCQUFXLEdBQVcsY0FBYyxDQUFDO2dCQUtyQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7Z0JBRW5DLGtCQUFhLEdBQWdCLEVBQUUsQ0FBQztnQkFRaEMsbUJBQWMsR0FBRyxVQUFDLE1BQU07b0JBQzdCLG1FQUFtRTtvQkFDbkUsT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFHLENBQUM7Z0JBQTVELENBQTRELENBQUM7Z0JBQ3hELGVBQVUsR0FBRyxVQUFDLElBQUk7b0JBQ3ZCLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2dCQUE1RCxDQUE0RCxDQUFDO2dCQVI3RCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7WUFRRCxnRkFBZ0Y7WUFDeEUsMENBQWUsR0FBdkI7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBRW5FLElBQUksU0FBUyxHQUFHLElBQUksaUJBQVMsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDM0IsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLFNBQVMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUNqQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRW5DLFNBQVMsR0FBRyxJQUFJLGlCQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDL0MsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkMsU0FBUyxHQUFHLElBQUksaUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDdkIsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFTLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLENBQUM7WUF0Q00sd0JBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztZQXVDaEQsdUJBQUM7UUFBRCxDQUFDLEFBakRELElBaURDO1FBakRZLHdCQUFnQixtQkFpRDVCLENBQUE7UUFDRCx1QkFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDckUsQ0FBQyxFQTNEaUIsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBMkR4QjtBQUFELENBQUMsRUEzRFMsT0FBTyxLQUFQLE9BQU8sUUEyRGhCIn0=