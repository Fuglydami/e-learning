import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import CalenderComeponent from "./calenderComeponent";

const ClassList = () => {
  const [value, onChange] = useState(new Date());
  const data = [
    {
      startTime: "8:00am",
      endTime: "9:00am",
      title: "GNS 202",
      desc: "Introduction to Nigerian Culture",
      color: "courseColor1",
      border: "courseColorBorder1",
    },
    {
      startTime: "10:00am",
      endTime: "12:00pm",
      title: "POL 202",
      desc: "Introduction to Political Science",
      color: "courseColor2",
      border: "courseColorBorder2",
    },
    {
      startTime: "12:00pm",
      endTime: "1:00pm",
      title: "CLE 209",
      desc: "Political Management and Surroundings",
      color: "courseColor3",
      border: "courseColorBorder3",
    },
    {
      startTime: "2:00pm",
      endTime: "4:00pm",
      title: "POL 205",
      desc: "Community Mental Health Studies",
      color: "courseColor4",
      border: "courseColorBorder4",
    },
  ];
  return (
    <div className="mb-6">
      <div className="mb-8">
        <CalenderComeponent />
        {/* <Calendar
          className={"rounded-xl font-[400] font-mulish border-none"}
          onChange={onChange}
          showNavigation="true"
          value={value}
        /> */}
      </div>
      <h1 className="font-[700] px-4 text-[18px] mb-4">Classes (4)</h1>
      {data.map((item, index) => {
        const { startTime, endTime, title, desc, color, border } = item;
        return (
          <div key={index} className="flex px-4 mb-4">
            <div className="text-[12px] space-y-1 mr-4 flex flex-col justify-center font-[500] w-11 text-lightGrey">
              <p>{startTime}</p>
              <div className="flex justify-center">
                <span className="border-r-2 h-[32px]  border-sidebarOrange" />
              </div>
              <p>{endTime}</p>
            </div>
            <div
              className={`${color} cursor-pointer ${border} font-[600] w-full border-l-4 rounded p-2 `}
            >
              <p>{title}:</p>
              <p>{desc.slice(0, 23)}...</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClassList;
