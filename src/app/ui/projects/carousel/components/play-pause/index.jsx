"use client";

import { FaPlay, FaPause } from "react-icons/fa"; // Importing Play and Pause icons from react-icons
import { useCarousel } from "../../context";

const PlayPauseIcon = () => {
  const { isPlaying, setIsPlaying, isPlayingRef } = useCarousel();
  function handleIsPlaying() {
    isPlayingRef.current = !isPlayingRef.current;
    setIsPlaying(!isPlaying);
  }

  return (
    <span
      onClick={handleIsPlaying} // Toggle the play/pause state on click
      className="cursor-pointer absolute right-[25vw] text-xl md:text-2xl text-blue-400 hover:text-blue-500" // Tailwind CSS for styling
    >
      {isPlaying ? <FaPause className={``} /> : <FaPlay className={``} />}
    </span>
  );
};

export default PlayPauseIcon;
