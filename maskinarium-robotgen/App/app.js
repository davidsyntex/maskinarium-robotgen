"use strict";
var app = angular.module("robotgen", []);

app.controller("robotgenController",
[
    "$scope", function($scope) {
        $scope.TorsoIndex = 0;
        $scope.Head = {};
        $scope.Torso = {};
        $scope.Leg = {};
        $scope.TotalaStats = {};
        $scope.Name = "ROBiTiCA";

        $scope.Data = data;
        $scope.Data.Heads = data.Heads;
        $scope.Data.Torsos = data.Torsos;
        $scope.Data.Legs = data.Legs;

        $scope.GetRandomRobot = function() {
            console.log("Slumpar Robot");
            getRandomHead();
            getRandomTorso();
            getRandomLeg();
            calculateStats();
            getRandomName();
        };

        $scope.GetPreviousTorso = function() {
            $scope.TorsoIndex = $scope.TorsoIndex - 1;

            if ($scope.TorsoIndex < 0) {
                $scope.TorsoIndex = $scope.Data.Torsos.length - 1;
            }

            $scope.Torso = $scope.Data.Torsos[$scope.TorsoIndex];
        };
        $scope.GetNextTorso = function() {
            $scope.TorsoIndex = $scope.TorsoIndex + 1;

            if ($scope.TorsoIndex >= $scope.Data.Torsos.length) {
                $scope.TorsoIndex = 0;
            }

            $scope.Torso = $scope.Data.Torsos[$scope.TorsoIndex];
        };

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function getRandomName() {
            $scope.Name = $scope.Data.Names[getRandomInt(0, $scope.Data.Names.length)];
        }

        function getRandomHead() {
            $scope.Head = $scope.Data.Heads[getRandomInt(0, $scope.Data.Heads.length)];
        }

        function getRandomTorso() {
            var random = getRandomInt(0, $scope.Data.Torsos.length);
            $scope.Torso = $scope.Data.Torsos[random];
            $scope.TorsoIndex = random;
        };

        function getRandomLeg() {
            $scope.Leg = $scope.Data.Legs[getRandomInt(0, $scope.Data.Legs.length)];
        }

        function calculateStats() {
            $scope.TotalaStats.SRV = 0;
            $scope.TotalaStats.STB = 0;
            $scope.TotalaStats.PRC = 0;
            $scope.TotalaStats.NTV = 0;
            $scope.TotalaStats.MOD = 0;
            $scope.TotalaStats.SKYDD = 0;

            $scope.TotalaStats.SRV = $scope.Head.SRV + $scope.Torso.SRV + $scope.Leg.SRV;
            $scope.TotalaStats.STB = $scope.Head.STB + $scope.Torso.STB + $scope.Leg.STB;
            $scope.TotalaStats.PRC = $scope.Head.PRC + $scope.Torso.PRC + $scope.Leg.PRC;
            $scope.TotalaStats.NTV = $scope.Head.NTV + $scope.Torso.NTV + $scope.Leg.NTV;
            $scope.TotalaStats.MOD = $scope.Head.MOD + $scope.Torso.MOD + $scope.Leg.MOD;
            $scope.TotalaStats.SKYDD = $scope.Head.SKYDD + $scope.Torso.SKYDD + $scope.Leg.SKYDD;
        }
    }
]);
var data = {
    "Names": [
        "Pracownik Automata X9",
        "Primaron",
        "Robolus",
        "Cybercil",
        "Kofish",
        "Aceroly",
        "Antissbone",
        "Retron",
        "Ramshade",
        "Notobot",
        "Nirion",
        "Moron",
        "Hydronomix",
        "Anaroux",
        "Tajet",
        "Vinus",
        "Nestation",
        "Nexorion",
        "Virutus",
        "Thylene",
        "Fireriox",
        "Alarion",
        "Thunderpath",
        "Alphastar",
        "Necrodrate",
        "Ana-V",
        "Roble",
        "Ligon",
        "Proport",
        "Modonate",
        "Combon",
        "Valryuner",
        "Gungrenlant",
        "Hulking Gaigelzen",
        "Kaiwadten V",
        "Hulking Gerwaden-Oh",
        "Metal Godgergern Z",
        "Gunvolan",
        "Metal Gekigelphon Robo",
        "Goryudeen Go",
        "Brave Gungarten the Brave",
        "Gekidaner",
        "Gungaosion 3",
        "Metal Gogerbot",
        "Godjinger the Brave",
        "Great Gekikailant",
        "Iron Gekijinar",
        "Gaigaoger",
        "Iron Gekigaiter",
        "King Gerzingbuster",
        "Godraiphon the Brave",
        "Gaodanter",
        "Goreizam 3",
        "Metal Gundammarg",
        "Gaoreimarg",
        "Steel Gogaision",
        "Gairyuter",
        "Gaogereon",
        "Goddamphon",
        "Gundanen V",
        "EVE",
        "HARLIE",
        "S.A.M.",
        "BEN",
        "R.I.C. 2.0",
        "HAL 9001",
        "EDI",
        "Marvin",
        "Tik-Tok",
        "RB-1",
        "Andromeda",
        "Curiosity",
        "T-802",
        "Anne Droid"
    ],
    "Torsos": [
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Ikea-Tech ",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "En universalbål som passar på de flesta modeller av huvud och underreden",
            "BILD": "Content/Images/Chassikort - B_Ikea.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Diderot & Diego MD34",
            "SRV": 2,
            "STB": 0,
            "PRC": 2,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "En smal tub täckt av olika utbyggnader",
            "BILD": "Content/Images/Chassikort - B_Diderot MD34.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Özkun TN75",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "En smal och kort robotbål",
            "BILD": "Content/Images/Chassikort - B_ozkun.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Ganymeda Nava PRS",
            "SRV": 2,
            "STB": 2,
            "PRC": 0,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 3,
            "BESKRIVNING": "En smal och benig robotbål med synliga servon och pistonger",
            "BILD": "Content/Images/Chassikort - B_ganymeda.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Fenzhou 33 ",
            "SRV": 0,
            "STB": 1,
            "PRC": 2,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "En robotkropp som inte går att skilja från en människas",
            "BILD": "Content/Images/Chassikort - B_fenzhou.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Skrotbål",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 2,
            "SKYDD": 1,
            "BESKRIVNING": "En oproportitionerlig robotbål, byggd av skrot",
            "BILD": "Content/Images/Chassikort - B_Skrot.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Kleenkorp PTU5",
            "SRV": 1,
            "STB": 2,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "En massiv tunnformad bål med rejäl pansar",
            "BILD": "Content/Images/Chassikort - B_Kleenkorp.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Modessi RK ",
            "SRV": 1,
            "STB": 2,
            "PRC": 2,
            "NTV": 1,
            "MOD": 0,
            "SKYDD": 2,
            "BESKRIVNING": "En liten rörformad robotbål med lätt keramskal",
            "BILD": "Content/Images/Chassikort - B_Modessi RK.jpg"
        },
        {
            "KROPPSDEL": "Bål",
            "MODELL": "Pylon ",
            "SRV": 2,
            "STB": 2,
            "PRC": 1,
            "NTV": 1,
            "MOD": 0,
            "SKYDD": 2,
            "BESKRIVNING": "En bred robotbål med överdimensionerade axelplåtar",
            "BILD": "Content/Images/Chassikort - B_Pylon.jpg"
        }
    ],
    "Heads": [
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Mumla PX-01",
            "SRV": 2,
            "STB": 0,
            "PRC": 0,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "En vagt människolik robotskalle med tjockt pansar"
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Ikea-Tech ",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "En universalskalle som passar på de flesta modeller av bålar"
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Solun ",
            "SRV": 0,
            "STB": 0,
            "PRC": 2,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "En stor robotskalle med plats för kraftiga processor-funktioner"
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Lux Nanito+",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 2,
            "MOD": 0,
            "SKYDD": 1,
            "BESKRIVNING": "En skalle som i gott skick är omöjlig att skilja från en människas."
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Fenix MK43 ",
            "SRV": 1,
            "STB": 2,
            "PRC": 2,
            "NTV": 0,
            "MOD": 0,
            "SKYDD": 3,
            "BESKRIVNING": "En robotskalle med tjockt pansar och militärt syfte"
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Kordura Mod 022",
            "SRV": 1,
            "STB": 0,
            "PRC": 1,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "En robotskalle med mänskliga drag"
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Skrothuvud",
            "SRV": 0,
            "STB": 1,
            "PRC": 2,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 2,
            "BESKRIVNING": "En missformad robotskalle, byggd av allsköna skrot."
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Odessa Vega 1.5",
            "SRV": 2,
            "STB": 1,
            "PRC": 1,
            "NTV": 0,
            "MOD": 1,
            "SKYDD": 3,
            "BESKRIVNING": "En liten men solid robotskalle som tål tuff miljö"
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Pashin AMA 9",
            "SRV": 1,
            "STB": 2,
            "PRC": 1,
            "NTV": 0,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "En liten men bastant robotskalle som nästan helt kan byggas in i bålen"
        },
        {
            "KROPPSDEL": "Huvud",
            "MODELL": "Skynet T-101",
            "SRV": 2,
            "STB": 2,
            "PRC": 1,
            "NTV": 0,
            "MOD": 0,
            "SKYDD": 2,
            "BESKRIVNING": "Ett exokranium, tänkt att döljas under syntetisk hud (Terminator)"
        }
    ],
    "Legs": [
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Ikea-Tech ",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "Ett par universalben som passar på de flesta modeller av bålar"
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Methusalem Mod 12",
            "SRV": 1,
            "STB": 2,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "Ett par skelettlika robotben som slut i grova militära robotfötter"
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Skrotunderrede",
            "SRV": 1,
            "STB": 0,
            "PRC": 1,
            "NTV": 1,
            "MOD": 2,
            "SKYDD": 1,
            "BESKRIVNING": "Ett par olikformade skrotben med massiva fötter"
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Orion V ",
            "SRV": 0,
            "STB": 1,
            "PRC": 2,
            "NTV": 2,
            "MOD": 0,
            "SKYDD": 1,
            "BESKRIVNING": "Ett par långa och smala robotben"
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "LBM Terra 004",
            "SRV": 2,
            "STB": 1,
            "PRC": 1,
            "NTV": 0,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "Ett par kraftiga robotben som slutar i stadiga fötter."
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "LBM Dyno-Q",
            "SRV": 2,
            "STB": 1,
            "PRC": 0,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "Ett par breda larvfötter som låter dig rulla fram stadigt."
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Prachi-Gong ",
            "SRV": 1,
            "STB": 1,
            "PRC": 0,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "Ett par ben och fötter som inte går att skilja från en människas."
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Rougell MARK 19",
            "SRV": 1,
            "STB": 2,
            "PRC": 0,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 4,
            "BESKRIVNING": "Ett kraftigt underrede med runda larvfötter"
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Lagos MD-18",
            "SRV": 1,
            "STB": 1,
            "PRC": 2,
            "NTV": 1,
            "MOD": 0,
            "SKYDD": 1,
            "BESKRIVNING": "Ett kompakt underred med svävarförflyttning"
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "OCP Urban Pacificator",
            "SRV": 3,
            "STB": 1,
            "PRC": 0,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 3,
            "BESKRIVNING":
                "Ett kraftfullt underrede, för att kunna stå stadigt när tunga vapen avfyras från enheten (ED209)"
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Necrosis II",
            "SRV": 2,
            "STB": 3,
            "PRC": 1,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 2,
            "BESKRIVNING": "Specialdesignat klass 2 underrede. Aldrig släppt på öppna marknaden."
        },
        {
            "KROPPSDEL": "Underrede",
            "MODELL": "Necrosis IV",
            "SRV": 3,
            "STB": 1,
            "PRC": 1,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 3,
            "BESKRIVNING": "Fyrbent version av Necrosis. Aldrig släppt på öppna marknaden."
        }
    ]
};