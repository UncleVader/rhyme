"use client"

import React, {FC} from 'react';
import {ITestimonial} from "@/const/after-quiz";
import {AspectRatio} from "@radix-ui/react-aspect-ratio";
import YouTubePlayer from "@/components/common/YouTubePlayer";
import {useScreenDetector} from "@/hooks/useScreenDetector";

interface IProps {
  testimonial: ITestimonial
}
const TestimonialItem:FC<IProps> = ({testimonial}) => {
  const {isMobile} = useScreenDetector()
  return (
    <div className={"rounded-[24px] overflow-hidden relative"}>
      <AspectRatio ratio={isMobile ? 6/5 : 1.15845}>
        <YouTubePlayer
          videoId={testimonial.videoId}
          poster={testimonial?.poster || ''}
          posterClass={'bg-[#F4C342] bg-contain'}
          infoLine1={testimonial.person}
          infoLine2={testimonial.personInfo}
        />
      </AspectRatio>

    </div>
  );
};

export default TestimonialItem;
