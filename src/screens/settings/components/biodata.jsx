import React, { useState } from "react";

import { active, restofstyle } from "../../../shared/shared";

const Biodata = () => {
  const details = [
    { title: "Full name", desc: "Titilope Ayodele" },
    { title: "Matric No", desc: "19000473" },
    { title: "Programme", desc: "B.Sc. Political Science" },
    { title: "Level", desc: "200" },
    { title: "Session", desc: "2022/2023" },
    { title: "Faculty", desc: "Social Science" },
    { title: "Department", desc: "Political Science" },
    { title: "Sex", desc: "Female" },
    { title: "Email", desc: "titiayodele@gmail.com" },
    { title: "Phone No", desc: "09090112242" },
    {
      title: "Home Address",
      desc: "14, taye-solarin street, off total fueling station, Ikeja, Lagos",
    },
    { title: "Mode of Entry", desc: "UTME" },
    { title: "Student Status", desc: "Returning Student" },
    { title: "Date of Birth", desc: "11-02-1996" },
    { title: "State of Origin", desc: "Lagos State" },
    { title: "L.G.A", desc: "Amuwo-odofin" },
  ];
  const guardianDetails = [
    { title: "Full name", desc: "Ayodele Shola" },

    { title: "Sex", desc: "Male" },
    { title: "Email", desc: "omoayodele@gmail.com" },
    { title: "Phone No", desc: "09090113251" },
    {
      title: "Home Address",
      desc: "14, taye-solarin street, off total fueling station, Ikeja, Lagos",
    },
  ];
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-col mt-6 justify-center ">
      <div className=" md:w-[300px]  w-full border-extraLightGrey border-b mb-8">
        <ul className="flex   flex-wrap  lg:text-base whitespace-nowrap space-x-2 ">
          <li
            onClick={() => {
              setOpenTab(1);
            }}
            className={` ${openTab === 1 && active} ${restofstyle}`}
          >
            Your Details
          </li>
          <li
            onClick={() => {
              setOpenTab(2);
            }}
            className={` ${openTab === 2 && active} ${restofstyle}`}
          >
            Guardian Details
          </li>
        </ul>
      </div>
      <div className="w-full ">
        <div className={openTab === 1 ? "block" : "hidden"}>
          {details.map((item) => {
            return (
              <div
                key={item.title}
                className="grid font-[600] grid-cols-4 md:gap-0  md:pb-8 pb-5"
              >
                <p className="text-lightGrey ">{item.title}</p>
                <p className="col-span-3 md:ml-0 ml-12">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          {guardianDetails.map((item) => {
            return (
              <div
                key={item.title}
                className="grid font-[600] grid-cols-4 md:pb-8 pb-5"
              >
                <p className="text-lightGrey">{item.title}</p>
                <p className="col-span-3 md:ml-0 ml-12">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Biodata;
