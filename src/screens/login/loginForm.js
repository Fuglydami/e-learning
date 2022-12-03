import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../../asssets/images/Logo.svg";
import CustomButton from "../../shared/custom-button";
import {
  CustomPasswordInput,
  CustomTextInput,
} from "../../shared/custom-input";
import { ModalWrapper } from "../../shared/modal-wrapper";
import ForgetPasword from "../reset-password/forget-pasword";
import ResetPasword from "../reset-password/reset-password";
import { Success } from "../reset-password/response";
import VerifyPasword from "../reset-password/verify-password";

export const LoginForm = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [toggleModal, setToggleModal] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex mt-16 xl:mt-0  flex-1 flex-col  justify-center lg:items-start items-center ml-0  xl:ml-32 relative">
        <div className="lg:hidden flex mb-10 -mt-6 items-center justify-start space-x-3 ">
          <div className=" w-12 h-14 flex items-center">
            <img src={CompanyLogo} alt="company-logo" />
          </div>
          <span className="font-bold text-base_range text-xl">LODLC</span>
        </div>
        <div className="flex  flex-1 flex-col  xl:justify-center w-full px-4 lg:px-8 xl:px-0 lg:max-w-lg">
          <div className="flex flex-col space-y-4 mb-7 ">
            <h2 className="text-3xl md:text-4xl font-bold">Login</h2>
            <p className="text-lightGrey text-md md:text-xl text-green-100">
              Login to access lectures and account informations
            </p>
          </div>
          <form action="" noValidate="novalidate">
            <CustomTextInput
              label={"Username or Matric No"}
              value={value}
              textColor={"mb-3"}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Enter your Username or Matric no"}
            />
            <CustomPasswordInput
              label={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Enter your Password"}
            />

            <p
              onClick={() => {
                openModal();
                setToggleModal("forget-password");
              }}
              className="font-semibold text-base_range  float-right mb-12 cursor-pointer"
            >
              Forgot Password?
            </p>
            <CustomButton
              title={"Login"}
              onClick={() => {
                navigate("/dashboard");
              }}
              buttonStyle="bg-base_range white w-full text-xl py-4 font-semibold"
            />
          </form>
        </div>
      </div>
      <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
        {toggleModal === "forget-password" ? (
          <ForgetPasword
            value={value}
            setValue={setValue}
            setToggleModal={setToggleModal}
          />
        ) : null}
        {toggleModal === "verification" ? (
          <VerifyPasword setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === "reset-password" ? (
          <ResetPasword setToggleModal={setToggleModal} />
        ) : null}
        {toggleModal === "success" ? (
          <Success
            onClick={() => closeModal()}
            setToggleModal={setToggleModal}
            title={"Password Reset Successful"}
            buttonText={"Login"}
            paragraph={"Congratulations, your password reset was successful!"}
          />
        ) : null}
      </ModalWrapper>
    </>
  );
};
