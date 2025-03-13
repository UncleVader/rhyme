export interface IPricingPlan {
  name: string;
  priceY: number;
  priceM: number;
  features: Array<string>;
}

export const personalPricingPlans:Array<IPricingPlan> = [
  {
    name: "",
    priceY: 21,
    priceM: 29,
    features: [
      "1 Brand",
      "1 Brand Voice & Style",
      "1 Profile Per Marketing Platform",
      "3 Connected Marketing Platforms",
      "30 Total Posts",
      "Instant Content Conversion Across 5 Marketing Platforms",
      "Multiple calendar views",
    ]
  },
]

export const professionalPricingPlans:Array<IPricingPlan> = [
  {
    name: "",
    priceY: 73,
    priceM: 99,
    features: [
      "3 Brands",
      "1 Brand Voice & Style",
      "3 Profile Per Marketing Platform",
      "5 Connected Marketing Platforms",
      "150 Total Posts",
      "Instant Content Conversion Across 5 Marketing Platforms",
      "Multiple Calendar View",
      "Links and Hashtag Banks",
      "Team Access",
    ]
  },
]
