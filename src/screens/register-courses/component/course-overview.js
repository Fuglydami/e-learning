import React from "react";

const CourseOverview = () => {
  const columnClass = "lg:w-[30%] w-full gap-8 text-[14px]";
  return (
    <section className="lg:mb-10 mb-4">
      <div className="lg:p-6 p-4 bg-sidebarOrange rounded-md">
        <h1 className="font-bold text-xl mb-3">NOTE</h1>
        <div className="flex lg:flex-row flex-col mb-4 lg:mb-0">
          <div className={columnClass}>
            Total number of units allowed:{"  "}
            <span className="font-[700]">23 / semester</span>
          </div>
          <div className={columnClass}>
            Compulsory courses - <span className="font-[700]">C</span>
          </div>
          <div className={columnClass}>
            Required courses - <span className="font-[700]">R</span>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className={columnClass}>
            Minimum number of units allowed:{" "}
            <span className="font-[700]">18 / semester</span>
          </div>
          <div className={columnClass}>
            Maximum number of units allowed:{" "}
            <span className="font-[700]">25</span>
          </div>
          <div className={columnClass}>
            Elective courses - <span className="font-[700]">E</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
