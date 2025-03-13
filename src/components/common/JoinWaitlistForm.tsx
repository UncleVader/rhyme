"use client"

import {EmailForm} from "@/components/pages/after-quiz/components/EmailForm";
import {cn} from "@/lib/utils";

const JoinWaitlistForm = () => {
  return (
    <div
      className={"sm:rounded-[32px] py-10 px-5 md:px-[60px] flex flex-col gap-10"}
      style={{
        backgroundImage: `url(/img/waitlist-form-bg.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="flex flex-col gap-4 text-center text-white w-[570px] max-w-full mx-auto">
        <h3 className={"text-[32px] md:text-[48px] font-bold leading-[1.667] -tracking-[0.96px]"}>Join the waiting list</h3>
        <p className={"text-base md:text-lg font-semibold"}>Ready to see how Rhyme AI Inc can free up your time, so you can take on more clients without having to hire or outsource?</p>
      </div>

      <EmailForm
        className={cn(
          "p-0 md:p-0 bg-[transparent] border-none",
          "[&_[data-form-input]]:rounded-[8px] [&_[data-form-input]]:h-[48px]",
          "[&_[data-form-button]]:rounded-[8px] [&_[data-form-button]]:h-[48px] [&_[data-form-button]]:text-base [&_[data-form-button]]:font-semibold",
          )}
      />
    </div>
  );
};

export default JoinWaitlistForm;
