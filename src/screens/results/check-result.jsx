import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainContainer } from '../../misc/component-wrapper';
import CustomButton from '../../shared/custom-button';
import { CustomSelectInput } from '../../shared/custom-input';
import { useState } from 'react';
import { GET_RESULT, GET_RESULT_SESSION } from '../../services/api-url';
import { gethttp } from '../../services/actions';
import { useEffect } from 'react';
import { AppLoading, saveByteArray, toastData } from '../../shared/shared';
import { Switch } from '@headlessui/react';
import { toast } from 'react-toastify';
import { Error } from '../../shared/errorResponse';
import useModal from '../../hooks/modalCustomHook';
import { BiError } from 'react-icons/bi';

const CheckResult = () => {
  let navigate = useNavigate();

  const { ModalWrapper, openModal, closeModal } = useModal();
  const [selectedTermid, setSelectedTermid] = useState('');

  const handleRadioChange = (termid) => {
    setSelectedTermid(termid);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [session, setSession] = useState([]);

  const getResultSession = async (checkLogin = true) => {
    setIsLoading(true);
    const response = await gethttp(GET_RESULT_SESSION);
    setIsLoading(false);
    const { data } = response;

    if (data.data && data.isSuccessful === true) {
      setSession(data?.data);
      setIsLoading(false);
    } else {
      setResponse(data.message);
      openModal();
      setIsLoading(false);
    }
  };
  const getResult = async () => {
    if (selectedTermid !== '') {
      setLoading(true);

      const data = await gethttp(
        GET_RESULT + `/${selectedTermid}`,
        'application/pdf',
        'download'
      );

      if (data && data.status === 200) {
        saveByteArray('Semester-result.pdf', data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } else {
      toast.warning('Select a session', toastData);
    }
  };

  useEffect(() => {
    getResultSession();
  }, []);

  return (
    <MainContainer>
      <Container>
        {response ? (
          <Error
            icon={<BiError className='text-[#FF0000] text-[4.5rem]' />}
            title={'Oops...'}
            paragraph={`${response}`}
            // onClick={() => navigate('/print-all-course')}
            // buttonText={'Print course form'}
          />
        ) : (
          <>
            <div
              className={`${
                isLoading && 'animate-pulse'
              } w-full max-w-2xl mx-auto my-4 bg-white shadow-lg rounded-lg border border-extraLightGrey`}
            >
              <header className='px-5 py-4 border-b border-extraLightGrey'>
                <h2 className='font-semibold text-gray-800'>Select Semester</h2>
              </header>
              <div className='p-3 shadow-lg'>
                <div className='overflow-x-auto'>
                  <table className='table-auto w-full'>
                    <thead className='text-md font-bold   text-[#808080] bg-extraLightGrey'>
                      <tr>
                        <th className='p-2 whitespace-nowrap'>
                          <div className='font-semibold text-left'>Select</div>
                        </th>
                        <th className='p-2 whitespace-nowrap'>
                          <div className='font-semibold text-left'>Session</div>
                        </th>
                        <th className='p-2 whitespace-nowrap'>
                          <div className='font-semibold text-left'>
                            Semester
                          </div>
                        </th>
                        <th className='p-2 whitespace-nowrap'>
                          <div className='font-semibold text-left'>Level</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='text-sm divide-y divide-[#808080d2]'>
                      {session.map((item, index) => {
                        const { session, semester, termid, level } = item;
                        return (
                          <>
                            <tr
                              className={`${isLoading && 'animate-pulse'}`}
                              key={index}
                            >
                              <td className='p-2 whitespace-nowrap'>
                                <div className='flex items-center'>
                                  <input
                                    id='country-option-1'
                                    type='radio'
                                    name='countries'
                                    onChange={() => handleRadioChange(termid)}
                                    checked={termid === selectedTermid}
                                    className='h-4 w-4  cursor-pointer'
                                  />
                                </div>
                              </td>
                              <td className='p-2 whitespace-nowrap'>
                                <div className='text-left  text-md font-medium '>
                                  {session}
                                </div>
                              </td>
                              <td className='p-2 whitespace-nowrap'>
                                <div className='text-md '>{semester}</div>
                              </td>
                              <td className='p-2 whitespace-nowrap'>
                                <div className='text-md '>{level}</div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {session.length > 0 && (
              <CustomButton
                loading={loading}
                disabled={loading}
                buttonStyle={
                  'bg-base_range white text-[15px] w-full max-w-2xl mx-auto'
                }
                title={'Download Result'}
                onClick={() => {
                  getResult();
                }}
              />
            )}
          </>
        )}
        {/*        
          <section className='md:w-[464px] w-full mx-auto pb-20'>
            <h1 className='text-center my-8 text-[24px] font-[700]'>Results</h1>
            <h2 className='text-center capitalize font-[700] text-[20px]'>
              Note
            </h2>
            <p className='px-4 text-center mb-6'>
              Select the session and result type to see your result.
            </p>
            <CustomSelectInput label={'Session'} placeholder={'2020/2021'} />
            <CustomSelectInput
              label={'Payment Type'}
              placeholder={'School Charges'}
            />

            <CustomButton
              title={'Submit'}
              onClick={() => navigate('/check-result/result')}
              buttonStyle={'w-full mt-8 bg-base_range white'}
            />
          </section> */}

        {/* <ModalWrapper> */}

        {/* </ModalWrapper> */}
      </Container>
    </MainContainer>
  );
};

export default CheckResult;
