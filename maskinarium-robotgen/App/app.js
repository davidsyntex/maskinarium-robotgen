"use strict";
var app = angular.module("robotgen", ["ngSanitize"]);

app.controller("robotgenController",
[
    "$scope", "$sce", function($scope, $sce) {
        $scope.Data = data;
        $scope.Data.Heads = data.Heads;
        $scope.Data.Torsos = data.Torsos;
        $scope.Data.Legs = data.Legs;
        $scope.Data.Modules = data.Modules;
        $scope.Data.StartModels = data.StartModels;

        $scope.Robot = {};
        $scope.Robot.Head = $scope.Data.Heads[0];
        $scope.Robot.Torso = $scope.Data.Torsos[0];
        $scope.Robot.Leg = $scope.Data.Legs[0];
        $scope.Robot.TotalaStats = {};
        $scope.Robot.Name = "ROBiTiCA";
        $scope.Robot.Modell = {};
        $scope.Robot.Modules = $scope.Data.Modules;
        $scope.RobotList = [];
        $scope.FillRobotList = fillRobotList;

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
            $scope.Robot.Model = getRandomStartModel();
            $scope.Robot.Head = getRandomHead();
            $scope.Robot.Torso = getRandomTorso();
            $scope.Robot.Leg = getRandomLeg();
            calculateStats();
            $scope.Robot.Modules = getRandomModules($scope.Robot.TotalaStats.MOD);
            createDisplayTexts();
        };

        (function() { $scope.GetRandomRobot(); })();

        $scope.GetPreviousHead = function() {
            var index = $scope.Data.Heads.findIndex(x => x.MODELL === $scope.Robot.Head.MODELL);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Heads.length - 1;
            }

            $scope.Robot.Head = $scope.Data.Heads[index];
            calculateStats();
            createDisplayTexts();
        };
        $scope.GetNextHead = function() {
            var index = $scope.Data.Heads.findIndex(x => x.MODELL === $scope.Robot.Head.MODELL);
            index += 1;
            if (index >= $scope.Data.Heads.length) {
                index = 0;
            }

            $scope.Robot.Head = $scope.Data.Heads[index];
            calculateStats();
            createDisplayTexts();
        };

        $scope.GetPreviousTorso = function() {
            var index = $scope.Data.Torsos.findIndex(x => x.MODELL === $scope.Robot.Torso.MODELL);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Heads.length - 1;
            }

            $scope.Robot.Torso = $scope.Data.Torsos[index];
            calculateStats();
            createDisplayTexts();
        };
        $scope.GetNextTorso = function() {
            var index = $scope.Data.Torsos.findIndex(x => x.MODELL === $scope.Robot.Torso.MODELL);
            index += 1;
            if (index >= $scope.Data.Torsos.length) {
                index = 0;
            }

            $scope.Robot.Torso = $scope.Data.Torsos[index];
            calculateStats();
            createDisplayTexts();
        };

        $scope.GetPreviousLeg = function() {
            var index = $scope.Data.Legs.findIndex(x => x.MODELL === $scope.Robot.Leg.MODELL);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Legs.length - 1;
            }

            $scope.Robot.Leg = $scope.Data.Legs[index];
            calculateStats();
            createDisplayTexts();
        };
        $scope.GetNextLeg = function() {
            var index = $scope.Data.Legs.findIndex(x => x.MODELL === $scope.Robot.Leg.MODELL);
            index += 1;
            if (index >= $scope.Data.Legs.length) {
                index = 0;
            }

            $scope.Robot.Leg = $scope.Data.Legs[index];
            calculateStats();
            createDisplayTexts();
        };

        function createDisplayTexts() {
            $scope.Robot.Name = getRandomName();
            $scope.Robot.CodeName = getRandomCodeName();
            generateDescription();
        };

        function generateDescription() {
            $scope.Robot.Description = $scope.Robot.Head.BESKRIVNING.charAt(0).toUpperCase() +
                $scope.Robot.Head.BESKRIVNING.slice(1) +
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
            return $scope.Data.Torsos[getRandomInt(0, $scope.Data.Torsos.length)];
        };

        function getRandomLeg() {
            return $scope.Data.Legs[getRandomInt(0, $scope.Data.Legs.length)];
        }

        function getRandomStartModel() {
            var modell = {};
            var randomStartModell = $scope.Data.StartModels[getRandomInt(0, $scope.Data.StartModels.length)];
            modell.Name = randomStartModell.Name;
            modell.Colour = randomStartModell.Colour[getRandomInt(0, randomStartModell.Colour.length)];
            modell.Features = randomStartModell.Features[getRandomInt(0, randomStartModell.Features.length)];
            modell.Voice = randomStartModell.Voice[getRandomInt(0, randomStartModell.Voice.length)];
            modell.Personality = randomStartModell.Personality[getRandomInt(0, randomStartModell.Personality.length)];
            modell.SecondaryFunctions = randomStartModell
                .SecondaryFunctions[getRandomInt(0, randomStartModell.SecondaryFunctions.length)];
            modell.Artifacts = randomStartModell.Artifacts;
            modell.Hiearchy = randomStartModell.Hiearchy;
            modell.SpecialProgram = randomStartModell.SpecialProgram;
            return modell;
        }

        function getRandomModules(numberOfModules) {
            var moduleList = [];
            for (var i = 0; i < numberOfModules; i++) {
                var module = $scope.Data.Modules[getRandomInt(0, $scope.Data.Modules.length)];

                while (contains(moduleList, module)) {
                    console.log("kopia");
                    module = $scope.Data.Modules[getRandomInt(0, $scope.Data.Modules.length)];
                }

                moduleList.push(module);
            }
            return moduleList;
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

            $scope.Robot.TotalaStats.SRV = $scope.Robot.Head.SRV + $scope.Robot.Torso.SRV + $scope.Robot.Leg.SRV;
            $scope.Robot.TotalaStats.STB = $scope.Robot.Head.STB + $scope.Robot.Torso.STB + $scope.Robot.Leg.STB;
            $scope.Robot.TotalaStats.PRC = $scope.Robot.Head.PRC + $scope.Robot.Torso.PRC + $scope.Robot.Leg.PRC;
            $scope.Robot.TotalaStats.NTV = $scope.Robot.Head.NTV + $scope.Robot.Torso.NTV + $scope.Robot.Leg.NTV;
            $scope.Robot.TotalaStats.MOD = $scope.Robot.Head.MOD + $scope.Robot.Torso.MOD + $scope.Robot.Leg.MOD;
            $scope.Robot.TotalaStats.SKYDD = $scope.Robot.Head
                .SKYDD +
                $scope.Robot.Torso.SKYDD +
                $scope.Robot.Leg.SKYDD;
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