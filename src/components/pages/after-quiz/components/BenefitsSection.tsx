import React, {FC} from "react";
import {TBenefit} from "@/const/after-quiz";
import {cn} from "@/lib/utils";

interface IProps {
  title: string;
  benefits: TBenefit[];
}
const BenefitsSection:FC<IProps> = ({title, benefits}) => {

  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-[80px] gap-y-8 md:rounded-lg bg-black text-white",
        "py-10 px-4 md:px-10 xl:max-w-[1200px] xl:mx-auto md:mx-4"
      )}
    >
      <h2
        className={cn(
          "w-full md:max-w-[880px] md:mx-auto mb-12 md:mb-8",
          "text-[32px] md:text-[48px] font-bold leading-[56px] -tracking-[0.96px] text-center"
        )}
      >{title}</h2>
      {
        benefits.map((f, i) => {
          return (
            <div className={"flex items-center gap-4 lg:w-[calc(50%_-_40px)]"} key={i}>
              <div
                className={"size-[48px] [&>svg]:size-[28px] md:[&>svg]:size-[28px] md:size-[64px]" +
                  " rounded-full flex items-center justify-center bg-purple-bright flex-shrink-0 text-white"}
              >{f.icon}</div>
              <p className={"text-16 leading-[1.5] font-medium"}>{f.title}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default BenefitsSection;
