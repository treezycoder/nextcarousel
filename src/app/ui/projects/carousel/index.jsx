"use client";

import ImagesContainer from "./components/container";
import Indicator from "./components/indicator";
import { useCarousel } from "./context";
import PlayPauseIcon from "./components/play-pause";

export default function Carousel() {
  const { images, currentIndex } = useCarousel();

  return (
    <div className={`w-full relative overflow-hidden`}>
      <ImagesContainer />
      <div className="flex h-[30px] md:h-[35px] lg:h-[40px] justify-center items-center relative">
        <Indicator totalSteps={images.length / 2} currentStep={currentIndex} />
        <PlayPauseIcon />
      </div>
    </div>
  );
}
