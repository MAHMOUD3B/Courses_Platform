"use client";
import { useRef, useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const [showControls, setShowControls] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const vidRef = useRef(null);

  // Array of video links
  const videoLinks = ["/sea.mp4", "/mountain.mp4"];

  // Array of posters for each video
  const videoPosters = ["/images/sea.jpg", "/images/mountain.jpg"];

  const playVideo = () => {
    if (vidRef.current) {
      setShowControls(true);
      vidRef.current.play();
    }
  };

  const handlePause = () => {
    setShowControls(false);
  };

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoLinks.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowControls(false); // Stop controls if it's the last video
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement === vidRef.current) {
        // Rotate the screen to landscape mode when entering fullscreen
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock("landscape").catch((err) => {
            console.warn("Orientation lock not supported:", err);
          });
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="md:w-[65%] md:pe-7 sticky top-2 z-30 md:relative md:top-0">
      <div className="relative">
        <video
          ref={vidRef}
          src={videoLinks[currentVideoIndex]} // Use the current video link
          type="video/mp4"
          width={500}
          height={350}
          preload="metadata"
          controls={showControls}
          poster={videoPosters[currentVideoIndex]} // Use the current poster
          className="rounded-md w-full object-cover"
          onPause={handlePause} // Show overlay when video is paused
          onEnded={handleVideoEnd} // Play the next video when the current one ends
          loading="lazy"
        />
        {!showControls && (
          <div className="absolute w-full h-full z-20 bg-[rgba(0,0,0,0.6)] rounded-md top-0 left-0 flex-center">
            <span
              onClick={playVideo} // Resume video playback
              className="flex-center w-[50px] h-[50px] rounded-full bg-white text-red-500 cursor-pointer"
            >
              <FaPlay />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
