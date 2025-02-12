import React from 'react';
import Result from './Result';

const Results = ({ result }) => {

    const renderRandomSentance = () => {
        const randomSentances = [
            "Je bent op de goede weg! \n Wil je meer leren? \n Scan dan hier je bezoekersbadge!",
            "Geweldig gedaan! Je maakte een goede start, \n maar er is ruimte om nog meer te leren! \n Scan hier je bezoekersbadge!",
            "Goed bezig! Zin om je kennis nog te verbeteren? \n Scan dan hier je bezoekersbadge of vraag meer informatie.",
        ];

        const randomIndex = Math.floor(Math.random() * randomSentances.length);
        return randomSentances[randomIndex];
    }

    switch (result) {
        case 0:
        case 1:
            return <Result score={result} sentance={"Jammer, maar je kan zeker nog iets leren.\n Scan je bezoekersbadge voor meer info over ons aanbod."} />;
        case 2:
            return <Result score={result} sentance={"Niet slecht,\n maar het kan altijd beter! \n Scan je bezoekersbadge voor meer info over ons aanbod!"} />;
        case 3:
        case 4:
            return <Result score={result} sentance={renderRandomSentance()} />;
        case 5:
            return <Result score={result} sentance={"Goed gedaan! \n Je hebt al een goede kennis,\n maar wil je nog meer weten \n scan dan hier je bezoekersbadge!"} />;
        default:
            return <h1>no results found</h1>;
    }
};

export default Results;