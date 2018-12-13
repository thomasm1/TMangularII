var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        virtdog.eventNames = {
            dogBark: 'dogBark',
            dogChase: 'dogChase',
            catMeow: 'catMeow',
            catBO: 'catBO',
            catMove: 'catMove',
            catHiss: 'catHiss',
            decapitate: 'decapitate',
            masterCall: 'masterCall',
            masterThrow: 'masterThrow',
            masterFeed: 'masterFeed',
            masterTake: 'masterTake',
            motherNatureCalls1: 'motherNatureCalls1',
            motherNatureCalls2: 'motherNatureCalls2',
            hunger: 'hunger',
            chewUrge: 'chewUrge',
            exhaustion: 'exhaustion',
            loneliness: 'loneliness',
            excitement: 'excitement',
            layAround: 'layAround',
            animalRun: 'animalRun',
            personPet: 'personPet',
            personThreaten: 'personThreaten',
            commandSit: 'sit',
            commandLayDown: 'lay down',
            commandStay: 'stay',
            commandShake: 'shake',
            changeDomain: 'changeDomain'
        };
        virtdog.roverConfig = {
            roverUrl: 'http://localhost:8200//mars-photos/api/v1/rovers/curiosity/photos',
            apiKey: 'DEMO_KEY',
            camera: 'FHAZ',
            earthDate: '2014-8-26',
            roverName: 'curiosity',
            alternateUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
        };
        virtdog.dogPlaces = {
            home: { name: 'home', imagePath: 'zeusinside.jpg', indoors: true, placeObjects: [] },
            frontYard: { name: 'front yard', imagePath: 'zeusfrontyard.jpg', indoors: false, placeObjects: [] },
            backYard: { name: 'back yard', imagePath: 'zeusbackyard.jpg', indoors: false, placeObjects: [] },
            park: { name: 'park', imagePath: 'zeuspark.jpg', indoors: false, placeObjects: [] },
            bathroom: { name: 'bathroom', imagePath: 'fireplug.jpg', indoors: false, placeObjects: [] }
        };
        virtdog.getModuleCore().constant('eventNames', virtdog.eventNames);
        virtdog.getModuleCore().constant('roverConfig', virtdog.roverConfig);
        virtdog.getModuleCore().constant('dogPlaces', virtdog.dogPlaces);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXNEaEI7QUF0REQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBc0R4QjtJQXREaUIsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUNkLGtCQUFVLEdBQUc7WUFDdEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsU0FBUztZQUNsQixPQUFPLEVBQUUsU0FBUztZQUNsQixVQUFVLEVBQUUsWUFBWTtZQUN4QixVQUFVLEVBQUUsWUFBWTtZQUN4QixXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUUsWUFBWTtZQUN4QixVQUFVLEVBQUUsWUFBWTtZQUN4QixrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsa0JBQWtCLEVBQUUsb0JBQW9CO1lBQ3hDLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsVUFBVSxFQUFFLEtBQUs7WUFDakIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsV0FBVyxFQUFFLE1BQU07WUFDbkIsWUFBWSxFQUFFLE9BQU87WUFDckIsWUFBWSxFQUFFLGNBQWM7U0FDN0IsQ0FBQztRQUdTLG1CQUFXLEdBQUc7WUFDdkIsUUFBUSxFQUFFLG1FQUFtRTtZQUM3RSxNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFlBQVksRUFBRSxpRUFBaUU7U0FDaEYsQ0FBQztRQUdTLGlCQUFTLEdBQUc7WUFDckIsSUFBSSxFQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO1lBQy9GLFNBQVMsRUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtZQUM5RyxRQUFRLEVBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7WUFDM0csSUFBSSxFQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtZQUM5RixRQUFRLEVBQWEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO1NBQ3ZHLENBQUM7UUFHRixxQkFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxrQkFBVSxDQUFDLENBQUM7UUFDbkQscUJBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsbUJBQVcsQ0FBQyxDQUFDO1FBQ3JELHFCQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGlCQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDLEVBdERpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFzRHhCO0FBQUQsQ0FBQyxFQXREUyxPQUFPLEtBQVAsT0FBTyxRQXNEaEIifQ==