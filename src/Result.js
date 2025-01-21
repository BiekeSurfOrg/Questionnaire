import React from 'react';

const Result = ({ score, sentance }) => {

    return (
        <div>
            <h1>{score}/5</h1>
            <h1>{sentance}</h1>
        </div>
    )

};

export default Result;