import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import ShowResult from './ShowResult';
const questions = [
    {
        id: 1,
        image: "https://cdn.countryflags.com/thumbs/afghanistan/flag-400.png",
        answerOptions: [
            { answerText: 'Kabul', isCorrect: true },
            { answerText: 'Tehran', isCorrect: false },
            { answerText: 'Islamabad', isCorrect: false },
            { answerText: 'Dhaka', isCorrect: false },
        ],
    },
    {
        id: 2,
        image: "https://cdn.countryflags.com/thumbs/australia/flag-400.png",
        answerOptions: [
            { answerText: 'Canberra', isCorrect: true },
            { answerText: 'Wellingtona', isCorrect: false },
            { answerText: 'Suva', isCorrect: false },
            { answerText: 'Port Moresby', isCorrect: false },
        ],
    },
    {
        id: 3,
        image: "https://cdn.countryflags.com/thumbs/brazil/flag-400.png",
        answerOptions: [
            { answerText: 'Brasília', isCorrect: true },
            { answerText: 'Lima', isCorrect: false },
            { answerText: 'Santiago', isCorrect: false },
            { answerText: 'Bogotá', isCorrect: false },
        ],
    },
    {
        id: 4,
        image: "https://cdn.countryflags.com/thumbs/canada/flag-400.png",
        answerOptions: [
            { answerText: 'Ottawa ', isCorrect: true },
            { answerText: 'Washington D.C.', isCorrect: false },
            { answerText: 'Mexico City', isCorrect: false },
            { answerText: 'Havana', isCorrect: false },
        ],
    },
    {
        id: 5,
        image: "https://cdn.countryflags.com/thumbs/china/flag-400.png",
        answerOptions: [
            { answerText: 'Beijing', isCorrect: true },
            {
                answerText: 'Seoul', isCorrect: false
            },
            { answerText: 'Tokyo', isCorrect: false },
            { answerText: 'Manila', isCorrect: false },
        ],
    },
    {
        id: 6,
        image: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
        answerOptions: [
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Rome', isCorrect: false },
            { answerText: 'Berlin', isCorrect: false },
            { answerText: 'Madrid', isCorrect: false },
        ],
    },
    {
        id: 7,
        image: "https://cdn.countryflags.com/thumbs/germany/flag-400.png",
        answerOptions: [
            { answerText: 'Berlin', isCorrect: true },
            { answerText: 'Vienna', isCorrect: false },
            {
                answerText: 'Prague', isCorrect: false
            },
            { answerText: 'Warsaw', isCorrect: false },
        ],
    },
    {
        id: 8,
        image: "https://cdn.countryflags.com/thumbs/india/flag-400.png",
        answerOptions: [
            { answerText: 'New Delhi ', isCorrect: true },
            { answerText: 'Islamabad', isCorrect: false },
            { answerText: 'Kathmandu', isCorrect: false },
            { answerText: 'Colombo', isCorrect: false },
        ],
    },
    {
        id: 9,
        image: "https://cdn.countryflags.com/thumbs/japan/flag-400.png",
        answerOptions: [
            { answerText: 'Tokyo ', isCorrect: true },
            { answerText: 'Seoul', isCorrect: false },
            { answerText: 'Beijing', isCorrect: false },
            { answerText: 'Port Moresby', isCorrect: false },
        ],
    },
    {
        id: 10,
        image: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
        answerOptions: [
            { answerText: 'Washington D.C', isCorrect: true },
            { answerText: 'Ottawa', isCorrect: false },
            { answerText: 'Berlin', isCorrect: false },
            { answerText: 'Brussels', isCorrect: false },
        ],
    },
];
const QuestionApp = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [wrongAnswerIndex, setWrongAnswerIndex] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (isCorrect, index) => {
        if (isCorrect) {
            setCorrectAnswerIndex(index);
            setCorrectAnswersCount(correctAnswersCount + 1);
        } else {
            setWrongAnswerIndex(index);
            setWrongAnswersCount(wrongAnswersCount + 1);
            setSelectedAnswer(index);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setCorrectAnswerIndex(null);
        setWrongAnswerIndex(null);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const handleRetry = () => {
        setSelectedAnswer(null);
        setCorrectAnswerIndex(null);
        setWrongAnswerIndex(null);
        setCurrentQuestionIndex(0);
        setCorrectAnswersCount(0);
        setWrongAnswersCount(0);
        setShowResult(false);
    };

    const currentQuestion = questions[currentQuestionIndex];

    // Calculate progress percentage
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className='container mt-5'>
            <div className="progress-container">
                <div className="progress" style={{ width: `${progressPercentage}%`, backgroundColor: progressPercentage === 100 ? 'green' : 'red' }}></div>
                <div className="progress-label">{`${progressPercentage}%`}</div>
                <div className="percentage-text">{`${progressPercentage}%`}</div>
            </div>

            <div className="quiz-container">
                <div key={currentQuestion.id} className={`question ${!showResult ? 'active' : ''}`}>
                    <div className="image-container mb-5 mb-5 mt-5">
                        <img src={currentQuestion.image} alt="Quiz" />
                    </div>
                    <p>{currentQuestion.questionText}</p>
                    <div className="answer-options col">
                        <div className="column">
                            {currentQuestion.answerOptions.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(option.isCorrect, index)}
                                    className={`answer-button ${selectedAnswer === index ? 'selected' : ''} ${correctAnswerIndex === index ? 'correct' : ''} ${wrongAnswerIndex === index ? 'wrong' : ''}`}
                                    style={{
                                        color: correctAnswerIndex === index ? 'green' : (wrongAnswerIndex === index ? 'red' : 'black'),
                                        border: correctAnswerIndex === index ? '1px solid green' : (wrongAnswerIndex === index ? '1px solid red' : '1px solid black')
                                    }}
                                    disabled={showResult}
                                >
                                    {option.answerText}
                                    {correctAnswerIndex === index && <FaCheck style={{ color: 'green', float: 'right' }} />}
                                    {wrongAnswerIndex === index && <FaTimes style={{ color: 'red', float: 'right' }} />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Render next button until the last question */}
                {currentQuestionIndex !== questions.length - 1 && (
                    <button className="next-button" onClick={handleNextQuestion}>
                        Next
                    </button>
                )}
                {/* Render submit button on last question */}
                {currentQuestionIndex === questions.length - 1 && !showResult && (
                    <button className="submit-button" onClick={handleShowResult}>
                        Submit
                    </button>
                )}
            </div>
            {showResult && (
                <ShowResult
                    correctAnswersCount={correctAnswersCount}
                    wrongAnswersCount={wrongAnswersCount}
                    handleRetry={handleRetry}
                />
            )}
        </div>
    );
};

export default QuestionApp;
