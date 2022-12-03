import React from "react";

const CustomButton = ({
  title,
  onClick,
  containerStyle,
  buttonStyle,
  icon,
  padding = "px-4 py-4",
}) => {
  const container = ` ${containerStyle}`;
  const buttonclassName = ` flex gap-2 items-center justify-center rounded-xl font-mulish border border-transparent ${padding}  text-[20px] font-medium   focus:outline-none transition duration-150 ease-in-out  focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2  ${buttonStyle}`;
  return (
    <div className={container}>
      <button type="submit" className={buttonclassName} onClick={onClick}>
        {title}
        {icon}
      </button>
    </div>
  );
};

export default CustomButton;
