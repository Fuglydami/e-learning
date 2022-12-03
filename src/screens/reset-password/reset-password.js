import React, { useState } from "react";
import CustomButton from "../../shared/custom-button";
import { CustomPasswordInput } from "../../shared/custom-input";

const ResetPasword = ({ setToggleModal }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className="flex flex-col space-y-4 mb-9">
        <h2 className="text-3xl md:text-4xl font-bold">Reset Password</h2>
        <p className="text-lightGrey text-md md:text-xl text-green-100">
          Choose a password to login to your account.
        </p>
      </div>
      <form noValidate="novalidate">
        <div className="space-y-5">
          <CustomPasswordInput
            value={password}
            label={"New Password"}
            textColor={"text-lightGrey"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Enter your new password"}
          />
          <CustomPasswordInput
            value={confirmPassword}
            textColor={"text-lightGrey"}
            label={"Confirm Password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={"Confirm your new password"}
          />

          <CustomButton
            title={"Reset"}
            onClick={() => {
              setToggleModal("success");
            }}
            buttonStyle="bg-base_range white mt-12 w-full text-xl py-4 font-semibold"
          />
        </div>
      </form>
    </>
  );
};

export default ResetPasword;
