import "./homevideo.scss"; // Import the SCSS file for styling
import { useRef } from "react";

const HomeVideo = () => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const duration = video.duration;

    // If the video has 3 seconds or less remaining, restart the video
    if (video.currentTime >= duration - 3) {
      video.currentTime = 0; // Restart from the beginning
      video.play(); // Continue playing
    }
  };

  return (
    <div className="home-video">
      <video
        ref={videoRef}
        src={"/limbaxkmska.mp4"}
        autoPlay
        loop
        muted
        playsinline
        onTimeUpdate={handleTimeUpdate}
      ></video>
    </div>
  );
};

export default HomeVideo;
