import React from "react";
import DataTable from "react-data-table-component";
import { Container, MainContainer } from "../../misc/component-wrapper";
import { customStyles } from "../../misc/data";
import Header from "../print-course-form/components/header";
import StudentDetails from "../print-course-form/components/studentDetails";

const MyResult = () => {
  const data = [
    {
      id: 1,
      codeCode: "POL202",
      courseTitle: "Introduction to Political Science",
      unit: "3",
      status: "C",
      ca: "32",
      exam: "46",
      total: "78",
      grade: "A",
    },
    {
      id: 2,
      codeCode: "POL205",
      courseTitle: "Community Mental Health Studies",
      unit: "2",
      status: "C",
      ca: "25",
      exam: "41",
      total: "66",
      grade: "B",
    },
    {
      id: 3,
      codeCode: "GNS202",
      courseTitle: "Introduction to Nigerian Culture",
      unit: "2",
      status: "R",
      ca: "32",
      exam: "39",
      total: "71",
      grade: "A",
    },
    {
      id: 4,
      codeCode: "GTL215",
      courseTitle: "Introduction to Political Science",
      unit: "1",
      status: "E",
      ca: "24",
      exam: "40",
      total: "64",
      grade: "B",
    },
    {
      id: 5,
      codeCode: "SOC212",
      courseTitle: "Social Change I",
      unit: "2",
      status: "C",
      ca: "33",
      exam: "58",
      total: "91",
      grade: "A",
    },
    {
      id: 6,
      codeCode: "POL101",
      courseTitle: "Introduction to Computer Science",
      unit: "3",
      status: "C",
      ca: "28",
      exam: "56",
      total: "84",
      grade: "A",
    },
  ];
  const columns = [
    {
      name: "S/N",
      selector: (row) => row.id,
      sortable: true,
      exports: true,
      grow: -2,
    },
    {
      name: "Course Code",
      selector: (row) => row.codeCode,
      sortable: true,
      exports: true,
    },
    {
      name: "Unit",
      selector: (row) => row.unit,
      sortable: true,

      exports: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      grow: 1,
      exports: true,
    },
    {
      name: "CA",
      selector: (row) => row.ca,
      sortable: true,
      grow: 1,
      exports: true,
    },
    {
      name: "Exam",
      selector: (row) => row.exam,
      sortable: true,
      grow: 1,
      exports: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
      grow: 1,
      exports: true,
    },
    {
      name: "Grade",
      selector: (row) => row.grade,
      sortable: true,
      grow: 1,
      exports: true,
    },
  ];

  const columnClass =
    "lg:w-[30%] w-full gap-8 md:text-[20px] text-[16px] font-[400]";
  return (
    <MainContainer>
      <Container>
        <Header />
        <StudentDetails />

        <div className="font-[700] px-7 mt-6 py-5 mb-8 bg-base_range white">
          Harmattan Semester Result
        </div>
        <div className="mb-4">
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
        <div className="font-[700] px-7 mt-6 py-5 mb-8 bg-base_range white">
          Rain Semester Result
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
      </Container>
    </MainContainer>
  );
};

export default MyResult;
