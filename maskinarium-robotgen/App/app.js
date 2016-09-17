"use strict";

// Robot Class
function Robot() {
    var robot = {};
    var helper = new Helper();
    var data = {};
    robot.ProgramPoints = 10;
    robot.TotalaStats = {};
    robot.Name = "ROBiTiCA";
    robot.Model = {};
    robot.Modules = [];
    // Public functions
    this.Robot = function(dataStoreService) {
        data = {};
        data.Robot = dataStoreService.getRobot();
    };
    // Priviliged functions
    this.GetRandomRobot = function() {
        robot.Head = getRandomHead();
        robot.Torso = getRandomTorso();
        robot.Leg = getRandomLeg();

        robot.Model = getRandomStartModel();
        robot.SecondaryFunctions = [];
        robot.SecondaryFunctions[0] = getFirstSecondaryFunction();

        for (var i = 0; i < helper.GetRandomInt(1, 3); i++) {
            robot.SecondaryFunctions.push(getRandomSecondaryFunction());
        }
        robot.Modules = [];
        robot.FakeModules = 0;

        robot.Programs = data.Robot.Programs.slice();
        robot.Programs.push(robot.Model.SpecialProgram);
        generateProgramValues();

        calculateStats();
        addFakeModule();
        robot.Modules = getRandomModules(robot.TotalaStats.MOD);
        createDisplayTexts();
        return robot;
    };

    // Private functions
    function getRandomHead() {
        return data.Robot.Heads[helper.GetRandomInt(0, data.Robot.Heads.length)];
    }

    function getRandomTorso() {
        return data.Robot.Torsos[helper.GetRandomInt(0, data.Robot.Torsos.length)];
    };

    function getRandomLeg() {
        return data.Robot.Legs[helper.GetRandomInt(0, data.Robot.Legs.length)];
    }

    function getRandomStartModel() {
        var model = {};
        var randomStartModell = data.Robot.StartModels[helper.GetRandomInt(0, data.Robot.StartModels.length)];
        model.Name = randomStartModell.Name;

        model.Colour = randomStartModell.Colour[helper.GetRandomInt(0, randomStartModell.Colour.length)];
        model.Features = randomStartModell.Features[helper.GetRandomInt(0, randomStartModell.Features.length)];
        model.Voice = helper.GetTwoRandomStrings(randomStartModell.Voice, "och");
        model.Personality = randomStartModell
            .Personality[helper.GetRandomInt(0, randomStartModell.Personality.length)];
        model.SecondaryFunctions = data.Robot.SecondaryFunctions[model.Name];
        model.Artifacts = randomStartModell.Artifacts;
        model.Hiearchy = randomStartModell.Hiearchy;
        model.SpecialProgram = randomStartModell.SpecialProgram;

        return model;
    }

    function generateProgramValues() {
        //TODO:Viktad tilläggning av programvärden

        robot.ProgramPoints = 10;

        robot.Programs.forEach(function(program) {
            program.Value = 0;
        });
        robot.Programs[robot.Programs.length - 1].Value = 1;
        robot.ProgramPoints -= 1;

        var random;
        while (robot.ProgramPoints > 0) {
            random = helper.GetRandomInt(0, robot.Programs.length);
            if (robot.Programs[random].Value < 3) {
                robot.Programs[random].Value += 1;
                robot.ProgramPoints -= 1;
            }
        }
    }

    function getFirstSecondaryFunction() {
        return data.Robot.SecondaryFunctions[robot.Model
            .Name][helper.GetRandomInt(0, data.Robot.SecondaryFunctions[robot.Model.Name].length)];
    }

    // Returns a random and unique Secondary Function from either the Models SFs or General SFs
    function getRandomSecondaryFunction() {
        var secondaryFunction = {};
        var hasNotFoundUnique = true;

        var listOfFunctions = robot.Model.SecondaryFunctions.slice();
        listOfFunctions.push.apply(listOfFunctions, data.Robot.SecondaryFunctions.Allmänna);

        while (hasNotFoundUnique === true) {
            secondaryFunction = listOfFunctions[helper.GetRandomInt(0, listOfFunctions.length)];

            if (!robot.SecondaryFunctions.includes(secondaryFunction)) {
                hasNotFoundUnique = false;
            }
        }

        return secondaryFunction;
    }

    function getRandomModules(numberOfModules) {
        var moduleList = robot.Modules.slice();
        for (var i = 0; i < numberOfModules; i++) {
            var module = data.Robot.Modules[helper.GetRandomInt(0, data.Robot.Modules.length)];
            while (helper.Contains(moduleList, module)) {
                module = data.Robot.Modules[helper.GetRandomInt(0, data.Robot.Modules.length)];
            }
            if (i >= numberOfModules - 1 && robot.FakeModules === 1) {
                module.Name += " (Attrapp)";
            }

            moduleList.push(module);
        }
        return moduleList;
    }


    function calculateStats() {
        robot.TotalaStats.SRV = 0;
        robot.TotalaStats.STB = 0;
        robot.TotalaStats.PRC = 0;
        robot.TotalaStats.NTV = 0;
        robot.TotalaStats.MOD = 0;
        robot.TotalaStats.SKYDD = 0;
        robot.TotalaStats.Hiearchy = 0;
        robot.TotalaStats.Belastning = 0;

        robot.TotalaStats.SRV = robot.Head.SRV + robot.Torso.SRV + robot.Leg.SRV;
        robot.TotalaStats.STB = robot.Head.STB + robot.Torso.STB + robot.Leg.STB;
        robot.TotalaStats.PRC = robot.Head.PRC + robot.Torso.PRC + robot.Leg.PRC;
        robot.TotalaStats.NTV = robot.Head.NTV + robot.Torso.NTV + robot.Leg.NTV;
        robot.TotalaStats.MOD = robot.Head.MOD + robot.Torso.MOD + robot.Leg.MOD;
        robot.TotalaStats.SKYDD = robot.Head
            .SKYDD +
            robot.Torso.SKYDD +
            robot.Leg.SKYDD;

        robot.TotalaStats.Hiearchy = robot.Model.Hiearchy;
        robot.TotalaStats.Belastning = robot.TotalaStats.SRV * 2;

        robot.SecondaryFunctions.forEach(function(element) {
            if (element.hasOwnProperty("Options")) {
                if (element.Options.hasOwnProperty("Attribute")) {
                    robot.TotalaStats[element.Options.Attribute] += element.Options.Value;
                }
            }
        });

        robot.SecondaryFunctions.forEach(function(element) {
            if (element.hasOwnProperty("Options")) {
                if (element.Options.Attribute === "Belastning") {
                    robot.TotalaStats.Belastning = robot.TotalaStats.SRV * element.Options.Value;
                }
            }
        });
    }

    function addFakeModule() {
        robot.SecondaryFunctions.forEach(function(element) {
            if (element.hasOwnProperty("Options") && element.Options.hasOwnProperty("Module")) {
                if (element.Options.Module === "Fake") {
                    robot.TotalaStats.MOD += 1;
                    robot.FakeModules = 1;
                }
            }
        });
    }

    function createDisplayTexts() {
        robot.Name = getRandomName();
        robot.CodeName = getRandomCodeName();
        generateDescription();

    };

    function generateDescription() {
        robot.Description = helper.Capitalize(robot.Head.BESKRIVNING) +
            " med " +
            robot.Torso.BESKRIVNING +
            " och " +
            robot.Leg.BESKRIVNING +
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
        return helper.GetRandomLetter() +
            helper.GetRandomLetter() +
            helper.GetRandomLetter() +
            helper.GetRandomInt(0, 9) +
            helper.GetRandomInt(0, 9) +
            helper.GetRandomInt(0, 9);
    }
}

