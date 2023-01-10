import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, MainContainer } from "../../misc/component-wrapper";
import Breadcumb from "../../shared/breadcumb";
import CustomButton from "../../shared/custom-button";
import { CustomSelectInput, CustomTextInput } from "../../shared/custom-input";
import { ModalWrapper } from "../../shared/modal-wrapper";
import { Success } from "../reset-password/response";

const CreateDispute = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <MainContainer>
      <Container>
        <Breadcumb
          link={"/dispute-payment"}
          page1={"Payment"}
          page2={"Create Dispute"}
        />
        <section className="md:w-[464px] w-full mx-auto pb-20">
          <h1 className="text-center my-8 text-[24px] font-[700]">
            Create Dispute
          </h1>
          <h2 className="text-center capitalize font-[700] text-[20px]">
            Note
          </h2>
          <p className="px-4 text-center">
            Enter the details requested below to report a case of unsuccessful
            transaction.
          </p>
          <CustomSelectInput label={"Session"} placeholder={"2020/2021"} />
          <CustomSelectInput
            label={"Payment Type"}
            placeholder={"School Charges"}
          />
          <CustomTextInput
            paddingX="py-4"
            labelStyle={"font-[500]"}
            label={"Transaction No"}
            placeholder={"123456789012345"}
          />
          <CustomButton
            title={"Submit"}
            onClick={() => openModal()}
            buttonStyle={"w-full mt-8 bg-base_range white"}
          />
        </section>
      </Container>

      <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
        <Success
          title={"Dispute Completed"}
          //   closeModal={closeModal}
          paragraph={
            "You have successfully reported an unsuccessful transaction."
          }
          onClick={() => navigate("/dispute-payment")}
          buttonText={"Check out disputes"}
        />
      </ModalWrapper>
    </MainContainer>
  );
};

export default CreateDispute;
