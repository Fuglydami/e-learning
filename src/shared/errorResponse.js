import CustomButton from './custom-button';
import Closed from '../asssets/images/closed.png';

export const Error = ({
  closeModal,
  title,
  paragraph,
  onClick,
  buttonText,
  button,
  icon = <img src={Closed} loading='lazy' alt='success' />,
  setToggleModal,
}) => {
  return (
    <>
      <section className=' grid place-content-center my-auto'>
        <div className='flex flex-col  text-center lg:w-[450px] w-full  items-center  space-y-4 '>
          <div className='mb-6 rounded-full grid place-content-center p-3 bg-[#FAF8F7]'>
            {icon}
          </div>
          <h2 className='text-3xl px-2 md:px-0 w-[390px] md:text-4xl font-bold'>
            {title}
          </h2>
          <p className='text-lightGrey text-md md:text-[18px] text-green-100'>
            {paragraph}
          </p>
        </div>
        {button}
      </section>
    </>
  );
};
