"use client"

import {PlanToggler} from "@/components/common/pricing/components/PlanToggler";
import {FC, useState} from "react";
import {PlanDetails} from "@/components/common/pricing/components/PlanDetails";
import {IPricingPlan} from "@/const/price-plans";
import PlanTypeChanger from "@/components/common/pricing/components/PlanTypeChanger";

interface IProps {
  pricingPlans: IPricingPlan[]
}
export const PricingPlans:FC<IProps> = ({pricingPlans}) => {
  const [selectedPlan, setSelectedPlan] = useState<0|1>(0)

  return(
    <div className={"flex flex-col items-center w-[400px] max-w-full mx-auto"}>
      <h2 className={"text-[44px] md:text-[48px] font-extrabold leading-[56px] -tracking-[0.96px] mb-8 text-center"}>Pricing & Plans</h2>

      <div className={"flex-grow-0 inline-flex mb-6"}>
        <PlanToggler selectedOption={selectedPlan} setSelectedOption={setSelectedPlan}/>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 relative z-10">
        {pricingPlans.map((pp,i) => <PlanDetails key={i} variant={"light"} data={pp} priceType={selectedPlan}/>)}
      </div>

      <PlanTypeChanger/>
    </div>
  )
}
