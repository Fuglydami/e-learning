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

const CheckResult = () => {
  let navigate = useNavigate();
  const [selectedTermid, setSelectedTermid] = useState('');

  const handleRadioChange = (termid) => {
    setSelectedTermid(termid);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState([]);

  const getResultSession = async (checkLogin = true) => {
    setIsLoading(true);
    const { data } = await gethttp(GET_RESULT_SESSION);

    setIsLoading(false);
    if (data.data && data.isSuccessful === true) {
      setSession(data.data);
      setIsLoading(false);
    } else {
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
      console.log(data, 'result');

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
  console.log(session, 'session');
  return (
    <MainContainer>
      <Container>
        <div
          class={`${
            isLoading && 'animate-pulse'
          } w-full max-w-2xl mx-auto mb-4 bg-white shadow-lg rounded-lg border border-extraLightGrey`}
        >
          <header class='px-5 py-4 border-b border-extraLightGrey'>
            <h2 class='font-semibold text-gray-800'>Select Semester</h2>
          </header>
          <div class='p-3 shadow-lg'>
            <div class='overflow-x-auto'>
              <table class='table-auto w-full'>
                <thead class='text-md font-bold  text-[#808080] bg-extraLightGrey'>
                  <tr>
                    <th class='p-2 whitespace-nowrap'>
                      <div class='font-semibold text-left'>Select</div>
                    </th>
                    <th class='p-2 whitespace-nowrap'>
                      <div class='font-semibold text-left'>Session</div>
                    </th>
                    <th class='p-2 whitespace-nowrap'>
                      <div class='font-semibold text-left'>Semester</div>
                    </th>
                    <th class='p-2 whitespace-nowrap'>
                      <div class='font-semibold text-left'>Level</div>
                    </th>
                  </tr>
                </thead>
                <tbody class='text-sm divide-y divide-[#808080]'>
                  {session.map((item, index) => {
                    const { session, semester, termid, level } = item;
                    return (
                      <>
                        <tr key={index}>
                          <td class='p-2 whitespace-nowrap'>
                            <div class='flex items-center '>
                              <input
                                id='country-option-1'
                                type='radio'
                                name='countries'
                                onChange={() => handleRadioChange(termid)}
                                checked={termid === selectedTermid}
                                class='h-4 w-4 '
                                // aria-labelledby='country-option-1'
                                // aria-describedby='country-option-1'

                                // checked={enabled}
                              />
                            </div>
                          </td>
                          <td class='p-2 whitespace-nowrap'>
                            <div class='text-left  text-md font-medium '>
                              {session}
                            </div>
                          </td>
                          <td class='p-2 whitespace-nowrap'>
                            <div class='text-md '>{semester}</div>
                          </td>
                          <td class='p-2 whitespace-nowrap'>
                            <div class='text-md '>{level}</div>
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
      </Container>
    </MainContainer>
  );
};

export default CheckResult;
