import React from "react";
import DataTable from "react-data-table-component";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Title } from "../../misc/component-wrapper";
import { customStyles } from "../../misc/data";
import CustomButton from "../../shared/custom-button";
import { accumulate } from "../../shared/helper-functions/save-data";

const ViewRegisterCourseScreen = () => {
  const data = [
    {
      id: 1,
      courseCode: "POL 202",
      courseTitle: "Introduction to Political Science",
      unit: "3",
      status: "C",
      regStatus: "Normal",
    },
    {
      id: 2,
      courseCode: "POL 205",
      courseTitle: "Community Mental Health Studies",
      unit: "2",
      status: "C",
      regStatus: "Normal",
    },
    {
      id: 3,
      courseCode: "GNS 202",
      courseTitle: "Introduction to Nigerian Culture",
      unit: "2",
      status: "R",
      regStatus: "Normal",
    },
    {
      id: 4,
      courseCode: "GTL 215",
      courseTitle: "Introduction to Political Science",
      unit: "1",
      status: "E",
      regStatus: "Normal",
    },
    {
      id: 5,
      courseCode: "SOC 212",
      courseTitle: "Social Change I",
      unit: "2",
      status: "C",
      regStatus: "Normal",
    },
    {
      id: 6,
      courseCode: "POL 101",
      courseTitle: "Introduction to Computer Science",
      unit: "3",
      status: "C",
      regStatus: "Carryover",
    },
  ];
  const columns = [
    {
      name: "S/N",
      selector: (row) => row.id,
      sortable: true,
      exports: true,
    },
    {
      name: "Course Code",
      selector: (row) => row.courseCode,
      sortable: true,
      exports: true,
    },
    {
      name: "Course Title",
      selector: (row) => row.courseTitle,
      sortable: true,
      grow: 3,
      exports: true,
    },
    {
      name: "Unit",
      selector: (row) => row.unit,
      sortable: true,
      exports: true,
      center: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      exports: true,
      center: true,
    },
    {
      name: "Reg. Status",
      selector: (row) => row.regStatus,
      sortable: true,
      exports: true,
      center: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <RiDeleteBin5Line
          style={{ color: "#C85100", cursor: "pointer", fontSize: "20px" }}
        />
      ),
      center: true,
    },
  ];

  return (
    <>
      <Title show={false} title={"Registered Courses"} />
      <p className="font-[700] py-3 mt-5">2022/2023 Academic Session Courses</p>
      <div className="font-[700] px-7 py-5 mb-8 bg-base_range white">
        Harmattan Semester Courses
      </div>
      <div>
        <DataTable
          responsive={true}
          columns={columns}
          data={data}
          customStyles={customStyles}
          // pagination
          highlightOnHover
          // progressPending={loading}
        />
      </div>
      <div className="font-[700] px-7 py-6 mb-10 bg-sidebarOrange white">
        <div className="font-[800] md:w-3/4 w-full justify-between flex px-12 text-base_range">
          <p>Total</p>
          <p>{accumulate(data)}</p>
        </div>
      </div>
      <div className="font-[700] px-7 py-5 mb-8 bg-base_range white">
        Rain Semester Courses
      </div>
      <div>
        <DataTable
          responsive={true}
          columns={columns}
          data={data}
          customStyles={customStyles}
          // pagination
          highlightOnHover
          // progressPending={loading}
        />
      </div>
      <div className="font-[700] px-7 py-6  bg-sidebarOrange white">
        <div className="font-[800] md:w-3/4 w-full justify-between flex px-12 text-base_range">
          <p>Total</p>
          <p>{accumulate(data)}</p>
        </div>
      </div>
      <div className="mt-6">
        <CustomButton
          containerStyle={"mt-4"}
          title={"Print course form"}
          buttonStyle={"lg:w-1/3 w-full font-[600]  bg-base_range white"}
        />
      </div>
    </>
  );
};

export default ViewRegisterCourseScreen;
