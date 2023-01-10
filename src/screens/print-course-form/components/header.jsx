import React from "react";
import Avatar from "../../../asssets/images/avatar.svg";
import Logo from "../../../asssets/images/Logo.svg";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center md:px-12 md:p-0 p-2 px-0">
        <div>
          <img
            className="md:h-[80px] md:w-[80px] h-[60px] w-[60px]"
            src={Logo}
            alt="school-logo"
          />
        </div>
        <div>
          <h1 className="font-[700] md:text-[24px] text-[13px] text-center">
            Ladoke Akintola University Of Technology, Ogbomoso
          </h1>
          <h2 className=" md:text-[18px] text-[12px] text-center">
            EXCELLENCE, INTEGRITY, SERVICE
          </h2>
        </div>
        <div>
          <img
            className="md:h-[80px] md:w-[80px] h-[60px] w-[60px]"
            src={Avatar}
            alt="avatar"
          />
        </div>
      </div>
      <hr className="mt-5 text-extraLightGrey" />
      <h3 className="font-[700] md:text-[20px] py-5 text-[18px] text-base_range text-center">
        2019/2020 ACADEMIC SESSION RESULT
      </h3>
    </>
  );
};

export default Header;
