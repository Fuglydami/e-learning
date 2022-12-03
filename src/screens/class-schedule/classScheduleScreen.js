import React from "react";
import { SectionContainer } from "../../misc/component-wrapper";
import EventCalender from "./components/calender";
import ClassList from "./components/classList";

const ClassScheduleScreen = () => {
  return (
    <div className="lg:flex block gap lg:gap-6 lg:ml-10 ml-0 gap-0">
      <div className="flex flex-col  w-full">
        <SectionContainer>
          <EventCalender />
        </SectionContainer>
      </div>
      <div className="lg:w-4/12  w-full rounded-xl py-6 bg-[#FFFFFF]">
        <ClassList />
      </div>
    </div>
  );
};

export default ClassScheduleScreen;