function DataStore() {
    var data = {};
    if (typeof window.generalData !== "undefined" || window.generalData !== null) {
        data.General = window.generalData;
    }
    if (typeof window.zonenData !== "undefined" || window.zonenData !== null) {
        data.Zonen = window.zonenData;
    }
    if (typeof window.genlabData !== "undefined" || window.genlabData !== null) {
        data.Genlab = window.genlabData;
    }
    if (typeof window.robotData !== "undefined" || window.robotData !== null) {
        data.Robot = window.robotData;
    }
    if (typeof window.farorData !== "undefined" || window.farorData !== null) {
        data.Faror = window.farorData;
    }
    if (typeof window.itemsData !== "undefined" || window.itemsData !== null) {
        data.Items = window.itemsData;
    }
    this.getRobot = function() {
        return angular.copy(data.Robot);
    };
    this.getGeneral = function() {
        return angular.copy(data.General);
    };
    this.getGenlab = function() {
        return angular.copy(data.Genlab);
    };
    this.getFaror = function() {
        return angular.copy(data.Faror);
    };
    this.getItemsData = function() {
        return angular.copy(data.Items);
    };
}

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
                name: "Faror",
                path: "faror.html"
            }, {
                name: "Prylar",
                path: "prylar.html"
            }, {
                name: "Genlab Alfa",
                path: "genlab_moten.html"
            }
        ];
        $scope.Version = "Pracownik fabryki wersja systemu głównego 0.0.6a";
    }
]);

