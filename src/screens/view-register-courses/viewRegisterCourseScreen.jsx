import React from 'react';
import DataTable from 'react-data-table-component';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../misc/component-wrapper';
import { customStyles } from '../../misc/data';
import CustomButton from '../../shared/custom-button';
import {
  accumulate,
  getJsonItemFromLocalStorage,
} from '../../shared/helper-functions/save-data';
import { useEffect } from 'react';
import { useState } from 'react';
import { gethttp, posthttp } from '../../services/actions';
import { GET_REGISTERED_COURSES, REMOVE_COURSES } from '../../services/api-url';
import { Spin, toastData } from '../../shared/shared';
import { toast } from 'react-toastify';

const ViewRegisterCourseScreen = () => {
  let navigate = useNavigate();
  const userDetails = getJsonItemFromLocalStorage('user-details');

  const { fullName, level, faculty, matricNo, session, department } =
    userDetails;
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [getCourses, setGetCourses] = useState([]);
  const getRegisteredCourses = async (checkLogin = true) => {
    checkLogin && setIsLoading(true);
    const { data } = await gethttp(GET_REGISTERED_COURSES);

    if (data && data.isSuccessful === true) {
      const newData = data.data.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      setGetCourses(newData);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const deleteRegisteredCourses = async (row) => {
    setId(row.courseId);
    const payload = {
      registrationId: row.courseId,
    };
    setLoading(true);
    const { data } = await posthttp(REMOVE_COURSES, payload);

    if (data && data.isSuccessful === true) {
      // setGetCourses(newData);
      toast.success(data.message, toastData);
      setLoading(false);
      getRegisteredCourses(false);
    } else {
      toast.error(data.message, toastData);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRegisteredCourses();
  }, []);
  const data = [
    {
      id: 1,
      courseCode: 'POL 202',
      courseTitle: 'Introduction to Political Science',
      unit: '3',
      status: 'C',
      regStatus: 'Normal',
    },
    {
      id: 2,
      courseCode: 'POL 205',
      courseTitle: 'Community Mental Health Studies',
      unit: '2',
      status: 'C',
      regStatus: 'Normal',
    },
    {
      id: 3,
      courseCode: 'GNS 202',
      courseTitle: 'Introduction to Nigerian Culture',
      unit: '2',
      status: 'R',
      regStatus: 'Normal',
    },
    {
      id: 4,
      courseCode: 'GTL 215',
      courseTitle: 'Introduction to Political Science',
      unit: '1',
      status: 'E',
      regStatus: 'Normal',
    },
    {
      id: 5,
      courseCode: 'SOC 212',
      courseTitle: 'Social Change I',
      unit: '2',
      status: 'C',
      regStatus: 'Normal',
    },
    {
      id: 6,
      courseCode: 'POL 101',
      courseTitle: 'Introduction to Computer Science',
      unit: '3',
      status: 'C',
      regStatus: 'Carryover',
    },
  ];
  const columns = [
    {
      name: 'S/N',
      selector: (row) => row.id,
      sortable: true,
      exports: true,
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
    //   name: 'Status',
    //   selector: (row) => row.status,
    //   sortable: true,
    //   exports: true,
    //   center: true,
    // },
    // {
    //   name: 'Reg. Status',
    //   selector: (row) => row.regStatus,
    //   sortable: true,
    //   exports: true,
    //   center: true,
    // },
    {
      name: 'Action',
      cell: (row) => (
        <>
          {loading && row.courseId === id ? (
            <Spin />
          ) : (
            <RiDeleteBin5Line
              onClick={() => deleteRegisteredCourses(row)}
              style={{ color: '#C85100', cursor: 'pointer', fontSize: '20px' }}
            />
          )}
        </>
      ),
      // center: true,
    },
  ];

  return (
    <>
      <Title show={false} title={'Registered Courses'} />
      <p className='font-[700] py-3 mt-5'>{session}</p>
      {/* <div className='font-[700] px-7 py-5 mb-8 bg-base_range white'>
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
      <div className='font-[700] px-7 py-6 mb-10 bg-sidebarOrange white'>
        <div className='font-[800] md:w-3/4 w-full justify-between flex px-12 text-base_range'>
          <p>Total</p>
          <p>{accumulate(data)}</p>
        </div>
      </div> */}
      <div className='font-[700] px-7 py-5 mb-8 bg-base_range white'>
        Semester Courses
      </div>
      <div>
        <DataTable
          responsive={true}
          columns={columns}
          data={getCourses}
          customStyles={customStyles}
          progressPending={isLoading}
          // pagination
          highlightOnHover
          // progressPending={loading}
        />
      </div>
      {!isLoading && (
        <div className='font-[700] px-7 py-6  bg-sidebarOrange white'>
          <div className='font-[800] md:w-3/4 w-full justify-between flex px-12 text-base_range'>
            <p>Total</p>
            <p>{accumulate(getCourses)}</p>
          </div>
        </div>
      )}
      {/* <div className='mt-6'>
        <CustomButton
          containerStyle={'mt-4'}
          title={'Print course form'}
          onClick={() => navigate('/view-registered-courses/print-course-form')}
          buttonStyle={'lg:w-1/3 w-full font-[600]  bg-base_range white'}
        />
      </div> */}
    </>
  );
};

export default ViewRegisterCourseScreen;
