import styled from 'styled-components';

const COLORS = {
  blue: '#00A4DD',
  yellow: '#FFCF00',
  orange: '#FD8024',
  pink: '#F6ADCD',
  green: '#66BF7E',
  black: '#000000',
  white: '#ffffff',
};

export const QuizContainer = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  padding: 16px;
`;

export const Strapline = styled.p`
  width: 100%;
  font-size: 16px;
`;

export const HeaderText = styled.h1`
  width: 100%;
  font-family: 'Cera Pro';
  font-size: 48px;
  line-height: 1.4;
  text-align: left;
  color: ${COLORS.black};
  margin-bottom: 40px;
`;

export const QuestionNumber = styled.h3`
  font-size: 32px;
  line-height: 1;
  border-bottom: 4px solid ${COLORS.black};
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

export const QuestionText = styled.p`
  font-size: 24px;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 32px;
  height: 102px;
  width: 100%;
`;

export const QuizWrapper = styled.div`
  width: 100%;
`;
export const QuestionButtonWrapper = styled.div`
  margin-bottom: 8px;
`;

export const ButtonListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
export const Button = styled.button`
  border: 0;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  padding: 16px;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: ${COLORS.black};
    color: ${COLORS.white};
  }
`;

export const PlayAgainLink = styled.a`
  width: 100%;
  padding: 24px 0;
  font-size: 24px;
  font-weight: 700;
  border: 4px solid ${COLORS.black};
  border-left: 0;
  border-right: 0;
`;
