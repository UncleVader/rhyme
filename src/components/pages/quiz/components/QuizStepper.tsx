"use client"

import {FC, useCallback, useMemo} from "react";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import * as React from "react";
import {CarouselApi} from "@/components/ui/carousel";
import {useAppSelector} from "@/store/useStore";
import {RootState} from "@/store/store";
import {personalAnswers, quizContent} from "@/const/quiz";
import {useRouter} from "next/navigation";
import { sendGTMEvent } from '@next/third-parties/google'
import {usePostHog} from "posthog-js/react";

interface IProps {
  carouselApi: CarouselApi
}

export const QuizStepper: FC<IProps> = ({carouselApi}) => {
  const currentQuestionNum = useAppSelector((state: RootState) => state.quiz.currentQuestionNum)
  const answers = useAppSelector((state: RootState) => state.quiz?.answers[currentQuestionNum])
  const customAnswers = useAppSelector((state: RootState) => state.quiz?.customAnswers)
  const allAnswers = useAppSelector((state: RootState) => state.quiz?.answers)
  const router = useRouter()
  const posthog = usePostHog()

  const isItFinalQuestion = useMemo(() => currentQuestionNum === quizContent.length, [currentQuestionNum])

  const sendGA = useCallback(() => {
    const quizAnswers: {[key: string]: unknown}  = {}
    for(const [key, val] of Object.entries(allAnswers)) {
      const question = quizContent.find(q => q.questionNum===parseInt(key))
      if (question) {
        const answers:string[] = []
        val.forEach(a => {
          const answer = question.answers.find(qa => qa.key===a)
          let answerTitle = ''
          if (answer) {
            answerTitle = answer.title
          }
          if (answer?.useInput) {
            const customAnswer = customAnswers[question.questionNum][a]
            if (customAnswer) {
              answerTitle = customAnswer
            }
          }

          if (answerTitle) {
            answers.push(answerTitle)
          }
        })

        if (answers.length) {
          quizAnswers[question.title] = answers.join('; ')
        }

      }
    }

    try {
      sendGTMEvent({ event: 'quiz', value: quizAnswers })
    } catch {}
    try {
      posthog.capture('quiz', quizAnswers)
    } catch {}

  }, [allAnswers, customAnswers])

  const nextQuestion = useCallback(() => {
    if (!carouselApi) {
      return
    }

    const finaliseQuiz = () => {
      sendGA()

      const allPlainAnswers:Array<number> = []
      for (const answers of Object.values(allAnswers)) {
        answers.forEach(a => {
          allPlainAnswers.push(a)
        })
      }

      const isPersonalAnswer = personalAnswers.filter(value => {
        if (Array.isArray(value)) {
          return value.filter(v => allPlainAnswers.includes(v)).length===value.length
        } else {
          return allPlainAnswers.includes(value)
        }
      }).length
      router.push(isPersonalAnswer ? '/personal' : '/prof')
    }

    if (isItFinalQuestion) {
      finaliseQuiz()
      return;
    }

    carouselApi.scrollNext()
  }, [allAnswers, router, carouselApi, isItFinalQuestion, sendGA])

  const goBackHandler = useCallback(
    () => {
      if (!carouselApi || currentQuestionNum === 1) return;
      carouselApi.scrollTo(currentQuestionNum - 2)
    },
    [carouselApi, currentQuestionNum]
  )

  return (
    <div className="flex items-center justify-between gap-10">
      <Button
        variant={"black"}
        size={"yellow"}
        onClick={goBackHandler}
        disabled={currentQuestionNum === 1}
      ><ArrowLeft/> Back</Button>
      <Button
        variant={"yellow"}
        size={"yellow"}
        onClick={nextQuestion}
        disabled={!answers?.length}
      >{isItFinalQuestion ? 'Finish Quiz' : 'Next Question'} <ArrowRight/></Button>
    </div>
  )
}
