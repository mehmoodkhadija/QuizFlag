import React, { useState } from 'react';
import QuestionApp from './QuestionApp';


const Popup = ({ onClose, onStart, totalQuestions }) => {
    return (
        <div className='container quiz-app'>
            <div className="popup-container">
                <div className="popup-content">
                    <h2>Welcome to the Quiz</h2>
                    <button onClick={onStart}>Start Quiz</button> {/* Call onStart prop when button is clicked */}
                    <div className="question-info">
                        <p>Questions: {totalQuestions}</p>
                        <div className="time-info">
                            <p>Time: 10 minutes</p>
                            <label className="switch ">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const QuizApp = () => {
    const [view, setView] = useState(0); // Setting initial view state

    const onStartQuiz = () => {
        setView(2); // Start the quiz when popup is closed
    };

    const onClosePopup = () => {
        setView(2); // Start the quiz when popup is closed
    };

    const renderView = () => {
        switch (view) {
            case 0: // Popup view
                return <Popup onClose={onClosePopup} onStart={onStartQuiz} totalQuestions={10} />; // Pass onStartQuiz function as prop
            case 2:
                return <QuestionApp />; // Render the quiz component when view state is 2
            default:
                return null;
        }
    };

    return renderView();
};

export default QuizApp;
