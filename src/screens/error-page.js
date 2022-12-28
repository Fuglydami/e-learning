import React from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="bg-sidebarOrange h-screen flex justify-center items-center">
        <div className="flex items-center">
          <div className="p-4 leading-7 flex flex-col items-end border-r-4 border-base_range">
            <h1 className="text-[28px] font-[600]">404</h1>
            <p className="text-[20px]">Page not found</p>
          </div>
          <div
            onClick={() => navigate(-1)}
            className="flex p-4 cursor-pointer flex-col   justify-center"
          >
            <p className="text-[18px] mt-4 leading-3 font-[600]">Go Back</p>
            <HiOutlineArrowLongLeft className="text-[34px]" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
