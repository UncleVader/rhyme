import {IAfterQuizPageData} from "@/const/after-quiz";
import {AspectRatio} from "@radix-ui/react-aspect-ratio";
import {EmailForm} from "@/components/pages/after-quiz/components/EmailForm";
import VideoTestimonials from "@/components/pages/after-quiz/components/VideoTestimonials";
import YouTubePlayer from "@/components/common/YouTubePlayer";
import React from "react";
import BenefitsSection from "@/components/pages/after-quiz/components/BenefitsSection";
import {PricingPlans} from "@/components/common/pricing/PricingPlans";
import {cn} from "@/lib/utils";


export const AfterQuizLanding = ({data}: { data: IAfterQuizPageData }) => {

  return (
    <main className={"flex flex-col items-center relative pt-7 md:pt-0"}>
      <div className="container flex flex-col items-center">
        <p
          className={cn(
            "w-max align-self-center rounded-full px-5 py-1 mb-5",
            "text-sm font-medium leading-[26px] border border-purple-bright bg-purple-light"
          )}
        >
          Your Recommended Plan
        </p>

        <h1
          className={"text-center md:text-left text-[40px] md:text-[56px] leading-[1.29] font-bold -tracking-[1.12px] mb-3"}
        >{data.title}</h1>

        <h3 className={"text-center md:text-left text-[22px] md:text-[24px] font-semibold -tracking-[0.64px] mb-10"}>Watch the demo below</h3>
      </div>

      <div className="container relative md:max-w-[1200px] mb-10 md:mb-20">
        <div
          className={"rounded-[16px] sm:rounded-[32px] relative w-full overflow-hidden w-[1200px] max-w-full"}>
          <AspectRatio ratio={16 / 9}>
            <YouTubePlayer
              videoId={data.videoId}
              poster={data.videoPoster}
              className={"rounded-[36px] overflow-hidden"}
              bgClass={'before:z-10'}
            />
          </AspectRatio>
        </div>
      </div>

      <div className="md:mb-20 w-full">
        <VideoTestimonials testimonials={data.testimonials}/>
      </div>

      <div className={"w-full mb-10 md:mb-20"}>
        <BenefitsSection title={data.benefitsTitle} benefits={data.benefits}/>
      </div>

      <div className={"container mb-10 md:mb-20"}>
        <PricingPlans pricingPlans={data.pricingPlans}/>
      </div>
    </main>
  )
}
