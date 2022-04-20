import { Button } from './Quiz.styles';

import { ButtonListItem } from './Quiz.styles';

const QuizButton = ({ buttonText, handleCheckCurrentAnswer, falseCount }) => {
  const handleClick = () => {
    handleCheckCurrentAnswer(buttonText);
  };
  return (
    <ButtonListItem>
      <Button onClick={handleClick}>{buttonText}</Button>
    </ButtonListItem>
  );
};

export default QuizButton;
