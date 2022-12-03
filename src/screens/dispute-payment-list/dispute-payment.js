import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, MainContainer, Title } from "../../misc/component-wrapper";
import CustomButton from "../../shared/custom-button";
import DisputeList from "./components/dispute-list";

const DisputePayment = () => {
  let navigate = useNavigate();
  return (
    <MainContainer>
      <Container>
        <Title title={"Dispute Payment"}>
          <CustomButton
            buttonStyle={"bg-base_range white text-[14px]"}
            title={"Create Payment Dispute"}
            onClick={() => {
              navigate("/dispute-payment/create-dispute");
            }}
          />
        </Title>
        {/* <EmptyDispute /> */}
        <DisputeList />
      </Container>
    </MainContainer>
  );
};

export default DisputePayment;
