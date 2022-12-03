import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

const Breadcumb = ({
  link,
  page2,
  page3,
  page1,
  show = false,
  link2 = null,
}) => {
  const navigate = useNavigate();
  const { setShow } = useGlobalContext();
  return (
    <div
      onClick={() => setShow(false)}
      className="flex md:py-0 py-2 space-x-2 items-center font-[600] text-[14px]"
    >
      <Link to={link}>
        <p className="text-lightGrey">{page1}</p>
      </Link>
      <HiChevronDoubleRight className="text-lightGrey" />
      {/* <Link to={link2}> */}
      <p
        className={show && `cursor-pointer text-lightGrey`}
        onClick={() => show && navigate(-1)}
      >
        {page2}
      </p>
      {/* </Link> */}
      {show && <HiChevronDoubleRight className="text-lightGrey" />}
      <p>{page3}</p>
    </div>
  );
};

export default Breadcumb;
