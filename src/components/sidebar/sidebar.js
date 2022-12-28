import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Logout from "../../asssets/icons/logout.svg";
import CompanyLogo from "../../asssets/images/Logo.svg";
import { useGlobalContext } from "../../context/globalContext";
import { navItem } from "../../misc/data";
import { clearLocalStorage } from "../../shared/helper-functions/save-data";
import Tab from "./tabs";

const Sidebar = () => {
  const { showSidebar } = useGlobalContext();
  let navigate = useNavigate();

  const [navigation, setNativation] = useState("");
  const [tab, setTab] = useState("");
  const location = useLocation();
  const [show, setShow] = useState(true);

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const pathnames = ["/dashboard/course", "/dashboard"];

  const getTitle = (title, subtab) => {
    setNativation(title);
    setTab(subtab);

    // if (title === "Dashboard") {
    //   navigate("/dashboard");
    // } else if (title === "Course") {
    //   navigate("/dashboard/course");
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`lg:flex ${
        showSidebar ? "flex animate-in  slide-in-from-left-48 " : "hidden "
      } flex-col h-screen fixed z-10 py-10 bg-[#FFF1E7] shadow w-[240px] `}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-start space-x-3 px-6">
          <div className=" w-12 h-14 flex items-center">
            <img src={CompanyLogo} alt="company-logo" />
          </div>
          <span className="font-bold text-base_range text-[24px] lg:flex hidden">
            LODLC
          </span>
        </div>

        <div className="flex-1">
          <nav className="pt-2 pb-4 space-y-2 text-sm">
            {navItem.map((item, index) => {
              return (
                <div key={index} className="ml-4 pl-2 rounded-sm ">
                  <Tab item={item} key={index} />
                </div>
              );
            })}

            <nav
              // onClick={() => navigate("/")}
              className="rounded-sm absolute bottom-16 ml-4 pl-2"
            >
              <div
                onClick={() => {
                  clearLocalStorage();
                  navigate("/");
                }}
                className="flex cursor-pointer items-center p-2 space-x-3 rounded-md"
              >
                <img src={Logout} alt="icon" />
                <span className=" font-medium text-[#525354]">Logout</span>
              </div>
            </nav>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
