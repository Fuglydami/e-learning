import React, { useState } from "react";

const Notification = () => {
  const data = [
    {
      id: 1,
      title: "Email Notifications",
      desc: " Send me a mail for announcements and important information.",
      check: true,
    },
    {
      id: 2,
      title: "Class Schedule",
      desc: "Notify me when I have an ongoing class and the classes for the day.",
      check: false,
    },
    {
      id: 3,
      title: "Sound",
      desc: "Get notified with sounds",
      check: true,
    },
  ];
  const [isChecked, setIsChecked] = useState(data);
  const handleOnChange = (id) => {
    setIsChecked((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        } else {
          return { ...item };
        }
      });
    });
  };

  return (
    <div>
      {isChecked.map((item) => {
        return (
          <div key={item.id} className="flex justify-between mt-10">
            <div className="md:w-2/3 w-4/5">
              <p className="text-[18px]">{item.title}</p>
              <p className="text-[14px] text-lightGrey">{item.desc}</p>
            </div>
            <div className="flex  items-center">
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  onChange={() => handleOnChange(item.id)}
                  type="checkbox"
                  checked={item.check}
                  className="sr-only peer"
                  // id={item.id}
                />
                <div className="w-11 h-6 bg-extraLightGrey peer-focus:outline-none   rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-customWhite after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-base_range"></div>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
