import React from 'react';
import Results from './Results';


const ScanYourCard = ({ direction = 'right', result }) => {
    return (
        <div className="scan-your-card">
            <Results result={result} />
            <span> scan your card </span>
            <img src="" alt="scan your card" />
        </div>
    );
};


export default ScanYourCard;