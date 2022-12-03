import { Disclosure } from "@headlessui/react";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Faqs = () => {
  const data = [
    {
      title: "How do I use LODLC?",
      desc: ` Cras vulputate id sit vitae dictumst fames volutpat. Nunc, neque
            imperdiet pellentesque convallis enim Cras vulputate id sit
            vitae dictumst fames volutpat. Nunc, neque imperdiet
            pellentesque convallis enim.`,
    },
    {
      title: "How do I register for courses?",
      desc: ` Cras vulputate id sit vitae dictumst fames volutpat. Nunc, neque
            imperdiet pellentesque convallis enim Cras vulputate id sit
            vitae dictumst fames volutpat. Nunc, neque imperdiet
            pellentesque convallis enim.`,
    },
    {
      title: "How do I check my CPGA?",
      desc: ` Cras vulputate id sit vitae dictumst fames volutpat. Nunc, neque
            imperdiet pellentesque convallis enim Cras vulputate id sit
            vitae dictumst fames volutpat. Nunc, neque imperdiet
            pellentesque convallis enim.`,
    },
  ];
  return (
    <div className="w-full">
      {data.map((item) => {
        return (
          <div key={item.title} className="  rounded-2xl  bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    title="view faq answer"
                    className="flex w-full justify-between rounded-lg bg-sidebarOrange px-4 py-4 text-left text-[14px] font-[600] "
                  >
                    <span>{item.title}</span>
                    <RiArrowDropDownLine
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 bg-customWhite rounded-full text-base_range`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 font-[400]  text-[14px] bg-[#FEFBF7] ">
                    {item.desc}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
