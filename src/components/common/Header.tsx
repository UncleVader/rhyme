"use client"

import Image from "next/image"
import Link from "next/link";
import RhymeLogo from "../../assets/img/RhymeLogo.svg"
import {WEB_APP_URL} from "@/const/common";
import {useScrollHeader} from "@/hooks/useScrollHeader";
import {cn} from "@/lib/utils";

export const Header = () => {
  const isScrolled = useScrollHeader();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition",
        {"bg-white shadow-header": isScrolled}
      )}
    >
      <div className={"container flex justify-between items-center h-[66px] md:h-[80px]"}>
        <Link href={'/'}>
          <Image
            src={RhymeLogo}
            alt="Rhyme AI Inc logo"
            width={101}
            height={38}
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          {WEB_APP_URL &&
            <a
              href={WEB_APP_URL}
              target={"_blank"}
              className={"flex items-center font-semibold text-base h-12"}
            >Login</a>
          }
          {WEB_APP_URL &&
            <a
              href={`${WEB_APP_URL}/sign-up`}
              target={"_blank"}
              className={"yellow-button small-yellow-button-size font-semibold text-base rounded-[8px] h-12"}
            >Sign Up</a>
          }
        </div>
      </div>
    </header>
  )
}
