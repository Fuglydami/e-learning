import React from "react";
import { Container, MainContainer } from "../../misc/component-wrapper";
import RegisterCourseScreen from "./registerCourseScreen";

const RegisterCourses = () => {
  return (
    <MainContainer>
      <Container>
        <RegisterCourseScreen />
      </Container>
    </MainContainer>
  );
};

export default RegisterCourses;