app.controller("genlabController",
[
    "$scope", "DataStoreService", function($scope, DataStoreService) {
        var helper = new Helper();
        var data = {};
        data.Genlab = DataStoreService.getGenlab();
        data.General = DataStoreService.getGeneral();
        $scope.Meeting = { Terrain: {} };
        $scope.Meeting.ThreatLevel = 0;

        $scope.RollRandomThreat = function() {
            $scope.Meeting.Terrain = helper.GetRandomFromList(data.Genlab.terrain);
            $scope.RollThreat();
        };
        $scope.RollThreat = function() {
            // Reset Meeting desc
            $scope.Meeting.Description = "";
            $scope.Meeting.Number = 0;
            // Generate Threat
            $scope.Meeting.ThreatLevel = helper.RollMutantDieSuccessesOnly($scope.Meeting.Terrain.threat);
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
                    var artifact = Helper.GetRandomFromList(data.General.artifacts);

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
            var array;
            var sum = 0;
            if (input.indexOf("T6") !== -1) {
                input = input.replace("T6", helper.RullaT6());
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
                });

            } else if (input.indexOf("-") !== -1) {
                array = input.split("-");
                sum = array[0];
                for (let i = 1; i < array.length; i++) {
                    sum -= array[i];
                }
            } else {
                sum += parseInt(input);
            }
            return sum;
        }

        function getRandomMeeting() {
            var meetings = $scope.Meeting.Terrain.meetings;
            var randomMeetingNumber = helper.GetRandomFromList(meetings);
            var randomMeeting = {};

            data.Genlab.meetings.forEach(function(meeting) {
                if (meeting.number === randomMeetingNumber) {
                    randomMeeting = meeting;
                }
            });

            return randomMeeting;
        }
    }
]);
app.controller("zonenController",
[
    "$scope", function($scope) {
        console.log($scope);
    }
]);
app.controller("prylarController",
[
    "$scope", "DataStoreService", function($scope, DataStoreService) {
        var helper = new Helper();
        var data = {};
        data.Items = DataStoreService.getItemsData();
        $scope.Things = {};
        $scope.Things.Sources = getSources();
        $scope.Things.SelectedSources = $scope.Things.Sources.slice();

        $scope.Things.Types = ["Artefakt", "Skrot"];
        $scope.Things.SelectedTypes = ["Artefakt", "Skrot"];

        $scope.Things.Filtered = [];
        $scope.Things.RandomList = [];

        $scope.RollArtifacts = function(book) {
            $scope.Things.Filtered = filterThings();
            if ($scope.Things.Filtered.length <= 0) {
                return;
            }
            $scope.Things.RandomList = [];

            $scope.Things.RandomList.push($scope.Things.Filtered[helper
                .GetRandomInt(0, $scope.Things.Filtered.length)]);

            for (var thing in $scope.Things.RandomList) {
                if ($scope.Things.RandomList.hasOwnProperty(thing)) {
                    if (angular.isString($scope.Things.RandomList[thing].effect)) {
                        $scope.Things.RandomList[thing].effect = getHtmlOutput($scope.Things.RandomList[thing].effect);
                    }
                }
            }
        };

        $scope.toggleSelection = function(source) {
            var idx = $scope.Things.SelectedSources.indexOf(source);
            // is currently selected
            if (idx > -1) {
                $scope.Things.SelectedSources.splice(idx, 1);
            }
            // is newly selected
            else {
                $scope.Things.SelectedSources.push(source);
            }
        };
        $scope.toggleTypeSelection = function(type) {
            var idx = $scope.Things.SelectedTypes.indexOf(type);
            // is currently selected
            if (idx > -1) {
                $scope.Things.SelectedTypes.splice(idx, 1);
            }
            // is newly selected
            else {
                $scope.Things.SelectedTypes.push(type);
            }
        };

        function filterThings() {
            var filtered = [];
            for (var type in data.Items) {
                if (data.Items.hasOwnProperty(type)) {
                    var items = data.Items[type];
                    for (var item in items) {
                        if (items.hasOwnProperty(item)) {
                            if (helper.Contains($scope.Things.SelectedSources, items[item].source) &&
                                helper.Contains($scope.Things.SelectedTypes, items[item].type)) {
                                filtered.push(items[item]);
                            }
                        }
                    }
                }
            }
            return filtered;
        }

        function getSources() {
            var sources = [];
            for (var type in data.Items) {
                if (data.Items.hasOwnProperty(type)) {
                    data.Items[type].forEach(function(element, index, array) {
                        if (!helper.Contains(sources, element.source)) {
                            sources.push(element.source);
                        }
                    });
                }
            }

            return sources;
        }

        function getHtmlOutput(string) {
            var matchIndex;

            var hasMoreSkillMatches = true;
            while (hasMoreSkillMatches) {
                matchIndex = string.indexOf("{skill:");

                if (matchIndex !== -1) {
                    string = helper.CSSify(string);
                } else {
                    hasMoreSkillMatches = false;
                }
            }

            var hasMoreSymbolMatches = true;
            while (hasMoreSymbolMatches) {
                matchIndex = string.indexOf("{symbol:");

                if (matchIndex !== -1) {
                    string = helper.CSSify(string);
                } else {
                    hasMoreSymbolMatches = false;
                }
            }

            var hasMoreRefMatches = true;
            while (hasMoreRefMatches) {
                matchIndex = string.indexOf("{ref:");

                if (matchIndex !== -1) {
                    string = helper.CSSify(string);
                } else {
                    hasMoreRefMatches = false;
                }
            }
            return string;
        }

        ////////// D E V /////////////
        $scope._dev = {};
        $scope._dev
            .area =
            "KLASERPISTOL\r\nEtt smäckert högteknologiskt skjutvapen \r\nmed enhandsgrepp. Vapnet avlossar en \r\nröd ljusstråle som avger ett fräsande ljud.\r\nEffekt: Lätt vapen med prylbonus +3 på \r\nbeskjutaoch vapenskada 2. Lång räckvidd. \r\nEnergivapen. Elektroniskt föremål. \r\nUN-krav: Tek nologi 70\r\nUN-bonus: Tek nologi +T6";
        $scope._dev.done = "";
        $scope._dev.do = function() {
            var lines = $scope._dev.area.match(/^.*([\n\r]+|$)/gm);
            for (var line in lines) {
                if (lines.hasOwnProperty(line)) {
                    lines[line] = lines[line].replace(/\r\n/g, "");
                    lines[line] = lines[line].replace(/\n/g, "");
                }
            }
            var header = lines[0].slice();
            if (header[0] === "K") {
                header = header.slice(1, header.length);
            }

            lines.shift();

            var effektLine = -1;
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].indexOf("Effekt:") !== -1) {
                    effektLine = i;
                }
            }

            var desc = "";
            for (var j = 0; j < effektLine; j++) {
                desc += lines[j];
                lines.shift();
            }

            var unkravline = -1;
            for (var i2 = 0; i2 < lines.length; i2++) {
                if (lines[i2].indexOf("UN-krav:") !== -1) {
                    unkravline = i2;
                }
            }

            var effekt = "";
            for (var k = 0; k < unkravline - 1; k++) {
                console.log(lines[k]);
                effekt += lines[k];
                lines.shift();
            }
            lines.shift();

            if (lines[0].indexOf("Tek nologi")) {
                lines[0] = lines[0].replace("Tek nologi", "Teknologi");
            }
            if (lines[1].indexOf("Tek nologi")) {
                lines[1] = lines[1].replace("Tek nologi", "Teknologi");
            }

            var obj = {
                "name": header,
                "book": "Maskinarium",
                "description": desc,
                "effect": getHtmlOutput(effekt),
                "unKrav": lines[0],
                "unBonus": lines[1]
            };
            $scope._dev.done = JSON.stringify(obj, null, 4) + ",";
        };
    }
]);
app.controller("farorController",
[
    "$scope", "RobotService", "DataStoreService", function($scope, RobotService, DataStoreService) {
        var robotService = RobotService;
        var helper = new Helper();
        var data = {};
        data.Faror = DataStoreService.getFaror();
        data.General = DataStoreService.getGeneral();
        $scope.sortType = "Name"; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.searchDanger = {}; // set the default search/filter term
        $scope.filtered = []; // variable to store filtered results

        $scope.$watch("filtered",
            function(newValue) {
                if (newValue.length === 1) {
                    $scope.ShowDanger(newValue[0].name);
                }
            },
            true);

        $scope.Faror = [];

        data.Faror.faror.forEach(function(danger) {
            $scope.Faror.push(danger);
        });

        $scope.ChosenDanger = {};

        $scope.ShowDanger = function(name) {
            $scope.ChosenDanger = {};
            $scope.ChosenDanger.Weapons = [];
            $scope.Faror.forEach(function(element) {
                if (element.hasOwnProperty("name")) {
                    if (element.name === name) {
                        $scope.ChosenDanger.Name = element.name;
                        $scope.ChosenDanger.Description = element.description;
                        $scope.ChosenDanger.Image = element.image;

                        var stats = getStats();
                        $scope.ChosenDanger.Inline = stats.inline.slice();
                        $scope.ChosenDanger.BlockValues = stats.blockValue.slice();
                        $scope.ChosenDanger.Block = stats.block.slice();

                        element.functions.forEach(function(func) {
                            if (angular.isFunction($scope["_" + func.function])) {
                                $scope["_" + func.function](func);
                            }
                        });

                    }
                }
            });

            for (let blockKey in $scope.ChosenDanger.Block) {
                if ($scope.ChosenDanger.Block.hasOwnProperty(blockKey)) {
                    if ($scope.ChosenDanger.Block[blockKey].hasOwnProperty("properties")) {
                        var properties = $scope.ChosenDanger.Block[blockKey].properties;

                        getWeapons(properties);

                        if (Array.isArray(properties) && properties != null) {
                            for (let i = 0; i < properties.length; i++) {

                                if (angular.isString(properties[i])) {
                                    if (properties[i].indexOf("{/}") !== -1) {
                                        properties[i] = properties[i]
                                            .replaceAll("{/}", "<span class=\"symbol\">/</span>");
                                    }
                                }
                            }
                        }
                    }
                }
            }


        };

        $scope.GetRandomRobot = function() {
            robotService.Robot(DataStoreService);
            var robot = robotService.GetRandomRobot();

            $scope.ChosenDanger = {};
            $scope.ChosenDanger.Name = robot.Name + " - " + robot.CodeName;
            $scope.ChosenDanger.Description = robot.Description;
            $scope.ChosenDanger.Image = [
                {
                    "path": robot.Head.BILD,
                    "offSet": 0,
                    "zIndex": 4
                }, {
                    "path": robot.Torso.BILD,
                    "offSet": robot.Torso.HEADOFFSET,
                    "zIndex": 3
                }, {
                    "path": robot.Leg.BILD,
                    "offSet": robot.Torso.LEGOFFSET,
                    "zIndex": 1
                }
            ];
            var stats = convertRobotStats(robot);
            $scope.ChosenDanger.Inline = stats.inline.slice();
            $scope.ChosenDanger.BlockValues = stats.blockValue.slice();
            $scope.ChosenDanger.Block = stats.block.slice();

            if ($scope.ChosenDanger.Block.things != null) {
                $scope.ChosenDanger.Weapons = getWeapons();
            }
            //jQuery("#chosenDangerVisuals").height(jQuery("#chosenDangerStats").height());
        };

        $scope._CalcArmour = function() {
            var skydd = 0;
            var propSkydd = [];

            $scope.ChosenDanger.Inline.forEach(function(element) {
                if (element.hasOwnProperty("properties")) {
                    if (element.properties.hasOwnProperty("skydd")) {
                        skydd += element.properties.skydd;
                    }
                }
            });

            propSkydd.push(skydd);

            var skyddsObjekt = {
                "name": "Skydd",
                "type": "block",
                "description": "",
                "properties": propSkydd
            };
            $scope.ChosenDanger.Block.push(skyddsObjekt);
        };

        $scope._CalcAttributes = function() {
            var attributes = {
                "srv": 0,
                "stb": 0,
                "prc": 0,
                "ntv": 0
            };
            $scope.ChosenDanger.Inline.forEach(function(element) {
                if (element.hasOwnProperty("properties")) {
                    if (element.properties.hasOwnProperty("srv")) {
                        attributes.srv += element.properties.srv;
                    }
                    if (element.properties.hasOwnProperty("stb")) {
                        attributes.stb += element.properties.stb;
                    }
                    if (element.properties.hasOwnProperty("prc")) {
                        attributes.prc += element.properties.prc;
                    }
                    if (element.properties.hasOwnProperty("ntv")) {
                        attributes.ntv += element.properties.ntv;
                    }
                }
            });
            var attributesObjekt = {
                "name": "Grundegenskaper",
                "description": "",
                "properties": attributes
            };
            $scope.ChosenDanger.Inline.push(attributesObjekt);
        };

        function getStats() {
            var stats = {
                "inline": [],
                "blockValue": [],
                "block": []
            };

            $scope.Faror.forEach(function(danger) {
                if (danger.name === $scope.ChosenDanger.Name) {
                    if (danger.hasOwnProperty("statBlock")) {

                        danger.statBlock.forEach(function(stat) {
                            if (stat.hasOwnProperty("type")) {
                                switch (stat.type) {
                                case "inline":
                                    stats.inline.push(stat);
                                    break;

                                case "blockValue":
                                    stats.blockValue.push(stat);
                                    break;

                                case "block":
                                    stats.block.push(stat);
                                    break;
                                default:
                                    break;
                                }
                            }
                        });
                    }

                }

            });
            return stats;
        };

        function convertRobotStats(robot) {
            var stats = {
                "inline": [],
                "blockValue": [],
                "block": []
            };

            var stat = {
                "name": "Huvud: " + robot.Head.NAMN,
                "type": "inline",
                "description": robot.Head.BESKRIVNING,
                "properties": {
                    "srv": robot.Head.SRV,
                    "stb": robot.Head.STB,
                    "prc": robot.Head.PRC,
                    "ntv": robot.Head.NTV,
                    "skydd": robot.Head.SKYDD
                }
            };
            stats.inline.push(stat);

            stat = {
                "name": "Bål: " + robot.Torso.NAMN,
                "type": "inline",
                "description": robot.Torso.BESKRIVNING,
                "properties": {
                    "srv": robot.Torso.SRV,
                    "stb": robot.Torso.STB,
                    "prc": robot.Torso.PRC,
                    "ntv": robot.Torso.NTV,
                    "skydd": robot.Torso.SKYDD
                }
            };
            stats.inline.push(stat);

            stat = {
                "name": "Underrede: " + robot.Leg.NAMN,
                "type": "inline",
                "description": robot.Leg.BESKRIVNING,
                "properties": {
                    "srv": robot.Leg.SRV,
                    "stb": robot.Leg.STB,
                    "prc": robot.Leg.PRC,
                    "ntv": robot.Leg.NTV,
                    "skydd": robot.Leg.SKYDD
                }
            };
            stats.inline.push(stat);

            stat = {
                "name": "Grundegenskaper: ",
                "type": "inline",
                "description": "",
                "properties": {
                    "srv": robot.TotalaStats.SRV,
                    "stb": robot.TotalaStats.STB,
                    "prc": robot.TotalaStats.PRC,
                    "ntv": robot.TotalaStats.NTV,
                    "skydd": robot.TotalaStats.SKYDD,
                    "Moduler": robot.TotalaStats.MOD
                }
            };
            stats.inline.push(stat);

            var skills = {};
            robot.Programs.forEach(function(program, index, array) {
                var string = array[index].Name + " (" + array[index].Attribute + ")";
                skills[string] = array[index].Value;
            });
            stat = {
                "name": "Program",
                "type": "blockValue",
                "description": "",
                "properties": skills
            };
            stats.blockValue.push(stat);

            var modules = [];
            robot.Modules.forEach(function(module, index, array) {
                modules.push(helper.Capitalize(array[index].Name));
            });
            stat = {
                "name": "Moduler",
                "type": "block",
                "description": "",
                "properties": modules
            };
            stats.block.push(stat);

            var secondaryFunctions = [];
            robot.SecondaryFunctions.forEach(function(secondaryFunction, index, array) {
                secondaryFunctions.push(helper.Capitalize(array[index].Name));
            });
            stat = {
                "name": "Sekundärfunktioner",
                "type": "block",
                "description": "",
                "properties": secondaryFunctions
            };
            stats.block.push(stat);

            stat = {
                "name": "Information",
                "type": "inline",
                "description": "",
                "properties": {
                    "Modell": robot.Model.Name,
                    "Färg": robot.Model.Colour,
                    "Röst": robot.Model.Voice,
                    "Kännetecken": robot.Model.Features,
                    "Personlighet": robot.Model.Personality,
                    "Hierarki": robot.TotalaStats.Hiearchy
                }
            };
            stats.inline.unshift(stat);

            return stats;
        }

        // Takes a String array and compares it to the weapons data
        function getWeapons(list) {
            var weaponNames = [];

            data.General.weapons.forEach(function(weapon) {
                weaponNames.push(weapon.name);
            });

            list.forEach(function(thing) {
                data.General.weapons.forEach(function(weapon) {
                    if (weapon.name === thing) {
                        $scope.ChosenDanger.Weapons.push(weapon);
                    }

                });
            });
        }
    }
]);
app.controller("robotController",
[
    "$scope", "RobotService", "DataStoreService", function($scope, RobotService, DataStoreService) {
        var robotService = RobotService;
        $scope.Robot = {};
        $scope.RobotList = [];
        $scope.FillRobotList = fillRobotList;
        $scope.GoNuts = false;


        function fillRobotList(numberOf) {
            $scope.RobotList = [];
            for (let i = 0; i < numberOf; i++) {
                $scope.RobotList.push(returnRandomRobot());
            }
        }

        function returnRandomRobot() {
            var robot = {};
            //robot.Head = getRandomHead();
            robot.Torso = $scope.Data.Torsos[Helper.GetRandomInt(0, $scope.Data.Torsos.length)];
            robot.Leg = $scope.Data.Legs[Helper.GetRandomInt(0, $scope.Data.Legs.length)];

            robot["TotalaStats"] = [];
            //robot["Name"] = getRandomName();
            //robot["CodeName"] = getRandomCodeName();

            robot["TotalaStats"]["SRV"] = robot.Head.SRV + robot.Torso.SRV + robot.Leg.SRV;
            robot["TotalaStats"]["STB"] = robot.Head.STB + robot.Torso.STB + robot.Leg.STB;
            robot["TotalaStats"]["PRC"] = robot.Head.PRC + robot.Torso.PRC + robot.Leg.PRC;
            robot["TotalaStats"]["NTV"] = robot.Head.NTV + robot.Torso.NTV + robot.Leg.NTV;
            robot["TotalaStats"]["MOD"] = robot.Head.MOD + robot.Torso.MOD + robot.Leg.MOD;
            robot["TotalaStats"]["SKYDD"] = robot.Head.SKYDD + robot.Torso.SKYDD + robot.Leg.SKYDD;

            return robot;
        }

        $scope.GetRandomRobot = function() {
            robotService.Robot(DataStoreService);
            $scope.Robot = robotService.GetRandomRobot();
            $scope.Robot.Visual = {};
            $scope.Robot.Visual.ModulesClass = getModulesClass();
        };

        (function() { $scope.GetRandomRobot(); })();

        function getModulesClass() {
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
        };
        $scope.GetNextHead = function() {
            var index = $scope.Data.Heads.findIndex(x => x.NAMN === $scope.Robot.Head.NAMN);
            index += 1;
            if (index >= $scope.Data.Heads.length) {
                index = 0;
            }

            $scope.Robot.Head = $scope.Data.Heads[index];
        };

        $scope.GetPreviousTorso = function() {
            var index = $scope.Data.Torsos.findIndex(x => x.NAMN === $scope.Robot.Torso.NAMN);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Torsos.length - 1;
            }

            $scope.Robot.Torso = $scope.Data.Torsos[index];
        };
        $scope.GetNextTorso = function() {
            var index = $scope.Data.Torsos.findIndex(x => x.NAMN === $scope.Robot.Torso.NAMN);
            index += 1;
            if (index >= $scope.Data.Torsos.length) {
                index = 0;
            }

            $scope.Robot.Torso = $scope.Data.Torsos[index];
        };

        $scope.GetPreviousLeg = function() {
            var index = $scope.Data.Legs.findIndex(x => x.NAMN === $scope.Robot.Leg.NAMN);
            index -= 1;
            if (index < 0) {
                index = $scope.Data.Legs.length - 1;
            }

            $scope.Robot.Leg = $scope.Data.Legs[index];
        };
        $scope.GetNextLeg = function() {
            var index = $scope.Data.Legs.findIndex(x => x.NAMN === $scope.Robot.Leg.NAMN);
            index += 1;
            if (index >= $scope.Data.Legs.length) {
                index = 0;
            }

            $scope.Robot.Leg = $scope.Data.Legs[index];
        };

    }
]);

