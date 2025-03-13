import {FC, useEffect, useRef, useState} from "react";
import {TQuizAnswer} from "@/const/quiz";
import {ToggleGroupItem} from "@/components/ui/toggle-group";
import {cn} from "@/lib/utils";
import IconTick from "@/assets/svg/IconTick";
import {Input} from "@/components/ui/input";
import * as React from "react";
import {useAppDispatch} from "@/store/useStore";
import {setCustomAnswer} from "@/store/quizSlice";

interface IProps {
  answer: TQuizAnswer;
  answerNum: number;
  isAnswerSelected: boolean;
}

export const QuizAnswerItem: FC<IProps> = ({answer, answerNum, isAnswerSelected}) => {
  const dispatch = useAppDispatch()
  const [answerInput, setAnswerInput] = useState('')
  const [inputIsActive, setInputIsActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isAnswerSelected && inputIsActive && inputRef.current) {
      (inputRef.current as HTMLInputElement).focus()
    }
  }, [inputIsActive,isAnswerSelected])

  const setUserAnswer = (val: string) => {
    dispatch(setCustomAnswer({answerKey: answer.key, answer: val}))
  }

  return (
    <div className={"relative w-full overflow-hidden rounded-[12px]"}>
      {isAnswerSelected && inputIsActive &&
        <Input
          value={answerInput}
          onChange={(ev) => setAnswerInput(ev.target.value)}
          onBlur={(ev) => setUserAnswer(ev.target.value)}
          ref={inputRef}
          className={"text-[14px] font-bold py-0 absolute left-[50px] top-1 z-10 " +
            "bg-black text-white h-[calc(100%_-_8px)] w-[calc(100%_-_50px)] " +
            "no-border"}
        />
      }
      <ToggleGroupItem
        value={String(answer.key)}
        className={cn(
          "flex items-center justify-start p-4 border border-grey-border w-full gap-2 rounded-[12px] h-auto text-md font-medium",
          {"bg-black text-white": isAnswerSelected}
        )}
        onClick={() => {
          setInputIsActive(!!answer?.useInput)
        }}

      >
        {isAnswerSelected
          ? <IconTick/>
          : <span
            className={"flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.04)] h-[26px] w-[26px] text-[14px] font-bold"}
          >{answerNum}</span>
        }
        <span>{answer.title}</span>
      </ToggleGroupItem>

    </div>
  )
}
