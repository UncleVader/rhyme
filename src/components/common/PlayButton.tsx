import React, {FC} from 'react';
import PlayArrow from "@/assets/svg/PlayArrow";

interface IProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const PlayButton:FC<IProps> = ({onClick}) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div
        className={"rounded-full overflow-hidden size-[80px] flex items-center justify-center " +
          "cursor-pointer bg-black-72 hover:bg-black hover:scale-[1.1] transition"}
        onClick={onClick}
      >
        <div className="size-1/2 lg:size-[46px]">
          <PlayArrow/>
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
