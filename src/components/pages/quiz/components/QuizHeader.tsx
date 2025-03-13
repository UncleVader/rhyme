import Image from "next/image"
import Link from "next/link";
import RhymeLogo from "@/assets/img/RhymeLogo.svg"

export const QuizHeader = () => {
  return (
    <header className={"flex w-full justify-between pb-[50px] px-10 sm:px-0"}>

      <Link href={'/'}>
        <Image
          src={RhymeLogo}
          alt="Rhyme logo"
          width={101}
          height={38}
          priority
        />
      </Link>

      <div/>
    </header>
  )
}
