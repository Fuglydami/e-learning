import React from "react";
import CustomButton from "../../shared/custom-button";
import { CustomTextInput } from "../../shared/custom-input";

const ForgetPasword = ({ value, setValue, setToggleModal }) => {
  return (
    <>
      <div className="flex flex-col space-y-4 mb-7">
        <h2 className="text-3xl md:text-4xl font-bold">Forgot Password</h2>
        <p className="text-lightGrey text-md md:text-xl text-green-100">
          Enter your email or phone number to recover password
        </p>
      </div>
      <div className="space-y-14">
        <CustomTextInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={"Enter your email or phone number"}
        />

        <CustomButton
          title={"Reset"}
          onClick={() => {
            setToggleModal("verification");
          }}
          buttonStyle="bg-base_range white w-full text-xl py-4 font-semibold"
        />
      </div>
    </>
  );
};

export default ForgetPasword;
