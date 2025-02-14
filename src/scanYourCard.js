import React from 'react';
import Results from './Results';
import { useRouteChange } from './navigation';
const ScanYourCard = ({ direction = 'right', result }) => {
    const routeChange = useRouteChange();
    setTimeout(() => {
        routeChange('/');
    }, 5000);

    return (
        <div className="scan-your-card">
            <Results result={result} />
            <img src="../assets/blue_arrow.webp" alt="scan your card" className={`direction-${direction}`} />
        </div>
    );
};

export default ScanYourCard;