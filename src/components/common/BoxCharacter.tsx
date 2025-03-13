import CharacterLeft from "@/assets/svg/CharacterLeft";
import CharacterLeftHand from "@/assets/svg/CharacterLeftHand";

const BoxCharacter = () => {
  return (
    <>
      <div className={"absolute -z-10 -left-[100px] -top-[60px]"}>
        <CharacterLeft/>
      </div>
      <div className={"absolute -right-[44px] -top-[16px]"}><CharacterLeftHand/></div>
    </>
  );
};

export default BoxCharacter;