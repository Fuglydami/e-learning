import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { customStyles } from '../../../misc/data';
import { gethttp } from '../../../services/actions';
import { GET_COURSES } from '../../../services/api-url';
import { useEffect } from 'react';
import { getJsonItemFromLocalStorage } from '../../../shared/helper-functions/save-data';

const NormalCourses = ({
  isLoading,
  getCourses,
  handleRowSelected,

  toggleCleared,
}) => {
  const userDetails = getJsonItemFromLocalStorage('user-details');

  const { fullName, level, faculty, matricNo, session, department } =
    userDetails;
  const columns = [
    {
      name: 'S/N',
      selector: (row) => row.id,
      sortable: true,
      exports: true,
      center: true,
    },
    {
      name: 'Course Code',
      selector: (row) => row.courseCode,
      sortable: true,
      exports: true,
    },
    {
      name: 'Course Title',
      selector: (row) => row.courseTitle,
      sortable: true,
      grow: 3,
      exports: true,
    },
    {
      name: 'Unit',
      selector: (row) => row.unit,
      sortable: true,
      exports: true,
      center: true,
    },
    // {
    //   name: "Status",
    //   selector: (row) => row.status,
    //   sortable: true,
    //   exports: true,
    //   center: true,
    // },
    // {
    //   name: "Semester",
    //   selector: (row) => row.semester,
    //   sortable: true,
    //   exports: true,
    //   center: true,
    // },
  ];
  const data = [
    {
      id: 1,
      courseCode: 'POL 202',
      courseTitle: 'Introduction to Political Science',
      unit: '3',
      status: 'C',
      semester: 'Harmattan',
    },
    {
      id: 2,
      courseCode: 'POL 205',
      courseTitle: 'Community Mental Health Studies',
      unit: '2',
      status: 'C',
      semester: 'Harmattan',
    },
    {
      id: 3,
      courseCode: 'GNS 202',
      courseTitle: 'Introduction to Nigerian Culture',
      unit: '2',
      status: 'R',
      semester: 'Rain',
    },
    {
      id: 4,
      courseCode: 'GTL 215',
      courseTitle: 'Introduction to Political Science',
      unit: '1',
      status: 'E',
      semester: 'Harmattan',
    },
    {
      id: 5,
      courseCode: 'SOC 212',
      courseTitle: 'Social Change I',
      unit: '2',
      status: 'C',
      semester: 'Rain',
    },
  ];

  return (
    <div>
      <h1 className='mb-1 font-[700] text-[20px]'>{session}</h1>
      <DataTable
        responsive={true}
        columns={columns}
        data={getCourses}
        customStyles={customStyles}
        progressPending={isLoading}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        // pagination
        highlightOnHover
        selectableRows
      />
    </div>
  );
};

export default NormalCourses;
