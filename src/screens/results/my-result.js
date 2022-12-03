import React from "react";
import DataTable from "react-data-table-component";
import Avatar from "../../asssets/images/avatar.svg";
import Logo from "../../asssets/images/Logo.svg";
import { Container, MainContainer } from "../../misc/component-wrapper";
import { customStyles } from "../../misc/data";

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
        <div className="flex justify-between items-center md:px-12 px-0">
          <div>
            <img
              className="md:h-[80px] md:w-[80px] h-[60px] w-[60px]"
              src={Logo}
              alt="school-logo"
            />
          </div>
          <div>
            <h1 className="font-[700] md:text-[24px] text-[13px] text-center">
              Ladoke Akintola University Of Technology, Ogbomoso
            </h1>
            <h2 className=" md:text-[18px] text-[12px] text-center">
              EXCELLENCE, INTEGRITY, SERVICE
            </h2>
          </div>
          <div>
            <img
              className="md:h-[80px] md:w-[80px] h-[60px] w-[60px]"
              src={Avatar}
              alt="avatar"
            />
          </div>
        </div>
        <hr className="mt-5 text-extraLightGrey" />
        <h3 className="font-[700] md:text-[20px] py-5 text-[18px] text-base_range text-center">
          2019/2020 ACADEMIC SESSION RESULT
        </h3>

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
                Matric No:{" "}
                <span className="font-[700] text-[20px]">19000473</span>
              </div>
              <div className={columnClass}>
                Department:{" "}
                <span className="font-[700] text-[20px]">
                  Political Science
                </span>
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
