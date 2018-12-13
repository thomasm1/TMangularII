// <reference path="../../typings/index.d.ts" />
// test
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
            // it('should set familliarName to Dillon', () => {
            // 	expect(sut.familiarName).toEqual('Dillon');
            // }); 
            // it('should set species to homo sapiens', () => {
            // 	expect(sut.speciesName).toEqual('Homo Sapiens');
            // }); 
            // it('should add 2 items to masterActions', () => {
            // 	expect(sut.masterActions.length).toEqual(2);
            // });
            // it('should set set first item actionName in masterActions to \'Throw Object\'', () => {
            // 	expect(sut.masterActions[0].actionName).toEqual('Throw Object');
            // });   
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
        describe('broadcast related property', function () {
            //  let broadcastObject: dogsrus.virtdog.DogObject;
            var broadcastObject;
            beforeEach(function () {
                broadcastObject = new dogsrus.virtdog.DogObject('meh', false, false);
                spyOn($rootScope, '$broadcast');
            });
            // describe('throwSomething method', () => {
            //     it('shouldbroadcast the throw event name', () => {
            //         pending('finish in mocking module');
            //     });
            // }); 
            // describe('throwSomething', () =>         {
            //     it('should broadcast the throw event name and object thrown', () => {
            //         sut.throwSomething(broadcastObject);
            //         expect($rootScope.$broadcast).toHaveBeenCalledWith(dogsrus.virtdog.eventNames.masterThrow, broadcastObject);
            //     });
            // });
            describe('feedTheDog method', function () {
                it('should broadcast the feed event name and object thrown', function () {
                    sut.feedTheDog(broadcastObject);
                    expect($rootScope.$broadcast).toHaveBeenCalledWith(dogsrus.virtdog.eventNames.masterFeed, broadcastObject);
                    //need to know that broadcast right event and right object!!
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ29udHJvbGxlclNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXN0ZXJDb250cm9sbGVyU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDL0MsT0FBTztBQUNSLFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRTtJQUN4QyxRQUFRLENBQUMseUJBQXlCLEVBQUU7UUFDaEMsSUFBSSxHQUFxQyxFQUNyQyxVQUFnQyxFQUNoQyxXQUFrQyxFQUNsQyxzQkFHQyxDQUFDO1FBQ04sVUFBVSxDQUFDO1lBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLFVBQUMsU0FBbUM7Z0JBQ3ZDLFdBQVcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUF3QixhQUFhLENBQUMsQ0FBQztnQkFDbEUsVUFBVSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQXVCLFlBQVksQ0FBQyxDQUFDO2dCQUMvRCxzQkFBc0IsR0FBRztvQkFDckIsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVU7aUJBQ3pDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsR0FBRyxXQUFXLENBQW1DLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDcEcsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ3BCLG1EQUFtRDtZQUM1RCwrQ0FBK0M7WUFDdEMsT0FBTztZQUNQLG1EQUFtRDtZQUM1RCxvREFBb0Q7WUFDM0MsT0FBTztZQUNQLG9EQUFvRDtZQUM3RCxnREFBZ0Q7WUFDdkMsTUFBTTtZQUVOLDBGQUEwRjtZQUNuRyxvRUFBb0U7WUFDM0QsU0FBUztZQUNULEVBQUUsQ0FBQyxtREFBbUQsRUFBRTtnQkFDaEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFB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