app.service("RobotService", Robot);
app.service("DataStoreService", DataStore);

app.filter("trust",
[
    "$sce", function($sce) {
        return function(htmlCode) {

            return $sce.trustAsHtml(htmlCode);
        };
    }
]);

app.directive("bnRepeatDelimiter",
    function() {
        // I compile the list, injecting in the conditionally
        // visible delimiter onto the end of the template.
        function compile(element, attributes) {
            // Get the delimiter that goes between each item.
            var delimiter = (attributes.bnRepeatDelimiter || ",");
            // The delimiter will show on all BUT the last
            // item in the list.
            var delimiterHtml = (
                `<span ng-show=' ! $last '>${delimiter} </span>`
            );
            // Add the delimiter to the end of the list item,
            // making sure to add the existing whitespace back
            // in after the delimiter.
            var html = element.html()
                .replace(
                    /(\s*$)/i,
                    function(whitespace) {
                        return(delimiterHtml + whitespace);
                    }
                );
            // Update the compiled HTML.
            element.html(html);
        }

        // Return the directive configuration. Notice that
        // our priority is 1 higher than ngRepeat - this will
        // be compiled before the ngRepeat compiles.
        return({
            compile: compile,
            priority: 1001,
            restirct: "A"
        });
    });

function Helper() {
    this.GetRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-- - min)) + min;
    };
    this.RullaT6 = function() {
        return this.GetRandomInt(0, 6) + 1;
    };
    this.RullaT66 = function() {
        return (this.RullaT6() * 10) + this.RullaT6();
    };
    this.GetRandomLetter = function() {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
        return alphabet.charAt(this.GetRandomInt(0, alphabet.length));
    };
    this.GetRandomFromList = function(list) {
        return list[this.GetRandomInt(0, list.length)];
    };
    this.RollMutantDieSuccessesOnly = function(numberOfDice) {
        var successes = 0;
        var roll;
        for (let i = 0; i < numberOfDice; i++) {
            roll = this.GetRandomInt(0, 6) + 1;
            if (roll === 6) {
                successes += 1;
            }
        }
        return successes;
    };
    this.Capitalize = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    this.CapitalizeEachWord = function(string) {
        var strings = string.split(" ");
        for (var i = 0; i < strings.length; i++) {
            strings[i] = this.Capitalize(strings[i]);
        }
        return strings.join(" ");
    };
    this.Contains = function(array, value) {
        var doesContain = false;
        for (var i = 0, length = array.length; i < length; i++) {
            if (array[i] === value) {
                doesContain = true;
                break;
            }
        }

        return doesContain;
    };
    this.GetTwoRandomStrings = function(list, separator) {

        var item1;
        var item2;

        item1 = list[this.GetRandomInt(0, list.length)];
        item2 = list[this.GetRandomInt(0, list.length)];

        item1 = item1.toLowerCase();
        item2 = item2.toLowerCase();

        while (item1 === item2) {
            item2 = list[this.GetRandomInt(0, list.length)];
            item2 = item2.toLowerCase();
        }

        return this.Capitalize(item1 + " " + separator + " " + item2);
    };
    this.CSSify = function(string) {
        var stuffInside = string.match(/{([^}]*)}/);
        var tokens = stuffInside[1].split(":");
        string = string.replaceAll(stuffInside[0], "<span class=\"" + tokens[0] + "\">" + tokens[1] + "</span>");
        return string;
    };
}

function pick(arg, def) {
    return (typeof arg == "undefined" ? def : arg);
}


// ReSharper disable once NativeTypePrototypeExtending
String.prototype.replaceAll = function(search, replace) {
    if (replace === undefined) {
        return this.toString();
    }
    return this.split(search).join(replace);
};