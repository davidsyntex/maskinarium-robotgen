var farorData = {
    "faror": [
        {
            "name": "Hushållsdrönare",
            "type": "Robot",
            "subtype": "Konsument",
            "book": "Maskinarium",
            "bookContraction": "MM",
            "isChassiUsable": false,
            "description":
                "Alla upptänkliga maskiner i människans hem fanns i drönarformat. DynaKorps köksassistent Fortunato och mattillredaren Sikander-2 spreds till många hushåll. Serien CHINOBA blev dock inte någon succé – de udda möbeldrönarna tilltalade få köpare och få aktiva exemplar återstår. De flesta hushållsdrönare är små, har sällan avancerad tankekapacitet och om de ännu fungerar vill de mest ha en ägare att lyda så gott det går.",
            "statBlock": [
                {
                    "name": "Grundegenskaper",
                    "type": "inline",
                    "description": "",
                    "properties": {
                        "srv": 1,
                        "stb": 1
                    }
                },
                {
                    "name": "Program",
                    "type": "block",
                    "description": "",
                    "properties": ["-"]
                }, {
                    "name": "Moduler",
                    "type": "block",
                    "description": "",
                    "properties": ["-"]
                },
                {
                    "name": "Skydd",
                    "type": "block",
                    "description": "",
                    "properties": [1]
                },
                {
                    "name": "Prylar",
                    "type": "block",
                    "description": "",
                    "properties": ["Inmonterad hushållsapparat av lämplig sort"]
                }
            ],
            "functions": [],
            "image": ""
        },
        {
            "name": "Drönarsoldat Methusalem",
            "type": "Robot",
            "subtype": "Militär",
            "book": "Maskinarium",
            "bookContraction": "MM",
            "isChassiUsable": true,
            "description":
                "När människan behövde billig kanonmat till sina slagfält skaffade man simpla drönare att sända ut i led uppå led mot fienden. Noatun använde sig i huvudsak av modeller från Enamoto, framförallt deras Methusalemenhet. Den är tillverkad av enkelt men tåligt kompositmaterial, har lättviktsservon och är utrustad med vapenplattform. Drönarsoldater leds ofta av en fullt tänkande robot med befälsgrad.",
            "statBlock": [
                {
                    "name": "Huvud",
                    "type": "inline",
                    "description": "Smalt, utdraget och lätt fyrkantigt.",
                    "properties": {
                        "srv": 0,
                        "stb": 1,
                        "prc": 2,
                        "ntv": 1,
                        "skydd": 2
                    }
                },
                {
                    "name": "Bål",
                    "type": "inline",
                    "description": "Tunn med två gängliga griparmar.",
                    "properties": {
                        "srv": 2,
                        "stb": 2,
                        "prc": 0,
                        "ntv": 0,
                        "skydd": 1
                    }
                },
                {
                    "name": "Underrede",
                    "type": "inline",
                    "description": "Två tunna ben med kraftiga pansarfötter.",
                    "properties": {
                        "srv": 1,
                        "stb": 1,
                        "prc": 0,
                        "ntv": 0,
                        "skydd": 1
                    }
                },
                {
                    "name": "Program",
                    "type": "blockValue",
                    "description": "",
                    "properties": {
                        "Bekämpa": 1,
                        "Beskjuta": 2,
                        "Infiltrera": 1,
                        "Retirera": 1,
                        "Sondera": 2,
                        "Överbelasta": 1
                    }
                }, {
                    "name": "Moduler",
                    "type": "block",
                    "description": "",
                    "properties": []
                },
                {
                    "name": "Sekundärfunktioner",
                    "type": "block",
                    "description": "",
                    "properties": ["Lydnandsspärr"]
                },
                {
                    "name": "Prylar",
                    "type": "block",
                    "description": "",
                    "properties": ["Lasergevär", "Insignier för den militära enhet de tillhör", "Vapenrock"]
                }
            ],
            "functions":
            [
                {
                    "function": "CalcArmour"
                }, {
                    "function": "CalcAttributes"
                }
            ],
            "image":[
            {
                "path": "Content/Images/Danger/drönarsoldat-methusalem.png",
                "offSet": 0,
                "zIndex": 0
            }]
                
        },{
            "name": "Hushållsrobot Hem-Antoine",
            "type": "Robot",
            "subtype": "Konsument",
            "book": "Maskinarium",
            "bookContraction": "MM",
            "isChassiUsable": true,
            "description":
                "Tillverkaren Alsudd-Pierott hade ett rykte om sig att producera lika många urusla som superba modeller. Bland de senare fanns en av de mer utvecklade modellerna av hushållsrobotar: Hem-Antoine. Enheten är långt smartare än den typiska hushållsdrönaren, kan effektivt kan sköta det mesta i ett hem, och är dessutom utrustad med avancerade versioner av programmet interagera.",
            "statBlock": [
                {
                    "name": "Huvud",
                    "type": "inline",
                    "description": "Minimalt och ofta inbyggt.",
                    "properties": {
                        "srv": 1,
                        "stb": 1,
                        "prc": 0,
                        "ntv": 0,
                        "skydd": 0
                    }
                },
                {
                    "name": "Bål",
                    "type": "inline",
                    "description": "Fyrkantig eller tubformad.",
                    "properties": {
                        "srv": 1,
                        "stb": 1,
                        "prc": 1,
                        "ntv": 2,
                        "skydd": 1,
                        "modul":1
                    }
                },
                {
                    "name": "Underrede",
                    "type": "inline",
                    "description": "Smala diskreta larvfötter. ",
                    "properties": {
                        "srv": 0,
                        "stb": 1,
                        "prc": 0,
                        "ntv": 1,
                        "skydd": 1
                    }
                },
                {
                    "name": "Program",
                    "type": "blockValue",
                    "description": "",
                    "properties": {
                        "Interagera": 4
                    }
                }, {
                    "name": "Moduler",
                    "type": "block",
                    "description": "",
                    "properties": []
                },
                {
                    "name": "Sekundärfunktioner",
                    "type": "block",
                    "description": "",
                    "properties": ["-"]
                },
                {
                    "name": "Prylar",
                    "type": "block",
                    "description": "",
                    "properties": ["Inbyggd dammsugare", "tvättmaskin", "mangel", "uniformspress och ficklampa"]
                }
            ],
            "functions":
            [
                {
                    "function": "GetRobotModules"
                }
            ],
            "image":[
            {
                "path": "Content/Images/Danger/hushallsrobot.png",
                "offSet": 0,
                "zIndex":0
            }]
                
        },
        {
            "name": "Asgnagare",
            "type": "Monster",
            "book": "Maskinarium",
            "bookContraction": "MM",
            "description":
                "Ett pipande och tjattrande missljud hörs, sedan dyker en stor flock skabbiga gnagare upp från hålor och utrymmen i RP:s närhet. De kastar sig i vild frenesi mot RP och anfaller.",
            "statBlock": [
                {
                    "name": "Grundegenskaper",
                    "type": "inline",
                    "description": "",
                    "properties": {
                        "sty": 8,
                        "kyl": 5
                    }
                },
                {
                    "name": "Skydd",
                    "type": "block",
                    "description": "",
                    "properties": ["-"]
                },
                {
                    "name": "Vapen",
                    "type": "block",
                    "description": "",
                    "properties": ["Sylvassa tänder (vapenskada 1)."]
                },
                {
                    "name": "Svärm",
                    "type": "block",
                    "description": "",
                    "properties": [
                        "Sylvassa tänder (vapenskada 1)",
                        "Svärm: Kan endast skadas av eld, explosioner, modulen Energipuls och av städrobotar."
                    ]

                }
            ],
            "functions": [],
            "image": ""
        },
        {
            "name": "Syraregn",
            "type": "Fenomen",
            "book": "Maskinarium",
            "bookContraction": "MM",
            "description":
                "Några första droppar regn börjar falla. De svider på bar hud och lämnar märken i robotchassin. En skarp och frän doft sprider sig. Snart övergår duggregnet till ett skyfall. Syraregnet fräter sönder det som är ömtåligt, skadar allt levande och missfärgar eller lämnar djupa spår i allt från växter till ruiner och robotar.",
            "statBlock": [
                {
                    "name": "Effekt",
                    "type": "block",
                    "properties": [
                        "Slå 4 till 10 grundtärningar, 6 är normalt. Varje {/} ger en poäng skada. Slå igen varje runda tills den drabbade retireraroch därmed lyckas finna skydd."
                    ]
                }
            ],
            "functions": [],
            "image": ""
        }
    ]
};