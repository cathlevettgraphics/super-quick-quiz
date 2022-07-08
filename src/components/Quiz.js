import React, { useEffect } from 'react';
import useStore from '../state/useStore';

import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

import { QuizContainer, HeaderText, Strapline } from './Quiz.styles';

const Quiz = () => {
  // Data from state
  const [
    data,
    questionPosition,
    setQuestionPosition,
    bgColor,
    setBgColor,
    resetQuiz,
  ] = useStore((state) => [
    state.data,
    state.questionPosition,
    state.setQuestionPosition,
    state.bgColor,
    state.setBgColor,
    state.resetQuiz,
  ]);

  const isLastQuestion = questionPosition - 1 === data.quiz_questions.length;

  const numberOfQuestions = data.quiz_questions.length;

  useEffect(() => {
    setBgColor(
      !isLastQuestion
        ? data.quiz_questions[questionPosition - 1]?.backgroundColor
        : data.quizEndColor,
    );
  }, [questionPosition]);

  const getNextQuestion = () => {
    setQuestionPosition();
  };

  const handleQuizReset = () => {
    resetQuiz();
  };

  return (
    <QuizContainer bgColor={bgColor}>
      <Strapline>{data.strapline}</Strapline>
      <HeaderText>{data.headline}</HeaderText>
      {isLastQuestion ? (
        <QuizEnd
          numberOfQuestions={numberOfQuestions}
          setBgColor={setBgColor}
        />
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
