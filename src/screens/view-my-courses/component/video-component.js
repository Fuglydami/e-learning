import React from "react";
import ReactPlayer from "react-player";

import { getJsonItemFromLocalStorage } from "../../../shared/helper-functions/save-data";

const VideoPlayer = () => {
  const item = getJsonItemFromLocalStorage("courseDetails");

  return (
    <>
      <ReactPlayer
        width={"100%"}
        height={"444px"}
        controls
        url="https://www.youtube.com/watch?v=ECU44OYzfb4"
        style={{}}
      />
    </>
  );
};

export default VideoPlayer;
