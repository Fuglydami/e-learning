import React, { useState } from "react";
import { active, restofstyle } from "../../../shared/shared";
import Faqs from "./faqs";

const HelpCenter = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-col mt-6 justify-start ">
      <div className="md:w-[250px]  w-full border-extraLightGrey border-b mb-8">
        <ul className="flex text-xs  flex-wrap  lg:text-base whitespace-nowrap space-x-2 ">
          <li
            onClick={() => {
              setOpenTab(1);
            }}
            className={` ${openTab === 1 && active} ${restofstyle}`}
          >
            FAQs
          </li>
          <li
            onClick={() => {
              setOpenTab(2);
            }}
            className={` ${openTab === 2 && active} ${restofstyle}`}
          >
            General
          </li>
        </ul>
      </div>
      <div className="w-full ">
        <div className={openTab === 1 ? "block" : "hidden"}>
          <Faqs />
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <h3 className="font-[600]">
            Encounter a problem? Reach out to us on{" "}
            <span className="text-base_range">elearning.lodlc@gmail.com</span>{" "}
            or visit LODLC ICT Center to report your problem.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
