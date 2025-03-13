"use client"

import * as React from "react"

import AutoHeight from 'embla-carousel-auto-height'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {Dispatch, FC, SetStateAction} from "react";
import {quizContent} from "@/const/quiz";
import {QuizStep} from "@/components/pages/quiz/components/QuizStep";

interface IProps {
  setApi: Dispatch<SetStateAction<CarouselApi>>;
}

export const QuizBox:FC<IProps> = ({setApi}) => {

  return (
    <div className={"flex flex-col gap-4 w-full"}>
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          watchDrag: false
        }}
        plugins={[
          AutoHeight()
        ]}
      >
        <CarouselContent className={"flex items-start"} data-testid="carousel-content">
          {quizContent.map((q, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <QuizStep item={q}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </div>
  )
}
