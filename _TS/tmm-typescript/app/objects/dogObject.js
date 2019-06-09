var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        (function (DogSpitState) {
            DogSpitState[DogSpitState["noSpit"] = 0] = "noSpit";
            DogSpitState[DogSpitState["someSpit"] = 1] = "someSpit";
            DogSpitState[DogSpitState["soggyAndSlimy"] = 2] = "soggyAndSlimy";
        })(virtdog.DogSpitState || (virtdog.DogSpitState = {}));
        var DogSpitState = virtdog.DogSpitState;
        (function (ObjectState) {
            ObjectState[ObjectState["mintCondition"] = 0] = "mintCondition";
            ObjectState[ObjectState["littleBitChewed"] = 1] = "littleBitChewed";
            ObjectState[ObjectState["veryChewed"] = 2] = "veryChewed";
            ObjectState[ObjectState["structurallyDamaged"] = 3] = "structurallyDamaged";
            ObjectState[ObjectState["shredded"] = 4] = "shredded";
        })(virtdog.ObjectState || (virtdog.ObjectState = {}));
        var ObjectState = virtdog.ObjectState;
        (function (ChewExperience) {
            ChewExperience[ChewExperience["painful"] = 0] = "painful";
            ChewExperience[ChewExperience["fair"] = 1] = "fair";
            ChewExperience[ChewExperience["good"] = 2] = "good";
            ChewExperience[ChewExperience["great"] = 3] = "great";
            ChewExperience[ChewExperience["squeaky"] = 4] = "squeaky";
        })(virtdog.ChewExperience || (virtdog.ChewExperience = {}));
        var ChewExperience = virtdog.ChewExperience;
        var DogObject = (function () {
            function DogObject(name, chewy, edible, chewExperience) {
                if (chewExperience === void 0) { chewExperience = ChewExperience.good; }
                this.name = name;
                this.chewy = chewy;
                this.edible = edible;
                this.chewExperience = chewExperience;
                this.expensive = false;
                this.irreplaceable = false;
                this.flies = false;
                this.bounces = false;
                this.monetaryValue = 0;
                this.spitState = DogSpitState.noSpit;
                this.shredable = false;
                this.impervious = false;
                this.chewLimit = 0;
                this.state = ObjectState.mintCondition;
                if (!chewy && chewExperience > ChewExperience.fair) {
                    chewExperience = ChewExperience.fair;
                }
            }
            DogObject.prototype.getSpitStateText = function () {
                return DogSpitState[this.spitState];
            };
            DogObject.prototype.getStateText = function () {
                return ObjectState[this.state];
            };
            DogObject.prototype.chewOn = function () {
                if (this.spitState < DogSpitState.soggyAndSlimy) {
                    this.spitState++;
                }
                if (this.impervious) {
                    return this.chewExperience;
                }
                this.monetaryValue /= 2;
                this.expensive = this.monetaryValue > 100;
                if (this.chewLimit > 0) {
                    this.chewLimit--;
                    if (this.state === ObjectState.mintCondition) {
                        this.state++;
                    }
                    else if (this.chewLimit < 10 && this.state === ObjectState.littleBitChewed) {
                        this.state++;
                        if (this.chewExperience !== ChewExperience.squeaky
                            && this.chewExperience > ChewExperience.good) {
                            this.chewExperience--;
                        }
                    }
                    else if (this.chewLimit < 5 && this.state === ObjectState.veryChewed) {
                        this.state++;
                        if (this.chewExperience !== ChewExperience.squeaky
                            && this.chewExperience > ChewExperience.fair) {
                            this.chewExperience--;
                        }
                        else if (this.chewExperience === ChewExperience.squeaky
                            && this.chewLimit === 0) {
                            this.chewExperience = ChewExperience.fair;
                        }
                    }
                }
                if (this.state === ObjectState.veryChewed) {
                    if (this.shredable) {
                        this.state++;
                    }
                    else {
                        this.state += 2;
                    }
                }
                else if (this.state < ObjectState.structurallyDamaged) {
                    this.state++;
                }
                return this.chewExperience;
            };
            return DogObject;
        }());
        virtdog.DogObject = DogObject;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9nT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQWdHaEI7QUFoR0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBZ0d4QjtJQWhHaUIsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUN6QixXQUFZLFlBQVk7WUFDdEIsbURBQU0sQ0FBQTtZQUNOLHVEQUFRLENBQUE7WUFDUixpRUFBYSxDQUFBO1FBQ2YsQ0FBQyxFQUpXLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7UUFKRCxJQUFZLFlBQVksR0FBWixvQkFJWCxDQUFBO1FBRUQsV0FBWSxXQUFXO1lBQ3JCLCtEQUFhLENBQUE7WUFDYixtRUFBZSxDQUFBO1lBQ2YseURBQVUsQ0FBQTtZQUNWLDJFQUFtQixDQUFBO1lBQ25CLHFEQUFRLENBQUE7UUFDVixDQUFDLEVBTlcsbUJBQVcsS0FBWCxtQkFBVyxRQU10QjtRQU5ELElBQVksV0FBVyxHQUFYLG1CQU1YLENBQUE7UUFFRCxXQUFZLGNBQWM7WUFDeEIseURBQU8sQ0FBQTtZQUNQLG1EQUFJLENBQUE7WUFDSixtREFBSSxDQUFBO1lBQ0oscURBQUssQ0FBQTtZQUNMLHlEQUFPLENBQUE7UUFDVCxDQUFDLEVBTlcsc0JBQWMsS0FBZCxzQkFBYyxRQU16QjtRQU5ELElBQVksY0FBYyxHQUFkLHNCQU1YLENBQUE7UUFFRDtZQVlFLG1CQUNTLElBQVksRUFDWixLQUFjLEVBQ2QsTUFBZSxFQUNkLGNBQW9DO2dCQUE1Qyw4QkFBNEMsR0FBNUMsaUJBQXlCLGNBQWMsQ0FBQyxJQUFJO2dCQUhyQyxTQUFJLEdBQUosSUFBSSxDQUFRO2dCQUNaLFVBQUssR0FBTCxLQUFLLENBQVM7Z0JBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUztnQkFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7Z0JBZnZDLGNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBQzNCLGtCQUFhLEdBQVks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