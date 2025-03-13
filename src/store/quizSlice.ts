import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {quizContent} from "@/const/quiz";

type TAnswers = Record<number, Array<number>>;

interface IAnswerPayload {
  questionNum: number;
  answers: Array<number>;
}

interface ICustomAnswerPayload {
  answerKey: number;
  answer: string
}

// Define a type for the slice state
export interface QuizState {
  answers: TAnswers;
  customAnswers: Record<number, Record<number, string>>
  currentQuestionNum: number;
}

// Define the initial state using that type
export const initialState: QuizState = {
  answers: {},
  customAnswers: {},
  currentQuestionNum: 0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<IAnswerPayload>) => {
      state.answers[action.payload.questionNum] = action.payload.answers
    },
    setCustomAnswer: (state, action: PayloadAction<ICustomAnswerPayload>) => {
      const answerKey = action.payload.answerKey
      const question = quizContent.find(q => q.answers.find(a => a.key===answerKey))
      if (question) {
        state.customAnswers = {...state.customAnswers,
        [question.questionNum]: {
          [answerKey]: action.payload.answer
        }}
      }
    },
    setCurrentQuestionNum: (state, action: PayloadAction<number>) => {
      state.currentQuestionNum = action.payload
    },
  }
})

export const { setAnswer, setCustomAnswer, setCurrentQuestionNum } = quizSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAnswers = (state: RootState) => state.quiz.answers

export default quizSlice.reducer