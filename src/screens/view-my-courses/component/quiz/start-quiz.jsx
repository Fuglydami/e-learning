import React, { useEffect, useState } from 'react';
import Verify from '../../../../asssets/icons/verify.svg';
import { useGlobalContext } from '../../../../context/globalContext';
import CustomButton from '../../../../shared/custom-button';

import { Success } from '../../../reset-password/response';
import useModal from '../../../../hooks/modalCustomHook';

const StartQuiz = () => {
  const { loading, error, isModalOpen, show, setShow } = useGlobalContext();

  const { ModalWrapper, openModal, closeModal } = useModal();
  const [checkCorrectAnswer, setCheckCorrectAnswer] = useState(false);
  const questions = [
    {
      id: 1,
      questionText:
        'What is meant by African culture and deos it affect other aspect of life? ',
      answerOptions: [
        {
          answerText: 'It doesn’t affect other aspect of human life',
          isCorrect: false,
        },
        {
          answerText:
            'It is the way and lifestyle of a particular set of people and it affects other easpects of their life',
          isCorrect: false,
        },
        {
          answerText: 'Cras vulputate id sit vitae dictumst fames volutpat.',
          isCorrect: true,
        },
        {
          answerText: 'Nunc, neque imperdiet pellentesque convallis. Enim.',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      questionText:
        'What is meant by African culture and deos it affect other aspect of life?  ',
      answerOptions: [
        {
          answerText: 'Nunc, neque imperdiet pellentesque convallis. Enim.',
          isCorrect: false,
        },
        {
          answerText: 'It doesn’t affect other aspect of human life',
          isCorrect: true,
        },
        {
          answerText: 'Cras vulputate id sit vitae dictumst fames volutpat.',
          isCorrect: false,
        },
        {
          answerText:
            'It is the way and lifestyle of a particular set of people and it affects other easpects of their life',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      questionText:
        'What is meant by African culture and deos it affect other aspect of life?  ',
      answerOptions: [
        {
          answerText: 'Nunc, neque imperdiet pellentesque convallis. Enim.',
          isCorrect: true,
        },
        {
          answerText: 'It doesn’t affect other aspect of human life',
          isCorrect: false,
        },
        {
          answerText: 'Cras vulputate id sit vitae dictumst fames volutpat.',
          isCorrect: false,
        },
        {
          answerText:
            'It is the way and lifestyle of a particular set of people and it affects other easpects of their life',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      questionText:
        'What is meant by African culture and deos it affect other aspect of life?  ',
      answerOptions: [
        {
          answerText: 'Nunc, neque imperdiet pellentesque convallis. Enim.',
          isCorrect: false,
        },
        {
          answerText: 'It doesn’t affect other aspect of human life',
          isCorrect: false,
        },
        {
          answerText:
            'It is the way and lifestyle of a particular set of people and it affects other easpects of their life',
          isCorrect: false,
        },
        {
          answerText: 'Cras vulputate id sit vitae dictumst fames volutpat.',
          isCorrect: true,
        },
      ],
    },
    {
      id: 5,
      questionText:
        'What is meant by African culture and deos it affect other aspect of life?  ',
      answerOptions: [
        {
          answerText: 'Nunc, neque imperdiet pellentesque convallis. Enim.',
          isCorrect: false,
        },
        {
          answerText: 'It doesn’t affect other aspect of human life',
          isCorrect: false,
        },
        {
          answerText: 'Cras vulputate id sit vitae dictumst fames volutpat.',
          isCorrect: false,
        },
        {
          answerText:
            'It is the way and lifestyle of a particular set of people and it affects other easpects of their life',
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='animate-in duration-500 slide-in-from-bottom w-full'>
      <div className='bg-whine md:p-5 p-3 rounded-tr-2xl rounded-tl-2xl md:flex block justify-between'>
        <div className='white mb-3 md:mb-0'>
          <p className='font-[600] text-[24px]'>GNS 202: Week 1 Quiz</p>
          <p className='font-[600] text-[18px]'>African culture & groups</p>
        </div>
        <div className='flex md:justify-center justify-between md:items-center items-start md:gap-5 gap-0'>
          <div>
            <p className='text-[14px] white'>Time</p>
            <p className='font-[600] text-[#FFDB8D]'>10 mins</p>
          </div>
          <div>
            <p className='text-[14px] white'>Questions</p>
            <p className='font-[600] text-[#FFDB8D]'>
              {questions.length} questions
            </p>
          </div>
          <div>
            <p className='text-[14px] white'>Due Date</p>
            <p className='font-[600] text-[#FFDB8D]'>20th November, 2022</p>
          </div>
        </div>
      </div>
      {questions.map((item) => {
        return (
          <article className='mb-8' key={item.id}>
            <div className='mt-8 mb-4'>
              <div className=' font-[700]'>
                {item.id}. {item.questionText}
              </div>
            </div>
            <ul className=''>
              {item.answerOptions.map((answerOption, index) => (
                <li
                  key={index}
                  // onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                >
                  <label className='containercheck'>
                    {answerOption.answerText}
                    <input
                      type='checkbox'
                      // onChange={(e) => setIsChecked(e.target.value)}
                      // value={answerOption.answerText}
                    />
                    <span className='checkmark'></span>
                  </label>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
      <CustomButton
        title={'Submit'}
        buttonStyle={
          'text-[18px] font-[600] bg-base_range white mt-4 w-full md:w-[327px]'
        }
        onClick={() => openModal()}
      />

      <ModalWrapper>
        {success ? (
          <Success
            title={'Quiz Submitted.'}
            buttonText={'Continue'}
            paragraph={'You have successfully completed the Quiz.'}
          />
        ) : (
          <Success
            icon={<img src={Verify} alt='success' loading='lazy' />}
            title={'Submit Quiz?'}
            paragraph={
              'You have successfully reported an unsuccessful transaction.'
            }
            button={
              <div className='flex space-x-8 justify-center'>
                <CustomButton
                  title={'Submit'}
                  containerStyle={'w-full'}
                  onClick={() => setSuccess(true)}
                  buttonStyle='bg-base_range white  w-full text-[18px] font-[600]  py-4 '
                />
                <button
                  className='text-base_range w-full rounded-xl hover:bg-sidebarOrange text-[18px] font-[600] py-4 '
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Close
                </button>
                {/* <CustomButton
                  title={'Close'}
                  onClick={() => {
                    closeModal();
                  }}
                  containerStyle={'w-full'}
                  buttonStyle='text-base_range w-full text-[18px] font-[600] py-4 '
                /> */}
              </div>
            }
            buttonText={'Check out disputes'}
          />
        )}
      </ModalWrapper>
    </div>
  );
};

export default StartQuiz;
