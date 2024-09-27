"use client";

import Carousel from "./carousel";
import CarouselProvider from "./carousel/context";

export default function Projects() {
  return (
    <div className="h-screen bg-black pt-14 overflow-hidden  max-w-[2000px]">
      <div id="project-carousel-container" className={``}>
        <CarouselProvider>
          <Carousel />
        </CarouselProvider>
      </div>
    </div>
  );
}
