function Question({ name, description, onUpdate, answers, correctAnswer }) {

    const handleUpdate = (answer) => {
        onUpdate(checkForCorrectAnswer(answer));
    };

    const checkForCorrectAnswer = (answer) => {
        if (answer === correctAnswer) {
            return true;
        }
        return false;
    };

    return (
        <div >
            <h2>{name}</h2>
            <p>{description}</p>
            {answers.map(currentAnswer => (
                <button className="answerButton" onClick={() => handleUpdate(currentAnswer)}>{currentAnswer}</button>
            ))}
        </div>
    );
}

export default Question;