import { QuestionText, PlayAgainLink } from './Quiz.styles';

const QuizEnd = ({ handleQuizReset, numberOfQuestions }) => {
  return (
    <>
      <QuestionText>
        Thanks for playing the great big awesome LEGO™ quiz – You got all{' '}
        {numberOfQuestions} questions correct!
      </QuestionText>
      <PlayAgainLink href="" onClick={handleQuizReset}>
        Play again ?
      </PlayAgainLink>
    </>
  );
};

export default QuizEnd;
