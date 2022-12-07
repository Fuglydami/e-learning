import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import CustomButton from "../../../shared/custom-button";
import { CustomPasswordInput } from "../../../shared/custom-input";
import { ModalWrapper } from "../../../shared/modal-wrapper";
import { CustomToast } from "../../../shared/toast";

const ShowCGPA = ({ setOpenTab, openTab }) => {
  const [password, setPassword] = useState("");
  const { openModal, loading, error, isModalOpen, closeModal, show, setShow } =
    useGlobalContext();
  useEffect(() => {
    if (openTab === 3) {
      setShow(false);
      openModal();
      setPassword("");
    }
  }, [openTab]);

  const showGPA = () => {
    if (password) {
      setShow(true);
      closeModal();
    } else {
      // toast.error("Enter your password!");
      CustomToast("Enter your password!", "warning");
    }
  };
  return (
    <div>
      {show && (
        <div className=" md:w-1/3 w-3/5 rounded-xl border-2 border-base_range mx-auto p-6 md:mt-16 mt-8 bg-sidebarOrange">
          <div className="space-y-4 text-center">
            <h3 className="text-[32px]">Your CGPA is</h3>
            <h3 className="text-[32px] font-[700] text-base_range">4.25</h3>
          </div>
        </div>
      )}
      <ModalWrapper
        isOpen={isModalOpen}
        closeModal={() => {
          closeModal();
          setOpenTab(2);
        }}
      >
        <div className="flex flex-col text-center lg:w-[450px] w-full mx-auto items-center justify-center space-y-4 mb-6">
          <h2 className="text-3xl w-[390px] md:text-4xl font-bold">
            Show CGPA
          </h2>
          <p className="text-lightGrey text-md md:text-[18px] ">
            Enter your password to view your CGPA
          </p>
        </div>
        <CustomPasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Enter Password"}
        />
        <CustomButton
          title={"Proceed"}
          onClick={showGPA}
          buttonStyle="bg-base_range white  w-full text-[18px] font-[600]  py-4 mt-4"
        />
        {/* <Success
          title={"Quiz Submitted."}
          buttonText={"Continue"}
          paragraph={"You have successfully completed the Quiz."}
        /> */}
      </ModalWrapper>
    </div>
  );
};

export default ShowCGPA;
