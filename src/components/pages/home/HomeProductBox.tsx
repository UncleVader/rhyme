import React from 'react';
import productImg from '@/assets/img/product-screenshot.png'
import Image from "next/image";

const HomeProductBox = () => {
  return (
    <div className={"flex flex-col-reverse lg:flex-row sm:rounded-lg w-full shadow-main pt-[56px] px-10 pb-[60px] bg-white gap-[50px]"}>
      <div className="lg:w-[52%] flex-shrink-0">
        <Image
          src={productImg}
          alt="Rhyme Dashboard"
          width={748}
          height={565}
          priority
          className={"block max-w-full"}
        />
      </div>

      <div className={"flex flex-col gap-5 justify-center text-left flex-grow"}>
        <h2 className={"text-[32px] md:text-[40px] 2xl:text-[56px] leading-[1.29] font-extrabold -tracking-[1.12px]"}>Create engaging content in just a few clicks</h2>
        <p>Rhyme is your AI-powered content marketing assistant, ideating, generating, formatting, and scheduling platform-native content that takes into account your brand, its unique tone of voice and audience needs.</p>
        <p>All you need to do is drop in a link to your business allowing Rhyme to understand your brand, industry and emulates your tone of voice. Then Rhyme does the heavy lifting for you, creating content marketing that works in next to no time at all.</p>
      </div>
    </div>
  );
};

export default HomeProductBox;
