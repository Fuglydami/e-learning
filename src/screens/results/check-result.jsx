import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, MainContainer } from "../../misc/component-wrapper";
import CustomButton from "../../shared/custom-button";
import { CustomSelectInput } from "../../shared/custom-input";

const CheckResult = () => {
  let navigate = useNavigate();
  return (
    <MainContainer>
      <Container>
        <section className="md:w-[464px] w-full mx-auto pb-20">
          <h1 className="text-center my-8 text-[24px] font-[700]">Results</h1>
          <h2 className="text-center capitalize font-[700] text-[20px]">
            Note
          </h2>
          <p className="px-4 text-center mb-6">
            Select the session and result type to see your result.
          </p>
          <CustomSelectInput label={"Session"} placeholder={"2020/2021"} />
          <CustomSelectInput
            label={"Payment Type"}
            placeholder={"School Charges"}
          />

          <CustomButton
            title={"Submit"}
            onClick={() => navigate("/check-result/result")}
            buttonStyle={"w-full mt-8 bg-base_range white"}
          />
        </section>
      </Container>
    </MainContainer>
  );
};

export default CheckResult;
