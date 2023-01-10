import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import { MdOutlineAssignment } from "react-icons/md";

const CourseContent = () => {
  const data = [
    {
      mode: "lecture",
      title: "African development, religions and culture",
      desc: "Definition of Development, religion and culture. African development, Religious beliefs. Cultural lorem ipsum dolor noro fit help one.",
      icon: <FiPlayCircle className="text-base_range text-[24px]" />,
      hr: <hr className="text-[#FAF8F7] my-6" />,
    },
    {
      mode: "lecture",
      title: "Nigerian perception of his world",
      desc: "Definition of Development, religion and culture. African development, Religious beliefs. Cultural lorem ipsum dolor noro fit help one.",
      icon: <FiPlayCircle className="text-base_range text-[24px]" />,
      hr: <hr className="text-[#FAF8F7] my-6" />,
    },
    {
      mode: "Assignment",

      desc: "African culture & groups",
      icon: <MdOutlineAssignment className="text-base_range text-[24px]" />,
    },
  ];
  return (
    <>
      {" "}
      {data.map((item, index) => {
        return (
          <>
            <div key={index} className="flex justify-between md:gap-12 gap-2">
              <div className="flex space-x-3 cursor-pointer">
                {item.icon}
                <div>
                  <p className="font-[600] text-[14px] text-lightGrey">
                    {item.mode}
                  </p>
                  <p className="font-[600] mb-4">{item.title}</p>
                  <p className="font-[300] text-lightGrey">{item.desc}</p>
                </div>
              </div>
              <label className="inline-flex items-center ">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 mr-8 checked:bg-base_range cursor-pointer default:ring-2 border border-base_range ring-base-range appearance-none checked:text-customWhite"
                />
              </label>
            </div>
            {item.hr}
          </>
        );
      })}
    </>
  );
};

export default CourseContent;
