import React from "react";
import EmptyCourse from "../../asssets/images/no-course.svg";

const NoCourse = () => {
  return (
    <div className=" w-full mx-auto lg:w-[230px] text-center lg:mb-4 mb-0">
      <div className="flex justify-center">
        <img src={EmptyCourse} alt="no-course-illustration" />
      </div>
      <h3 className="font-quicksand font-[600] text-[18px] space-x-2">
        No Course Yet!
      </h3>
      <p className="font-[400] text-[14px] text-lightGrey">
        You don’t have any ongoing course today.
      </p>
    </div>
  );
};

export default NoCourse;
