import React from "react";
import { CiSearch } from "react-icons/ci";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar/sidebar";
import { useGlobalContext } from "../context/globalContext";

export const Container = ({ children }) => {
  return (
    <div
      className={`flex font-mulish   lg:flex-row lg:ml-10 ml-0 flex-col   z-10 top-32`}
    >
      <div
        className={`flex flex-col  w-full pageHeight rounded-xl lg:p-6 p-0 mb-6 bg-customWhite`}
      >
        {children}
      </div>
    </div>
  );
};
export const MainContainer = ({ children }) => {
  const { setShowSidebar } = useGlobalContext();

  return (
    <div className={` flex font-mulish`}>
      <Sidebar />
      <div className={` md:relative block lg:left-[230px] left-[0px] home`}>
        <div
          onClick={() => setShowSidebar(false)}
          className={` animate-in slide-in-from-left-48 duration-300  px-2`}
        >
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};
export const SectionContainer = ({ children }) => {
  return (
    <div
      className={`lg:px-6 pb-12 px-0 rounded-xl
         bg-customWhite
       `}
    >
      {children}
    </div>
  );
};
export const Title = ({ title, show, children, childrenClass }) => {
  return (
    <section className="flex lg:flex-row flex-col md:pt-0 pt-4  w-full justify-between">
      <div className="flex  ">
        <p className="font-Quicksand font-bold md:pb-0 pb-2 text-xl">{title}</p>
      </div>
      <div>
        {show ? (
          <>
            <input
              className=" bg-[#F2F5F3] placeholder:text-[#898D88] md:w-[289px]  w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search a Course"
            />

            <CiSearch className="relative bottom-7 lg:left-64 left-80" />
          </>
        ) : (
          <div className={childrenClass}>{children}</div>
        )}
      </div>
    </section>
  );
};
