"use client"

import * as React from "react";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import AutoHeight from "embla-carousel-auto-height";
import {ITestimonial} from "@/const/after-quiz";
import {FC} from "react";
import TestimonialItem from "@/components/pages/after-quiz/components/TestimonialItem";
import {cn} from "@/lib/utils";

interface IProps {
  testimonials: ITestimonial[]
}

const VideoTestimonials: FC<IProps> = ({testimonials}) => {
  const [_, setCarouselApi] = React.useState<CarouselApi>()

  return (
    <div
      className={cn(
        "px-4 md:px-10 py-10 md:pt-[60px] md:mx-4 2xl:max-w-[1440px] 2xl:mx-auto",
        "md:rounded-[32px] bg-orange-light"
      )}
    >
      <h2
        className={"w-full text-center text-[32px] md:text-[48px] leading-[1.25] font-bold mb-8 md:mb-[52px] px-4"}>Hear
        what people are saying about Rhyme AI Inc</h2>
      <Carousel
        className="w-full"
        setApi={setCarouselApi}
        plugins={[
          AutoHeight()
        ]}
      >
        <CarouselContent className={"flex items-start"} data-testid="carousel-content">
          {testimonials.map((t, index) => (
            <CarouselItem key={index} className={"basis-[80%] sm:basis-[45%] lg:basis-[448px] pl-6"}>
              <TestimonialItem testimonial={t}/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default VideoTestimonials
