'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogController = (function () {
            function DogController($rootScope, $interval, dogConfig, eventNames) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.$interval = $interval;
                this.dogConfig = dogConfig;
                this.eventNames = eventNames;
                this.blogContent = '';
                this.blogPreface = [''];
                this.chewObjects = [];
                this.dogDomain = null;
                this.dogList = [];
                // IDog
                this.age = 0;
                this.barkSound = '';
                this.breed = '';
                this.chewUrgeInterval = 1000 * 60 * 60 * 6;
                this.coatStyle = '';
                this.dogLonelyDuration = 1000 * 60 * 60 * 6;
                this.dogLonelyEndurance = 1000 * 60 * 60 * 6;
                this.dogSleepDuration = 1000 * 60 * 60 * 6;
                this.dogTiredInterval = 1000 * 60 * 60 * 6;
                this.earState = '';
                this.earStyle = '';
                this.motherNature1Interval = 1000 * 60 * 60 * 6;
                this.motherNature2Interval = 1000 * 60 * 60 * 6;
                this.squeakyOcdChewCount = 1;
                this.startupBlog = '';
                this.tailState = virtdog.DogTailState.elevated;
                this.tailStyle = '';
                // IAnimal
                this.defaultAction = '';
                this.familiarName = '';
                this.speciesName = 'Canis familiaris';
                this.bark = function (numberOfBarks) {
                    var totalBarkText = '';
                    for (var x = 0; x < numberOfBarks; x++) {
                        totalBarkText += _this.barkSound + " ";
                    }
                    _this.blog(totalBarkText, false);
                };
                this.chewOnSomething = function () {
                    if (_this.chewObjects.length) {
                        _this.chewObjects.sort(function (chewObject1, chewObject2) {
                            return chewObject1.expensive > chewObject2.expensive
                                ? -1
                                : chewObject1.expensive < chewObject2.expensive
                                    ? 1
                                    : chewObject1.irreplaceable
                                        ? -1
                                        : 0;
                        });
                    }
                    for (var x = 0; x < _this.chewObjects.length; x++) {
                        if (_this.chewObjects[x].chewy) {
                            var description = '';
                            if (_this.chewObjects[x].chewOn() === virtdog.ChewExperience.squeaky) {
                                _this.chewOnSomethingSqueaky(description, _this.chewObjects[x]);
                            }
                            else {
                                description = ("Suddenly I got an urge to chew!\n            I happily chewed on the " + _this.chewObjects[x].name + "!\n            The " + _this.chewObjects[x].name + " is now\n            " + _this.chewObjects[x].getSpitStateText() + " and\n            " + _this.chewObjects[x].getStateText() + "\n            " + ((_this.chewObjects[x].monetaryValue < 1)
                                    ? '.'
                                    : (" and is now worth $\n                " + Math.round(_this.chewObjects[x].monetaryValue) + ".")))
                                    .replace(/\s+/g, ' ');
                            }
                            _this.blog(description);
                            return;
                        }
                    }
                };
                this.decapitateHandler = function (event) {
                    _this.stopChewing();
                    _this.tailState = virtdog.DogTailState.tucked;
                    _this.blog('Oh no! Not the rab...');
                };
                this.eat = function (event, food) {
                    var blogEntry = "My master just fed me " + food.name;
                    if (food.edible) {
                        if (food.name === 'dog food') {
                            blogEntry += '! I ignored it for an hour, dumped it out on the floor, then ate the ' +
                                (food.name + " one piece at a time!");
                            _this.tailState = virtdog.DogTailState.wagging;
                        }
                        else {
                            blogEntry += ("! I devoured the " + food.name + " immediately ") +
                                'and looked back up at him with a hungry face.';
                            _this.tailState = virtdog.DogTailState.wagging;
                        }
                    }
                    else {
                        blogEntry += "? I sniffed the " + food.name + " and tilted my head.";
                        _this.tailState = virtdog.DogTailState.elevated;
                    }
                    _this.blog(blogEntry);
                };
                this.fetch = function (event, fetchObject) {
                    var blogEntry = ("My master just threw a " + fetchObject.name + ". ") +
                        ("I ran like mad to grab the " + fetchObject.name);
                    if (fetchObject.flies) {
                        blogEntry += ' and leapt like Air Jordan, snatching in mid flight!';
                    }
                    else {
                        blogEntry += ' snapping it up far sooner than imaginable!';
                    }
                    if (fetchObject.chewy && !_this.chewObjects.some(function (chewObject) {
                        return chewObject.name === fetchObject.name;
                    })) {
                        _this.chewObjects.push(fetchObject);
                    }
                    if (fetchObject.chewOn() === virtdog.ChewExperience.squeaky) {
                        _this.chewOnSomethingSqueaky(blogEntry, fetchObject);
                    }
                    else {
                        blogEntry += " I gave the " + fetchObject.name + " a good chew or two and dropped it.";
                    }
                    _this.blog(blogEntry);
                };
                this.getExcited = function (someAnimal) {
                    var description = someAnimal.familiarName +
                        ' wants to play with me!!! I wag my tail vigorously whine and jump up!!!';
                    _this.blog(description, true);
                };
                this.getPetted = function (event, person) {
                    _this.tailState = virtdog.DogTailState.wagging;
                    var description = person.familiarName +
                        ' just gave me a good petting! I smile and look at ' +
                        (person.familiarName + " with my big dog eyes look!");
                    _this.blog(description, true);
                };
                this.giveChase = function (someAnimal) {
                    _this.tailState = virtdog.DogTailState.wagging;
                    var description = ("I just chased " + someAnimal.familiarName + " ") +
                        ("through the " + _this.dogDomain.name + "!!!");
                    _this.blog(description, true);
                };
                this.respondToCommand = function (event, somePerson) {
                    var description = somePerson.familiarName + " just told me to " + event.name + "! ";
                    if (somePerson.familiarName === 'The Mailman') {
                        _this.giveChase(somePerson);
                        _this.blog(description, false);
                        return;
                    }
                    if (event.name === _this.eventNames.commandStay) {
                        if (somePerson.familiarName === 'The Alpha Male') {
                            description += 'I stayed.';
                        }
                        else {
                            description += 'I ignored it.';
                        }
                    }
                    else {
                        description += 'I did it.';
                    }
                    _this.blog(description, true);
                };
                this.setDogDomain = function (dogDomain) {
                    _this.dogDomain = dogDomain;
                };
                this.initializeDog(this.dogConfig.startDog);
                this.initializeEvents();
                this.initializeLists();
                this.blog(this.startupBlog);
            }
            DogController.prototype.testBark = function () {
                this.bark(3);
            };
            DogController.prototype.getTailStateText = function () {
                return virtdog.DogTailState[this.tailState];
            };
            // --------------------- private stuff down here -------------------------------
            DogController.prototype.initializeDog = function (dogToCopy) {
                // todo: not all dog props are being transfered
                this.familiarName = dogToCopy.familiarName;
                this.barkSound = dogToCopy.barkSound;
                this.age = dogToCopy.age;
                this.startupBlog = dogToCopy.startupBlog;
                this.chewUrgeInterval = dogToCopy.chewUrgeInterval;
            };
            DogController.prototype.initializeEvents = function () {
                var _this = this;
                this.chewPromise = this.$interval(this.chewOnSomething, this.chewUrgeInterval, 0, true);
                this.$rootScope.$on(this.eventNames.masterThrow, this.fetch);
                this.$rootScope.$on(this.eventNames.masterFeed, this.eat);
                this.$rootScope.$on(this.eventNames.decapitate, this.decapitateHandler);
                this.$rootScope.$on(this.eventNames.catHiss, function (e, a) { return _this.bark(10); });
                this.$rootScope.$on(this.eventNames.personPet, this.getPetted);
                this.$rootScope.$on(this.eventNames.animalRun, function (e, arg) { return _this.giveChase(arg); });
                this.$rootScope.$on(this.eventNames.changeDomain, function (e, arg) { return _this.setDogDomain(arg); });
                this.$rootScope.$on(this.eventNames.commandStay, this.respondToCommand);
                this.$rootScope.$on(this.eventNames.commandShake, this.respondToCommand);
                this.$rootScope.$on(this.eventNames.dogBark, function (e, a) { return _this.getExcited; });
            };
            DogController.prototype.initializeLists = function () {
                this.blogPreface.push('Guess what! ');
                this.blogPreface.push('Ha! ');
                this.blogPreface.push('Nice! ');
                this.blogPreface.push('You\'ll never believe this! ');
                this.blogPreface.push('OMG! ');
                this.blogPreface.push('So I\'m laying here. ');
                for (var x = 0; x < this.dogConfig.otherDogs.length; x++) {
                    this.dogList.push(this.dogConfig.otherDogs[x]);
                }
                this.dogList.push(this.dogConfig.startDog);
            };
            // todo: may not always want to add datestamp to blog
            // e.g. if want we want to blog multiple times on one event 
            DogController.prototype.blog = function (blogEntry, addPreface) {
                if (addPreface === void 0) { addPreface = true; }
                if (blogEntry !== '') {
                    if (addPreface) {
                        blogEntry = this.blogPreface[Math.floor((Math.random() * this.blogPreface.length))] + blogEntry;
                    }
                    blogEntry = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) + ": " + blogEntry;
                    this.blogContent = blogEntry + "\r\n" + this.blogContent;
                }
            };
            // todo: implement this with button, make public?
            DogController.prototype.blogAboutMe = function () {
                this.blog(("Hi, my name is " + this.familiarName + " and\n        I am a " + this.breed + ". I have a " + this.coatStyle + " coat,\n        ears that are " + this.earStyle + "\n        and a tail that is " + this.tailStyle + ", \n        I am " + this.age + " years old,\n        and when I bark it sounds like this: " + this.barkSound + ".\n        I get the urge to chew about every\n        " + this.chewUrgeInterval / (1000) + " seconds, \n        but mostly I " + this.defaultAction + ". I get lonely after \n        " + this.dogLonelyEndurance / (1000 * 60 * 60) + " hours,\n        and I will complain loudly about it for \n        " + this.dogLonelyDuration / (1000 * 60) + " minutes. I get sleepy every \n        " + this.dogTiredInterval / (1000 * 60 * 60) + " hours\n        and sleep for " + this.dogSleepDuration / (1000 * 60 * 60) + ".\n        Right now my ears are " + this.earState + "\n        and my tail is " + this.getTailStateText() + ".")
                    .replace(/\s+/g, ' '));
            };
            DogController.prototype.chewOnSomethingSqueaky = function (blogEntry, chewObject) {
                blogEntry += (" I chewed on the " + chewObject.name + " and heard it squeak!") +
                    'Ok this is way too much fun!!!';
                for (var i = 0; i < this.squeakyOcdChewCount; i++) {
                    if (chewObject.chewOn() === virtdog.ChewExperience.squeaky) {
                        blogEntry += ' Chomp, SQEAK!';
                    }
                    else {
                        blogEntry += ' Chomp... Hey it stopped squeaking, let me try again!';
                    }
                }
            };
            DogController.prototype.displayConfusion = function (event, args) {
                this.blog("I tilt my head at " + event.name + ", akward...");
            };
            DogController.prototype.stopChewing = function () {
                this.$interval.cancel(this.chewPromise);
            };
            DogController.$inject = ['$rootScope', '$interval', 'dogConfig', 'eventNames'];
            return DogController;
        }());
        virtdog.DogController = DogController;
        virtdog.getModuleDog().controller('dogController', DogController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvZ0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxPQUFPLENBNFJoQjtBQTVSRCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0E0UnhCO0lBNVJpQixXQUFBLE9BQU8sRUFBQyxDQUFDO1FBQ3pCO1lBaUNFLHVCQUNVLFVBQWdDLEVBQ2hDLFNBQThCLEVBQzlCLFNBQTJCLEVBQzNCLFVBQXNCO2dCQXJDbEMsaUJBeVJDO2dCQXZQVyxlQUFVLEdBQVYsVUFBVSxDQUFzQjtnQkFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO2dCQUMzQixlQUFVLEdBQVYsVUFBVSxDQUFZO2dCQXBDekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLGdCQUFXLEdBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsZ0JBQVcsR0FBZ0IsRUFBRSxDQUFDO2dCQUU5QixjQUFTLEdBQWMsSUFBSSxDQUFDO2dCQUM1QixZQUFPLEdBQVcsRUFBRSxDQUFDO2dCQUU1QixPQUFPO2dCQUNBLFFBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsY0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDZixVQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDZixzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDeEMscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dC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