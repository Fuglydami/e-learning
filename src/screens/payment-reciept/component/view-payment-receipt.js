import React from "react";
import { Container, MainContainer } from "../../../misc/component-wrapper";
import ViewPaymentReceiptScreen from "./viewPaymentReceiptScreen";

const ViewPaymentReceipt = () => {
  return (
    <MainContainer>
      <Container>
        <ViewPaymentReceiptScreen />
      </Container>
    </MainContainer>
  );
};

export default ViewPaymentReceipt;
