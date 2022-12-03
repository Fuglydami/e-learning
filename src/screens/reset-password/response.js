import React from "react";
import success from "../../asssets/icons/success.svg";
import CustomButton from "../../shared/custom-button";

export const Success = ({
  closeModal,
  title,
  paragraph,
  onClick,
  buttonText,
  button = (
    <CustomButton
      title={buttonText}
      onClick={onClick}
      buttonStyle="bg-base_range white  w-full text-[18px] font-[600]  py-4 "
    />
  ),
  icon = <img src={success} alt="success" />,
  setToggleModal,
}) => {
  return (
    <>
      <div className="flex flex-col text-center lg:w-[450px] w-full mx-auto items-center justify-center space-y-4 mb-14">
        <div className="mb-6">{icon}</div>
        <h2 className="text-3xl w-[390px] md:text-4xl font-bold">{title}</h2>
        <p className="text-lightGrey text-md md:text-[18px] text-green-100">
          {paragraph}
        </p>
      </div>
      {button}
    </>
  );
};
