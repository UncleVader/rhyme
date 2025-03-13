"use client"

import {QuizBox} from "@/components/pages/quiz/components/QuizBox";
import * as React from "react";
import {CarouselApi} from "@/components/ui/carousel";
import {QuizDots} from "@/components/pages/quiz/components/QuizDots";
import {QuizStepper} from "@/components/pages/quiz/components/QuizStepper";
import {useAppDispatch} from "@/store/useStore";
import {setCurrentQuestionNum} from "@/store/quizSlice";
import {QuizHeader} from "@/components/pages/quiz/components/QuizHeader";

export const Quiz = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!carouselApi) {
      return
    }

    dispatch(setCurrentQuestionNum(carouselApi.selectedScrollSnap() + 1))

    carouselApi.on("select", () => {
      dispatch(setCurrentQuestionNum(carouselApi.selectedScrollSnap() + 1))
    })
  }, [carouselApi, dispatch])

  return (
    <>
      <QuizHeader/>
      <div className={"flex flex-col gap-10 w-[660px] max-w-full"}>
        <QuizBox setApi={setCarouselApi}/>
        {carouselApi &&
          <>
            <QuizStepper carouselApi={carouselApi}/>
            <QuizDots carouselApi={carouselApi}/>
          </>
        }

      </div>
    </>
  )
}
