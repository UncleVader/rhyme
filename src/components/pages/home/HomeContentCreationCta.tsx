import GoToQuizButton from "@/components/common/GoToQuizButton";
import FeatureListItem from "@/components/common/FeatureListItem";
import { Clock2, Trophy, Sparkles } from "lucide-react"

const HomeContentCreationCta = () => {

  return (
    <div className={"flex flex-col lg:flex-row sm:rounded-lg bg-black py-14 text-white px-8 lg:px-[77px] gap-[80px] 2xl:gap-[120px]"}>
      <div className="flex flex-col gap-[52px] text-left justify-between">
        <h2 className={"text-center sm:text-left text-[30px] sm:text-[40px] 2xl:text-[56px] leading-[1.29] font-extrabold"}>We take content creation of your plate</h2>
        <GoToQuizButton
          caption={'Take the quiz to find the right plan for you'}
          className={"hidden sm:flex w-max lg:w-auto mx-auto text-black md:text-[18px] lg:text-[14px] 2xl:text-[20px]"}
        />
        <GoToQuizButton
          caption={'Take the quiz'}
          className={"flex sm:hidden w-max lg:w-auto mx-auto text-black md:text-[18px] lg:text-[14px] 2xl:text-[20px]"}
        />
      </div>

      <div className="flex flex-col gap-8">
        <FeatureListItem icon={<Clock2/>} title={"Focus on growing your business, not on time-consuming tasks. Our tools creates high quality content that works."}/>
        <FeatureListItem icon={<Trophy/>} title={"Rhyme is an all-in-one solution, from ideas to scheduling so all your marketing is in one organised space."}/>
        <FeatureListItem icon={<Sparkles/>} title={"Let Rhyme help you increase your visibility and attract more clients by consistently sharing engaging content across multiple platforms."}/>
      </div>
    </div>
  );
};

export default HomeContentCreationCta;
