import {TQuizItem} from "@/const/quiz";
import {FC} from "react";
import * as React from "react";
import {
  ToggleGroup,
} from "@/components/ui/toggle-group"
import {useAppDispatch, useAppSelector} from "@/store/useStore";
import {setAnswer} from "@/store/quizSlice"
import {QuizStepHeader} from "@/components/pages/quiz/components/QuizStepHeader";
import {QuizAnswerItem} from "@/components/pages/quiz/components/QuizQuestionItem";
import {RootState} from "@/store/store";

interface IProps {
  item: TQuizItem;
}

export const QuizStep: FC<IProps> = ({item}) => {
  const dispatch = useAppDispatch()
  const answers = useAppSelector((state: RootState) => state.quiz.answers[item.questionNum])

  return (
    <div className={"flex flex-col gap-10"}>
      <QuizStepHeader item={item}/>

      <ToggleGroup
        type={item.multiple ? "multiple" : "single"}
        className={"flex flex-col items-start w-full gap-4"}
        onValueChange={(val: number | string[] | string) => {
          const answers = typeof val === 'number' ? [val] : typeof val === 'string' ? [Number(val)] : val.map(v => Number(v))
          dispatch(setAnswer({questionNum: item.questionNum, answers}))
        }}
      >
        <p className={"text-[18px] font-medium"}>
          {item.multiple ? 'Select as many answers as you like' : 'Select the answer most relevant to you'}
        </p>
        {item.answers.map((answer, i) => {
          const isAnswerSelected = answers && answers.indexOf(answer.key) >= 0
          return <QuizAnswerItem
            answer={answer}
            answerNum={i+1}
            isAnswerSelected={isAnswerSelected}
            key={i}
          />
        })}
      </ToggleGroup>

    </div>
  )
}
