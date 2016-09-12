"use strict";
var app = angular.module("robotgen", ["ngSanitize"]);

app.controller("appController",
[
    "$scope", function($scope) {
        $scope.Links = [
            {
                name: "Zonen",
                path: "zonen.html"
            }, {
                name: "Robot",
                path: "robot.html"
            }, {
                name: "Prylar",
                path: "prylar.html"
            }, {
                name: "Genlab Alfa",
                path: "genlab_moten.html"
            }
        ];
        $scope.Version = "Pracownik fabryki wersja systemu głównego 0.0.4a";
    }
]);

app.controller("itemController",
[
    "$scope", function($scope) {

    }
]);
app.controller("genlabController",
[
    "$scope", function($scope) {

        //TODO: REGEX the {hot} and T6. Make it add the numbers together
        $scope.Data = genlabData;
        $scope.Meeting = { Terrain: {} };
        $scope.Meeting.ThreatLevel = 0;
        var matchers = ["{expression}", "{artifact}"];

        $scope.RollRandomThreat = function() {
            $scope.Meeting.Terrain = getRandomFromList($scope.Data.terrain);
            $scope.RollThreat();
        };
        $scope.RollThreat = function() {
            // Reset Meeting desc
            $scope.Meeting.Description = "";
            $scope.Meeting.Number = 0;
            // Generate Threat
            $scope.Meeting.ThreatLevel = RollMutantDieSuccessesOnly($scope.Meeting.Terrain.threat);
            $scope.Meeting.Place = $scope.Meeting.Terrain.name;

            if ($scope.Meeting.ThreatLevel > 0) {
                var randomMeeting = getRandomMeeting();
                $scope.Meeting.Description = randomMeeting.description;
                $scope.Meeting.Expression = randomMeeting.expression;
                $scope.Meeting.Number = randomMeeting.number;


                if ($scope.Meeting.Description.indexOf("{expression}") !== -1) {
                    if (Array.isArray($scope.Meeting.Expression)) {
                        $scope.Meeting.Expression.forEach(function(expr) {
                            $scope.Meeting.Description = $scope.Meeting.Description
                                .replace("{expression}",
                                    stringToInt(expr,
                                        $scope.Meeting
                                        .ThreatLevel));
                        });
                    } else {
                        $scope.Meeting.Description = $scope.Meeting.Description
                            .replace("{expression}",
                                stringToInt($scope.Meeting.Expression,
                                    $scope.Meeting
                                    .ThreatLevel));
                    }
                }
                if ($scope.Meeting.Description.indexOf("{artifact}") !== -1) {
                    var artifact = getRandomFromList(generalData.artifacts);
                    console.log(artifact);
                    $scope.Meeting.Description = $scope.Meeting.Description
                            .replace("{artifact}",
                                artifact.name);
                }


                if ($scope.Meeting.Description.indexOf("{expression}") !== -1) {
                    $scope.Meeting.Description = $scope.Meeting.Description
                        .replace("{expression}", stringToInt($scope.Meeting.Expression, $scope.Meeting.ThreatLevel));
                }

            }
        };

        function stringToInt(input, threat) {
            var array = [];
            var sum = 0;
            console.log(input);
            if (input.indexOf("T6") !== -1) {
                input = input.replace("T6", getRandomInt(1, 7));
            }

            if (input.indexOf("hot") !== -1) {
                input = input.replace("hot", threat);
            }

            if (input.indexOf("+") !== -1) {
                array = input.split("+");
                array.forEach(function(value) {
                    if (parseInt(value) !== NaN) {
                        sum += parseInt(value);
                    }
                    console.log("Adding");
                });

            } else if (input.indexOf("-") !== -1) {
                array = input.split("-");
                sum = array[0];
                for (var i = 1; i < array.length; i++) {
                    sum -= array[i];
                }
            } else {
                sum += parseInt(input);
            }
            return sum;
        }

        function getRandomMeeting() {
            var meetings = $scope.Meeting.Terrain.meetings;
            var randomMeetingNumber = getRandomFromList(meetings);
            var randomMeeting = {};

            $scope.Data.meetings.forEach(function(meeting) {
                if (meeting.number === randomMeetingNumber) {
                    randomMeeting = meeting;
                }
            });

            return randomMeeting;
        }
    }
]);
app.controller("zonController",
[
    "$scope", function($scope) {
        $scope.Data = zonenData;
    }
]);
app.controller("robotController",
[
    "$scope", function($scope) {
        $scope.Data = data;

        $scope.Robot = {};
        $scope.Robot.ProgramPoints = 10;
        $scope.Robot.Head = $scope.Data.Heads[0];
        $scope.Robot.Torso = $scope.Data.Torsos[0];
        $scope.Robot.Leg = $scope.Data.Legs[0];
        $scope.Robot.TotalaStats = {};
        $scope.Robot.Name = "ROBiTiCA";
        $scope.Robot.Model = {};
        $scope.Robot.Modules = [];
        $scope.RobotList = [];
        $scope.FillRobotList = fillRobotList;
        $scope.GoNuts = false;
        $scope.Robot.Visual = {};

        function fillRobotList(numberOf) {
            $scope.RobotList = [];
            for (var i = 0; i < numberOf; i++) {
                $scope.RobotList.push(returnRandomRobot());
            }
        }

        function returnRandomRobot() {
            var robot = {};
            robot.Head = getRandomHead();
            robot.Torso = $scope.Data.Torsos[getRandomInt(0, $scope.Data.Torsos.length)];
            robot.Leg = $scope.Data.Legs[getRandomInt(0, $scope.Data.Legs.length)];

            robot["TotalaStats"] = [];
            robot["Name"] = getRandomName();
            robot["CodeName"] = getRandomCodeName();

            robot["TotalaStats"]["SRV"] = robot.Head.SRV + robot.Torso.SRV + robot.Leg.SRV;
            robot["TotalaStats"]["STB"] = robot.Head.STB + robot.Torso.STB + robot.Leg.STB;
            robot["TotalaStats"]["PRC"] = robot.Head.PRC + robot.Torso.PRC + robot.Leg.PRC;
            robot["TotalaStats"]["NTV"] = robot.Head.NTV + robot.Torso.NTV + robot.Leg.NTV;
            robot["TotalaStats"]["MOD"] = robot.Head.MOD + robot.Torso.MOD + robot.Leg.MOD;
            robot["TotalaStats"]["SKYDD"] = robot.Head.SKYDD + robot.Torso.SKYDD + robot.Leg.SKYDD;

            return robot;
        }

        $scope.GetRandomRobot = function() {

            $scope.Robot.Head = getRandomHead();
            $scope.Robot.Torso = getRandomTorso();
            $scope.Robot.Leg = getRandomLeg();

            $scope.Robot.Model = getRandomStartModel($scope.GoNuts);
            $scope.Robot.Programs = $scope.Data.Programs.slice();
            $scope.Robot.Programs.push($scope.Robot.Model.SpecialProgram);

            $scope.Robot.SecondaryFunctions = [];
            $scope.Robot.SecondaryFunctions[0] = getFirstSecondaryFunction();

            for (var i = 0; i < getRandomInt(1, 3); i++) {
                $scope.Robot.SecondaryFunctions.push(getRandomSecondaryFunction());
            }
            generateProgramValues();

            $scope.Robot.Modules = [];
            $scope.Robot.FakeModules = 0;

            calculateStats();
            addFakeModule();
            $scope.Robot.Modules = getRandomModules($scope.Robot.TotalaStats.MOD);
            createDisplayTexts();
            $scope.GoNuts = false;
        };

        (function() { $scope.GetRandomRobot(); })();

        $scope.GO_NUTS = function() {
            $scope.GoNuts = true;
            $scope.GetRandomRobot();
        };

        function getModulesClass() {
            console.log($scope.Robot.Modules.length);
            var numberOfModules = $scope.Robot.Modules.length;
            var modulesClass = "modules col-xs-12 ";
            if (numberOfModules === 1) {
                modulesClass += "col-md-12";
            }
            if (numberOfModules === 2) {
                modulesClass += "col-md-6";
            }
            if (numberOfModules === 3) {
                modulesClass += "col-md-4";
            }
            if (numberOfModules >= 4) {
                modulesClass += "col-md-3";
            }
            return modulesClass;
        };

        $scope.GetPreviousHead = function() {
            var index = $scope.Data.Heads.findIndex(x => x.NAMN === $scope.Robot.Head.NAMN);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Heads.length - 1;
            }

            $scope.Robot.Head = $scope.Data.Heads[index];
            calculateStats();
            createDisplayTexts();
        };
        $scope.GetNextHead = function() {
            var index = $scope.Data.Heads.findIndex(x => x.NAMN === $scope.Robot.Head.NAMN);
            index += 1;
            if (index >= $scope.Data.Heads.length) {
                index = 0;
            }

            $scope.Robot.Head = $scope.Data.Heads[index];
            calculateStats();
            createDisplayTexts();
        };

        $scope.GetPreviousTorso = function() {
            var index = $scope.Data.Torsos.findIndex(x => x.NAMN === $scope.Robot.Torso.NAMN);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Torsos.length - 1;
            }

            $scope.Robot.Torso = $scope.Data.Torsos[index];
            calculateStats();
            createDisplayTexts();
        };
        $scope.GetNextTorso = function() {
            var index = $scope.Data.Torsos.findIndex(x => x.NAMN === $scope.Robot.Torso.NAMN);
            index += 1;
            if (index >= $scope.Data.Torsos.length) {
                index = 0;
            }

            $scope.Robot.Torso = $scope.Data.Torsos[index];
            calculateStats();
            createDisplayTexts();
        };

        $scope.GetPreviousLeg = function() {
            var index = $scope.Data.Legs.findIndex(x => x.NAMN === $scope.Robot.Leg.NAMN);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Legs.length - 1;
            }

            $scope.Robot.Leg = $scope.Data.Legs[index];
            calculateStats();
            createDisplayTexts();
        };
        $scope.GetNextLeg = function() {
            var index = $scope.Data.Legs.findIndex(x => x.NAMN === $scope.Robot.Leg.NAMN);
            index += 1;
            if (index >= $scope.Data.Legs.length) {
                index = 0;
            }

            $scope.Robot.Leg = $scope.Data.Legs[index];
            calculateStats();
            createDisplayTexts();
        };

        function generateProgramValues() {
            //TODO:Viktad tilläggning av programvärden
            //$scope.Robot.TotalaStats

            $scope.Robot.ProgramPoints = 10;

            $scope.Robot.Programs.forEach(function(program) {
                program.Value = 0;
            });
            $scope.Robot.Programs[$scope.Robot.Programs.length - 1].Value = 1;
            $scope.Robot.ProgramPoints -= 1;

            var random = 0;
            while ($scope.Robot.ProgramPoints > 0) {
                random = getRandomInt(0, $scope.Robot.Programs.length);

                if ($scope.Robot.Programs[random].Value < 3) {
                    $scope.Robot.Programs[random].Value += 1;
                    $scope.Robot.ProgramPoints -= 1;
                }
            }
        }

        function getFirstSecondaryFunction() {
            return $scope.Data.SecondaryFunctions[$scope.Robot.Model
                .Name][getRandomInt(0, $scope.Data.SecondaryFunctions[$scope.Robot.Model.Name].length)];
        }

        // Returns a random and unique Secondary Function from either the Models SFs or General SFs
        function getRandomSecondaryFunction() {
            var secondaryFunction = {};
            var hasNotFoundUnique = true;

            var listOfFunctions = $scope.Robot.Model.SecondaryFunctions.slice();
            listOfFunctions.push.apply(listOfFunctions, $scope.Data.SecondaryFunctions.Allmänna);

            while (hasNotFoundUnique === true) {
                secondaryFunction = listOfFunctions[getRandomInt(0, listOfFunctions.length)];

                if (!$scope.Robot.SecondaryFunctions.includes(secondaryFunction)) {
                    hasNotFoundUnique = false;
                }
            }

            return secondaryFunction;
        }

        function createDisplayTexts() {
            $scope.Robot.Name = getRandomName();
            $scope.Robot.CodeName = getRandomCodeName();
            generateDescription();
            $scope.Robot.Visual.ModulesClass = getModulesClass();
        };

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        function generateDescription() {
            $scope.Robot.Description = capitalize($scope.Robot.Head.BESKRIVNING) +
                " med " +
                $scope.Robot.Torso.BESKRIVNING +
                " och " +
                $scope.Robot.Leg.BESKRIVNING +
                ".";
        };

        function getRandomName() {
            var name = generate_name("robot");
            if (name.charAt(name.lastIndex) === "-") {
                name.slice(0, -1);
            }
            return name;
        }

        function getRandomCodeName() {
            return getRandomLetter() +
                getRandomLetter() +
                getRandomLetter() +
                getRandomInt(0, 9) +
                getRandomInt(0, 9) +
                getRandomInt(0, 9);
        }

        function getRandomHead() {
            return $scope.Data.Heads[getRandomInt(0, $scope.Data.Heads.length)];
        }

        function getRandomTorso() {
            var torso = $scope.Data.Torsos[getRandomInt(0, $scope.Data.Torsos.length)];
            return torso;
        };

        function getRandomLeg() {
            return $scope.Data.Legs[getRandomInt(0, $scope.Data.Legs.length)];
        }

        function getRandomStartModel() {
            var model = {};
            var randomStartModell = $scope.Data.StartModels[getRandomInt(0, $scope.Data.StartModels.length)];
            model.Name = randomStartModell.Name;

            if ($scope.GoNuts) {

                var allColours = [];
                $scope.Data.StartModels.forEach(function(element, index, array) {
                    Array.prototype.push.apply(allColours, element.Colour);
                });
                model.Colour = allColours[getRandomInt(0, allColours.length)];

                console.log(allColours);
            } else {


                model.Colour = randomStartModell.Colour[getRandomInt(0, randomStartModell.Colour.length)];
                model.Features = randomStartModell.Features[getRandomInt(0, randomStartModell.Features.length)];
                model.Voice = getTwoRandomStrings(randomStartModell.Voice, "och");
                model.Personality = randomStartModell
                    .Personality[getRandomInt(0, randomStartModell.Personality.length)];
                model.SecondaryFunctions = $scope.Data.SecondaryFunctions[model.Name];
                model.Artifacts = randomStartModell.Artifacts;
                model.Hiearchy = randomStartModell.Hiearchy;
                model.SpecialProgram = randomStartModell.SpecialProgram;
            }


            return model;
        }

        function getRandomModules(numberOfModules) {
            var moduleList = $scope.Robot.Modules.slice();
            for (var i = 0; i < numberOfModules; i++) {
                var module = $scope.Data.Modules[getRandomInt(0, $scope.Data.Modules.length)];
                while (contains(moduleList, module)) {
                    module = $scope.Data.Modules[getRandomInt(0, $scope.Data.Modules.length)];
                }
                if (i >= numberOfModules - 1 && $scope.Robot.FakeModules === 1) {
                    module.Name += " (Attrapp)";
                }

                moduleList.push(module);
            }
            return moduleList;
        }

        function getTwoRandomStrings(list, separator) {

            var item1 = "";
            var item2 = "";

            item1 = list[getRandomInt(0, list.length)];
            item2 = list[getRandomInt(0, list.length)];

            item1 = item1.toLowerCase();
            item2 = item2.toLowerCase();

            while (item1 === item2) {
                item2 = list[getRandomInt(0, list.length)];
                item2 = item2.toLowerCase();
            }

            return capitalize(item1 + " " + separator + " " + item2);
        }


        function calculateStats() {
            $scope.Robot.TotalaStats.SRV = 0;
            $scope.Robot.TotalaStats.STB = 0;
            $scope.Robot.TotalaStats.PRC = 0;
            $scope.Robot.TotalaStats.NTV = 0;
            $scope.Robot.TotalaStats.MOD = 0;
            $scope.Robot.TotalaStats.SKYDD = 0;
            $scope.Robot.TotalaStats.Hiearchy = 0;
            $scope.Robot.TotalaStats.Belastning = 0;

            $scope.Robot.TotalaStats.SRV = $scope.Robot.Head.SRV + $scope.Robot.Torso.SRV + $scope.Robot.Leg.SRV;
            $scope.Robot.TotalaStats.STB = $scope.Robot.Head.STB + $scope.Robot.Torso.STB + $scope.Robot.Leg.STB;
            $scope.Robot.TotalaStats.PRC = $scope.Robot.Head.PRC + $scope.Robot.Torso.PRC + $scope.Robot.Leg.PRC;
            $scope.Robot.TotalaStats.NTV = $scope.Robot.Head.NTV + $scope.Robot.Torso.NTV + $scope.Robot.Leg.NTV;
            $scope.Robot.TotalaStats.MOD = $scope.Robot.Head.MOD + $scope.Robot.Torso.MOD + $scope.Robot.Leg.MOD;
            $scope.Robot.TotalaStats.SKYDD = $scope.Robot.Head
                .SKYDD +
                $scope.Robot.Torso.SKYDD +
                $scope.Robot.Leg.SKYDD;

            $scope.Robot.TotalaStats.Hiearchy = $scope.Robot.Model.Hiearchy;
            $scope.Robot.TotalaStats.Belastning = $scope.Robot.TotalaStats.SRV * 2;

            $scope.Robot.SecondaryFunctions.forEach(function(element, index, array) {
                if (element.hasOwnProperty("Options")) {
                    if (element.Options.hasOwnProperty("Attribute")) {
                        $scope.Robot.TotalaStats[element.Options.Attribute] += element.Options.Value;
                    }
                }
            });

            $scope.Robot.SecondaryFunctions.forEach(function(element, index, array) {
                if (element.hasOwnProperty("Options")) {
                    if (element.Options.Attribute === "Belastning") {
                        $scope.Robot.TotalaStats.Belastning = $scope.Robot.TotalaStats.SRV * element.Options.Value;
                    }
                }
            });
        }

        function addFakeModule() {
            $scope.Robot.SecondaryFunctions.forEach(function(element, index, array) {
                if (element.hasOwnProperty("Options") && element.Options.hasOwnProperty("Module")) {
                    if (element.Options.Module === "Fake") {
                        $scope.Robot.TotalaStats.MOD += 1;
                        $scope.Robot.FakeModules = 1;
                    }
                }
            });
        }
    }
]);

app.filter("trust",
[
    "$sce", function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }
]);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-- - min)) + min;
}

function getRandomLetter() {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
    return alphabet.charAt(getRandomInt(0, alphabet.length));
}

function getRandomFromList(list) {
    return list[getRandomInt(0, list.length)];
}

function RollMutantDieSuccessesOnly(numberOfDice) {
    var successes = 0;
    var roll = -1;
    for (var i = 0; i < numberOfDice; i++) {
        roll = getRandomInt(0, 6) + 1;
        if (roll === 6) {
            successes += 1;
        }
    }
    return successes;
}

function RollMutantDicesddfae(numberOfDice, pressa) {
    pressa = pick(pressa, false);
    var rolls = [];
    for (var i = 0; i < numberOfDice; i++) {
        rolls.push();
    }
}

function pick(arg, def) {
    return (typeof arg == "undefined" ? def : arg);
}

function contains(array, value) {
    var doesContain = false;
    for (var i = 0, length = array.length; i < length; i++) {
        if (array[i] === value) {
            doesContain = true;
            break;
        }
    }

    return doesContain;
}

function GetRandomArtifact() {
    return 
}