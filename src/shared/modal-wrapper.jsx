import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { IoIosClose } from 'react-icons/io';

export const ModalWrapper = ({ isOpen, closeModal, children }) => {
  const style = {
    fontSize: '2.5rem',

    float: 'right',
    marginTop: '-1rem',
    cursor: 'pointer',
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className=' relative z-50'
        onClose={() => console.log('')}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 modalBackdrop ' />
        </Transition.Child>
        <div className='fixed   inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className=' bg-customWhite w-full max-w-[560px] transform overflow-hidden rounded-md bg-white px-5 py-10 lg:px-10 lg:py-16  text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg flex flex-col font-medium leading-6 text-center text-gray-900'
                >
                  <div>
                    <IoIosClose
                      className='rounded-full p-1 bg-[#FAF8F7]'
                      style={style}
                      onClick={closeModal}
                    />
                  </div>
                </Dialog.Title>
                <div className='mt-2'>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
