import React, { useState } from 'react';
import QuizButton from './QuizButton';

import {
  QuizWrapper,
  QuestionNumber,
  QuestionText,
  QuestionButtonWrapper,
} from './Quiz.styles';

const QuizQuestion = ({
  currentQuestion,
  questionPosition,
  handleNextQuestion,
  wrongAnswerText,
}) => {
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);

  const handleCheckCurrentAnswer = (buttonText) => {
    if (currentQuestion.answer === buttonText) {
      setIsAnswerIncorrect(false);
      handleNextQuestion();
    } else {
      setIsAnswerIncorrect(true);
    }
  };

  return (
    <QuizWrapper>
      <QuestionNumber>Q{questionPosition}</QuestionNumber>
      <QuestionText>{currentQuestion.instruction_text}</QuestionText>
      <QuestionButtonWrapper>
        {currentQuestion.answer_options.map((buttonText, index) => (
          <QuizButton
            buttonText={buttonText}
            key={index}
            handleCheckCurrentAnswer={handleCheckCurrentAnswer}
          />
        ))}
      </QuestionButtonWrapper>
      {isAnswerIncorrect ? (
        <QuestionText>{wrongAnswerText}</QuestionText>
      ) : null}
    </QuizWrapper>
  );
};

export default QuizQuestion;
