import React, { useState, useEffect } from 'react';
import Question from './Question';
import questions from './questions';
import ScanYourCard from './scanYourCard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Child component to display each item

// Parent component with an array of objects
function ItemList() {
    const searchParams = new URLSearchParams(document.location.search);
    const currentParam = searchParams.get('type');

    const selectQuestion = () => {
        console.log(currentParam);
        console.log(items);
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            const selectedItem = items[randomIndex];
            setSelectedItem(selectedItem);
            setItems(items.filter(item => item.id !== selectedItem.id));
        }
    };

    useEffect(() => {
        selectQuestion();
    }, []);

    const [selectedItem, setSelectedItem] = useState(null);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setansweredQuestions] = useState(0);
    const [items, setItems] = useState(questions[searchParams.get('type')]);

    const handleQuestionUpdate = (updatedInfo) => {

        if (updatedInfo === true) {
            setScore(score + 1)
        };
        setansweredQuestions(answeredQuestions + 1);
        selectQuestion()
    };

    return (
        <div className='questionList'>
            <button className='backButton'> <Link to="/">Home</Link></button>

            <br />
            {answeredQuestions < 5 ? (
                selectedItem && (
                    <Question
                        name={selectedItem.name}
                        description={selectedItem.description}
                        answers={selectedItem.answers}
                        correctAnswer={selectedItem.correctAnswer}
                        onUpdate={handleQuestionUpdate}
                    />
                )
            ) : (<ScanYourCard result={score} />)}
        </div>
    );
}

export default ItemList;