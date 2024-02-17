import React from 'react';

const ShowResult = ({ correctAnswersCount, wrongAnswersCount, handleRetry }) => {
    return (
        <div className="result-container">
            <h2>Quiz Result</h2>
            {correctAnswersCount >= 7 ? (
                <p>Congratulations! You passed with {correctAnswersCount} correct answers!</p>
            ) : correctAnswersCount >= 4 ? (
                <p>Keep trying! You got {correctAnswersCount} correct and {wrongAnswersCount} wrong answers. You can do better!</p>
            ) : (
                <p>Sorry, you failed with only {correctAnswersCount} correct answers. Keep practicing!</p>
            )}
            <div>
                <p className={correctAnswersCount > 0 ? 'correct' : ''}>Correct Answers: {correctAnswersCount}</p>
                <p className={wrongAnswersCount > 0 ? 'wrong' : ''}>Wrong Answers: {wrongAnswersCount}</p>
                <button className='retry' onClick={handleRetry}>Retry</button>
            </div>
        </div>
    );
};

export default ShowResult;
