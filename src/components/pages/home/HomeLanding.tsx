import {HomeGetDemoCta} from "./HomeCtaBox";
import HomeProductBox from "@/components/pages/home/HomeProductBox";
import HomeContentCreationCta from "@/components/pages/home/HomeContentCreationCta";
import VideoTestimonials from "@/components/pages/after-quiz/components/VideoTestimonials";
import React from "react";
import {homeTestimonials} from "@/const/after-quiz";

export const HomeLanding = () => {
  return(
    <main
      className=" flex flex-col w-full flex-grow items-center justify-between overflow-x-hidden"
    >

      <div className={"flex flex-col flex-grow text-center max-w-full"}>
        <div className="px-5">
          <h1 className={"text-[56px] xl:text-[68px] leading-[1.38] font-extrabold -tracking-[1.36px]"}>Marketing Made Easy</h1>
          <h3 className={"text-[18px] xl:text-[24px] leading-[2] font-medium mb-12"}>Welcome to effortless content marketing that just works.</h3>
          <h2 className={"text-[40px] leading-[1.4] font-bold -tracking-[0.8px] mb-6 md:mb-12"}>Is creating content driving you crazy?</h2>
        </div>

        <div className={"sm:mb-20"}>
          <HomeGetDemoCta/>
        </div>
        <div className={"sm:mb-20"}>
          <HomeProductBox/>
        </div>
        <div className={"sm:mb-20"}>
          <HomeContentCreationCta/>
        </div>
      </div>
      <div className={"mb-[140px] w-full"}>
        <VideoTestimonials testimonials={homeTestimonials}/>
      </div>
    </main>
  )
}
