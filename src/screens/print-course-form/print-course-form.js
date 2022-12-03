import React from "react";
import DataTable from "react-data-table-component";

import { Container, MainContainer } from "../../misc/component-wrapper";
import { customStyles1 } from "../../misc/data";
import { accumulate } from "../../shared/helper-functions/save-data";
import Header from "./components/header";
import StudentDetails from "./components/studentDetails";

const CourseForm = () => {
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
  ];

  return (
    <MainContainer>
      <Container>
        <Header />
        <StudentDetails />
        <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-0 w-full   my-2">
          <article>
            <div className="font-[700] px-7 py-5 mb-8 bg-base_range white">
              Harmattan Semester Courses
            </div>
            <div>
              <DataTable
                responsive={true}
                columns={columns}
                data={data}
                customStyles={customStyles1}
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
          </article>
          <article>
            <div className="font-[700] px-7 py-5 mb-8 bg-base_range white">
              Rain Semester Courses
            </div>
            <div>
              <DataTable
                responsive={true}
                columns={columns}
                data={data}
                customStyles={customStyles1}
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
          </article>
        </section>
        <section className="grid gap-10 lg:w-4/5 md:w-3/5  mx-auto py-12 w-full lg:grid-cols-2 grid-cols-1">
          <div className="lg:text-[18px] text-[14px] font-[600] space-y-3">
            <div className="flex justify-between md:gap-8 gap-2">
              <h3>STUDENT’S SIGNATURE</h3>
              <hr className="relative top-5 lg:w-[248px]  w-[140px]" />
            </div>
            <div className="flex justify-between ">
              <h3>LEVEL ADVISER’S SIGNATURE</h3>
              <hr className="relative top-5 lg:w-[248px] w-[140px]" />
            </div>
            <div className="flex justify-between lg:gap-8 xl:gap-2 gap-2">
              <h3>FACULTY OFFICER’S SIGNATURE</h3>
              <hr className="relative top-5  lg:w-[248px] w-[140px] " />
            </div>
          </div>
          <div>
            <div className="lg:text-[18px] text-[14px] font-[600] space-y-3">
              <div className="flex justify-between lg:justify-start  gap-8">
                <h3>DATE</h3>
                <hr className="relative  top-5 lg:w-[248px] w-[140px]" />
              </div>
              <div className="flex justify-between lg:justify-start  gap-8">
                <h3>DATE</h3>
                <hr className="relative top-5 lg:w-[248px] w-[140px]" />
              </div>
              <div className="flex justify-between lg:justify-start  gap-8">
                <h3>DATE</h3>
                <hr className="relative top-5 lg:w-[248px] w-[140px] " />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </MainContainer>
  );
};

export default CourseForm;
