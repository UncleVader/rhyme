import type {Metadata} from "next";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

import {Plus_Jakarta_Sans} from 'next/font/google'
import StoreProvider from "@/providers/StoreProvider";
import {GA_ID, GTM_ID} from "@/const/common";
import {CSPostHogProvider} from "@/providers/Posthog";
import {Header} from "@/components/common/Header";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: "Rhyme AI Inc",
  description: "Rhyme AI Inc - Welcome to effortless content marketing that just works.",
  openGraph: {
    description: "Rhyme AI Inc - Welcome to effortless content marketing that just works.",
    title: "Rhyme AI Inc",
    images: ['https://rhyme-assets-public.s3.eu-west-2.amazonaws.com/character_1200x630_white_bg.png']
  }
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)
{
  return (
    <html lang="en">
    {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
    <body
      className={`${jakartaSans.variable} antialiased font-jakarta bg-light min-h-screen px-0 pb-12 sm:pb-8 sm:pb-[60px] w-full overflow-x-hidden relative`}
    >
    <CSPostHogProvider>
      <StoreProvider>
        <Header/>
        <div className="pt-8">
          {children}
        </div>
      </StoreProvider>
    </CSPostHogProvider>
    {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </body>
    </html>
  );
}
