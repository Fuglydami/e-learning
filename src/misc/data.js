import { AiOutlineFolderOpen } from "react-icons/ai";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { IoReceiptOutline } from "react-icons/io5";
import { RiSettings4Line } from "react-icons/ri";
import { TbNotes, TbSmartHome } from "react-icons/tb";
import { VscNotebookTemplate } from "react-icons/vsc";
import Onboarding1 from "../asssets/images/Onboarding 1.gif";
import Onboarding2 from "../asssets/images/Onboarding 2.gif";
import Onboarding3 from "../asssets/images/Onboarding 3.gif";

export const items = [
  {
    id: 1,
    title: (
      <div>
        Get notified on your class{" "}
        <span className="text-base_range">schedules</span>{" "}
      </div>
    ),
    paragraph: `One time notification and class schedule to keep you in check and avoid missing classes`,
    pic: Onboarding1,
  },
  {
    id: 2,
    title: (
      <div>
        Attend classes from <span className="text-base_range">anywhere</span>{" "}
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
        {" "}
        Access to past <span className="text-base_range">classes</span>
      </div>
    ),
    paragraph: `Videos and material from previous week and classes can be accessed, read and revised`,
    pic: Onboarding3,
  },
];
export const customStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
      fontWeight: "600",
      fontSize: "16px",
    },
  },
  title: {
    style: {
      fontWeight: "700",
      fontSize: "16px",
    },
  },
  headCells: {
    style: {
      minHeight: "51px", // override the row height
      backgroundColor: "#FFF1E7",
      fontWeight: "700",
      fontSize: "16px",
    },
  },
};
export const customStyles1 = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
      fontWeight: "600",
      fontSize: "14px",
    },
  },
  title: {
    style: {
      fontWeight: "700",
      fontSize: "14px",
    },
  },
  headCells: {
    style: {
      minHeight: "51px", // override the row height
      backgroundColor: "#FFF1E7",
      fontWeight: "700",
      fontSize: "14px",
    },
  },
};

export const navItem = [
  {
    id: 1,
    title: "Dashboard",
    icon: <TbSmartHome className="h-[20px] w-[20px]" />,
    inactive: false,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Course",
    icon: <AiOutlineFolderOpen className="h-[20px] w-[20px]" />,
    inactive: false,
    subtab: [
      {
        subtab: "Register new courses",
        link: "/register-course",
      },
      {
        subtab: "View registered courses",
        link: "/view-registered-courses",
      },
      {
        subtab: "Print course form",
        link: "/print-all-course",
        tabstyle: "pb-4",
      },
    ],
    subtabIconup: <HiChevronUp style={{ height: "20px", width: "20px" }} />,
    subtabIcondown: <HiChevronDown style={{ height: "20px", width: "20px" }} />,
  },
  // {
  //   id: 2,
  //   title: "Course",
  //   icon: <AiOutlineFolderOpen className="h-[20px] w-[20px]" />,
  //   inactive: false,
  //   // link: "/course",
  //   subtab: [
  //     {
  //       subtab: "Register new courses",
  //       link: "/register-course",
  //     },
  //     {
  //       subtab: "View registered courses",
  //       link: "/view-registered-courses",
  //     },
  //     {
  //       subtab: "Print course form",
  //       link: "/print-course-form",
  //       tabstyle: "pb-4",
  //     },
  //   ],

  //   subtabIconup: <HiChevronUp style={{ height: "20px", width: "20px" }} />,
  //   subtabIcondown: <HiChevronDown style={{ height: "20px", width: "20px" }} />,
  // },
  {
    id: 3,
    title: "My learning",
    icon: <TbNotes className="h-[20px] w-[20px]" />,
    subtab: [
      {
        subtab: "View my courses",
        link: "/my-learning",
      },
      {
        subtab: "View saved notes",
        link: "/save-notes",
      },
      {
        subtab: "View my class schedule",
        link: "/class-schedule",
        tabstyle: "pb-4",
      },
    ],
    inactive: false,

    subtabIconup: <HiChevronUp style={{ height: "20px", width: "20px" }} />,
    subtabIcondown: <HiChevronDown style={{ height: "20px", width: "20px" }} />,
  },
  {
    id: 4,
    title: "Payment",
    icon: <IoReceiptOutline className="h-[20px] w-[20px]" />,
    inactive: false,

    subtab: [
      {
        subtab: "View payment receipts",
        link: "/view-payment-receipt",
      },
      {
        subtab: "Dispute payment list",
        link: "/dispute-payment",
        tabstyle: "pb-4",
      },
    ],

    subtabIconup: <HiChevronUp style={{ height: "20px", width: "20px" }} />,
    subtabIcondown: <HiChevronDown style={{ height: "20px", width: "20px" }} />,
  },
  {
    id: 5,
    title: "Result",
    icon: <VscNotebookTemplate className="h-[20px] w-[20px]" />,
    inactive: false,
    link: "/check-result",
  },
  {
    id: 6,
    title: "Setting",
    icon: <RiSettings4Line style={{ height: "20px", width: "20px" }} />,
    inactive: false,
    link: "/settings",
  },
];
