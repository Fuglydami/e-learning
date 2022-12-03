import React, { useContext } from "react";
import { BiErrorAlt, BiTimeFive } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Notification from "../asssets/icons/notification.svg";
import Avatar from "../asssets/images/avatar.svg";
import Wave from "../asssets/images/wave.svg";
import { useGlobalContext } from "../context/globalContext";
import { tabContext } from "../context/tabContext";

const notifStyle = {
  height: "7px",
  width: "7px",
  borderRadius: "3px",
  background: "#C85100",
  position: "absolute",
  right: "24.96rem",
  top: "43.65px",
};
const Navbar = () => {
  const context = useContext(tabContext);
  const { setShowSidebar, showSidebar } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  return (
    <div className="lg:ml-10 ml-4 mt-8  flex items-center">
      <div className="flex w-full justify-between">
        <div className="flex flex-col lg:space-y-1 space-y-0 mb-7">
          <div className="flex justify-center items-center space-x-2">
            <h2 className="text-[20px] md:text-[24px] font-bold">
              Hi Titilope Ayodele
            </h2>
            <img className="animate-waving-hand" src={Wave} alt="waving-hand" />
          </div>
          <p className="text-lightGrey text-md md:text-xl font-[400] text-green-100">
            Let’s start learning
          </p>
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="block lg:hidden"
        >
          {showSidebar ? (
            <MdOutlineClose className="mr-4 text-[35px] text-lightGrey" />
          ) : (
            <GiHamburgerMenu className="mr-4 text-[35px] text-lightGrey" />
          )}
        </div>
        <div className="lg:flex h-10 items-center space-x-6 hidden ">
          <img
            className="h-[27px]  w-[22px] cursor-pointer"
            src={Notification}
            alt="message"
            onClick={() => setShow(!show)}
          />
          {show && (
            <div className="p-5 absolute top-20 right-24 w-[375px] shadow-lg rounded-lg bg-customWhite">
              <div className="flex justify-between items-center">
                <h3 className="font-[700] text-[20px]">Notifications</h3>
                <p className="text-[14px] text-base_range">Clear all</p>
              </div>
              <p className="text-[14px] font-[400] text-lightGrey mt-4">
                Today
              </p>
              <div className="flex mt-3 justify-between gap-4">
                <div className="bg-[#85DFFF] h-[42px] w-[48px] flex items-center p-3 rounded-full">
                  <BiErrorAlt />
                </div>
                <div className="col-start-6">
                  <p className="font-[700]">
                    You have GTL 215 Assignment from your Instructor
                  </p>
                  <div className="flex gap-2 items-center text-[14px] text-lightGrey mt-1">
                    <BiTimeFive />
                    <p>10 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="animate-bounce ease-in-out" style={notifStyle} />

          <p className="font-[500] text-[14px]">2022/2023 Harmattan Sem...</p>

          <div className="flex justify-center space-x-2">
            <img
              className="h-[40px] w-[40px] flex"
              src={Avatar}
              alt="message"
            />

            <div className="leading-[20px]">
              <p className="font-[600] text-[14px]">Titilope Ayodele</p>
              <p className=" font-[600] text-[14px] text-[#525354]">19000473</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
