import React, { useState } from "react";
import OtpInput from "react-otp-input";
import CustomButton from "../../shared/custom-button";

const VerifyPasword = ({ setToggleModal }) => {
  const [value, setValue] = useState("");
  //   const [color, setColor] = useState(false);

  const inputStyle = {
    border: "1px solid #D8D8D8",
    borderRadius: "12px",
    color: "black",
    width: "60px",
    height: "60px",
    margin: "0 17px",
    // background: value ? "#FFF1E7" : "transparent",
  };
  const focusStyle = {
    outline: "1px solid #C43A27",
    color: "#C43A27",
  };

  const handleChange = (value) => {
    setValue(value);

    console.log(value, "value");
  };
  return (
    <>
      <div className="flex flex-col space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Verification</h2>
        <p className="text-lightGrey text-md md:text-xl text-green-100">
          Enter the 4 digit code sent to almu**@gmail.com
        </p>
      </div>
      <div className="space-y-12 ">
        <div className="flex flex-col justify-center items-center">
          <OtpInput
            value={value}
            onChange={handleChange}
            numInputs={4}
            inputStyle={inputStyle}
            focusStyle={focusStyle}
            houldAutoFocus={"false"}
            isInputNum="true"
          />
        </div>
        <p className="font-semibold text-center text-lightGrey">
          Didn’t get code? <span className="text-base_range"> Send again</span>
        </p>
        <CustomButton
          title={"Verify"}
          onClick={() => {
            setToggleModal("reset-password");
          }}
          buttonStyle="bg-base_range white w-full text-xl py-4 font-semibold"
        />
      </div>
    </>
  );
};

export default VerifyPasword;
