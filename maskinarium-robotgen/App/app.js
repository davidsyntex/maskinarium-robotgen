"use strict";
var app = angular.module("robotgen", ["ngSanitize"]);

app.controller("robotgenController",
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
                index = $scope.Data.Heads.length - 1;
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

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max-- - min)) + min;
        }

        function getRandomLetter() {
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
            return alphabet.charAt(getRandomInt(0, alphabet.length));
        }

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