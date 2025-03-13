import {AfterQuizLanding} from "@/components/pages/after-quiz/AfterQuizLanding";
import {professionalPageData} from "@/const/after-quiz";
import Footer from "@/components/common/Footer";
import React from "react";
import {Header} from "@/components/common/Header";

export default async function ProfessionalLanding() {
  return (
    <>
      <AfterQuizLanding data={professionalPageData}/>
      <Footer/>
    </>
  );
}
