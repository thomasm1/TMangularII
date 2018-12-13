/// <reference path="../../typings/index.d.ts" />
describe('In the file masterController.ts', function () {
    describe('the masterController\'s', function () {
        var sut, $rootScope, $controller, masterControllerParams;
        beforeEach(function () {
            angular.mock.module('app.people');
            inject(function ($injector) {
                $controller = $injector.get('$controller');
                $rootScope = $injector.get('$rootScope');
                masterControllerParams = {
                    $rootScope: $rootScope,
                    eventNames: dogsrus.virtdog.eventNames
                };
            });
            sut = $controller('masterController', masterControllerParams);
        });
        describe('constructor', function () {
            it('should set familliarName to Dillon', function () {
                expect(sut.familiarName).toEqual('Dillon');
            });
            it('should set species to homo sapiens', function () {
                expect(sut.speciesName).toEqual('Homo Sapiens');
            });
            it('should add 2 items to masterActions', function () {
                expect(sut.masterActions.length).toEqual(2);
            });
            it('should set set first item actionName in masterActions to \'Throw Object\'', function () {
                expect(sut.masterActions[0].actionName).toEqual('Throw Object');
            });
            it('should set first item actionFunc in masterActions', function () {
                expect(sut.masterActions[0].actionFunc).toBeDefined('actionFunc no defined for Throw Object');
                expect(sut.masterActions[0].actionFunc).not.toBeNull('actionFunc is null for Throw Object');
            });
            it('should set second item actionName in masterActions to \'Feed\'', function () {
                expect(sut.masterActions[1].actionName).toEqual('Feed');
            });
            it('should set second item actionFunc in masterActions', function () {
                expect(sut.masterActions[1].actionFunc).toBeDefined('actionFunc no defined for Throw Object');
                expect(sut.masterActions[1].actionFunc).not.toBeNull('actionFunc is null for Throw Object');
            });
            it('should add 6 items to masterObjects', function () {
                expect(sut.masterObjects.length).toEqual(6);
            });
            it('should set masterObject item 1 name to \'Babe Ruth autographed baseball\'', function () {
                expect(sut.masterObjects[0].name).toEqual('Babe Ruth autographed baseball');
            });
            it('should set masterObject item 2 name to \'ball\'', function () {
                expect(sut.masterObjects[1].name).toEqual('ball');
            });
            it('should set masterObject item 3 name to \'Frisbee\'', function () {
                expect(sut.masterObjects[2].name).toEqual('Frisbee');
            });
            it('should set masterObject item 4 name to \'stick\'', function () {
                expect(sut.masterObjects[3].name).toEqual('stick');
            });
            it('should set masterObject item 5 name to \'dog food\'', function () {
                expect(sut.masterObjects[4].name).toEqual('dog food');
            });
            it('should set masterObject item 6 name to \'table scraps\'', function () {
                expect(sut.masterObjects[5].name).toEqual('table scraps');
            });
        });
        describe('throwSomething method', function () {
            it('shouldbroadcast the throw event name', function () {
                pending('finish in mocking module');
            });
        });
        describe('feedTheDog method', function () {
            it('should broadcast the feed event name', function () {
                pending('finish in mocking module');
            });
        });
    });
    describe('the MasterAction\'s constructor', function () {
        var sut, actionFunc = function (o) { };
        beforeEach(function () {
            sut = new dogsrus.virtdog.MasterAction('masterActionName', actionFunc);
        });
        it('should set actionName to passed in name', function () {
            expect(sut.actionName).toEqual('masterActionName');
        });
        it('should set actionFunc to passed in function', function () {
            expect(sut.actionFunc).toBe(actionFunc, 'actionFunc should match passed in actio nfunction');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ29udHJvbGxlclNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXN0ZXJDb250cm9sbGVyU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFFakQsUUFBUSxDQUFDLGlDQUFpQyxFQUFFO0lBQ3hDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtRQUNoQyxJQUFJLEdBQXFDLEVBQ3JDLFVBQWdDLEVBQ2hDLFdBQWtDLEVBQ2xDLHNCQUdDLENBQUM7UUFDTixVQUFVLENBQUM7WUFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsVUFBQyxTQUFtQztnQkFDdkMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQXdCLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRSxVQUFVLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBdUIsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELHNCQUFzQixHQUFHO29CQUNyQixVQUFVLEVBQUUsVUFBVTtvQkFDdEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVTtpQkFDekMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxHQUFHLFdBQVcsQ0FBbUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUNwRyxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDcEIsRUFBRSxDQUFDLG9DQUFvQyxFQUFFO2dCQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRTtnQkFDakQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxF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