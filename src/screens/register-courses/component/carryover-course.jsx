import React, { useState } from "react";
import DataTable from "react-data-table-component";

const CarryOverCourses = () => {
  const [loading, setLoading] = useState(true);
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px", // override the row height
        fontWeight: "600",
        fontSize: "16px",
      },
    },
    title: {
      style: {
        fontWeight: "700",
        fontSize: "16px",
      },
    },
    headCells: {
      style: {
        minHeight: "51px", // override the row height
        backgroundColor: "#FF7562",
        color: "white",
        // borderRadius: "10px",
        fontWeight: "700",
        fontSize: "16px",
      },
    },
  };

  const columns = [
    {
      name: "List of Carryover Courses",
      selector: (row) => row.id,

      center: true,
    },
    {
      selector: (row) => row.courseCode,
    },
    {
      selector: (row) => row.courseTitle,
      grow: 3,
    },
    {
      selector: (row) => row.unit,
      center: true,
    },
    {
      selector: (row) => row.status,
      center: true,
    },
    {
      selector: (row) => row.semester,
      center: true,
    },
  ];
  const data = [
    {
      id: 1,
      courseCode: "POL 101",
      courseTitle: "Introduction to Computer Science",
      unit: "3",
      status: "C",
      semester: "Rain",
    },
  ];

  return (
    <div>
      <DataTable
        responsive={true}
        columns={columns}
        data={data}
        customStyles={customStyles}
        // pagination
        highlightOnHover
        selectableRows
        // progressPending={loading}
        subHeader
        subHeaderAlign="left"
      />
    </div>
  );
};

export default CarryOverCourses;
