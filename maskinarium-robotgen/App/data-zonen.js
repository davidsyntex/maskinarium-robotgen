window.zonenData = {
    "environment": [
        {
            "name": "Skog eller helt övervuxna ruiner",
            "chance": 8,
            "hasThreat": true,
            "hasArtifact": false
        }, {
            "name": "Totalt raserade ruiner, grusöken",
            "chance": 6,
            "hasThreat": true,
            "hasArtifact": false,
            "ruins": "standard"
        }, {
            "name": "Delvis raserade ruiner",
            "chance": 6,
            "hasThreat": true,
            "hasArtifact": true,
            "ruins": "standard"
        }, {
            "name": "Välbevarade ruiner",
            "chance": 8,
            "hasThreat": true,
            "hasArtifact": true,
            "ruins": "standard"
        }, {
            "name": "Öde industrilandskap",
            "chance": 6,
            "hasThreat": true,
            "hasArtifact": true,
            "ruins": "industry"
        }, {
            "name": "Bosättning",
            "chance": 2,
            "hasThreat": true,
            "hasArtifact": true
        }
    ],
    "ruins": {
        "standard": [
            {
                "name": "Affärsgalleria",
                "description":
                    "En stad i staden öppnar sig, en enorm sal med forntida affärer och restauranger i flera våningar längs väggarna. Allt är illa härjat av lågorna och täckt av tjockalager sot, men kanske gömmer sig något värdefullt under askan? Här och var står svarta figurer i förbränd plast i märkliga ställningar, som om de talade om den gamla världens viktiga kunskaper."
            },
            { "name": "Badhus", "description": "" },
            { "name": "Bensinstation", "description": "" },
            { "name": "Biograf", "description": "" },
            { "name": "Bostadsområde", "description": "" },
            { "name": "Busstation", "description": "" },
            { "name": "Flygplansvrak", "description": "" },
            { "name": "Förvildad park", "description": "" },
            { "name": "Höghusruin", "description": "" },
            { "name": "Jaktaffär", "description": "" },
            { "name": "Kontorskomplex", "description": "" },
            { "name": "Krater", "description": "" },
            { "name": "Kråkslott", "description": "" },
            { "name": "Kyrka", "description": "" },
            { "name": "Lekplats", "description": "" },
            { "name": "Miljonprogram", "description": "" },
            { "name": "Motorväg", "description": "" },
            { "name": "Museum", "description": "" },
            { "name": "Nöjesfält", "description": "" },
            { "name": "Parkeringshus", "description": "" },
            { "name": "Polisstation", "description": "" },
            { "name": "Radiostation", "description": "" },
            { "name": "Raserad bro", "description": "" },
            { "name": "Skyddsrum", "description": "" },
            { "name": "Slagfält", "description": "" },
            { "name": "Snabbmatsrestaurang", "description": "" },
            { "name": "Sporthall", "description": "" },
            { "name": "Sjukhus", "description": "" },
            { "name": "Stridsvagn", "description": "" },
            { "name": "Teater", "description": "" },
            { "name": "Tunnelbana", "description": "" },
            { "name": "Tågstation", "description": "" },
            { "name": "Snabbköp", "description": "" },
            { "name": "Vägtunnel", "description": "" },
            { "name": "Övergiven skola", "description": "" },
            { "name": "Ödelagd marina", "description": "" }
        ],
        "industry": [
            { "name": "Fabrik", "description": "" },
            { "name": "Fartygsvrak", "description": "" },
            { "name": "Kraftledning", "description": "" },
            { "name": "Militärbas", "description": "" },
            { "name": "Pipeline", "description": "" },
            { "name": "Radiomast", "description": "" },
            { "name": "Raffinaderi", "description": "" },
            { "name": "Reningsverk", "description": "" },
            { "name": "Skjutbana", "description": "" },
            { "name": "Soptipp", "description": "" },
            { "name": "Vindkraftverk", "description": "" },
            { "name": "Oljecistern", "description": "" }
        ]
    },
    "dangers": {
        "humanoider": [
            { "chance": 2, "name": "Djurmutanter" },
            { "chance": 2, "name": "Exilmutanter" },
            { "chance": 3, "name": "Expedition (från annan Ark)" },
            { "chance": 2, "name": "Kannibaler" },
            { "chance": 1, "name": "Minneslös" },
            { "chance": 3, "name": "Morlocker" },
            { "chance": 2, "name": "Motorskallar" },
            { "chance": 2, "name": "Patrull (från Folkets Ark)" },
            { "chance": 2, "name": "Sekten Nova" },
            { "chance": 2, "name": "Skrotorakel" },
            { "chance": 2, "name": "Smittade" },
            { "chance": 2, "name": "Undergångskult" },
            { "chance": 2, "name": "Vandrare" },
            { "chance": 2, "name": "Vattenhandlare" },
            { "chance": 2, "name": "Vrakrövare" },
            { "chance": 4, "name": "Zongastar" }
        ],
        "monster": [
            { "chance": 2, "name": "Asgnagare" },
            { "chance": 2, "name": "Betesdjur" },
            { "chance": 1, "name": "Dråparträd" },
            { "chance": 1, "name": "Drömblomster" },
            { "chance": 2, "name": "Etterbestar" },
            { "chance": 2, "name": "Frätargräs" },
            { "chance": 2, "name": "Jordslukare" },
            { "chance": 1, "name": "Magtorsk (smittat vatten)" },
            { "chance": 1, "name": "Maskinvarelse" },
            { "chance": 1, "name": "Masksvärm" },
            { "chance": 1, "name": "Parasitsvamp (smittad varelse)" },
            { "chance": 1, "name": "Psi-mygg" },
            { "chance": 2, "name": "Raggbest" },
            { "chance": 2, "name": "Ruinspindel" },
            { "chance": 2, "name": "Rötmyror" },
            { "chance": 1, "name": "Skrädesvråk" },
            { "chance": 1, "name": "Skövlare" },
            { "chance": 2, "name": "Skrotkråkor" },
            { "chance": 2, "name": "Strykarhundar" },
            { "chance": 1, "name": "Tjärnmal" },
            { "chance": 2, "name": "Zongetingar" },
            { "chance": 2, "name": "Zoniglar" },
            { "chance": 1, "name": "Zontörne" },
            { "chance": 1, "name": "Ärgflyn" }
        ],
        "fenomen": [
            { "chance": 2, "name": "Askvind" },
            { "chance": 2, "name": "Atomköld/Extremhetta" },
            { "chance": 2, "name": "Blindgångare" },
            { "chance": 2, "name": "Dammtornado" },
            { "chance": 2, "name": "Elektrisk storm" },
            { "chance": 2, "name": "Ljuspelare" },
            { "chance": 2, "name": "Magnetfält" },
            { "chance": 2, "name": "Misärvind" },
            { "chance": 2, "name": "Nattsken" },
            { "chance": 1, "name": "Obelisk" },
            { "chance": 2, "name": "Röthärd" },
            { "chance": 2, "name": "Slukhål" },
            { "chance": 1, "name": "Splittervind" },
            { "chance": 1, "name": "Spöksken" },
            { "chance": 1, "name": "Synvilla" },
            { "chance": 3, "name": "Syraregn" },
            { "chance": 1, "name": "Tröghetsfält" },
            { "chance": 1, "name": "Vakuum" },
            { "chance": 2, "name": "Zongölar" },
            { "chance": 3, "name": "Zonsmog" }
        ]
    },
    "details": [
        { "name": "vandrare i fjärran", "description": "En siluett syns mot horisonten. Vem vandrar i Zonen?" },
        { "name": "läger", "description": "Resterna av en lägerplats, kanske glöder kolen fortfarande." },
        { "name": "sista vilan", "description": "t6 enkla gravar med något inristat. Vilka vilar här?" },
        {
            "name": "offer",
            "description": "Ett lik, upphängt eller fastsurrad på en påle. Vem gjorde detta och varför?"
        },
        { "name": "klotter", "description": "Något är målat på en ruinvägg. Vad står det, hur gammalt är det?" },
        { "name": "spår", "description": "Leder genom Zonen, vem har gått här och var leder de?" },
        { "name": "sten", "description": "En jättelik stenbumling. Skydd för zonvinden eller en utmärkt utkiksplats?" },
        {
            "name": "träd",
            "description": "Ett ensamt träd/växt lever fortfarande i det karga landskapet. Döljer det någon hemlighet?"
        },
        {
            "name": "fors",
            "description": "Ett porlande vattendrag rinner igenom landskapet. En källa för liv eller rötsmittad död?"
        },
        {
            "name": "zonblomster",
            "description": "Det karga landskapet bryts av ett fält av märkliga blommor i starka färger. "
        },
        {
            "name": "tistlar",
            "description":
                "En tät och snårig undervegetation breder ut sig över sektorn. Kängor fastnar, utrustning trasslar in sig. Döljer växtligheten något?"
        },
        { "name": "rankor", "description": "Mängder av rankor täcker ruinerna. Är de förtorkade eller levande?" },
        {
            "name": "skyfall",
            "description": "Plötsligt störtregn/kraftigt snöfall öser ner. Bäst att söka skydd och slå läger."
        },
        {
            "name": "dimma",
            "description": "En tjock dimma lägger sig över området. Sikten minimeras, ljud dämpas. Vad ruvar i diset?"
        },
        {
            "name": "brännande sol",
            "description": "En bländande sol skiner på zonfararna. Huden bränner, kläderna skaver och svetten rinner."
        },
        {
            "name": "himmel",
            "description":
                "Smutsgula moln skingras för en stund, en oändligt blå himmel tornar fram. Det är både vackert och skrämmande på en gång."
        },
        {
            "name": "mörka moln",
            "description":
                "Himlen mörknar och vinden tilltar, snart viner den genom ruinerna. Damm virvlar och småstenar rasslar över sprucken asfalt. Ovädret är på väg."
        },
        {
            "name": "åska",
            "description": "Mullrande åska rullar över zonen. Ruinlandskapet lyses upp av kraftiga blixtar."
        },
        {
            "name": "skylt",
            "description":
                "En skylt av plåt står ensamt kvar. Visar den vägen eller varnar för något?"
        },
        {
            "name": "vrak",
            "description":
                "Ett sönderrostat fordonsvrak. Märkt av tiden, men fortfarande intakt. Har någon sökt skydd där? Kanske tjänar vraket som lägerplats?"
        },
        { "name": "fönster mot forntiden", "description": "En affisch från forntiden visar en märklig scen." },
        { "name": "de döda", "description": "t6 forntida skelett, förenade i döden. Vilken historia berättare de? " },
        {
            "name": "postering",
            "description":
                "En vägspärr från forntidens sista skälvande dagar. Kanske finns lämningarna av de satar som bemannade den?"
        },
        { "name": "räls", "description": "Överväxt järnvägsräls. Kanske finns här övergivna vagnar och lok?" },
        {
            "name": "hål",
            "description":
                "Ett mörkt hål öppnar sig i landskapet framför gruppen. Kanske en gammal brunn, eller en väg ned i underjorden?"
        },
        {
            "name": "ylande",
            "description":
                "Ett omänskligt, långdraget vrål ekar över Zonen. Är någon i nöd – eller närmar sig ett zonmonster?"
        },
        {
            "name": "ras",
            "description": "En ruin kollapsar med ett öronbedövande brak. Kanske kommer något i ny dager?"
        },
        { "name": "fåglar", "description": "En flock zonfåglar störtar upp mot himlen. Har något skrämt dem?" },
        {
            "name": "oljud",
            "description": "Ett dovt brölande ljud mullrar över Zonen. Det återkommer ett par gånger innan det tystnar."
        },
        { "name": "ljussken", "description": "Ett ljussken syns i fjärran. Ett läger? Eller något annat?" },
        { "name": "hydda", "description": "Någon har byggt ett bo eller en hydda av skrot. Är någon hemma?" },
        {
            "name": "tjärn",
            "description": "En mörk tjärn av svart vatten sträcker ut sig över zonen. Vad döljer sig under ytan?"
        },
        {
            "name": "brant",
            "description":
                "En kulle, eller ett mindre berg av sten och ruiner tornar upp sig framför er. Kanske finns något på dess topp?"
        },
        {
            "name": "spricka",
            "description":
                "Marken tar slut framför er. En skåra flera mutantlängder bred skär genom landskapet. Hur ska ni komma förbi?"
        },
        {
            "name": "träskmark",
            "description":
                "Flera vattenfyllda hål täcker ruinlandskapet. Här och var har ruiner sjunkit ner i hålen – är det säkert att färdas här?"
        },
        {
            "name": "sumpskog",
            "description": "En klunga träd kastar mörka skuggor över ruinerna. Vad kan dölja sig bland träden?"
        },
        {
            "name": "myrmark",
            "description":
                "En blöt och kall myr breder ut sig mellan ruinerna. Svart vatten sipprar in i kängor och fukten är tung."
        }
    ]
};