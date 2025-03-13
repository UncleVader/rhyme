export type TQuizAnswer = {
  key: number;
  title: string;
  useInput?: boolean;
}

export type TQuizItem = {
  questionNum: number;
  title: string;
  multiple: boolean;
  answers: Array<TQuizAnswer>;
  pageHeading?: string;
}

type TQuizContent = Array<TQuizItem>

export const personalAnswers = [22,23,24,31,[21,31]]

export const quizContent:TQuizContent = [
  {
    questionNum: 1,
    title: "What’s your biggest marketing challenge?",
    multiple: true,
    pageHeading: "Get to the right demo",
    answers: [
      {
        key: 11,
        title: "Generating content ideas"
      },
      {
        key: 12,
        title: "Turning existing ideas into great content"
      },
      {
        key: 13,
        title: "Posting regularly to socials or emails"
      },
      {
        key: 14,
        title: "Figuring out which of your content is working best"
      },
      {
        key: 15,
        title: "Finding out which trends are working"
      }
    ]
  },
  {
    questionNum: 2,
    title: "What type of business are you?",
    multiple: false,
    answers: [
      {
        key: 21,
        title: "Marketing (i.e. social media manager, content manager)"
      },
      {
        key: 22,
        title: "Service provider (i.e. accountant , coach or personal trainer)"
      },
      {
        key: 23,
        title: "E-commerce"
      },
      {
        key: 24,
        title: "Beauty & Wellness"
      },
      {
        key: 25,
        title: "Food & Beverage"
      },
      {
        key: 26,
        title: "Other, please specify",
        useInput: true
      },
    ]
  },
  {
    questionNum: 3,
    title: "How many social accounts do you want to manage in Rhyme?",
    multiple: false,
    answers: [
      {
        key: 31,
        title: "My own social accounts"
      },
      {
        key: 32,
        title: "1 - 4 client accounts"
      },
      {
        key: 33,
        title: "4+ client social accounts"
      },
    ]
  },
  {
    questionNum: 4,
    title: "What do you need more of?",
    multiple: true,
    answers: [
      {
        key: 41,
        title: "Time"
      },
      {
        key: 42,
        title: "Revenue"
      },
      {
        key: 43,
        title: "Clients"
      },
    ]
  },

]
