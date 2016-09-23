window.farorData = {
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
            "image": [
                {
                    "path": "Content/Images/Danger/drönarsoldat-methusalem.png",
                    "offSet": 0,
                    "zIndex": 0
                }
            ]

        }, {
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
                        "modul": 1
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
            "image": [
                {
                    "path": "Content/Images/Danger/hushallsrobot.png",
                    "offSet": 0,
                    "zIndex": 0
                }
            ]

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
                        "Slå 4 till 10 grundtärningar, 6 är normalt. Varje {symbol:/} ger en poäng skada. Slå igen varje runda tills den drabbade retireraroch därmed lyckas finna skydd."
                    ]
                }
            ],
            "functions": [],
            "image": ""
        },
        {
            "name": "BETESDJUR",
            "type": "Monster",
            "book": "År Noll",
            "bookContraction": "M0",
            "knowZoneMod": 1,
            "description":
                "Här och var i Zonen lever flockar av relativt beskedliga betesdjur, muterade versioner av den gamla tidens får, getter, grisar och kor. De är förvildade och tvekar inte att anfalla zonvandrare som de uppfattar som hot mot flocken. Betesdjur är särskilt lämpliga att jaga för att få krubb (se talangen Slaktare i {ref:Bok 1: Mutanten}).",
            "statBlock": [
                {
                    "name": "Grundegenskaper",
                    "type": "inline",
                    "description": "",
                    "properties": {
                        "sty": "2-5",
                        "kyl": "2-4"
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
                    "properties": ["Horn, bett eller trynen (vapenskada 1)."]
                }
            ]
        }, {
            "name": "DRÅPARTRÄD",
            "type": "Monster",
            "book": "År Noll",
            "bookContraction": "M0",
            "knowZoneMod": 1,
            "description":
                "Ett område som är obehagligt tyst och stilla. Det är hemvist åt Zonens fruktade modergrönska; ett dråparträd. Det består av en mörk stam som slutar i ormande tentakelgrenar. Knotiga rötter täckta av illaluktande sekret har spräckt ruiner och mark. Rester av ben, skinn och fjädrar ligger överallt runt om. Dråparträdets märkliga frökapslar – humanoida kringvandrande växtmutanter som undertvingade dråparträdets vilja jagar åt rovgrönskan – finns i området och kommer göra allt för att fånga in levande väsen som rör sig nära och mata dem åt sin hungrande trädmoder.",
            "statBlock": [
                {
                    "name": "Grundegenskaper",
                    "type": "inline",
                    "description": "",
                    "properties": {
                        "sty": 10,
                        "kyl": 6
                    }
                },
                {
                    "name": "Färdigheter",
                    "type": "blockValue",
                    "description": "",
                    "properties": {
                         "Slåss": 3
                    }
                },
                {
                    "name": "Skydd",
                    "type": "block",
                    "description": "",
                    "properties": [6]
                },
                {
                    "name": "Vapen",
                    "type": "block",
                    "description": "",
                    "properties": ["Tentakler (vapenskada 1, vid träff blir offret snärjt och måste Ta krafttag för att komma loss, även vänner intill kan slå), ringformat gap (vapenskada 3, kräver att offret är snärjt)."]
                },
                {
                    "name": "Tankevågor",
                    "type": "block",
                    "description": "Dråparträdet lockar sina offer till sig med kraftfulla tankevågor. Alla inom kort avstånd måste klara att {skill:fly} för att stå emot – den som misslyckas tar en poäng förvirring och måste avancera fram mot trädet.",
                    "properties": []
                },
                {
                    "name": "Tentakler",
                    "type": "block",
                    "description": "När ett offer väl är på nära avstånd kan dråparträdet {skill:slåss} med sina tentakler. Trädet kan fördela sina grund- och färdighetstärningar på flera offer och angripa dem i samma runda.",
                    "properties": []
                },
                {
                    "name": "Frökapslar",
                    "type": "block",
                    "description": "Offer som lyckas motstå dråparträdets lockelser blir som regel angripna av trädets humanoida frökapslar. I sitt naturliga tillstånd har dessa varelser grönaktig hy och saknar kroppsbehåring och tydliga anletsdrag. En frökapsel har {skill:sty 3} och {skill:kyl 5} och {skill:fv 2} i att {skill:slåss}. De kan dock efterapa en humanoids exakta utseende, genom att skicka in växtstänglar i offrets hjärna och suga ut information om offrets DNA. Offret, som måste vara fasthållet eller brutet av skada för att processen ska gå att genomföra, dör på kuppen. En frökapsel som efterapat en människa eller mutant är helt identisk med offret och kan även tala med dess röst, men är totalt känslokall och går inte att {skill:manipulera} eller {skill:mucka} med.",
                    "properties": []
                }
            ]
        },
    ]
};