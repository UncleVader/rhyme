import {Clock2, Trophy, Sparkles, WandSparkles, PiggyBank, Component, Lightbulb} from "lucide-react"
import {ReactNode} from "react";
import {BASE_PATH} from "@/const/common";
import {personalPricingPlans, IPricingPlan, professionalPricingPlans} from "@/const/price-plans";


export interface IAfterQuizPageData {
  title: string;
  description: string;
  videoId: string;
  videoPoster: string;
  ctaTitle: string;
  benefitsTitle: string;
  benefits: Array<TBenefit>;
  testimonials: Array<ITestimonial>;
  pricingPlans: Array<IPricingPlan>;
}

export type TBenefit = {
  icon: ReactNode;
  title: string;
}

export interface ITestimonial {
  person: string;
  personInfo: string;
  videoId: string;
  poster?: string;
}

const personalTestimonials: Array<ITestimonial> = [
  {
    person: "Caroline, Beautician, UK",
    personInfo: "",
    videoId: "ZmYTOdDTFRQ",
    poster: `${BASE_PATH}/img/testimonial-poster-3.jpg`
  },
  {
    person: "Emma, Hairdresser, UK",
    personInfo: "5,000+ YouTube followers",
    videoId: "Cbby6-8_zZk",
    poster: `${BASE_PATH}/img/testimonial-poster-2.jpg`
  },
  {
    person: "Adam, Hairdresser, UK",
    personInfo: "",
    videoId: "6S7lX1cBDRg",
    poster: `${BASE_PATH}/img/testimonial-poster-1.jpg`
  },
]

const professionalTestimonials: Array<ITestimonial> = [
  // {
  //   person: "Demi, CEO - Social Media Marketing Agency",
  //   personInfo: "16,000 YouTube Followers",
  //   videoId: "ZmYTOdDTFRQ",
  //   poster: `${BASE_PATH}/img/testimonial-poster-4.jpg`
  // },
  {
    person: "Lottie, Assisted 70+ Brands, CEO of VA & Social Media Agency",
    personInfo: "7,500+ YouTube followers",
    videoId: "qnYrQEHlx4U",
    poster: `${BASE_PATH}/img/testimonial-poster-5.jpg`
  },
  {
    person: "Hanna, Digital & Social Media Management",
    personInfo: "5,000+ YouTube followers",
    videoId: "5b9Z58cqcy0",
    poster: `${BASE_PATH}/img/testimonial-poster-6.jpg`
  },
  {
    person: "Molly, Social Media Manager for Aestheticians",
    personInfo: "1,500 YouTube followers",
    videoId: "Ap2NU_dwKh8",
    poster: `${BASE_PATH}/img/testimonial-poster-7.jpg`
  },
]

export const homeTestimonials: Array<ITestimonial>  = [personalTestimonials[0],professionalTestimonials[0],personalTestimonials[2]]

export const personalPageData: IAfterQuizPageData = {
  title: 'Rhyme Personal Plan',
  description: 'You’re epic at what you do but you find yourself choosing between doing what you love and marketing. You know marketing is a necessary evil to gain clients. Rhyme Personal has your back, we\'ll do your Marketing for you in a few quick clicks, giving you 20+ hours back so you can take on extra clients or spend more time with your loved ones.',
  videoId: '_U-fptFT7Kw',
  videoPoster: `${BASE_PATH}/img/personal-video-poster.png`,
  ctaTitle: "Join 100+ business owners who are waiting for Rhyme’s release",
  benefitsTitle: 'Grow your business with professional-level content',
  benefits: [
    {
      icon: <Trophy/>,
      title: 'Get professional-level marketing results without the hefty price tag. Rhyme offers a cost-effective solution for small businesses.'
    },
    {
      icon: <Clock2/>,
      title: 'Let Rhyme handle your marketing, freeing up your time to focus on what you do best. No more juggling marketing tasks and client work.'
    },
    {
      icon: <WandSparkles/>,
      title: 'Our platform does the heavy lifting, so you don\'t need to be a marketing guru. Simply provide some quick guided input, and we\'ll generate effective content.'
    },
    {
      icon: <Sparkles/>,
      title: 'Our AI ensures a steady stream of high-quality content, helping you maintain a consistent online presence and attract more customers.',
    }
  ],
  testimonials: personalTestimonials,
  pricingPlans: personalPricingPlans
}

export const professionalPageData: IAfterQuizPageData = {
  title: 'Rhyme Professional Plan',
  description: 'Marketing runs in your blood but managing multiple clients via tons of different platforms while keeping up with trends, industry changes and news is exhausting. Rhyme Professional is here to decrease your workload, while maintaining quality. So you can take on more clients, make more money, and pay for fewer systems, win-win-win.',
  videoId: 'ygERrP9XEtw',
  videoPoster: `${BASE_PATH}/img/afterquiz-video-poster-1.png`,
  ctaTitle: 'Join 100+ business owners who are waiting for Rhyme’s release',
  benefitsTitle: 'Double your clients, half your workload',
  benefits: [
    {
      icon: <PiggyBank/>,
      title: 'Rhyme Professional allows you to take more clients (and earn more money!), without affecting your current clients results.'
    },
    {
      icon: <Component/>,
      title: 'Enables you to close those 50 open tabs and just have 1 open (phew breathe a sigh of relief!), with our all-in-one Content Marketing system.'
    },
    {
      icon: <Lightbulb/>,
      title: 'Whether you struggle to come up with ideas, or you have 500+ ideas but starting the post is the hang up - we’ve got you covered, meaning you’ll get your time back and stop getting stuck at roadblocks.',
    },
    {
      icon: <Clock2/>,
      title: 'Get back 20+ hours a month you’re spending on Marketing, so you can work ON your business instead.'
    }
  ],
  testimonials: professionalTestimonials,
  pricingPlans: professionalPricingPlans
}

