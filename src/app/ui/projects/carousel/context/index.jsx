"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import model1 from "../images/model1.jpg";
import model2 from "../images/model2.jpg";
import model3 from "../images/model3.jpg";
import model4 from "../images/model4.jpg";
import model5 from "../images/model5.jpg";
import model6 from "../images/model6.jpg";
import model7 from "../images/model7.jpg";
import model8 from "../images/model8.jpg";
import model9 from "../images/model9.jpg";
import model10 from "../images/model10.jpg";

const CarouselContext = createContext();
const modelSources = [
  model1,
  model2,
  model3,
  model4,
  model5,
  model6,
  model7,
  model8,
  model9,
  model10,
];

const generateModelArray = () => {
  const modelArray = [];

  // First loop: Adds Model 3 to Model 10 with ids from 2 to 9
  for (let i = 2; i < modelSources.length; i++) {
    modelArray.push({
      id: `${i}`,
      alt: `Model ${i + 1}`,
      src: modelSources[i],
    });
  }

  // Second loop: Adds Model 1 to Model 10 in correct order
  for (let i = 0; i < modelSources.length; i++) {
    modelArray.push({
      id: `${i}`,
      alt: `Model ${i + 1}`,
      src: modelSources[i],
    });
  }

  // Third loop: Adds Model 1 and Model 2
  for (let i = 0; i < 2; i++) {
    modelArray.push({
      id: `${i}`,
      alt: `Model ${i + 1}`,
      src: modelSources[i],
    });
  }

  return modelArray;
};

export default function CarouselProvider({ children }) {
  // const [images, setImages] = useState([ //this shows you how the carousel will look like when rendered
  //   { id: "2", alt: "Model 3", src: model3 },
  //   { id: "3", alt: "Model 4", src: model4 },
  //   { id: "4", alt: "Model 5", src: model5 },
  //   { id: "5", alt: "Model 6", src: model6 },
  //   { id: "6", alt: "Model 7", src: model7 },
  //   { id: "7", alt: "Model 8", src: model8 },
  //   { id: "8", alt: "Model 9", src: model9 },
  //   { id: "9", alt: "Model 10", src: model10 },
  //   { id: "0", alt: "Model 1", src: model1 },
  //   { id: "1", alt: "Model 2", src: model2 },
  //   { id: "2", alt: "Model 3", src: model3 },
  //   { id: "3", alt: "Model 4", src: model4 },
  //   { id: "4", alt: "Model 5", src: model5 },
  //   { id: "5", alt: "Model 6", src: model6 },
  //   { id: "6", alt: "Model 7", src: model7 },
  //   { id: "7", alt: "Model 8", src: model8 },
  //   { id: "8", alt: "Model 9", src: model9 },
  //   { id: "9", alt: "Model 10", src: model10 },
  //   { id: "0", alt: "Model 1", src: model1 },
  //   { id: "1", alt: "Model 2", src: model2 },
  // ]);
  const [images, setImages] = useState(generateModelArray());
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentIndexRef = useRef(1);
  const imageWidth = useRef(33.33);
  const transitionDuration = useRef(500);
  const isTransitionLeft = useRef(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [stepsToSkip, setStepsToSkip] = useState(1);
  const [isChangingStep, setIsChangingStep] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const isPlayingRef = useRef(false);
  const [playingTimeoutId, setPlayingTimeoutId] = useState(null);

  //functions
  function handleNext() {
    if (isTranslating) return;
    imageWidth.current = 33.33;
    isTransitionLeft.current = true;
    setIsTranslating(true);
    const totalLength = images.length / 2;
    currentIndexRef.current = (currentIndexRef.current + 1) % totalLength;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
    const updatedImages = [...images, images[0]];
    updatedImages.shift();
    setTimeout(() => {
      setImages(updatedImages);
      setIsTranslating(false);
    }, transitionDuration.current);
  }

  function handlePrev() {
    if (isTranslating) return;
    imageWidth.current = 33.33;
    isTransitionLeft.current = false;
    setIsTranslating(true);
    const totalLength = images.length / 2;
    currentIndexRef.current =
      (currentIndexRef.current - 1 + totalLength) % totalLength;

    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalLength) % totalLength);
    const updatedImages = [images[images.length - 1], ...images];
    updatedImages.pop();
    setTimeout(() => {
      setImages(updatedImages);
      setIsTranslating(false);
    }, transitionDuration.current);
  }

  function handleStepClick(stepIndex) {
    if (stepIndex === currentIndex || isTranslating) return; // Prevent duplicate clicks or active transitions
    setIsTranslating(true);
    const stepsToMove = stepIndex - currentIndex;
    imageWidth.current = Math.abs(stepsToMove) * 33.33; // Multiple steps if needed
    const direction = stepsToMove > 0 ? "left" : "right";
    const totalLength = images.length / 2;
    isTransitionLeft.current = direction === "left";
    let updatedImages = [];
    if (stepIndex === totalLength - 1 && currentIndex === 0) {
      handlePrev();
      return;
    } else if (stepIndex === 0 && currentIndex === totalLength - 1) {
      handleNext();
      return;
    } else if (stepsToMove === 1) {
      handleNext();
      return;
    } else if (stepsToMove === -1) {
      handlePrev();
      return;
    }
    setIsChangingStep(true);
    if (direction === "left") {
      for (let i = 0; i < stepsToMove; i++) {
        updatedImages.push(images[i]);
      }
      updatedImages = [...images, ...updatedImages];
      updatedImages.splice(0, stepsToMove);
    } else if (direction === "right") {
      let numberShift = images.length - 1;
      for (let i = 0; i < Math.abs(stepsToMove); i++) {
        updatedImages.unshift(images[numberShift - i]);
      }
      updatedImages = [...updatedImages, ...images];
      updatedImages.splice(stepsToMove, Math.abs(stepsToMove));
    }

    currentIndexRef.current = stepIndex;
    setCurrentIndex(stepIndex); // Update to new step index
    setTimeout(() => {
      setImages(updatedImages);
      setIsTranslating(false);
      setIsChangingStep(false);
      // imageWidth.current === 33.33;
    }, transitionDuration.current);
  }

  useEffect(() => {
    let id;
    if (isPlaying && isPlayingRef.current) {
      transitionDuration.current = 1000;
      if (isTransitionLeft.current) {
        id = setTimeout(handleNext, 5000);
      } else {
        id = setTimeout(handlePrev, 5000);
      }
      setPlayingTimeoutId(id);
    } else {
      clearTimeout(playingTimeoutId);
      transitionDuration.current = 500;
    }

    return () => {
      clearTimeout(playingTimeoutId);
      clearTimeout(playingTimeoutId);
    };
  }, [isPlaying, isPlayingRef, images]);

  console.log(
    imageWidth.current,
    images,
    currentIndex,
    currentIndexRef.current,
    isTransitionLeft.current,
    isTranslating,
    isChangingStep
  );

  return (
    <CarouselContext.Provider
      value={{
        images,
        setImages,
        imageWidth,
        transitionDuration,
        isTransitionLeft,
        currentIndex,
        setCurrentIndex,
        isTranslating,
        handlePrev,
        handleNext,
        handleStepClick,
        isChangingStep,
        setIsChangingStep,
        stepsToSkip,
        setStepsToSkip,
        currentIndexRef,
        isPlaying,
        setIsPlaying,
        isPlayingRef,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

const useCarousel = () => useContext(CarouselContext);
export { useCarousel };
