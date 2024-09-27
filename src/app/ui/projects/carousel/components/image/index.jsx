"use client";
import Image from "next/image";
import { useCarousel } from "../../context";

export default function ImageCard({ height, width, image, index }) {
  const {
    isTranslating,
    transitionDuration,
    currentIndexRef,
    handlePrev,
    handleNext,
    setIsPlaying,
    isPlayingRef,
    isChangingStep,
  } = useCarousel();
  return (
    <div
      onClick={() => {
        if (index === 8 || index === 10) {
          if (isChangingStep) return;
          setIsPlaying(false);
          isPlayingRef.current = false;
          // currentIndex in original array is 9 if e.g 7 ? = 6 and 8 etc
          if (index === 8) {
            handlePrev();
          } else {
            handleNext();
          }
        }
      }}
      style={{
        width: `${width}%`,
        height: `clamp(150px, 50vw, ${height}px)`,
        // opacity: `${image.id === `${currentIndexRef.current}` ? "1" : "0.5"}`,

        transition: isTranslating
          ? `filter ${transitionDuration.current}ms ease-in-out`
          : "",
        willChange: "filter background-color",
      }}
      key={index}
      className={`relative flex-none cursor-pointer border border-y-2 border-black/50`}
    >
      <Image
        alt={image.alt}
        src={image.src}
        fill
        priority={index === 4 ? true : false}
        style={{
          filter: `${
            image.id === `${currentIndexRef.current}` ? " " : "blur(2px)"
          }`,
        }}
        className={``}
      />
    </div>
  );
}
