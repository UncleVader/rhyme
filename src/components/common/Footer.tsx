import Link from "next/link";
import {FC, ReactNode} from "react";
import {cn} from "@/lib/utils";
import JoinWaitlistForm from "@/components/common/JoinWaitlistForm";
import InstagramIcon from "@/assets/svg/InstagramIcon";
import LinkedinIcon from "@/assets/svg/LinkedinIcon";

const Footer = () => {
  return (
    <footer
      className={"container px-0 sm:px-4 flex flex-wrap w-full gap-y-8 md:gap-0 justify-between "}
    >
      <div className="w-full lg:w-[920px] mx-auto -order-2 mb-10 md:mb-20">
        <JoinWaitlistForm/>
      </div>

      <div className="flex flex-wrap xl:flex-nowrap w-full md:w-9/12 gap-8 md:gap-2">
        <div
          className={cn(
            "flex items-center justify-center md:justify-start text-sm font-medium text-center w-full xl:w-4/12 sm:flex-shrink-0 ",
            "-order-1 sm:-order-1"
          )}
        >
          <span className={"text-base font-medium"}>© 2025 Rhyme AI Inc. All rights reserved.</span>
        </div>

        <div
          className={cn("flex flex-row flex-wrap items-center gap-6",
            "font-medium text-center xl:text-left sm:flex-shrink-0 whitespace-nowrap",
            "order-2 w-full xl:w-8/12 justify-center md:justify-start xl:justify-center"
          )}
        >
          <FooterLink href={"/privacy-policy"} title={"Privacy Policy"}/>
          <FooterLink href={"/terms-of-service"} title={"Terms of service"}/>
          <FooterLink href={"/gdpr"} title={"GDPR"}/>
          <FooterLink href={"mailto:support@rhyme.ai"} title={"support@rhyme.ai"}/>
        </div>

      </div>

      <div className="flex items-center gap-4 w-full md:w-3/12 md:flex-shrink-0 justify-center md:justify-end">
        <a href="https://www.instagram.com/rhyme.hq?igsh=MTh3cDBleWp6Y3VnZA==" target={"_blank"}><InstagramIcon/></a>
        <a href="https://www.linkedin.com/in/alexandralevy-/" target={"_blank"}><LinkedinIcon/></a>
      </div>


    </footer>
  );
};

const FooterLink = ({href, title}: { href: string, title: string }) => {
  return <Link href={href}
               className={"underline hover:no-underline"}>{title}</Link>
}


export default Footer;
