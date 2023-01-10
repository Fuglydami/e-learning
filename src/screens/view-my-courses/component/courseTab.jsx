import { useEffect } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import { active, restofstyle } from "../../../shared/shared";
import CourseAnnouncement from "./course-announcement";
import CourseContent from "./course-content";
const CourseTab = () => {
  const { openTab, setOpenTab } = useGlobalContext();
  useEffect(() => {
    setOpenTab(1);
  }, []);
  return (
    <>
      <div>
        <div className="container mx-auto mt-4">
          <h1 className="font-[700] text-[20px] mb-4">Course Content</h1>
          <div className="flex flex-col  justify-center ">
            <ul className="flex text-xs justify-between lg:text-base whitespace-nowrap flex-wrap space-x-2 border-b border-sidebarOrange ">
              <li
                onClick={() => setOpenTab(1)}
                className={` ${openTab === 1 && active} ${restofstyle}`}
              >
                Week 1
              </li>
              <li
                onClick={() => setOpenTab(2)}
                className={` ${openTab === 2 && active} ${restofstyle}`}
              >
                Week 2
              </li>
              <li
                onClick={() => setOpenTab(3)}
                className={` ${openTab === 3 && active} ${restofstyle}`}
              >
                Week 3
              </li>
              <li
                onClick={() => setOpenTab(4)}
                className={` ${openTab === 4 && active} ${restofstyle}`}
              >
                Week 4
              </li>
              <li
                onClick={() => setOpenTab(5)}
                className={` ${openTab === 5 && active} ${restofstyle}`}
              >
                Week 5
              </li>
              <li
                onClick={() => setOpenTab(6)}
                className={` ${openTab === 6 && active} ${restofstyle} `}
              >
                Week 6
              </li>
              <li
                onClick={() => setOpenTab(7)}
                className={` ${openTab === 7 && active} ${restofstyle} `}
              >
                Week 7
              </li>
              <li
                onClick={() => setOpenTab(8)}
                className={` ${openTab === 8 && active} ${restofstyle}`}
              >
                Week 8
              </li>
            </ul>
            <div className="w-full mt-5">
              <div className={openTab === 1 ? "block" : "hidden"}>
                <CourseContent />
                <CourseAnnouncement />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                Hello Oyedeji
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                Hello Oyedeji
              </div>
              <div className={openTab === 4 ? "block" : "hidden"}>
                Hello Oyedeji
              </div>
              <div className={openTab === 5 ? "block" : "hidden"}>
                Hello Oyedeji
              </div>
              <div className={openTab === 6 ? "block" : "hidden"}>
                Hello Oyedeji
              </div>
              <div className={openTab === 7 ? "block" : "hidden"}>
                Hello Oyedeji
              </div>
              <div className={openTab === 8 ? "block" : "hidden"}>
                Hello Oyedeji
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseTab;
