import HeaderComp from "./HeaderComp";

function Question({ name, description, onUpdate, answers, correctAnswer }) {
    const descriptionSplit = description.split("|");

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
            <HeaderComp />
            <h2>{name}</h2>
            {descriptionSplit.map((description) => <p>{description}</p>)}
            {answers.map((currentAnswer) => (

                <button
                    className="no-bg-button"
                    onClick={() => handleUpdate(currentAnswer)}
                >
                    <img src={`../assets/${currentAnswer}.png`} alt={currentAnswer} />
                </button>
            ))}
        </div>
    );
}

export default Question;