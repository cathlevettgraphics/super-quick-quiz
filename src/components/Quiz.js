import React, { useState } from 'react';

import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

import { QuizContainer, HeaderText, Strapline } from './Quiz.styles';

const data = require('../data/quizData.json');

const Quiz = () => {
  const [questionPosition, setQuestionPosition] = useState(1);
  const [bgColor, setBgColor] = useState('#FFCF00');

  const COLORS = ['#00A4DD', '#FFCF00', '#FD8024', '#F6ADCD', '#66BF7E'];
  const randomColor = Math.floor(Math.random() * COLORS.length);

  const isLastQuestion = questionPosition - 1 === data.quiz_questions.length;

  const getNextQuestion = () => {
    setQuestionPosition((questionPosition) => questionPosition + 1);
    setBgColor(COLORS[randomColor]);
  };

  const handleQuizReset = () => {
    setQuestionPosition(1);
  };

  const numberOfQuestions = data.quiz_questions.length;

  return (
    <QuizContainer bgColor={bgColor}>
      <Strapline>{data.strapline}</Strapline>
      <HeaderText>{data.headline}</HeaderText>
      {isLastQuestion ? (
        <QuizEnd numberOfQuestions={numberOfQuestions} />
      ) : (
        <>
          <QuizQuestion
            questionPosition={questionPosition}
            currentQuestion={data.quiz_questions[questionPosition - 1]}
            handleNextQuestion={getNextQuestion}
            handleQuizReset={handleQuizReset}
            wrongAnswerText={data.wrongAnswer}
          />
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
