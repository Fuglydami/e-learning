import React from "react";

const NothingToDisplay = ({ image, title, paragraph }) => {
  return (
    <div className="flex flex-col justify-center mx-auto items-center gap-4 lg:w-80 w-full mt-10 my-6">
      <img src={image} height="150px" width={"150px"} alt="chat-img" />
      <h3 className="font-[700] text-[20px]">{title}</h3>
      <p className="text-center font-[400] text-[#898D88]">{paragraph}</p>
    </div>
  );
};

export default NothingToDisplay;
