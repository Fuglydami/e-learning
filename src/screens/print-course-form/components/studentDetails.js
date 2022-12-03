import React from "react";

const StudentDetails = () => {
  const columnClass =
    "lg:w-[30%] w-full gap-8 md:text-[20px] text-[16px] font-[400]";
  return (
    <section className="lg:mb-6 mb-4">
      <div className="lg:p-6 p-4 bg-[#FEFBF7] rounded-md">
        <h1 className="font-bold text-xl mb-3">Student Details</h1>
        <div className="flex lg:flex-row flex-col mb-4 lg:mb-3">
          <div className={columnClass}>
            Name:{"  "}
            <span className="font-[700] md:text-[20px] text-[16px]">
              Titilope Ayodele
            </span>
          </div>
          <div className={columnClass}>
            Faculty:{" "}
            <span className="font-[700] text-[20px]">Social Science</span>
          </div>
          <div className={columnClass}>
            Level: <span className="font-[700] text-[20px]">200 Level</span>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className={columnClass}>
            Matric No: <span className="font-[700] text-[20px]">19000473</span>
          </div>
          <div className={columnClass}>
            Department:{" "}
            <span className="font-[700] text-[20px]">Political Science</span>
          </div>
          <div className={columnClass}>
            Programme{" "}
            <span className="font-[700] text-[20px]">
              B.Sc Political Science
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDetails;
