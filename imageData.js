const locationData = [
    
    {
        id: 1,
        imageUrl: "Grafiken/Harmoniegasse 10.png",
        title: "Harmoniegasse 10",
        headline: "LEERSTAND NUTZEN ABER WIE?<br> Runder Tisch 12:30 HIER!",
        description: "besetzt 2023 -24, genaue Daten unbekannt -<br>um auf Leerstand & Wohnungsnot aufmerksam zu machen",
        sources: ["https://www.derstandard.at/story/3000000217009/in-wien-wird-ein-fast-leeres-haus-in-bester-lage-besetzt"]
    },
    {
        id: 2,
        imageUrl: "Grafiken/Spitalgasse 11.png",
        title: "Spitalgasse 11",
        headline: "Kein Mensch ist illegal",
        description: "miau<br>miau",
        sources: ["https://www.derstandard.at"]
    },
    {
        id: 3,
        imageUrl: "Grafiken/breiteGasse 15.png", 
        title: "Breite Gasse 15",
        headline: "Mieten bremsen Tsch 12:30 HIER!",
        description: "Mieten bremsen",
        sources: ["https://www.derstandard.at"]
    }, 
    {
        id: 4,
        imageUrl: "Grafiken/burggasse 2.png", 
        title: "Burggasse",
        headline: "Instand besetzen statt kaputt spekulieren",
        description: "besetzt 2005.",
        sources: ["https://www.anarchismus.at/bilder-hausbesetzungen/hausbesetzungen-oesterreich/10-hausbesetzungen-oesterreich/detail/468-hausbesetzung-burggasse-wien-2005-1?tmpl=component"]
    }, 
    {
        id: 5,
        imageUrl: "Grafiken/Eichstraße 2.png", 
        title: "Eichstraße 2",
        headline: "Immowappla ins Gsicht scheissn",
        description: "besetzt 20..-20..",
        sources: ["https://www.derstandard.at"]
    }, 
    {
        id: 6,
        imageUrl: "Grafiken/Eichstraße 2.png", 
        title: "Eichstraße 9",
        headline: "schmeißt ihr uns aus einem raus, <br> gehen wir ins nächste Haus",
        description: "2010",
        sources: ["Zilic Ankica - 2012 - Hausbesetzungen in Wien und alternatives Wohnen.pdf"]
    },
    {
        id: 7,
        imageUrl: "Grafiken/Wielandgasse.png", 
        title: "Wielandgasse 2 (EKH)",
        headline: "schmeißt ihr uns aus einem raus, <br> gehen wir ins nächste Haus",
        description: "2010",
        sources: ["Zilic Ankica - 2012 - Hausbesetzungen in Wien und alternatives Wohnen.pdf"]
    }, 
    {
        id: 8,
        imageUrl: "Grafiken/Gumpendorfer Straße 63E.png", 
        title: "Gumpendorfer Straße 63E",
        headline: "Immowappla ins Gsicht scheissn",
        description: "2024-2025",
        sources: ["https://emrawi.org/?Hocken-oder-Sterben-3609"]
    }, 
    {
        id: 9,
        imageUrl: "Grafiken/Hetzgasse 8.png", 
        title: "Hetzgasse 8",
        headline: "Forderung nach Räumen für marginalisierte Gruppen",
        description: "2020",
        sources: ["https://www.derstandard.at/story/2000120278504/hetzgasse-8-in-wien-landstrasse-von-aktivisten-besetzt"]
    }, 
    {
        id: 10,
        imageUrl: "Grafiken/Mariannengasse 16.png",
        title: "Mariannengasse 16",
        headline: "Aufruf zur Solidarität",
        description: "18.03.2022",
        sources: ["https://transversal.at/blog/en-commun-solidarisch-durch-die-krisen"]
    },
    {
        id: 11,
        imageUrl: "Grafiken/Mühlfeldgasse 12.png",
        title: "Mühlfeldgasse 12",
        headline: "Aufruf zur Solidarität",
        description: "28. Juli 2014",
        sources: ["https://www.derstandard.at/story/2000003586717/wien-vorbereitungen-zur-raeumung-der-pizzeria-anarchia-begonnen"]
    },
    {
        id: 12,
        imageUrl: "Grafiken/Lindengasse 60-62.png",
        title: "Lindengasse 60-62",
        headline: "Die Häuser denen, die drin wohnen.",
        description: "März 2018",
        sources: ["https://www.diepresse.com/706823/wien-neubau-polizei-raeumt-besetztes-haus"]
    },
    {
        id: 13,
        imageUrl: "Grafiken/Joseph-Lister-Gasse 92.png",
        title: "Joseph-Lister-Gasse 92",
        headline: "Keep warm - Burn out - the center",
        description: "13.November 2015",
        sources: ["https://www.youtube.com/watch?v=-lVUWQyDEUk"]
    },
    {
        id: 14,
        imageUrl: "Grafiken/Westbahnstraße 13.png",
        title: "Westbahnstraße 13",
        headline: "Forderung nach mehr alternativen Freiraum",
        description: "11.November 2011",
        sources: ["https://www.vienna.at/wieder-eine-hausbesetzung-in-wien-neubau/3087555"]
    },
    {
        id: 15,
        imageUrl: "Grafiken/Lorenz-Mandl-Gasse 16/1/2C.png",
        title: "Lorenz-Mandl-Gasse 16/1/2C",
        headline: "Forderung nach alternativen Freiraeumen & Protest gegen steigende Mieten",
        description: "2011",
        sources: ["https://www.derstandard.at/story/1310511507907/aufgeloeste-hausbesetzung-unsanfte-begleitmusik-einer-renovierung"]
    },
    {
        id: 16,
        imageUrl: "Grafiken/Praterstraße 10.png",
        title: "Praterstraße 10",
        headline: "Haus Projekt - jetzt selbstverwaltet",
        description: "25.03.2010",
        sources: ["https://www.oe24.at/oesterreich/chronik/initiative-besetzt-gebaeude-in-wien/790580"]
    },
    {
        id: 17,
        imageUrl: "Grafiken/Hohe Warte 1.png",
        title: "Hohe Warte 1",
        headline: "Suche nach alternativen Freiräumen",
        description: "Juli 2008",
        sources: ["https://www.derstandard.at/story/3412841/hausbesetzung-auf-der-hohen-warte-friedlich-beendet?utm_source=chatgpt.com"]
    },
    {
        id: 18,
        imageUrl: "Grafiken/Humboldtgasse 32.png",
        title: "Humboldtgasse 32",
        headline: "Sommer, Sonne, Squattingaction",
        description: "19.August 2010",
        sources: ["PDF´s/Zilic Ankica - 2012 - Hausbesetzungen in Wien und alternatives Wohnen.pdf"]
    },
    {
        id: 19,
        imageUrl: "Grafiken/Rathausplatz 3.png",
        title: "Rathausplatz 3",
        headline: "Refugees Welcome",
        description: "26.04.2021",
        sources: ["https://www.derstandard.at/story/2000126167029/aktivisten-besetzen-haus-am-wiener-rathausplatz"]
    },
    {
        id: 20,
        imageUrl: "Grafiken/Taborstraße 18.png",
        title: "Taborstraße 18",
        headline: "85 Wohnungen zu besetzen !",
        description: "Dezember 2021",
        sources: ["https://www.derstandard.at/story/2000126167029/aktivisten-besetzen-haus-am-wiener-rathausplatz"]
    },
    {
        id: 21,
        imageUrl: "Grafiken/Triesterstraße 114.png",
        title: "Triesterstraße 114",
        headline: "Luxus für alle!",
        description: "Oktober 2009",
        sources: ["https://www.diepresse.com/514045/wien-hausbesetzung-20-in-einer-alten-schule"]
    },
    {
        id: 22,
        imageUrl: "Grafiken/Johnstraße 45.png",
        title: "Johnstraße 45",
        headline: "Pankahyttn",
        description: "5.12.2007",
        sources: ["PDF´s/Zilic Ankica - 2012 - Hausbesetzungen in Wien und alternatives Wohnen.pdf"]
    },

    {
        id: 23,
        imageUrl: "Grafiken/Kreuzbergstraße 10.png",
        title: "Taborstraße 23",
        headline: "Haus für haftentlassene Frauen",
        description: "8. Mai 1982",   
        sources: ["https://www.falter.at/zeitung/20030312/vor-20-jahren-im-falter"]
    },

    {
        id: 24,
        imageUrl: "Grafiken/Kreuzbergstraße 10.png",
        title: "Linke Wienzeile 102",
        headline: "Rosa Lila Villa",
        description: "1982",   
        sources: ["https://dievilla.at/ueber-die-villa/"]
    },

    {
        id: 25,
        imageUrl: "Grafiken/Stiftgasse 8.png",
        title: "Stiftgasse 8",
        headline: "Ammerlinghaus",
        description: "1975",   
        sources: ["https://magazin.wienmuseum.at/50-jahre-besetzung-amerlinghaus"]
    },

    {
        id: 26,
        imageUrl: "Grafiken/Stiftgasse 8.png",
        title: "Stiftgasse 8",
        headline: "Ammerlinghaus",
        description: "1975",   
        sources: ["https://magazin.wienmuseum.at/50-jahre-besetzung-amerlinghaus"]
    },

    {
        id: 27,
        imageUrl: "Grafiken/Stiftgasse 8.png",
        title: "Gottschalkgasse 2",
        headline: "erste nachweisbare Besetzung",
        description: "1975",   
        sources: ["PDF´s/Zilic Ankica - 2012 - Hausbesetzungen in Wien und alternatives Wohnen.pdf"]
    },

    {
        id: 28,
        imageUrl: "Grafiken/Stiftgasse 8.png",
        title: "Margaretenstraße 99",
        headline: "Rotstilzchen",
        description: "1980",   
        sources: ["PDF´s/Zilic Ankica - 2012 - Hausbesetzungen in Wien und alternatives Wohnen.pdf"]
    },

    {
        id: 29,
        imageUrl: "Grafiken/altesAKH.png",
        title: "Spitalgasse 2",
        headline: "Raltes Akh",
        description: "2004",   
        sources: ["https://www.anarchismus.at/bilder-hausbesetzungen/hausbesetzungen-oesterreich/10-hausbesetzungen-oesterreich/detail/487-hausbesetzung-altes-akh-wien-2004"]
    },

    {
        id: 30,
        imageUrl: "Grafiken/leer.png",
        title: "Judenplatz 1&2",
        headline: "Demo",
        description: "1981",   
        sources: ["https://linkswende.org/besetzung-der-gassergasse-und-der-aegidigasse/"]
    },

    {
        id: 31,
        imageUrl: "Grafiken/leer.png",
        title: "Gassergasse 19",
        headline: "Jugendzentrum",
        description: "1981",   
        sources: ["https://linkswende.org/besetzung-der-gassergasse-und-der-aegidigasse/"]
    },

    {
        id: 32,
        imageUrl: "Grafiken/leer.png",
        title: "Aedigasse 13",
        headline: "Jugendzentrum",
        description: "1988",   
        sources: ["https://linkswende.org/besetzung-der-gassergasse-und-der-aegidigasse/"]
    },

    {
        id: 33,
        imageUrl: "Grafiken/leer.png",
        title: "stmarx",
        headline: "Freifläche",
        description: "2026",   
        sources: ["https://stmarx.wien/"]
    },

    {
        id: 34,
        imageUrl: "Grafiken/leer.png",
        title: "Schillerplatz 3",
        headline: "UNI",
        description: "2026",   
        sources: ["https://www.instagram.com/p/Dew7155EUrm/?hl=de&img_index=1"]
    },


 
]; 