"use client";
import React from "react";
import { useCarousel } from "../../context";

export default function Indicator({ totalSteps, currentStep }) {
  const {
    handleStepClick,
    transitionDuration,
    isChangingStep,
    setIsPlaying,
    isPlayingRef,
  } = useCarousel();

  return (
    <div className="flex justify-center items-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          onClick={() => {
            if (isChangingStep) return;
            setIsPlaying(false);
            isPlayingRef.current = false;
            handleStepClick(index);
          }}
          key={index}
          style={{
            transition: `background-color ${transitionDuration.current}ms cubic-bezier(0.68, -0.55, 0.27, 1.55)`,
            willChange: "background-color",
          }}
          className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer  ${
            currentStep === index
              ? "bg-blue-500"
              : "bg-gray-300 hover:bg-blue-200"
          }`}
        />
      ))}
    </div>
  );
}
