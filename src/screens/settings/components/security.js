import React from "react";
import { useGlobalContext } from "../../../context/globalContext";
import CustomButton from "../../../shared/custom-button";
import { CustomPasswordInput } from "../../../shared/custom-input";

const Security = () => {
  const { show, setShow } = useGlobalContext();
  return (
    <>
      {show ? (
        <>
          <div className="my-10">
            <p className="text-[18px] ">Password</p>
            <div className="">
              <CustomPasswordInput placeholder={"Enter your password"} />
              <CustomPasswordInput placeholder={"New Password"} />
            </div>
            <div className="flex  justify-end gap-6">
              <CustomButton
                padding=" py-2 "
                title={"Cancel"}
                onClick={() => setShow(false)}
                buttonStyle={
                  "bg-sidebarOrange w-[80px]  text-base_range font-[600] text-[14px] rounded-md"
                }
              />
              <CustomButton
                padding=" py-2 "
                title={"Save"}
                buttonStyle={
                  "bg-base_range w-[80px] text-customWhite font-[600] text-[14px] rounded-md"
                }
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-between my-10">
          <div className="w-2/3 4/5">
            <p className="text-[18px]">Password</p>
            <p className="text-[14px] text-lightGrey">
              Change you account password
            </p>
          </div>
          <div className="flex  items-center ">
            <CustomButton
              padding="px-5 py-2 "
              onClick={() => setShow(true)}
              title={"Change"}
              buttonStyle={"bg-base_range white text-[14px] rounded-md"}
            />
          </div>
        </div>
      )}
      <div className="flex justify-between  my-10">
        <div className="w-2/3">
          <p className="text-[18px]">Two-step Verification</p>
          <p className="text-[14px] text-lightGrey">
            Two-step verification gives you additional security by requiring a
            verification code whenever you sign in on a new device.
          </p>
        </div>
        <div className="flex  items-center">
          <CustomButton
            padding="px-5 py-2 "
            title={"Turn On"}
            buttonStyle={"bg-base_range white text-[14px] rounded-md"}
          />
        </div>
      </div>
    </>
  );
};

export default Security;
