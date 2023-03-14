import React from "react";

export const Gesture = ({ gesture }) => {
  const videoRef = React.useRef(null);

  const startVideo = () => {
    videoRef.current.style.display = "block";
    videoRef.current.play();
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.style.display = "none";
  };

  return (
    <div
      className="gesture"
      onMouseEnter={() => startVideo()}
      onMouseLeave={() => stopVideo()}
    >
      <div className="gesture__preview">
        <img src={gesture.img} alt="" />
        <video ref={videoRef} className="gesture__video" muted loop>
          <source src={gesture.video} type="video/mp4" />
        </video>
      </div>
      <p
        className="text text--lg gesture__text"
        dangerouslySetInnerHTML={{ __html: gesture.name }}
      ></p>
    </div>
  );
};
