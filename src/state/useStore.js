import create from 'zustand';
const data = require('../data/quizData.json');

const useStore = create((set) => ({
  data: data,
  questionPosition: 1,
  setQuestionPosition: () =>
    set((state) => ({ questionPosition: state.questionPosition + 1 })),
  bgColor: data.quiz_questions[0].backgroundColor,
  setBgColor: () =>
    set((state) => ({
      bgColor:
        state.data.quiz_questions[state.questionPosition - 1].backgroundColor,
    })),
  resetQuiz: () => set((state) => ({ questionPosition: 1 })),
}));

export default useStore;
