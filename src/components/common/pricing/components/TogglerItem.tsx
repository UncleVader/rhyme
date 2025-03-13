import {FC} from "react";
import {cn} from "@/lib/utils";

interface IProps {
  title: string;
  active: boolean;
}

export const TogglerItem:FC<IProps> = ({title, active}) => {
  return(
    <div className={cn(
      "text-sm font-semibold px-4 flex items-center text-inactive rounded-full overflow-hidden relative z-10 " +
      "before:block before:transition before:absolute before:inset-0 before:-z-10",
      {"text-black before:bg-white ":active}
      )}>{title}</div>
  )
}
