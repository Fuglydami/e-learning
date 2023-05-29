import React, { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component';
import { MdDownload } from 'react-icons/md';
import { RiPrinterLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Container, MainContainer, Title } from '../../misc/component-wrapper';
import { customStyles } from '../../misc/data';
import CustomButton from '../../shared/custom-button';
import { gethttp } from '../../services/actions';
import { GET_REGISTERED_COURSES } from '../../services/api-url';
import StudentDetails from './student-details';
import { useReactToPrint } from 'react-to-print';

const PrintAllCourse = () => {
  const [getCourses, setGetCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRegistrableCourses = async () => {
    setIsLoading(true);
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

  useEffect(() => {
    getRegistrableCourses();
  }, []);
  let navigate = useNavigate();
  const data = [
    {
      id: 1,
      level: '100',
      academicSession: '2019/2020',
      description: 'Course form',
    },
    {
      id: 2,
      level: '100',
      academicSession: '2019/2020',
      description: 'Course form',
    },
    {
      id: 3,
      level: '200',
      academicSession: '2020/2021',
      description: 'Course form',
    },
    {
      id: 4,
      level: '200',
      academicSession: '2020/2021',
      description: 'Course form',
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
    //   name: 'Action',
    //   cell: (row) => (
    //     <div className='flex  md:gap-3 gap-6'>
    //       <div className='text-base_range items-center cursor-pointer flex gap-1'>
    //         <RiPrinterLine />
    //         <p className='hidden md:flex'>Print</p>
    //       </div>
    //       <div className='text-base_range items-center cursor-pointer flex gap-1'>
    //         <MdDownload />
    //         <p className='hidden md:flex'>Download</p>
    //       </div>
    //     </div>
    //   ),
    //   center: true,
    // },
  ];

  const componentRef = useRef();
  const PrintContent = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <StudentDetails />
        <div className='font-[700] px-7  my-5 py-5 bg-base_range white'>
          List of Registered Courses
        </div>
        <div className='mb-10'>
          <DataTable
            responsive={true}
            columns={columns}
            data={getCourses}
            customStyles={customStyles}
            progressPending={isLoading}
            // pagination
            highlightOnHover
          />
        </div>
      </div>
    );
  });

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <MainContainer>
      <Container>
        <Title title={'Course Form'}>
          <CustomButton
            buttonStyle={'bg-base_range white text-[14px]'}
            title={'Print Course Form'}
            borderRadius={'8px'}
            onClick={handlePrint}
            // onClick={() => {
            //   // navigate('/dispute-payment/create-dispute');
            // }}
          />
        </Title>
        <PrintContent ref={componentRef} />
      </Container>
    </MainContainer>
  );
};

export default PrintAllCourse;
