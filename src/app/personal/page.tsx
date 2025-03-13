import {AfterQuizLanding} from "@/components/pages/after-quiz/AfterQuizLanding";
import {personalPageData} from "@/const/after-quiz";
import Footer from "@/components/common/Footer";
import React from "react";

export default async function PersonalLanding() {
  return (
    <>
      <AfterQuizLanding data={personalPageData}/>
      <Footer />
    </>
  );
}
