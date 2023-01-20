import React from 'react';
import DataTable from 'react-data-table-component';
import { MdDownload } from 'react-icons/md';
import { RiPrinterLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Container, MainContainer, Title } from '../../misc/component-wrapper';
import { customStyles } from '../../misc/data';
import CustomButton from '../../shared/custom-button';

const PrintAllCourse = () => {
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
      name: 'Level',
      selector: (row) => row.level,
      sortable: true,
      exports: true,
    },
    {
      name: 'Academic Session',
      selector: (row) => row.academicSession,
      sortable: true,

      exports: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      sortable: true,
      grow: 2,
      exports: true,
    },

    {
      name: 'Action',
      cell: (row) => (
        <div className='flex  md:gap-3 gap-6'>
          <div className='text-base_range items-center cursor-pointer flex gap-1'>
            <RiPrinterLine />
            <p className='hidden md:flex'>Print</p>
          </div>
          <div className='text-base_range items-center cursor-pointer flex gap-1'>
            <MdDownload />
            <p className='hidden md:flex'>Download</p>
          </div>
        </div>
      ),
      center: true,
    },
  ];
  return (
    <MainContainer>
      <Container>
        <Title title={'Course Forms'}>
          <CustomButton
            buttonStyle={'bg-base_range white text-[14px]'}
            title={'Create Payment Dispute'}
            borderRadius={'8px'}
            onClick={() => {
              navigate('/dispute-payment/create-dispute');
            }}
          />
        </Title>
        <div className='font-[700] px-7 md:my-10 my-5 py-5 bg-base_range white'>
          List of Payment Receipts
        </div>
        <div className='mb-10'>
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

export default PrintAllCourse;
