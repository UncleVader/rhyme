"use client"

import BoxCharacter from "@/components/common/BoxCharacter";
import GoToQuizButton from "@/components/common/GoToQuizButton";

export const HomeGetDemoCta = () => {
  return(
    <div className={"relative md:max-w-[75%] xl:max-w-[810px] mx-auto py-8 px-[50px] lg:px-[140px] flex flex-col gap-6 items-center justify-center " +
      "sm:rounded-lg bg-purple-light border-y-2 sm:border-2 border-purple-border"}
    >
      <div className={"absolute left-0 top-0 hidden md:block"}>
        <BoxCharacter/>
      </div>

      <h2 className={"text-[40px] 2xl:text-[44px] leading-[1.27] font-bold -tracking-[0.88px]"}>Get a demo of Rhyme AI Inc </h2>
      <p className={"text-main-black font-medium"}>Take this quick 4 question quiz to get to the right demo.</p>

      <GoToQuizButton caption={"Take the Quiz"}/>
    </div>
  )
}
