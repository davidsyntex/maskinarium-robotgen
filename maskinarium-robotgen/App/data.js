var data = {
    "StartModels": [
        {
            "Name": "Industri",
            "Colour": ["Svart med gula markeringar", "Plåt som varit grön", "Vit med nött orange text"],
            "Voice": ["Raspig", "Knastrar av damm", "Trött", "sliten", "Skär sig ibland", "Lätt skrikig"],
            "Features": ["Skyddsgoggles", "Sotiga", "Brännmärken", "Smutsig keps", "E-cigarr"],
            "Personality": ["Vresig hypokondriker", "Artig och uppgiven", "Nyfiken och burdus"],
            "Artifacts": ["Lasersvets eller dragmaskin", "E-pack"],
            "Hiearchy": 2,
            "SpecialProgram": {
                "Name": "Tillverka",
                "Attribute": "SRV",
                "Value": 1
            }
        }, {
            "Name": "Säkerhet",
            "Colour": ["Grå med orange detaljer", "Vit med svarta märken", "Blå med gula detaljer"],
            "Voice": ["Bestämd", "allvarlig", "Entonig", "sur", "Barsk", "kort", "Monoton", "burkig"],
            "Features": ["Stora skyddsplåtar", "Jacka märkt ”NorPOL”", "Varningsljus"],
            "Personality": ["Tålmodig pratkvarn", "Cynisk mytoman", "From och fredlig"],
            "Artifacts": ["Chockbatong eller chockpistol", "Spärrbult"],
            "Hiearchy": 4,
            "SpecialProgram": {
                "Name": "Skydda",
                "Attribute": "SRV",
                "Value": 1
            }
        }, {
            "Name": "Protokoll",
            "Colour": ["Beige och ljusgrå", "Svart med röda symboler", "Blekblå med gula detaljer"],
            "Voice": ["Gnällig", " lågmäld", "eftertänksam", "Torr", "entonig", "Förnäm", "plåtig"],
            "Features": ["Labbrock", "Mätare och dioder", "Hatt och halsduk", "Nätjack"],
            "Personality": ["Eftertänksam och artig", "Spydig och uppgiven", "Riskbenägen och envis"],
            "Artifacts": ["E-pack"],
            "Hiearchy": 3,
            "SpecialProgram": {
                "Name": "Kalkylera",
                "Attribute": "PRC",
                "Value": 1
            }
        }, {
            "Name": "Strid",
            "Colour": ["Kamouflagemönster", "Mattsvart och repig", "Sandfärgad"],
            "Voice": ["Korthuggen", "väsande", "Tonlös", "känslokall", "Bestämd", "mekanisk"],
            "Features": ["Lysande röda ögon", "Dödskallemålning", "Medaljer och spännen"],
            "Personality": ["Pedantisk och beskyddande", "Omtänksam och filosofisk", "Snorkig och lättretad"],
            "Artifacts": ["Lasergevär", "E-pack", "Värmesikte eller vibrokniv"],
            "Hiearchy": 2,
            "SpecialProgram": {
                "Name": "Målsöka",
                "Attribute": "STB",
                "Value": 1
            }
        }, {
            "Name": "Kompanjon",
            "Colour": ["Solbränd och frisk", "Mörk och mystisk", "Blek och anemisk"],
            "Voice": ["Melodisk", "vänlig", "Förförisk", "bestämd", "Uppspelt", "glad"],
            "Features": ["Kostym", "Grov armprotes av industrityp", "Minimala kläder i lack"],
            "Personality": ["Flörtig och självgod", "Bekymmerslös och vänlig", "Gladlynt retsticka"],
            "Artifacts": ["Tuggummi"],
            "Hiearchy": 1,
            "SpecialProgram": {
                "Name": "Manipulera",
                "Attribute": "NTV",
                "Value": 1
            }
        }, {
            "Name": "Samordning",
            "Colour": ["Orange med svart text", "Blå med gula detaljer", "Sliten blankputsad krom"],
            "Voice": ["Förmyndande", "Elektronisk", "nött,", "Stillsam", "meditativ"],
            "Features": ["Stora skyddsplåtar", "Vaxat och polerat chassi", "Befälskeps"],
            "Personality": ["Antenner", "Cynisk mytoman", "From och fredlig"],
            "Artifacts": ["Laserpistol eller maserpistol", "E-pack"],
            "Hiearchy": 5,
            "SpecialProgram": {
                "Name": "Koordinera",
                "Attribute": "NTV",
                "Value": 1
            }
        }, {
            "Name": "Städ",
            "Colour": ["Beige med röda märken", "Vit med rosa detaljer", "Klargrön med vit text"],
            "Voice": ["Dyster", "långsam", "Irriterad", "gnisslar ibland", "Enbart pip", "gester"],
            "Features": ["Luktar av kemikalier", "Dekaler", "Holoskylt: ”Städning pågår”"],
            "Personality": ["Självgod kleptoman", "Obeslutsam och lättroad", "Frågvis och skojfrisk"],
            "Artifacts": ["Gummiband"],
            "Hiearchy": 1,
            "SpecialProgram": {
                "Name": "Rengöra",
                "Attribute": "STB",
                "Value": 1
            }
        }, {
            "Name": "Skrot",
            "Colour": ["Dold under lagret av smuts", "Sotigt grå", "Plåt missfärgad av rost och vatten"],
            "Voice": ["Grov brytning", "Sliten", "melankolisk", "Metalliskt raspande"],
            "Features": [
                "Tuppkam av keramborst", "Stickad luva med oläsbar text", "Doftar avfall på långt håll",
                "Läcker mörk sörja"
            ],
            "Personality": ["Omtänksam och lättstressad", "Förvirrad och frågvis", "Riskbenägen och nyfiken"],
            "Artifacts": [],
            "Hiearchy": 0,
            "SpecialProgram": {
                "Name": "Återanvända",
                "Attribute": "PRC",
                "Value": 1
            }
        }
    ],
    "SecondaryFunctions": {
        "Industri": [
            {
                "Name": "Inbyggda verktyg",
                "Description":
                    "Du har en stor samling verktyg som hjälper dig att utföra reparationer och underhåll på robotar. Om du slår för att <span class=\"skill\">reparera</span> en robot (men inte prylar) har du +1 på slaget"
            }, {
                "Name": "Massproduktion",
                "Description":
                    "Du har förmågan att massproducera prylar i högt tempo. När du <span class=\"skill\">tillverkar</span> en pryl kan du, utan extra tidsåtgång, skapa upp till T6 identiska exemplar."
            }, {
                "Name": "Temperaturtålig",
                "Description":
                    "Du tar ingen skada av extrema temperaturer. Ditt härdade chassi tål kyla ned till 100 minusgrader och upp till tusentals grader värme. Eld och mutationer som Eldsprut eller Pyrokinesi har ingen effekt på dig (men dina prylar kan förstås fortfarande brinna upp). Sekundärfunktionen skyddar inte mot energivapen"
            }
        ],
        "Säkerhet": [
            {
                "Name": "LYDNADSSPÄRR",
                "Description":
                    "De flesta robotar i Helium är programmerade att lyda människor (sid 59) som <span class=\"skill\">manipulerar</span> dem. Inte du - så länge det inte handlar om din ägare är du immun mot människors kommandon. Färdigheten <span class=\"skill\">manipulera</span> har ingen effekt på dig. Andra robotar kan dock <span class=\"skill\">interagera</span> med dig normalt."
            }, {
                "Name": "POLISGREPP",
                "Description":
                    "Du är specialbyggd för att greppa och hålla fast en fiende. När du försöker ta ett grepp får du +2 på <span class=\"skill\">bekämpa</span>, men din attack gör ingen skada - i stället blir offret fasthållet enligt reglerna på sidan 95. Offret får -2 på alla försök att ta sig loss."
            }, {
                "Name": "SIRENER",
                "Description":
                    "Du kan aktivera en stark ljudsignal och ett kraftigt blinkande blått ljus. I normala fall hörs och syns signalerna i hela distriktet (om du befinner dig i Helium) eller zonsektorn (om du är ute i Zonen)."
            }
        ],
        "Protokoll": [
            {
                "Name": "NOTARIEFUNKTION",
                "Description":
                    "Du är byggd för att understödja och underlätta mänsklig kommunikation. På ett möte eller i en förhandling kan du visa diagram, presentera fakta och notera allt som sägs för eftervärlden. Den människa eller mutant som <span class=\"skill\">manipulerar</span> med dig på sin sida får bonus +2"
            }, {
                "Name": "SAMORDNINGSSTÖD",
                "Description":
                    "Du är gjord för att vara ett stöd åt samordningsmodeller. Använder du <span class=\"skill\">kalkylera</span> för en handling som följer direktiven från <span class=\"skill\">koordinera</span> får du +2 på slaget. Samordningsmodellen kan uppdatera sin plan baserad på ditt <span class=\"skill\">kalkylera</span>-slag utan att avbryta sin <span class=\"skill\">koordinering</span>."
            }, {
                "Name": "TOLKENHET",
                "Description":
                    "Du har särskilda komponenter och minneskretsar för att förstå människors och andra levandes varelsers språk. Du förstår automatiskt alla främmande språk du stöter på, och du kan simultantolka åt ditt sällskap"
            }
        ],
        "Strid": [
            {
                "Name": "LYDNADSSPÄRR",
                "Description":
                    "Till skillnad från andra robotar är du inte programmerad att lyda människor (sid 59) - så länge det inte är din ägare. Färdigheten <span class=\"skill\">manipulera</span> har ingen effekt på dig. Andra robotar kan dock <span class=\"skill\">interagera</span> med dig normalt"
            }, {
                "Name": "IR-KAMERA",
                "Description":
                    "Du är anpassad för krigsföring i mörka miljöer. Sekundärfunktionen låter dig se obehindrat i totalt mörker (sid 102) genom att förlita dig på IR-strålning. Du får inga avdrag för handlingar i mörker. Du får även +1 på <span class=\"skill\">sondera</span> om värmen från målet kan avgöra upptäckt"
            }, {
                "Name": "ROBOTANATOMI",
                "Description":
                    "Du har detaljerade datafiler om hur en mängd olika robottyper är konstruerade. Det låter dig effektivt slå ut just de system som du önskar. När du anfaller en annan robot får du välja vilken GE eller modul du vill skada, i stället för att slå på skadetabellen."
            }
        ],
        "Kompanjon": [
            {
                "Name": "FÖRLEDARFUNKTION",
                "Description":
                    "Du har särskild programmering för att nästla in dig i ett socialt sammanhang och sedan så split och osämja. Du kan slå för <span class=\"skill\">manipulera</span> när du möter en ny grupp individer - det spelar ingen roll om de är robotar, människor eller mutanter. Om slaget lyckas kan du efter T6 timmar luska ut vilka dolda konflikter som finns i gruppen och skapa någon form av osämja. Detaljerna är upp till SL."
            }, {
                "Name": "MÄNSKLIG SKEPNAD",
                "Description":
                    "Du är skapad som en perfekt avbild av människan - på utsidan i alla fall. Du har hud, hår och ögon som ser precis ut som människans, du har till och med mänsklig kroppstemperatur. På insidan är du förstås lika mycket maskin som alla andra robotar. För att se igenom din förklädnad krävs att betraktaren granskar dig noga och lyckas med ett slag för <span class=\"skill\">speja</span> - framgång innebär att betraktaren inser att det är något onaturligt eller omänskligt med din uppenbarelse. Observera att du endast kan välja denna sekundärfunktion om du har ett människoliknande chassi (sid 15)."
            }, {
                "Name": "UTSEENDEFÖRÄNDRING",
                "Description":
                    "Du kan med blotta viljan förändra ditt utseende, till exempel ändra färg, längd, bredd och form. Om du kombinerar denna funktion med Mänsklig skepnad (ovan) kan du byta hår, hud- och ögonfärg. Även andra aspekter av ditt utseende kan ändras, från kroppsform till det kön du till synes har."
            }
        ],
        "Samordning": [
            {
                "Name": "INSATSENHET",
                "Description":
                    "Du har förmågan att göra extremt snabba sannolikhetskalkyler. I praktiken innebär detta att du får slå ditt initiativslag (sid 87) med två tärningar, och välja den högsta."
            }, {
                "Name": "KOMMANDOKLASS",
                "Description":
                    "Du är en avancerad version med mer ansvar än en typisk samordningsmodell. Du har +2 i Hierarki.",
                "Options": {
                    "Attribute": "Hiearchy",
                    "Value": 2
                }
            }, {
                "Name": "STRIDSTAKTIK",
                "Description":
                    "Du är anpassad för att leda militära enheter i strid eller manöver. Alla slag för <span class=\"skill\">koordinera</span> som rör planer och order för strid sker med modifikation +1"
            }
        ],
        "Skrot": [
            {
                "Name": "ATTRAPPMODUL",
                "Description":
                    "Du har en extra modul (välj valfri i kapitel 5), men den är inte äkta utan bara en attrapp. Attrappen har två funktioner - dels kan den lura andra robotar (det krävs ett lyckat <span class=\"skill\">datasöka</span> för att genomskåda den), dels kan attrappen bli den modul som blir utslagen när du tar en kritisk skada mot moduler (sid 100).",
                "Options": {
                    "Module": "Fake"
                }
            }, {
                "Name": "HUGGVAPEN",
                "Description":
                    "Du har byggt in mycket närstridseffektiva och vassa huggvapen i dina armar. Dina obeväpnade attacker har vapenskada 2"
            }, {
                "Name": "SKRÄPKOMPANJON",
                "Description":
                    "Du har en liten drönarvän. Den är gjord av skrot och älskar dig över allt annat. Din kompanjon kan se ut hur som helst men är bara en bråkdel av din storlek. Den har SRV 1, STB 2, PRC 2 och NTV 1. Det enda program den kan utföra är <span class=\"skill\">sondera</span>, vilket den har PV 2 i."
            }
        ],
        "Städ": [
            {
                "Name": "GUMMERAD",
                "Description":
                    "Du inklädd i grovt gummerat skydd för att tåla tufft arbete i svår terräng. Gummit ökar ditt skyddsvärde två steg, men bara mot skada från fall och närstridsattacker."
            }, {
                "Name": "SOPOMVANDLARE",
                "Description":
                    "Du har komponenter som kan omvandla avskräde och biologiskt material till energi. Processen är långsam - det tar T6 timmar att återhämta en EP, och du måste ha tillgång till sopor eller växter av något slag. "
            }, {
                "Name": "TRYCKLUFTSBLÅS",
                "Description":
                    "Du har en inbyggd tryckluftstub kopplad till en kraftig skräpblåsare som du kan rikta i valfri riktning. Du kan använda tryckluften mot ett mål på upp till nära avstånd. Slå för <span class=\"skill\">rengöra</span> - en lyckad attack gör ingen skada, men offret måste omedelbart slå för <span class=\"skill\">överbelasta</span> eller <span class=\"skill\">kämpa på</span>. Om det misslyckas mister offret sin nästa handling."
            }
        ],
        "Allmänna": [
            {
                "Name": "ANALYSENHET",
                "Description":
                    "Du har särskilda sensorer som kan analysera olika material. När du lyckas med ett slag i analyserakan du avgöra om vatten, mat eller en plats innehåller smitta, gifter eller Röta."
            }, {
                "Name": "BATTERILADDARE",
                "Description":
                    "Du kan ladda upp artefakten E-pack från din interna kraftkälla. Att ladda upp ett uttömt E-pack kräver T6 EP. Du kan också ladda upp mindre batterier - det kostar bara en EP."
            }, {
                "Name": "DATAKOPPLING",
                "Description":
                    "Du samverkar särskilt väl med större datasystem. När du slår för <span class=\"skill\">datasöka</span> och är kopplad till Kollektivets dataarkiv eller mot ett annat större datasystem har du +1 på slaget. Du kan inte förflytta dig eller vara aktiv i övrigt när du använder sekundärfunktionen."
            }, {
                "Name": "EXTRAPANSAR",
                "Description":
                    "Extra skyddsplåtar har byggts på din robotkropp. De ökar ditt normala skyddsvärde med 3, men deras tyngd ger dig -1 på alla slag för <span class=\"skill\">retirera</span> som kräver snabbhet eller smidighet.",
                "Options": {
                    "Attribute": "SKYDD",
                    "Value": 3
                }
            }, {
                "Name": "FLYTKRAFT",
                "Description":
                    "Du är utrustad med lufttäta kammare och mycket tåliga kompositkuddar som blåser upp om du hamnar i vatten och gör att du inte sjunker. Om du inte vill, förstås. Du kan förutom dig själv också hålla upp till fyra människor eller cirka 300 kg flytande."
            }, {
                "Name": "GOURMETFUNKTION",
                "Description":
                    "Du kan tillreda utsökta ransoner med mat och dryck för levande varelser. Du kan rentav tillaga rötsmittad mat från Zonen så väl att Rötan försvinner. Du kan också rena rötsmittat vatten. Varje försök tar cirka en timme. Slå för <span class=\"skill\">analysera</span> – varje <span class=\"symbol\">/</span> du slår renar T6 ransoner krubb eller vatten."
            }, {
                "Name": "LARMFUNKTION",
                "Description":
                    "Du är utrustad med kraftfulla sensorer som kan uppfatta elektriska signaler i din närhet. Inom kort avstånd har du +1 på <span class=\"skill\">sondera</span> om en annan robot försöker <span class=\"skill\">infiltrera</span>."
            }, {
                "Name": "LASTMODELL",
                "Description":
                    "Du kan lastas med långt mer än en vanlig robot. När du räknar ut maximal bärförmåga (sid 25) multiplicerar du SRV med fyra, inte två.",
                "Options": {
                    "Attribute": "Belastning",
                    "Value": 4
                }
            }, {
                "Name": "LYFTKRAN",
                "Description":
                    "Ditt chassi är förstärkt med pistonger som ger dig extra lyftkraft. Alla slag för <span class=\"skill\">forcera</span> sker med +2 om ett lyft är avgörande."
            }, {
                "Name": "MOTORLADDARE",
                "Description":
                    "Du har en extra kraftkälla av något slag fastmonterad på din robotkropp. Kraftkällan kräver fossilt bränsle genom förbränning (sprit eller bensin). Det ryker och osar men en dos bränsle ger dig en EP. I Helium kan du få tag på bränsle genom att svarthandla med skrotrobotar. I Yttervärlden får du försöka förhandla med Zonens mutanter som har lärt sig konsten att destillera sprit (se <span class=\"reference\">Mutant: År Noll</span>)"
            }, {
                "Name": "PSILARM",
                "Description":
                    "Du har experimentella sensorer som gör att du kan avgöra om någon använder mentala mutationer inom kort avstånd från dig. Du kan inte avgöra vem det är, vem offret är eller vilken förmåga det rör sig om, bara notera att det sker. Exempel på förmågor du reagerar på är Mardrömmare, Mental dominans, Pyrokinesi och Telepati."
            }, {
                "Name": "RESERVKRAFT",
                "Description":
                    "Du har extra kraftceller inmonterade, vilka utökat mängden energi du kan lagra. I stället för normalt maximala 10 EP kan du lagra upp till 12 EP."
            }, {
                "Name": "SJÄLVFÖRSTÖRELSEMEKANISM",
                "Description":
                    "När du inte längre har någon annan utväg kan du spränga din kraftcell. Du totalförstörs på kuppen och avaktiveras permanent men du kanske kan rädda andra. Du väljer själv när du aktiverar mekanismen. Det kan till och med ske när du blivit permanent avaktiverad (sid 101) - men det måste då ske omedelbart. Sprängverkan från explosionen är 9 plus dina kvarvarande EP."
            }, {
                "Name": "SOLPANELER",
                "Description":
                    "Du har särskilt kraftfulla solpaneler som du kan fälla fram. Djupt under ytan gör de ingen nytta men om du befinner dig i Yttervärlden kan du en gång per dygn återvinna T6 EP om du under dagtid tillbringar några timmar under öppen himmel. Du måste vara helt inaktiv under tiden."
            }, {
                "Name": "STRÖMSNÅL",
                "Description":
                    "Ditt system är modifierat för att dra så lite ström som möjligt. Tyvärr ökar det risken för överhettning. När du aktiverar en modul (kapitel 5) rullar du en extra pryltärning. Det ökar alltså risken för överhettning – men om du rullar en eller flera <span class=\"symbol\">/</span> går det åt en mindre EP än normalt. Om du bara använde en EP för att aktivera modulen går det då inte åt någon EP alls."
            }, {
                "Name": "TELESKOPÖGA",
                "Description":
                    "Du har okulärsensorer som är mycket kraftfulla. Alla slag för <span class=\"skill\">sondera</span> där din förmåga att se detaljer är avgörande sker med modifikation +1"
            }, {
                "Name": "VAPENPLATTFORM",
                "Description":
                    "Du har ett specialfäste som snabbt och enkelt låter dig montera fast ett handeldvapen på din kropp. Monteringen går fort (en runda) och kräver inget <span class=\"skill\">reparera</span>-slag (sid 52)."
            }, {
                "Name": "VEVGENERATOR",
                "Description":
                    "Du är utrustad med en enkel generator kopplad till en handvev. Med någon timmes intensivt vevande och ett lyckat slag för <span class=\"skill\">kämpa på</span> (för människor och mutanter) eller <span class=\"skill\">överbelasta</span> (för robotar) får du en EP. När en annan robot vevar kostar ansträngningen en EP för denna robot. "
            }, {
                "Name": "VIRUSSKYDD",
                "Description":
                    "Du har särskilt kraftigt skydd mot maskinsmitta och logikparasiter. Du får modifikation +2 på slag för att skydda dig mot robotvirus (sid 103)."
            }, {
                "Name": "ÖVERLADDNING",
                "Description":
                    "Tack vare några fulkopplingar kan du pressa ditt system förbi normala säkerhetsparametrar. Du kan pressa ett tärningsslag när du använder ett program (kapitel 3) två gånger i stället för en gång. Självklart riskerar detta att orsaka skador på ditt system"
            }
        ]
    },
    "Programs": [
        {
            "Name": "Överbelasta",
            "Attribute": "SRV",
            "Value": 0
        }, {
            "Name": "Forcera",
            "Attribute": "SRV",
            "Value": 0
        }, {
            "Name": "Bekämpa",
            "Attribute": "STB",
            "Value": 0
        }, {
            "Name": "Infiltrera",
            "Attribute": "STB",
            "Value": 0
        }, {
            "Name": "Retirera",
            "Attribute": "STB",
            "Value": 0
        }, {
            "Name": "Beskjuta",
            "Attribute": "STB",
            "Value": 0
        }, {
            "Name": "Sondera",
            "Attribute": "PRC",
            "Value": 0
        }, {
            "Name": "Datasöka",
            "Attribute": "PRC",
            "Value": 0
        }, {
            "Name": "Analysera",
            "Attribute": "PRC",
            "Value": 0
        }, {
            "Name": "Ifrågasätta",
            "Attribute": "NTV",
            "Value": 0
        }, {
            "Name": "Interagera",
            "Attribute": "NTV",
            "Value": 0
        }, {
            "Name": "Reparera",
            "Attribute": "NTV",
            "Value": 0
        }
    ],
    "Torsos": [
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Ikea-Tech ",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "en universalbål som passar på de flesta modeller av huvud och underreden",
            "BILD": "Content/Images/Chassikort---B_Ikea.png",
            "HEADOFFSET": "-50px",
            "LEGOFFSET": "-200px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Diderot & Diego MD34",
            "SRV": 2,
            "STB": 0,
            "PRC": 2,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "en smal tub täckt av olika utbyggnader",
            "BILD": "Content/Images/Chassikort---B_Diderot-MD34.png",
            "HEADOFFSET": "-140px",
            "LEGOFFSET": "-100px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Özkun TN75",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "en smal och kort robotbål",
            "BILD": "Content/Images/Chassikort---B_ozkun.png",
            "HEADOFFSET": "-40px",
            "LEGOFFSET": "-200px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Ganymeda Nava PRS",
            "SRV": 2,
            "STB": 2,
            "PRC": 0,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 3,
            "BESKRIVNING": "en smal och benig robotbål med synliga servon och pistonger",
            "BILD": "Content/Images/Chassikort---B_ganymeda.png",
            "HEADOFFSET": "-40px",
            "LEGOFFSET": "-100px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Fenzhou 33 ",
            "SRV": 0,
            "STB": 1,
            "PRC": 2,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "en robotkropp som inte går att skilja från en människas",
            "BILD": "Content/Images/Chassikort---B_fenzhou.png",
            "HEADOFFSET": "-50px",
            "LEGOFFSET": "-20px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Skrotbål",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 2,
            "SKYDD": 1,
            "BESKRIVNING": "en oproportitionerlig robotbål, byggd av skrot",
            "BILD": "Content/Images/Chassikort---B_Skrot.png",
            "HEADOFFSET": "-50px",
            "LEGOFFSET": "-200px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Kleenkorp PTU5",
            "SRV": 1,
            "STB": 2,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "en massiv tunnformad bål med rejäl pansar",
            "BILD": "Content/Images/Chassikort---B_Kleenkorp.png",
            "HEADOFFSET": "-40px",
            "LEGOFFSET": "-120px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Modessi RK ",
            "SRV": 1,
            "STB": 2,
            "PRC": 2,
            "NTV": 1,
            "MOD": 0,
            "SKYDD": 2,
            "BESKRIVNING": "en liten rörformad robotbål med lätt keramskal",
            "BILD": "Content/Images/Chassikort---B_Modessi-RK.png",
            "HEADOFFSET": "-50px",
            "LEGOFFSET": "-100px"
        },
        {
            "CHASSIDEL": "Bål",
            "NAMN": "Pylon ",
            "SRV": 2,
            "STB": 2,
            "PRC": 1,
            "NTV": 1,
            "MOD": 0,
            "SKYDD": 2,
            "BESKRIVNING": "en bred robotbål med överdimensionerade axelplåtar",
            "BILD": "Content/Images/Chassikort---B_Pylon.png",
            "HEADOFFSET": "-100px",
            "LEGOFFSET": "-250px"
        }
    ],
    "Heads": [
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Mumla PX-01",
            "SRV": 2,
            "STB": 0,
            "PRC": 0,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "en vagt människolik robotskalle med tjockt pansar",
            "BILD": "Content/Images/Chassikort---H_MumlaPX01.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Ikea-Tech ",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "en universalskalle som passar på de flesta modeller av bålar",
            "BILD": "Content/Images/Chassikort---H_Ikea.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Solun ",
            "SRV": 0,
            "STB": 0,
            "PRC": 2,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "en stor robotskalle med plats för kraftiga processor-funktioner",
            "BILD": "Content/Images/Chassikort---H_Solun.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Lux Nanito+",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 2,
            "MOD": 0,
            "SKYDD": 1,
            "BESKRIVNING": "en skalle som i gott skick är omöjlig att skilja från en människas",
            "BILD": "Content/Images/Chassikort---H_Lux.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Fenix MK43 ",
            "SRV": 1,
            "STB": 2,
            "PRC": 2,
            "NTV": 0,
            "MOD": 0,
            "SKYDD": 3,
            "BESKRIVNING": "en robotskalle med tjockt pansar och militärt syfte",
            "BILD": "Content/Images/Chassikort---H_fenix-MK43.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Kordura Mod 022",
            "SRV": 1,
            "STB": 0,
            "PRC": 1,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "en robotskalle med mänskliga drag",
            "BILD": "Content/Images/Chassikort---H_Kordura22.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Skrothuvud",
            "SRV": 0,
            "STB": 1,
            "PRC": 2,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 2,
            "BESKRIVNING": "en missformad robotskalle, byggd av allsköna skrot",
            "BILD": "Content/Images/Chassikort---H_Skrot.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Odessa Vega 1.5",
            "SRV": 2,
            "STB": 1,
            "PRC": 1,
            "NTV": 0,
            "MOD": 1,
            "SKYDD": 3,
            "BESKRIVNING": "en liten men solid robotskalle som tål tuff miljö",
            "BILD": "Content/Images/Chassikort---H_Odessa_Vega.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Pashin AMA 9",
            "SRV": 1,
            "STB": 2,
            "PRC": 1,
            "NTV": 0,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "en liten men bastant robotskalle som nästan helt kan byggas in i bålen",
            "BILD": "Content/Images/Chassikort---H_Pashin.png"
        },
        {
            "CHASSIDEL": "Huvud",
            "NAMN": "Skynet T-101",
            "SRV": 2,
            "STB": 2,
            "PRC": 1,
            "NTV": 0,
            "MOD": 0,
            "SKYDD": 2,
            "BESKRIVNING": "ett exokranium, tänkt att döljas under syntetisk hud (Terminator)",
            "BILD": "Content/Images/Chassikort---H_ABC0.png"
        }
    ],
    "Legs": [
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Ikea-Tech ",
            "SRV": 1,
            "STB": 1,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "ett par universalben som passar på de flesta modeller av bålar",
            "BILD": "Content/Images/Chassikort---U_Ikea.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Methusalem Mod 12",
            "SRV": 1,
            "STB": 2,
            "PRC": 1,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "ett par skelettlika robotben som slut i grova militära robotfötter",
            "BILD": "Content/Images/Chassikort---U_methusalem.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Skrotunderrede",
            "SRV": 1,
            "STB": 0,
            "PRC": 1,
            "NTV": 1,
            "MOD": 2,
            "SKYDD": 1,
            "BESKRIVNING": "ett par olikformade skrotben med massiva fötter",
            "BILD": "Content/Images/Chassikort---U_Skrot.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Orion V ",
            "SRV": 0,
            "STB": 1,
            "PRC": 2,
            "NTV": 2,
            "MOD": 0,
            "SKYDD": 1,
            "BESKRIVNING": "ett par långa och smala robotben",
            "BILD": "Content/Images/Chassikort---U_OrionV.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "LBM Terra 004",
            "SRV": 2,
            "STB": 1,
            "PRC": 1,
            "NTV": 0,
            "MOD": 1,
            "SKYDD": 2,
            "BESKRIVNING": "ett par kraftiga robotben som slutar i stadiga fötter",
            "BILD": "Content/Images/Chassikort---U_LBM_Terra.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "LBM Dyno-Q",
            "SRV": 2,
            "STB": 1,
            "PRC": 0,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "ett par breda larvfötter som låter dig rulla fram stadigt",
            "BILD": "Content/Images/Chassikort---U_LMB_DynoQ.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Prachi-Gong ",
            "SRV": 1,
            "STB": 1,
            "PRC": 0,
            "NTV": 2,
            "MOD": 1,
            "SKYDD": 1,
            "BESKRIVNING": "ett par ben och fötter som inte går att skilja från en människas",
            "BILD": "Content/Images/Chassikort---U_Prachi-gong.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Rougell MARK 19",
            "SRV": 1,
            "STB": 2,
            "PRC": 0,
            "NTV": 1,
            "MOD": 1,
            "SKYDD": 4,
            "BESKRIVNING": "ett kraftigt underrede med runda larvfötter",
            "BILD": "Content/Images/Chassikort---U_Rougell_M19.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Lagos MD-18",
            "SRV": 1,
            "STB": 1,
            "PRC": 2,
            "NTV": 1,
            "MOD": 0,
            "SKYDD": 1,
            "BESKRIVNING": "ett kompakt underred med svävarförflyttning",
            "BILD": "Content/Images/Chassikort---U_Lagos-MD18.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "OCP Urban Pacificator",
            "SRV": 3,
            "STB": 1,
            "PRC": 0,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 3,
            "BESKRIVNING":
                "ett kraftfullt underrede, för att kunna stå stadigt när tunga vapen avfyras från enheten (ED209)",
            "BILD": "Content/Images/Chassikort---U_Ikea.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Necrosis II",
            "SRV": 2,
            "STB": 3,
            "PRC": 1,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 2,
            "BESKRIVNING": "specialdesignat klass 2 underrede. Aldrig släppt på öppna marknaden",
            "BILD": "Content/Images/Chassikort---U_Necrosis2.png"
        },
        {
            "CHASSIDEL": "Underrede",
            "NAMN": "Necrosis IV",
            "SRV": 3,
            "STB": 1,
            "PRC": 1,
            "NTV": 0,
            "MOD": 2,
            "SKYDD": 3,
            "BESKRIVNING": "fyrbent version av Necrosis. Aldrig släppt på öppna marknaden",
            "BILD": "Content/Images/Chassikort---U_Ikea.png"
        }
    ],
    "Modules": [
        {
            "Name": "ACCELERATOR",
            "Description": "Du har modifieringar som gör att du kan agera med otrolig hastighet. Du kan:",
            "Options": [
                "Öka ditt initiativslag med +2 per EP. Du måste bestämma om du ska använda modulen och hur många EP du vill lägga innan tärningar rullas. Du kan öka ditt initiativvärde när du vill under stridens gång, det behöver inte vara i början. Du kan öka ditt initiativvärde senare under stridens lopp, även då ger varje EP +2. (F)",
                "<span class=\"skill\">bekämpa</span> eller <span class=\"skill\">beskjuta</span> samma mål en andra gång i samma runda. Du får inte en extra manöver. Kostar 1 EP. (F)",
                "Förflytta dig med extrem hastighet. Varje manöver du lägger på förflyttning i en runda räknas som två. Kostar 1 EP. (F)"
            ]
        }, {
            "Name": "AKTIVT PANSAR",
            "Description":
                "Alla delar av ditt chassi har ett reaktivt pansar kopplat till din kraftkälla. När du blir träffad av yttre våld kan du:",
            "Options": [
                "Eliminera 1 poäng skada för varje EP du lägger. Modulen har ingen effekt mot skada som du själv orsakar när du pressar ett slag. (R)"
            ]
        }, {
            "Name": "DISRUPTORKOD",
            "Description":
                "Du har en ytterst farlig modul som låter dig sprida en särskild sorts maskinsmitta med begränsad effekt. Du måste vara på armlängds avstånd, och ha fysisk kontakt med målet. Du kan:",
            "Options": [
                "Ge en annan robot 1 poäng skada per EP du lägger.",
                "Få en datorstyrd funktion att sluta fungera, exempelvis en modul, ett larm, en försvarsmekanism eller ett program. Kostar 1 EP per funktion du slår ut.",
                "Förstöra eller korrumpera lagrad data i en dator eller robot. För varje EP du lägger kan du radera data om ett visst ämne."
            ]
        }, {
            "Name": "DRÖNARE",
            "Description":
                "Du har en liten svävande drönare som du kan fjärrstyra. Drönaren har SRV 1, STB 3 och PRC 3. Att kommendera ut drönaren och låta den agera under en runda räknas som en handling och kostar 1 EP. Under rundan kan drönaren förflytta sig (motsvarande två manövrer), samt utföra en av dessa handlingar:",
            "Options": [
                "<span class=\"skill\">beskjuta</span> (PV 3) en fiende med ett lätt strålvapen som har vapenskada 1. Vapnet har ingen prylbonus och slaget kan inte pressas.",
                "<span class=\"skill\">sondera</span> (PV 3) omgivningen och sända informationen till dig.",
                "<span class=\"skill\">infiltrera</span> (PV 3) en plats och rapportera tillbaka till dig."
            ]
        }, {
            "Name": "EMP-SKYDD",
            "Description":
                "Du är utrustad med kraftfulla skydd mot vapen som är speciellt skadliga för robotar men också ett begränsat skydd mot strålvapen. Du kan:",
            "Options": [
                "Skydda dig mot ROBDES-vapen. Det räcker att du lägger 1 EP för att eliminera all skada från en sådan attack. (R)",
                "Skydda dig mot energivapen. Varje EP du lägger sänker skadan från en sådan attack med 1. (R)"
            ]
        }, {
            "Name": "ENERGIPULS",
            "Description":
                "Ett kraftfullt energivapen är inbyggt någonstans i ditt chassi (välj själv var). Du kan:",
            "Options": [
                "Avlossa en dödlig energistråle mot ett offer på upp till kort avstånd. Offret moduler tar en poäng skada för varje EP du använder. Rustning/pansar skyddar.",
                "Utlösa en energipuls i alla riktningar. Ett antal offer lika med antalet spenderade EP tar 1 poäng skada vardera. Offren måste finnas inom nära avstånd."
            ]
        }, {
            "Name": "EXTRA ARMAR",
            "Description":
                "Du är försedd med fyra armar i stället för två, och har därmed förstås även fyra griphänder. Du kan:",
            "Options": [
                "<span class=\"skill\">bekämpa</span> ett offer två gånger i direkt följd i samma runda. Den extra handlingen kostar dig din manöver. Kostar 1 EP. (F)",
                "Parera flera närstridsattacker i samma runda. Detta kostar dig 1 EP för varje parering efter den första. (F)",
                "Klättra lätt och ledigt. Du kan lägga 1 EP i stället för att slå <span class=\"skill\">retirera</span> när du ska klara en svår klättring."
            ]
        }, {
            "Name": "FÖRHÖRSFUNKTION",
            "Description":
                "Du har en modul som låter dig neutralisera levande varelser och pressa dem på information. Du kan:",
            "Options": [
                "Bedöva en levande varelse på armlängds avstånd. För varje EP du lägger tar offret 1 poäng stress (se <span class=\"reference\">Mutant: År Noll</span>). Rustning ger inget skydd.",
                "Tvinga en fånge att snacka. Ingen kan stå emot de plågor du utsätter dem för. Offret måste vara hjälplöst och i ditt våld. För varje EP du lägger måste offret svara sanningsenligt på en fråga."
            ]
        }, {
            "Name": "GRANATKASTARE",
            "Description":
                "Du kan lobba granater med hög precision. Mikrodrönare i din kropp konstruerar nya granater. Granatkastaren har lång räckvidd. Du kan:",
            "Options": [
                "Avlossa en spränggranat som automatiskt träffar där du vill. Sprängverkan är 9 och vapenskadan 1. Kostar 1 EP.",
                "Avlossa en rökgranat som placerar en tjock rökridå där du vill ha den. Du kan använda röken till att ta dig ur en konflikt utan att slå för <span class=\"skill\">retirera</span>. Kostar 1 EP."
            ]
        }, {
            "Name": "GRUVBRYTARE",
            "Description":
                "Du har en kraftfull borr skapad för gruvarbete. Små skovelförsedda armar skyfflar undan lösa rester och du kan fälla ut klampar som ger dig bättre fäste i underlaget. Du kan:",
            "Options": [
                "Snabbt ta dig igenom till och med sten och betong. För varje EP du spenderar kan du gräva ett tiotal meter (en avståndskategori).",
                "Spendera 1 EP för att ta dig ur en konflikt genom att gräva ner dig - du slipper då slå för att <span class=\"skill\">retirera</span>."
            ]
        }, {
            "Name": "HOLOFLAGE",
            "Description":
                "Du är utrustad med avancerade holoprojektorer som återskapar omgivningen du rör dig i näst intill perfekt. Du kan:",
            "Options": [
                "Dölja dig mycket effektivt för fiender. Aktivera modulen när du slår för <span class=\"skill\">infiltrera</span>. För varje EP du lägger får du +2 på slaget. (F)"
            ]
        }, {
            "Name": "HOLOPROJEKTOR",
            "Description":
                "Modulen är en ytterst effektiv holoprojektor som låter dig skapa tredimensionella bilder eller bildsekvenser. Det kan vara något dina sensorer registrerat eller något modulens mjukvara skapar. Du kan:",
            "Options": [
                "Spela in en sekvens (upp till en minut lång), som i tre dimensioner fångar en scen som utspelar sig på upp till kort avstånd från dig. Du kan spara sekvensen för evigt. Kostar 1 EP.",
                "Skapa ett hologram så trovärdigt att en fiende på kort avstånd eller längre bort måste klara ett slag för <span class=\"skill\">sondera</span> för att inse att projektionen inte är verklig. Sekvensen kan vara maximalt en minut lång, och projektionen ett par meter hög/bred. Kostar 1 EP."
            ]
        }, {
            "Name": "JETPACK",
            "Description":
                "Ditt chassi är försett med små raketmotorer som låter dig flyga korta sträckor. Du kan:",
            "Options": [
                "Flyga 20–30 meter, sedan måste du landa. Kostar 1 EP.",
                "Flyga fram till en fiende på upp till kort avstånd och direkt <span class=\"skill\">bekämpa</span> målet, i samma runda. Förflyttningen ersätter din manöver för rundan. Effekten kostar 1 EP. (F)"
            ]
        }, {
            "Name": "KONTROLLKRETS",
            "Description":
                "Du har en experimentell modul som med hjälp av en sorts logikparasit tillfälligt låter dig ta kontroll över en annan robots handlingar. Du måste ha visuell kontakt med offret. Du kan:",
            "Options": [
                "För 1 EP bestämma vad offrets nästa handling blir. Offret slår tärning för handlingen som vanligt. Ska offret använda en modul betalar du extra EP även för den. Tvingar du offret att skada sig själv tar det vapenskada, plus 1 poäng skada för varje ytterligare EP du lägger."
            ]
        }, {
            "Name": "KRAVALLKONTROLL",
            "Description":
                "Du har en arsenal för att oskadliggöra varelser. Du kan:",
            "Options": [
                "Träffa ett mål per EP inom nära avstånd med en geggig smet som hårdnar inom en runda. Varje offer måste klara ett svårt (-1) slag för <span class=\"skill\">forcera</span> eller <span class=\"skill\">ta krafttag</span> för att ta sig loss. Ett försök får göras varje runda.", "Spy ur dig ett moln av tårgas, till priset av 1 EP. Alla levande varelser inom nära avstånd måste <span class=\"skill\">kämpa på</span> (räknas inte som en handling). Den som misslyckas blir oförmögen att agera i T6 rundor, och kan under tiden enbart förflytta sig."
            ]
        }, {
            "Name": "PSI-SKYDD",
            "Description":
                "När människan skapade varelser med psioniska förmågor behövde hon även skydd mot dessa. Du har en experimentell modul för det syftet. Du kan:",
            "Options": [
                "Avgöra om en person inom nära avstånd har mentala förmågor. Kostar 1 EP. Du kan inte avgöra vilken eller vilka förmågor.", "Aktivera en signal som skadar en person med mentala förmågor inom nära avstånd. Offret får huvudvärk och yrsel. Varje EP ger 1 poäng stress.", "Utsända en signal som förstärker psioniska mutationer. När en annan person inom nära avstånd använder en mental mutation kan du lägga EP för att förstärka effekten. Varje EP räknas som en MP, som adderas till de MP som mutanten använder. (F)"
            ]
        }, {
            "Name": "REPARATIONSENHET",
            "Description":
                "Modulen sänder ut mikrodrönare med en enda uppgift: att reparera dig när du blir skadad. Modulen kan: ",
            "Options": [
                "Reparera 1 poäng skada per EP som du använder. Återhämtningen sker på en runda, och du kan göra annat under tiden. (F)", "Reparera en trasig modul. Går också på en runda, och kostar 2 EP. (F)"
            ]
        }, {
            "Name": "RESERVSYSTEM",
            "Description":
                "Du har ett reservsystem som tillfälligt gör dig funktionsduglig trots mycket svåra skador. Du kan:",
            "Options": [
                "Slå ett programslag med maxvärdet i en grundegenskap trots att du tagit skada mot grundegenskapen. Kostar 1 EP. (F)", "Med en handling återställa en utslagen grundegenskap (sid 100) till maxvärdet. Effekten är dock tillfällig - du måste lägga 1 EP per runda, så snart du slutar med det blir grundegenskapen utslagen igen."
            ]
        }, {
            "Name": "RESURSVÄXLING",
            "Description":
                "Du kan omfördela resurser i ditt chassi från en grundegenskap till en annan. Du kan:",
            "Options": [
                "Flytta en poäng från en grundegenskap till en annan, som du tagit skada mot. Det räknas som en handling, och kostar 1 EP för varje GE-poäng du vill flytta. Du kan inte gå över ditt maxvärde i grundegenskapen du förstärker. Du kan sänka en GE ner till noll om du vill. Grundegenskapen som du sänker kan <span class=\"skill\">repareras</span> på normalt sätt"
            ]
        }, {
            "Name": "SENSORPULS",
            "Description":
                "Alla delar av ditt chassi har ett reaktivt pansar kopplat till din kraftkälla. När du blir träffad av yttre våld kan du:",
            "Options": [
                "Aktivera modulen när du slår för <span class=\"skill\">sondera</span> i syfte att upptäcka något dolt. För varje EP du lägger får du +2 på slaget. (F)", "Genom att aktivera modulen kan du agera i kompakt mörker utan avdrag under några minuter. Kostar 1 EP"
            ]
        }, {
            "Name": "SJUKVÅRDSENHET",
            "Description":
                "Du kan sköta om skadade och sjuka människor. I modulen ingår resurser för att förbättra människans allmänna hälsa och skydda henne från farliga ämnen. Du kan:",
            "Options": [
                "Rädda livet på en kritiskt skadad människa eller djurmutant. Kostar 1 EP.",
                "Få en bruten människa eller djurmutant på fötter igen. Kostar 1 EP och återställer 1 poäng i den GE som nått noll.", "Halvera läkningstiden för en kritisk skada. Kostar 1 EP. Kan inte kombineras med ett <span class=\"skill\">vårda</span>-slag för dubbel effekt."
            ]
        }, {
            "Name": "TENTAKELNÄSTE",
            "Description":
                "Du har en säregen modul i form av ett näste med åtta tentakler som slingrar sig ut från ditt chassi. De är lika långa som din egen kropp och slutar i griphänder och magnetfästen. Du kan:",
            "Options": [
                "Greppa ett föremål från nära avstånd. Kostar 1 EP.",
                "Hålla fast någon som du lyckas bekämpa, utan extra <span class=\"symbol\">/</span>. Kostar 1 EP. (F)",
                "Utföra en greppattack mot ett offer som du håller fast, utan att slå för bekämpa. I stället gör du 1 poäng skada per EP."
            ]
        }, {
            "Name": "VAJERSYSTEM",
            "Description":
                "Du är försedd med flera 10 meter långa kompositvajrar som var och en kan bära din egen vikt och mer därtill. Varje vajer slutar i en stark griphand som kan fästa på alla ytor och bära samma vikt som vajern. Du kan:",
            "Options": [
                "Skjuta ut och fästa en eller flera vajrar för att lyfta en vikt, fira ner en annan robot i ett djup, med mera. Kostar 1 EP.",
                "Använda en vajer som en änterhake för att ta dig upp på en hög avsats eller liknande utan att slå <span class=\"skill\">retirera</span> för klättringen. Kostar 1 EP.",
                "Fly från en konflikt eller annan farlig situation utan att slå för <span class=\"skill\">retirera</span> genom att skjuta ut vajrar och svinga dig iväg. Kostar 1 EP."
            ]
        }, {
            "Name": "VIBROSÅG",
            "Description":
                "Din ena arm är utrustad med en kraftfull vibrosåg. Du kan:",
            "Options": [
                "Aktivera sågen när du lyckas <span class=\"skill\">bekämpa</span> ett mål med en obeväpnad närstridsattack. För varje EP du lägger ökar skadan från attacken med 1. (F)",
                "Såga sönder en dörr eller ett hinder av något slag. Kostar 1 EP."
            ]
        }, {
            "Name": "YLARE",
            "Description":
                "Denna modul ger ifrån sig kraftiga ljudstötar som är designade för maximal effekt mot levande varelsers hörselcentra. Du kan:",
            "Options": [
                "Utstöta ett riktat vrål som ger en människa eller mutant inom nära avstånd 1 poäng stress för varje EP du lägger.",
                "Yla så skräckinjagande att alla levande varelser inom långt avstånd måste <span class=\"skill\">kämpa på</span> - misslyckande innebär att de tar 1 poäng stress. Ylet hörs i hela zonsektorn och kostar 1 EP."
            ]
        }
    ],
    "Weapons": [
        {
            "Type": "Närstrid",
            "Name": "Tillhygge",
            "Bonus": 1,
            "Skada": 1,
            "Reach": "Armslängd",
            "Kommentar": []
        }, {
            "Type": "Närstrid",
            "Name": "Skrotkniv",
            "Bonus": 1,
            "Skada": 2,
            "Reach": "Armslängd",
            "Kommentar": []
        }, {
            "Type": "Närstrid",
            "Name": "Skrotklubba",
            "Bonus": 2,
            "Skada": 1,
            "Reach": "Armslängd",
            "Kommentar": []
        }, {
            "Type": "Närstrid",
            "Name": "Chockbatong",
            "Bonus": 2,
            "Skada": 1,
            "Reach": "Armslängd",
            "Kommentar": ["Ger T6 stress.", "Energivapen."]
        }, {
            "Type": "Närstrid",
            "Name": "Lasersvets",
            "Bonus": 2,
            "Skada": 2,
            "Reach": "Armslängd",
            "Kommentar": ["Lätt vapen.", "Energivapen."]
        }, {
            "Type": "Närstrid",
            "Name": "Vibrokniv",
            "Bonus": 2,
            "Skada": 2,
            "Reach": "Armslängd",
            "Kommentar": ["Ger T6 stress.", "Energivapen.", "Ignorerar pansar."]
        }, {
            "Type": "Närstrid",
            "Name": "Stridssåg",
            "Bonus": 2,
            "Skada": 3,
            "Reach": "Armslängd",
            "Kommentar": ["Energivapen."]
        }, {
            "Type": "Avstånd",
            "Name": "Chockpistol",
            "Bonus": 2,
            "Skada": 2,
            "Reach": "Kort",
            "Kommentar": ["Lätt vapen.", "Energivapen.", "Ger stress istället för skada."]
        }, {
            "Type": "Avstånd",
            "Name": "Laserpistol",
            "Bonus": 3,
            "Skada": 2,
            "Reach": "Lång",
            "Kommentar": ["Lätt vapen.", "Energivapen."]
        }, {
            "Type": "Avstånd",
            "Name": "Lasergevär",
            "Bonus": 3,
            "Skada": 2,
            "Reach": "Distans",
            "Kommentar": ["Energivapen."]
        }, {
            "Type": "Avstånd",
            "Name": "Maserpistol",
            "Bonus": 2,
            "Skada": 3,
            "Reach": "Kort",
            "Kommentar": ["Lätt vapen.", "Energivapen."]
        }, {
            "Type": "Avstånd",
            "Name": "Plasmakarbin",
            "Bonus": 2,
            "Skada": 3,
            "Reach": "Lång",
            "Kommentar": ["Energivapen."]
        }
    ]
};