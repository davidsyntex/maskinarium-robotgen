var farorData = {
    "robots": {
        "military": [
            {
                "name": "Drönarsoldat Methusalem",
                "isChassiUsable": true,
                "description":
                    "När människan behövde billig kanonmat till sina slagfält skaffade man simpla drönare att sända ut i led uppå led mot fienden. Noatun använde sig i huvudsak av modeller från Enamoto, framförallt deras Methusalemenhet. Den är tillverkad av enkelt men tåligt kompositmaterial, har lättviktsservon och är utrustad med vapenplattform. Drönarsoldater leds ofta av en fullt tänkande robot med befälsgrad.",
                "inline": [
                    {
                        "name": "Huvud",
                        "description": "Smalt, utdraget och lätt fyrkantigt.",
                        "properties": {
                            "srv": 0,
                            "stb": 1,
                            "prc": 2,
                            "ntv": 1,
                            "skydd": 2
                        }
                    }, {
                        "name": "Bål",
                        "description": "Tunn med två gängliga griparmar.",
                        "properties": {
                            "srv": 2,
                            "stb": 2,
                            "prc": 0,
                            "ntv": 0,
                            "skydd": 1
                        }
                    }, {
                        "name": "Underrede",
                        "description": "Två tunna ben med kraftiga pansarfötter.",
                        "properties": {
                            "srv": 1,
                            "stb": 1,
                            "prc": 0,
                            "ntv": 0,
                            "skydd": 1
                        }
                    }
                ],
                "blockValues": [
                    {
                        "name": "Program",
                        "description": "",
                        "properties": {
                            "Bekämpa": 1,
                            "Beskjuta": 2,
                            "Infiltrera": 1,
                            "Retirera": 1,
                            "Sondera": 2,
                            "Överbelasta": 1
                        }
                    }
                ],
                "block": {
                    "modules": {
                        "name": "Moduler",
                        "description": "",
                        "properties": []
                    },
                    "secondaryFunctions": {
                        "name": "Sekundärfunktioner",
                        "description": "",
                        "properties": ["Lydnandsspärr"]
                    },
                    "things": {
                        "name": "Prylar",
                        "description": "",
                        "properties": ["Lasergevär", "Insignier för den militära enhet de tillhör", "Vapenrock"]
                    }
                },
                "functions": [
                    {
                        "function": "CalcArmour"
                    }, {
                        "function": "CalcAttributes"
                    }
                ],
                "image": "Content/Images/Danger/drönarsoldat-methusalem.png"
            }
        ]
    },
    "monster": [{
        "name": "Asgnagare",
        "description":
            "Ett pipande och tjattrande missljud hörs, sedan dyker en stor flock skabbiga gnagare upp från hålor och utrymmen i RP:s närhet. De kastar sig i vild frenesi mot RP och anfaller.",
        "inline": [
            {
                "name": "Grundegenskaper",
                "description": "",
                "properties": {
                    "sty": 8,
                    "kyl": 5
                }
            }
        ],
        "blockValues": [],
        "block": {
            "skydd": {
                "name": "Skydd",
                "description": "",
                "properties": ["-"]
            },
            "weapon": {
                "name": "Vapen",
                "description": "",
                "properties": ["Sylvassa tänder (vapenskada 1)."]
            },
            "swarm": {
                "name": "Svärm",
                "description": "",
                "properties": [
                    "Sylvassa tänder (vapenskada 1)",
                    "Svärm: Kan endast skadas av eld, explosioner, modulen Energipuls och av städrobotar."
                ]
            }
        },
        "functions": [],
        "image": ""
    }],

    "fenomen": [{
        "name": "Syraregn",
        "description":
            "Några första droppar regn börjar falla. De svider på bar hud och lämnar märken i robotchassin. En skarp och frän doft sprider sig. Snart övergår duggregnet till ett skyfall. Syraregnet fräter sönder det som är ömtåligt, skadar allt levande och missfärgar eller lämnar djupa spår i allt från växter till ruiner och robotar.",
        "inline": [],
        "blockValues": [],
        "block": {
            "effect": {
                "name": "Effekt",
                "description": "s",
                "properties": ["Slå 4 till 10 grundtärningar, 6 är normalt. Varje {/} ger en poäng skada. Slå igen varje runda tills den drabbade retireraroch därmed lyckas finna skydd."]
            }
        },
        "functions": [],
        "image": ""
    }]
}