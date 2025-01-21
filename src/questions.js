const questions = {
    cybercrime: [
        { id: 1, name: 'Voor hoeveel miljoen euro werd er in 2023 buit gemaakt door phising:', description: 'A: minder dan 39 miljoen euro B: meer dan 39 miljoen euro', answers: ["A", "B"], correctAnswer: "B" },
        { id: 2, name: 'Als je slachtoffer bent van cryptofraude is er een wettelijke bescherming', description: 'A: Waar, maar beperkt tot 100.000 euro B: Niet waar', answers: ["A", "B"], correctAnswer: "B" },
        { id: 3, name: 'Welke biljetten worden het meest vervalst?', description: 'A: 20 euro en 50 euro B: 10 euro en 20 euro', answers: ["A", "B"], correctAnswer: "A" },
        { id: 4, name: 'Bij een tweedehands aankoop vraagt de verkoper een foto van je identiteitskaat', description: 'A: Doen B: Niet doen', answers: ["A", "B"], correctAnswer: "B" },
        { id: 5, name: 'Op welke website krijg je handige info over cybercrime?', description: 'A: FOD financiën B: Safe On Web', answers: ["A", "B"], correctAnswer: "B" },
        { id: 6, name: 'Wat is Quishing?', description: 'A: Fraude via een valse QR code B: Een leuke online quiz', answers: ["A", "B"], correctAnswer: "A" },
        { id: 7, name: 'Wat is de leeftijdsgrens om een account aan te maken op Snapchat?', description: 'A: 16 jaar B: 13 jaar', answers: ["A", "B"], correctAnswer: "B" },
        { id: 8, name: 'Wat vraagt een bank nooit?', description: 'A: Je telefoonnummer B: Je PIN', answers: ["A", "B"], correctAnswer: "B" },
        { id: 9, name: 'Wat is een Money Mule?', description: 'A: Iemand die zijn rekeningnummer laat gebruiken om crimineel geld wit te wassen B: En ezel die toeristische trektochten maakt in de bergen', answers: ["A", "B"], correctAnswer: "A" },
        { id: 10, name: 'De overheid kan transacties van cryptomunten traceren', description: 'A: Waar B: Niet waar', answers: ["A", "B"], correctAnswer: "A" },
    ],
    financieel: [
        { id: 11, name: 'Wat is de standaard limiet voor één contactloze betaling zonder pin-code?', description: 'A: 25 euro B: 50 euro', answers: ["A", "B"], correctAnswer: "B" },
        { id: 12, name: 'Hoe haal ik het meest uit mijn spaargeld?', description: 'A: op een termijnrekening B: op een spaarrekening', answers: ["A", "B"], correctAnswer: "A" },
        { id: 13, name: 'Hoe kan je het best sparen?', description: 'A: Ik kijk op het einde van de maand wat er over is B: Ik zet een bedrag aan de kant direct als mijn loon gestort wordt', answers: ["A", "B"], correctAnswer: "B" },
        { id: 14, name: '‘student at work’ is een', description: 'A: Website om een studentenjob te zoeken B: Een app waar je alle info over je studentenwerk terug vindt', answers: ["A", "B"], correctAnswer: "B" },
        { id: 15, name: 'Is een gescheurd bankbiljet nog iets waard?', description: 'A: Ja, als ik meer dan de helft van het biljet bezit B: Neen, ik gooi het beter weg', answers: ["A", "B"], correctAnswer: "A" },
        { id: 16, name: 'Mijn bank gaat failliet en ik heb 150.000 euro op de rekening staan, dan ..', description: 'A: Krijg ik 100.000 euro uitbetaald B: Ben ik alles kwijt', answers: ["A", "B"], correctAnswer: "A" },
        { id: 17, name: 'Met een domiciliëring …', description: 'A: Vraag ik de bank mijn rekening naar een andere bank over te dragen B: Geef ik de bank toelating om leveranciersfacturen rechtstreeks te betalen', answers: ["A", "B"], correctAnswer: "B" },
        { id: 18, name: 'Mag je altijd met cash geld betalen in een winkel?', description: 'A: Neen, cash geld mag geweigerd worden B: Ja, maar beperkt tot 3000 euro', answers: ["A", "B"], correctAnswer: "B" },
        { id: 19, name: 'Hoeveel uur mag je werken als student?', description: 'A: 475 uur B: Dat hangt af van de sector waar je werkt[MV1] [TG2]', answers: ["A", "B"], correctAnswer: "A" },
        { id: 20, name: 'Hoeveel RSZ betaal je als werknemer?', description: 'A: 2,71% B: 13,07%', answers: ["A", "B"], correctAnswer: "B" },
        { id: 21, name: 'Wat zijn de grootste uitgaven voor een gezin?', description: 'A: Voeding, uitstapjes, hobby’s B: Lening/huur, nutsvoorzieningen, voeding', answers: ["A", "B"], correctAnswer: "B" },
        { id: 22, name: 'Wat is geen extralegaal voordeel?', description: 'A: Loon B: Hospitalisatieverzekering', answers: ["A", "B"], correctAnswer: "A" },
        { id: 23, name: 'Welke is een verplichte verzekering?', description: 'A: Familiale verzekering B: Verzekering Burgerlijke Aansprakelijkheid Motorrijtuigen', answers: ["A", "B"], correctAnswer: "B" },
        { id: 24, name: 'Bij een prepaidkaart', description: 'A: Gaat de betaling pas achteraf van je rekening B: Moet je opladen vooraleer je kan betalen', answers: ["A", "B"], correctAnswer: "B" },
        { id: 25, name: 'Welk krediet is geen consumentenkrediet?', description: 'A: Woningkrediet B: Lening op afbetaling', answers: ["A", "B"], correctAnswer: "A" },
        { id: 26, name: 'Wat is geen kredietvorm?', description: 'A: Onder nul gaan op je zichtrekening B: Overschrijven van je spaar- naar je zichtrekening', answers: ["A", "B"], correctAnswer: "B" },
        { id: 27, name: 'Waarvoor staat JKP?', description: 'A: Jaarlijks kostenpercentage B: Jaarlijks kredietplan', answers: ["A", "B"], correctAnswer: "A" },
        { id: 28, name: 'Wat is een franchise?', description: 'A: Een bedrag dat de tegenpartij moet betalen bij schade B: Een bedrag dat ik zelf ten laste moet nemen bij schade', answers: ["A", "B"], correctAnswer: "B" },
        { id: 29, name: 'Wat betekent dit logo op je bankkaart', description: 'A: Contantloos betalen B: Contactloos betalen', answers: ["A", "B"], correctAnswer: "B" },
        { id: 30, name: 'Wat zijn cryptomunten?', description: 'A: geld dat op online rekeningen staat B: Virtueel geld dat beveiligd is door gespecialiseerde codes', answers: ["A", "B"], correctAnswer: "B" },
        { id: 32, name: 'Wat is de CO2-uitstoot van 1 bitcointransactie?', description: 'A: 400 kg B: 80 kg', answers: ["A", "B"], correctAnswer: "A" },
        { id: 33, name: 'Wat moet je doen als je je kaart verliest?', description: 'A: Card Stop bellen B: De politie contacteren', answers: ["A", "B"], correctAnswer: "A" },
        { id: 34, name: 'Welke index meet de inflatie?', description: 'A: De Bel 20 B: De consumptieprijsindex', answers: ["A", "B"], correctAnswer: "B" },
        { id: 35, name: 'Vanaf welke leeftijd mag je in België beleggen op de beurs?', description: 'A: 18 jaar B: 16 jaar', answers: ["A", "B"], correctAnswer: "A" },
        { id: 36, name: 'Wat staat er niet op je debetkaart?', description: 'A: Je naam B: je geboortedatum', answers: ["A", "B"], correctAnswer: "B" },


    ],
    ondernemen: [
        { id: 37, name: 'Hoeveel procent van de werkende bevolking in Vlaanderen was zelfstandige in 2024?', description: 'A: 20% B: 25%', answers: ["A", "B"], correctAnswer: "B" },
        { id: 38, name: 'De Europese Unie verbiedt plastic zakjes. Over welke letter van DESTEP gaat het?', description: 'A: Economisch B: Ecologisch', answers: ["A", "B"], correctAnswer: "B" },
        { id: 39, name: 'Waarvoor staan de letters BMC?', description: 'A: Business Model Canvas B: Business Money Company', answers: ["A", "B"], correctAnswer: "A" },
        {
            id: 40, name: 'Welke verzekering is verplicht voor een onderneming?', description: 'A: Arbeidsongevallenverzekering voor personeel B: Verzekering gewaarborgd inkomen', answers: ["A", "B"], correctAnswer: "A"
        },
        { id: 41, name: 'Een idee toets je af aan de 4 P’s. Welke zijn dit?', description: 'A: Product, price, place, promotion B: Product, presentation, place, promotion', answers: ["A", "B"], correctAnswer: "A" },
        { id: 42, name: 'De aanvraag van een ondernemingsnummer gebeurt in een bankkantoor', description: 'A: Juist B: Fout', answers: ["A", "B"], correctAnswer: "B" },
        { id: 43, name: 'Waarvoor staat de ‘W’ in SWOT-analyse?', description: 'A: Weaknesses B: Workflows', answers: ["A", "B"], correctAnswer: "A" },
        { id: 44, name: 'Wat betekent “Meelift-strategie”?', description: 'A: Gebruik maken van de marketinginspanningen van anderen B: Verhogen van prijzen samen met de  concurrentie', answers: ["A", "B"], correctAnswer: "A" },
    ]
};

export default questions;