import { RadioGroup } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbAddressBook } from "react-icons/tb";
import { useGlobalContext } from "../../context/globalContext";
import { Container, MainContainer } from "../../misc/component-wrapper";
import Breadcumb from "../../shared/breadcumb";
import { getJsonItemFromLocalStorage } from "../../shared/helper-functions/save-data";
import { active, Badge, restofstyle } from "../../shared/shared";
import Assignment from "./component/assignment/assignment";
import Chat from "./component/chat/chat";
import Transcript from "./component/course-material/transcript";
import Quiz from "./component/quiz/quiz";
import StartQuiz from "./component/quiz/start-quiz";
import VideoPlayer from "./component/video-component";

const Class = () => {
  const { show, setShow, openTab, setOpenTab } = useGlobalContext();
  const tabData = [
    {
      icon: <FiPlayCircle className="text-base_range text-[24px] " />,
      title: "lecture",
      subject: "African development, religions and culture",
    },
    {
      icon: <FiPlayCircle className="text-base_range text-[24px] " />,
      title: "lecture",
      subject: "Nigerian perception of his world",
    },
    {
      icon: <TbAddressBook className="text-base_range text-[24px]  " />,
      title: "Quiz",
      subject: "Quiz 1",
    },
    {
      icon: <TbAddressBook className="text-base_range text-[24px] " />,
      title: "Assignment",
      subject: "African culture & groups",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(tabData[0]);

  const item = getJsonItemFromLocalStorage("courseDetails");
  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <MainContainer>
      <Container>
        <Breadcumb
          show={true}
          page1={"All Courses"}
          page2={"Course details"}
          page3={"Class"}
          link={"/my-learning"}
        />
        <section className="grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-0 w-full md:pt-12 pt-4  my-2">
          <article className=" border-r h-full md:pr-4 pr-0 border-[#FAF8F7]">
            <div className="px-6 py-4 rounded-xl  font-[600]  border border-base_range mb-8 bg-sidebarOrange">
              <p>{item.code} </p>
              <p>{item.title} - Week 1</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2 mb-4 border-sidebarOrange">
              <p className="font-[600]">Week 1 content</p>

              <RiArrowDropDownLine className="rounded-full h-6 w-6 bg-sidebarOrange cursor-pointer" />
            </div>

            <div className="w-full">
              <div className=" w-full max-w-md">
                <RadioGroup value={selected} onChange={setSelected}>
                  <div className="">
                    {tabData.map((item, index) => (
                      <RadioGroup.Option
                        key={index}
                        value={item}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? " bg-sidebarOrange border-l-[4px] border-base_range cursor-pointer"
                              : ""
                          }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer  px-2 py-2 focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Description
                              className={"w-full"}
                              as="div"
                              onClick={() => {
                                active &&
                                  item.title === "Quiz" &&
                                  setShow(true);
                              }}
                            >
                              <div className="flex  items-center justify-between">
                                {item.icon}
                                <div className="w-full px-3">
                                  <p className="text-[14px] text-[#525354]">
                                    {item.title}
                                  </p>
                                  <p
                                    title={item.subject}
                                    className="font-[600]"
                                  >
                                    {item.subject.length > 20
                                      ? item.subject.slice(0, 30) + "..."
                                      : item.subject}
                                  </p>
                                </div>

                                <label className="inline-flex items-center ">
                                  <input
                                    checked={active ? true : false}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5  checked:bg-base_range cursor-pointer default:ring-2 border border-base_range ring-base-range appearance-none checked:text-customWhite"
                                  />
                                </label>
                              </div>
                            </RadioGroup.Description>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="border-b border-sidebarOrange mt-8" />
            <p className="font-[600] mt-2">Saved notes</p>
          </article>
          {show ? (
            <article className="col-span-3 mt-3 md:mt-0">
              <StartQuiz />
            </article>
          ) : (
            <article className="col-span-3">
              <VideoPlayer />
              <div className="flex flex-col mt-6 justify-center ">
                <div className="border-sidebarOrange border-b ">
                  <ul className="flex text-xs md:w-2/3 w-full flex-wrap justify-between lg:text-base whitespace-nowrap space-x-2 ">
                    <li
                      onClick={() => {
                        setShowDropdown(!showDropdown);
                        setOpenTab(1);
                      }}
                      className={` ${openTab === 1 && active} ${restofstyle}`}
                    >
                      <div className=" peer  flex  items-center transition-all duration-200  ">
                        <p>Course materials</p>{" "}
                        <RiArrowDropDownLine className="text-3xl" />
                      </div>
                      {showDropdown && (
                        <div
                          className="absolute  z-10 mt-6 w-56 origin-top-right rounded-md bg-customWhite shadow-xl  focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabindex="-1"
                        >
                          <div className="py-1 text-[#000000]" role="none">
                            <span
                              className="text-gray-700  hover:bg-[#FEFBF7] block px-5 py-3 text-sm"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-0"
                            >
                              Lecture Video
                            </span>
                            <span
                              className="text-gray-700 hover:bg-[#FEFBF7] block px-5 py-3 text-sm"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-1"
                            >
                              Subtitle
                            </span>
                            <span
                              className="text-gray-700 hover:bg-[#FEFBF7] block px-5 py-3 text-sm"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-2"
                            >
                              Lecture material PDF
                            </span>
                          </div>
                        </div>
                      )}
                    </li>
                    <li
                      onClick={() => {
                        setShowDropdown(false);
                        setOpenTab(2);
                      }}
                      className={` ${openTab === 2 && active} ${restofstyle}`}
                    >
                      Chat
                      <Badge value={"12"} />
                    </li>
                    <li
                      onClick={() => {
                        setShowDropdown(false);
                        setOpenTab(3);
                      }}
                      className={` ${openTab === 3 && active} ${restofstyle}`}
                    >
                      Quiz
                      <Badge value={"1"} />
                    </li>
                    <li
                      onClick={() => {
                        setShowDropdown(false);
                        setOpenTab(4);
                      }}
                      className={` ${openTab === 4 && active} ${restofstyle}`}
                    >
                      Assignments
                      <Badge value={"1"} />
                    </li>
                  </ul>
                </div>
                <div onClick={() => setShowDropdown(false)} className="w-full ">
                  <div className={openTab === 1 ? "block" : "hidden"}>
                    <div className="flex   border-sidebarOrange border-b mb-6">
                      <p className="text-base_range py-3 px-4 bg-sidebarOrange">
                        Transcript
                      </p>
                      <p className="py-3 px-4">Save Note</p>
                    </div>
                    <Transcript />
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"}>
                    <Chat />
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"}>
                    <Quiz />
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"}>
                    <Assignment />
                  </div>
                </div>
              </div>
            </article>
          )}
        </section>
      </Container>
    </MainContainer>
  );
};

export default Class;
