"use client"

import {FC} from "react";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";

interface IProps {
  caption: string;
  className?: string;
}

const GoToQuizButton:FC<IProps> = ({caption, className}) => {
  const router = useRouter()

  return (
      <Button
        variant={"yellow"}
        size={"yellow"}
        onClick={() => router.push('/quiz')}
        className={className || ''}
      >
        {caption} <ArrowRight/>
      </Button>
  );
};

export default GoToQuizButton;