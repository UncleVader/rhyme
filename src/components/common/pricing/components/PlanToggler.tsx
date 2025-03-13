"use client"

import {TogglerItem} from "@/components/common/pricing/components/TogglerItem";
import {Dispatch, FC, SetStateAction} from "react";

interface IProps {
  selectedOption: number;
  setSelectedOption: Dispatch<SetStateAction<0|1>>
}

export const PlanToggler:FC<IProps> = ({selectedOption, setSelectedOption}) => {

  return(
    <div
      className="flex cursor-pointer rounded-full bg-grey-light p-1 h-[42px]"
      onClick={() => setSelectedOption(prev => prev===0 ? 1 : 0)}
    >
      <TogglerItem title={"Billed Monthly"} active={selectedOption===0} />
      <TogglerItem title={"Billed Yearly"} active={selectedOption===1} />
    </div>
  )
}
