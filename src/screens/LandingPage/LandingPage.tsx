import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { LayoutSection } from "./sections/LayoutSection/LayoutSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        <LayoutSection />
        <HeroSection />
        <MainContentSection />
        <FooterSection />
      </div>
    </div>
  );
};
