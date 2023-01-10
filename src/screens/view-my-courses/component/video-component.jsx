import React from "react";
import ReactPlayer from "react-player";

import { getJsonItemFromLocalStorage } from "../../../shared/helper-functions/save-data";

const VideoPlayer = () => {
  const item = getJsonItemFromLocalStorage("courseDetails");

  return (
    <>
      {/* <video className="w-full " controls>
        <source src={video} type="video/mp4" />
      </video> */}
      <ReactPlayer
        width={"100%"}
        height={"444px"}
        controls
        url={"https://www.youtube.com/watch?v=IqzMUn90tMg"}
        // url={video}
        style={{}}
      />
    </>
  );
};

export default VideoPlayer;
