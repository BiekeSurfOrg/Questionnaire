import React from 'react';

const Result = ({ score, sentance }) => {
    console.log(sentance);
    const splitSentence = sentance.split('\n');
    return (
        <div className='result'>
            <h1>Score: {score}/5</h1>
            <div>
                {splitSentence.map((sentence) => <p>{sentence}</p>)}
            </div>
        </div>
    )

};

export default Result;