import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../misc/component-wrapper';
import CustomButton from '../../shared/custom-button';

import { Success } from '../reset-password/response';
import CarryOverCourses from './component/carryover-course';
import CourseOverview from './component/course-overview';
import NormalCourses from './component/normal-course';
import useModal from '../../hooks/modalCustomHook';
import { gethttp, posthttp } from '../../services/actions';
import { GET_COURSES, REGISTER_COURSES } from '../../services/api-url';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { toastData } from '../../shared/shared';
import differenceBy from 'lodash/differenceBy';

const RegisterCourseScreen = () => {
  let navigate = useNavigate();

  const { ModalWrapper, openModal, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [toggleCleared, setToggleCleared] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getCourses, setGetCourses] = useState([]);
  const [data, setData] = React.useState(getCourses);

  const [selectedRows, setSelectedRows] = useState([]);
  const handleDelete = () => {
    setToggleCleared(!toggleCleared);
    setData(differenceBy(data, selectedRows, 'title'));
  };
  const getRegistrableCourses = async (checkLoading = true) => {
    checkLoading && setIsLoading(true);
    const { data } = await gethttp(GET_COURSES);

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
  const registerCourses = async () => {
    setLoading(true);
    const payload = {
      courseIds: selectedRows,
    };
    const { data } = await posthttp(REGISTER_COURSES, payload);

    if (data && data.isSuccessful === true) {
      setMessage(data.message);
      handleDelete();
      // setSelectedRows([]);
      await getRegistrableCourses(false);
      openModal();
      setLoading(false);
    } else {
      toast.error(data, toastData);

      setLoading(false);
    }
  };

  const handleRowSelected = React.useCallback((state) => {
    const courseIdArray = state.selectedRows.map((course) => course.courseId);
    setSelectedRows(courseIdArray);
  }, []);

  useEffect(() => {
    getRegistrableCourses();
  }, []);

  return (
    <>
      <Title show={true} title={'Register Courses'} />
      <CourseOverview />
      <NormalCourses
        isLoading={isLoading}
        getCourses={getCourses}
        handleRowSelected={handleRowSelected}
        selectedRows={selectedRows}
        toggleCleared={toggleCleared}
      />
      {/* <CarryOverCourses /> */}
      {getCourses.length > 0 && (
        <div className='mt-6'>
          <CustomButton
            loading={loading}
            disabled={loading}
            containerStyle={'mt-4'}
            title={'Submit selected courses '}
            buttonStyle={'lg:w-1/3 w-full font-[600]  bg-base_range white'}
            onClick={() => {
              if (selectedRows.length <= 0) {
                toast.warning('Select from the list of courses', toastData);
              } else {
                registerCourses();
              }
            }}
          />
        </div>
      )}

      <ModalWrapper>
        <Success
          title={'Course Registration Completed'}
          paragraph={`Congratulations,${message}`}
          onClick={() => navigate('/print-all-course')}
          buttonText={'Print course form'}
        />
      </ModalWrapper>
    </>
  );
};

export default RegisterCourseScreen;
