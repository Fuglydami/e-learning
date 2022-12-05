import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../misc/component-wrapper";
import CustomButton from "../../shared/custom-button";
import { ModalWrapper } from "../../shared/modal-wrapper";
import { Success } from "../reset-password/response";
import CarryOverCourses from "./component/carryover-course";
import CourseOverview from "./component/course-overview";
import NormalCourses from "./component/normal-course";

const RegisterCourseScreen = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Title show={true} title={"Register Courses"} />
      <CourseOverview />
      <NormalCourses />
      <CarryOverCourses />
      <div className="mt-6">
        <CustomButton
          containerStyle={"mt-4"}
          title={"Submit selected courses "}
          buttonStyle={"lg:w-1/3 w-full font-[600]  bg-base_range white"}
          onClick={openModal}
        />
      </div>

      <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
        <Success
          title={"Course Registration Completed"}
          paragraph={
            "Congratulations, you have completed your course registration."
          }
          onClick={() => navigate("/print-all-course")}
          buttonText={"Print course form"}
        />
      </ModalWrapper>
    </>
  );
};

export default RegisterCourseScreen;
