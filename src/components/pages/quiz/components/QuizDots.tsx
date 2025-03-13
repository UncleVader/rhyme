"use client"

import {DotButton, useDotButton} from "@/components/ui/embla-carousel-dot-item";
import * as React from "react";
import {CarouselApi} from "@/components/ui/carousel";
import {FC} from "react";
import {cn} from "@/lib/utils";

interface IProps {
  carouselApi: CarouselApi
}

export const QuizDots:FC<IProps> = ({carouselApi}) => {
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(carouselApi)

  return(
    <div className="flex justify-between gap-2">
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={cn(
            "flex-grow rounded-full bg-[rgba(0,0,0,0.16)] h-1",
            {'bg-black': selectedIndex>=index},
            {'pointer-events-none	': selectedIndex<=index},
          )}
        />
      ))}
    </div>
  )
}