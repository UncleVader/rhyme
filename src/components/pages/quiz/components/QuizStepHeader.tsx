import {quizContent, TQuizItem} from "@/const/quiz";
import {FC} from "react";
import * as React from "react";

interface IProps {
  item: TQuizItem;
}

export const QuizStepHeader:FC<IProps> = ({item}) => {

  return(
    <div className={"flex flex-col"}>
      {item.pageHeading && <h1 className={"mb-9 text-[30px] md:text-[48px] leading-1 font-extrabold"}>{item.pageHeading}</h1>}
      <h5 className={"mb-1 text-main-black text-[18px] font-semibold leading-[26px]"}>Question {item.questionNum} of {quizContent.length}</h5>
      <h4 className={"text-[18px]"}>{item.title}</h4>
    </div>
  )
}