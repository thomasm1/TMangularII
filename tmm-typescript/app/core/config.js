var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        virtdog.dogConfiguration = {
            appTitle: 'Virtual Dog Demo',
            version: '1.0.0',
            startDog: {
                age: 9,
                barkSound: 'bark',
                breed: 'Malamute',
                chewUrgeInterval: 1000 * 20 * 1 * 1,
                coatStyle: 'thick and coarse',
                defaultAction: 'lay around',
                dogLonelyDuration: 1000 * 60 * 60 * 1,
                dogLonelyEndurance: 1000 * 60 * 60 * .06,
                dogSleepDuration: 1000 * 60 * 60 * 6,
                dogTiredInterval: 1000 * 60 * 60 * 2,
                earState: 'relaxed',
                earStyle: 'pointed and super soft',
                familiarName: 'Zeus',
                motherNature1Interval: 1000 * 60 * 60 * 4,
                motherNature2Interval: 1000 * 60 * 60 * 8,
                speciesName: 'canis familiaris',
                squeakyOcdChewCount: 10,
                startupBlog: 'I laid down and knocked my tail on the floor twice.',
                tailState: virtdog.DogTailState.elevated,
                tailStyle: 'curved and furry'
            },
            otherDogs: [{
                    age: 0.1,
                    barkSound: 'yip',
                    breed: 'Mongrel',
                    chewUrgeInterval: 1000 * 15,
                    coatStyle: '',
                    defaultAction: 'Lay around',
                    dogLonelyDuration: 1000 * 60 * 60 * 6,
                    dogLonelyEndurance: 1000 * 10,
                    dogSleepDuration: 1000 * 60 * 4,
                    dogTiredInterval: 1000 * 60 * 2,
                    earState: '',
                    earStyle: '',
                    familiarName: 'Puppy Trouble',
                    motherNature1Interval: 1000 * 60,
                    motherNature2Interval: 1000 * 60 * 60 * 1,
                    speciesName: 'Canis familiaris',
                    squeakyOcdChewCount: 3,
                    startupBlog: 'I wagged my tail, no I wagged my whole body! And while I did that I did my other favorite thing, I wet all over!',
                    tailState: virtdog.DogTailState.wagging,
                    tailStyle: ''
                }, {
                    age: 5,
                    barkSound: 'ruf',
                    breed: 'Labrador',
                    chewUrgeInterval: 1000 * 60 * 60 * 6,
                    coatStyle: '',
                    defaultAction: 'Lay around',
                    dogLonelyDuration: 1000 * 60 * 60 * 6,
                    dogLonelyEndurance: 1000 * 60 * 60 * 6,
                    dogSleepDuration: 1000 * 60 * 60 * 6,
                    dogTiredInterval: 1000 * 60 * 60 * 6,
                    earState: '',
                    earStyle: '',
                    familiarName: 'Rover',
                    motherNature1Interval: 1000 * 60 * 60 * 6,
                    motherNature2Interval: 1000 * 60 * 60 * 6,
                    speciesName: 'Canis familiaris',
                    squeakyOcdChewCount: 10,
                    startupBlog: 'I ran up to my master wagging my tail!',
                    tailState: virtdog.DogTailState.wagging,
                    tailStyle: ''
                }]
        };
        virtdog.getModuleCore().value('dogConfig', virtdog.dogConfiguration);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXdFaEI7QUF4RUQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBd0V4QjtJQXhFaUIsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUNkLHdCQUFnQixHQUFHO1lBQzVCLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFRO2dCQUNkLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsZ0JBQWdCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDbkMsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0IsYUFBYSxFQUFFLFlBQVk7Z0JBQzNCLGlCQUFpQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3JDLGtCQUFrQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUc7Z0JBQ3hDLGdCQUFnQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BDLGdCQUFnQixFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxZQUFZLEVBQUUsTUFBTTtnQkFDcEIscUJBQXFCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekMscUJBQXFCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekMsV0FBVyxFQUFFLGtCQUFrQjtnQkFDL0IsbUJBQW1CLEVBQUUsRUFBRTtnQkFDdkIsV0FBVyxFQUFFLHFEQUFxRDtnQkFDbEUsU0FBUyxF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