import {Header} from "@/components/common/Header";
import {HomeLanding} from "@/components/pages/home/HomeLanding";
import Footer from "@/components/common/Footer";
import {PageGradientBg} from "@/components/common/PageGradientBg";

export default async function Home() {
  return (
    <div
      className="flex flex-col items-center justify-items-center overflow-x-hidden w-full container mx-auto"
    >
      <HomeLanding/>
      <Footer/>
      <PageGradientBg/>

    </div>
  );
}
