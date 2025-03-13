import IconFeature from "@/assets/svg/IconFeature";
import {IPricingPlan} from "@/const/price-plans";
import {FC} from "react";
import {cn} from "@/lib/utils";
import GreenTickIcon from "@/assets/svg/GreenTickIcon";

interface IProps {
  variant: "light" | "dark";
  data: IPricingPlan;
  priceType: 0 | 1
}

export const PlanDetails: FC<IProps> = ({variant, data, priceType}) => {

  return (
    <div
      className={cn(
        "flex flex-col items-center w-full p-6 md:p-8 border-2 border-black rounded-[16px] bg-white shadow-pricing",
        {"border-black bg-black text-white": variant === "dark"}
      )}
    >
      {data?.name && <h4 className={"text-[24px] font-bold mb-5"}>{data.name}</h4>}
      <h2
        className={cn(
          "text-[56px] font-bold leading-[64px] text-black w-full",
          {"text-white": variant === "dark"}
        )}
      >£{priceType === 0 ? data.priceM : data.priceY}</h2>
      <p className={"pb-4 mb-6 w-full border-b border-grey-border"}>/{priceType === 0 ? 'month' : 'month'}</p>

      <ul className={"w-full flex flex-col gap-[14px]"}>
        {
          data.features.map((f, i) => {
            return (
              <li
                key={i}
                className={"flex items-center gap-1.5"}
              >
                <div className={"w-5 flex-shrink-0 [&_svg]:size-[18px]"}><GreenTickIcon/></div> <span className={"font-medium"}>{f}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
