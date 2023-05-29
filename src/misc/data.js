import { AiOutlineFolderOpen } from 'react-icons/ai';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { IoReceiptOutline } from 'react-icons/io5';
import { RiSettings4Line } from 'react-icons/ri';
import { TbNotes, TbSmartHome } from 'react-icons/tb';
import { VscNotebookTemplate } from 'react-icons/vsc';
import Onboarding1 from '../asssets/images/onboarding1.jpg';
import Onboarding2 from '../asssets/images/onboarding2.jpg';
import Onboarding3 from '../asssets/images/onboarding3.jpg';
import { getJsonItemFromLocalStorage } from '../shared/helper-functions/save-data';
let userDetails = getJsonItemFromLocalStorage('user-details');

export const items = [
  {
    id: 1,
    title: (
      <div>
        Get notified on your class{' '}
        <span className='text-base_range'>schedules</span>{' '}
      </div>
    ),
    paragraph: `One time notification and class schedule to keep you in check and avoid missing classes`,
    pic: Onboarding1,
  },
  {
    id: 2,
    title: (
      <div>
        Attend classes from <span className='text-base_range'>anywhere</span>{' '}
        you are.
      </div>
    ),
    paragraph: `Attend lectures, read and download lecture materials from anywhere
      comfortably.`,
    pic: Onboarding2,
  },
  {
    id: 3,
    title: (
      <div>
        {' '}
        Access to past <span className='text-base_range'>classes</span>
      </div>
    ),
    paragraph: `Videos and material from previous week and classes can be accessed, read and revised`,
    pic: Onboarding3,
  },
];
export const customStyles = {
  rows: {
    style: {
      minHeight: '60px', // override the row height
      fontWeight: '600',
      fontSize: '16px',
    },
  },
  title: {
    style: {
      fontWeight: '700',
      fontSize: '16px',
    },
  },
  headCells: {
    style: {
      minHeight: '51px', // override the row height
      backgroundColor: '#FFF1E7',
      fontWeight: '700',
      fontSize: '16px',
    },
  },
};
export const customStyles1 = {
  rows: {
    style: {
      minHeight: '60px', // override the row height
      fontWeight: '600',
      fontSize: '14px',
    },
  },
  title: {
    style: {
      fontWeight: '700',
      fontSize: '14px',
    },
  },
  headCells: {
    style: {
      minHeight: '51px', // override the row height
      backgroundColor: '#FFF1E7',
      fontWeight: '700',
      fontSize: '14px',
    },
  },
};

export const navItem = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <TbSmartHome className='h-[20px] w-[20px]' />,
    inactive: false,
    link: '/dashboard',
  },
  {
    id: 2,
    title: 'Courses',
    icon: <AiOutlineFolderOpen className='h-[20px] w-[20px]' />,
    inactive: false,
    subtab: [
      {
        subtab: 'Register new courses',
        link: '/register-course',
      },
      {
        subtab: 'View registered courses',
        link: '/view-registered-courses',
      },
      {
        subtab: 'Print course form',
        link: '/print-all-course',
        tabstyle: 'pb-4',
      },
    ],
    subtabIconup: <HiChevronUp style={{ height: '20px', width: '20px' }} />,
    subtabIcondown: <HiChevronDown style={{ height: '20px', width: '20px' }} />,
  },

  {
    id: 3,
    title: 'My learnings',
    icon: <TbNotes className='h-[20px] w-[20px]' />,
    subtab: [
      {
        subtab: 'View my courses',
        link: '/my-learning',
      },
      {
        subtab: 'View saved notes',
        link: '/save-notes',
      },
      {
        subtab: 'View my class schedules',
        link: '/class-schedule',
        tabstyle: 'pb-4',
      },
    ],
    inactive: false,

    subtabIconup: <HiChevronUp style={{ height: '20px', width: '20px' }} />,
    subtabIcondown: <HiChevronDown style={{ height: '20px', width: '20px' }} />,
  },
  {
    id: 4,
    title: 'Payments Panel',
    icon: <IoReceiptOutline className='h-[20px] w-[20px]' />,
    inactive: false,

    subtab: [
      {
        subtab: 'My Payments',
        link: `https://lodlc.lautech.edu.ng/pay/#/payments/${userDetails?.matricNo}/${userDetails?.level}`,
      },
      {
        subtab: 'Technology Fee',
        link: `https://lodlc.lautech.edu.ng/pay/#/techfee/${userDetails?.matricNo}`,
      },
      {
        subtab: 'Payments History',
        link: `https://lodlc.lautech.edu.ng/pay/#/paymentsummary/${userDetails?.matricNo}`,
        tabstyle: 'pb-4',
      },
      // {
      //   subtab: 'View payment receipts',
      //   link: '/view-payment-receipt',
      // },
      // {
      //   subtab: 'Dispute payment list',
      //   link: '/dispute-payment',
      //   tabstyle: 'pb-4',
      // },
    ],

    subtabIconup: <HiChevronUp style={{ height: '20px', width: '20px' }} />,
    subtabIcondown: <HiChevronDown style={{ height: '20px', width: '20px' }} />,
  },
  {
    id: 5,
    title: 'Results',
    icon: <VscNotebookTemplate className='h-[20px] w-[20px]' />,
    inactive: false,
    link: '/check-result',
  },
  {
    id: 6,
    title: 'Settings',
    icon: <RiSettings4Line style={{ height: '20px', width: '20px' }} />,
    inactive: false,
    link: '/settings',
  },
];
export const CacheEnums = {
  ACCESS_TOKEN: 'access_Token',
  USER_DATA: 'user-data',
  CACHE_BILLERS: 'CACHE_BILLERS',
  CACHE_BILLER_CATEGORIES: 'CACHE_BILLER_CATEGORIES',
  CACHE_POPULAR_BILLERS: 'CACHE_POPULAR_BILLERS',
  CACHE_AIRPORTS: 'CACHE_AIRPORTS',
  CACHE_AIRLINES: 'CACHE_AIRLINES',
  SESSION_FLIGHT_SEARCH: 'SESSION_FLIGHT_SEARCH',
  SESSION_SELECTED_FLIGHT: 'SESSION_SELECTED_FLIGHT',
  SESSION_REFERENCE_CACHE: 'SESSION_REFERENCE_CACHE',
  RECURRING_TRANSACTION: 'RECURRING_TRANSACTION',
  SAVED_BENEFICIARY: 'SAVED_BENEFICIARY',
  // USER_DETAILS = 'USER_DETAILS',
  LAST_LOGIN: 'LAST_LOGIN',
};
