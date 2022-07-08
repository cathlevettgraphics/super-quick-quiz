import create from 'zustand';
const data = require('../data/quizData.json');

const useStore = create((set) => ({
  data: data,
  questionPosition: 1,
  setQuestionPosition: () =>
    set((state) => ({ questionPosition: state.questionPosition + 1 })),
  bgColor: data.quiz_questions[0].backgroundColor,
  setBgColor: (bgColor) =>
    set((state) => {
      return {
        bgColor,
      };
    }),
  resetQuiz: () => set((state) => ({ questionPosition: 1 })),
}));

export default useStore;
