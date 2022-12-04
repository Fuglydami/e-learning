import React from "react";

const StudentDetails = () => {
  const columnClass =
    "w-full grid grid-cols-2 md:text-[20px] text-[16px] font-[400]";
  const descClass = "font-[700] md:text-[20px] text-[16px]";
  return (
    <section className="lg:mb-6 mb-4">
      <div className="lg:p-6 p-4 bg-[#FEFBF7] rounded-md">
        <h1 className="font-bold text-xl mb-3">Student Details</h1>
        <div className="flex lg:flex-row flex-col mb-4 lg:mb-3">
          <div className={columnClass}>
            <span>Name:{"  "}</span>
            <span className={descClass}>Titilope Ayodele</span>
          </div>
          <div className={columnClass}>
            <span>Faculty: </span>
            <span className={descClass}>Social Science</span>
          </div>
          <div className={columnClass}>
            <span>Level: </span> <span className={descClass}>200 Level</span>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className={columnClass}>
            <span>Matric No:</span> <span className={descClass}>19000473</span>
          </div>
          <div className={columnClass}>
            <span>Department: </span>
            <span className={descClass}>Political Science</span>
          </div>
          <div className={columnClass}>
            <span> Programme: </span>
            <span className={descClass}>B.Sc Political Science</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDetails;
