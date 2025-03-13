import {FC, ReactNode} from "react";

interface IProps {
  icon: ReactNode;
  title: string;
}

const FeatureListItem:FC<IProps> = ({icon, title}) => {
  return (
      <div className={"flex gap-6 flex-col sm:flex-row items-center sm:items-start"} >
        <div className={"size-[64px] rounded-full flex items-center justify-center bg-purple-bright flex-shrink-0 text-purple-light"}>{icon}</div>
        <p className={"text-center sm:text-left text-md lg:text-[18px] xl:text-[16px] 2xl:text-[18px] leading-[1.44] font-medium text-left"}>{title}</p>
      </div>
  );
};

export default FeatureListItem;