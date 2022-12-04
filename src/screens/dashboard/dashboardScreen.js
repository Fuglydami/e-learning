import React from "react";
import { Link } from "react-router-dom";
import Navigate from "../../asssets/icons/navigate.svg";
import Illustration from "../../asssets/images/Illustration.png";
import { SectionContainer } from "../../misc/component-wrapper";
import ClassList from "./classList";
// import NoCourse from "./noCourse";
import OnGoingCourse from "./onGoingCourse";

const DashboardScreen = () => {
  return (
    <div className="flex  lg:flex-nowrap flex-wrap gap lg:gap-6 lg:ml-10 ml-0 gap-0">
      <div className="flex flex-col  w-full">
        <div className=" rounded-xl flex justify-between bg-base_range mb-6">
          <div className="p-5 space-y-5 lg:w-9/12 w-full">
            <h1 className="font-bold text-xl white font-Quicksand">
              Announcements!!!
            </h1>
            <p className="font-normal white  leading-tight lg:leading-6">
              This 2022/2023 Harmattan Course registration closes on or before
              29th of April 2022. An extra fee will be attracted after the
              closing date for late registration.
            </p>
            <button className="px-6 rounded-md py-2 bg-[#FFDB8D] outline-none border-none">
              <Link to={"/register-course"}>Click to Register</Link>
            </button>
          </div>
          <img
            className="xl:flex hidden"
            src={Illustration}
            alt="illustration"
          />
        </div>
        <SectionContainer>
          <div className="flex justify-between items-center font-Quicksand px-2 lg:px-0 my-6">
            <h3 className="font-[700] lg:text-[20px] text-md">
              Ongoing Courses
            </h3>
            <div className="flex justify-center space-x-3 cursor-pointer">
              <p className="font-[700] lg:text-[14px] text-[12px] text-base_range">
                All Courses
              </p>
              <div className="flex justify-center items-center">
                <img className="w-2 h-2 " src={Navigate} alt="navigate" />
              </div>
            </div>
          </div>
          <OnGoingCourse />
          {/* <NoCourse /> */}
        </SectionContainer>
      </div>
      <div className="lg:w-4/12  rounded-xl w-full bg-[#FFFFFF]">
        <ClassList />
      </div>
    </div>
  );
};

export default DashboardScreen;
