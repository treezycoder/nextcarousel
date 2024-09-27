"use client";

import { useCarousel } from "../../context";
import ImageCard from "../image";

export default function ImagesContainer() {
  const {
    images,
    imageWidth,
    transitionDuration,
    isTransitionLeft,
    isTranslating,
  } = useCarousel();
  return (
    <div
      style={{
        left: `calc(${-33.33 * 17}% - ${33.33 / 2}%)`,
        transform: `${
          isTranslating
            ? `translateX(${
                isTransitionLeft.current
                  ? `${-imageWidth.current}%`
                  : `${imageWidth.current}%`
              })`
            : ""
        }`,
        transition: `${
          isTranslating
            ? `transform ${transitionDuration.current}ms cubic-bezier(0.68, -0.55, 0.27, 1.55)
`
            : ""
        }`,
        willChange: "transform",
      }}
      className={`w-[200%] flex items-center relative`}
    >
      {images.map((image, index) => (
        <ImageCard
          key={index}
          index={index}
          image={image}
          width={33.33}
          height={600}
        />
      ))}
    </div>
  );
}
