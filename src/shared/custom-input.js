import React from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const CustomTextInput = ({
  label,
  value,
  onChange,
  placeholder,
  labelStyle = "font-semibold",
  type = "text",
  width = "w-full",
  paddingX = "py-4",
  textColor = "text-black",
}) => {
  // const placeholder = `Please insert your ${label.toLowerCase()}`;
  const inputStyle = `placeholder:font-[400] border-none bg-inputColor font-mulish appearance-none border ${textColor} ${paddingX} rounded-md px-4 placeholder-gray-300 focus:bg-transparent  focus:ring-1 ring-[#ffddbe] border-none outline-none `;
  return (
    <div id="input" className={`flex flex-col ${width} my-5`}>
      <label htmlFor={label} className={` mb-2  ${labelStyle}`}>
        {label}
      </label>
      <input
        autoComplete="new-email"
        type={type}
        value={value}
        onChange={onChange}
        id={label}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
};
export const CustomSelectInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  width = "w-full",
  textColor = "text-lightGrey",
}) => {
  return (
    <div id="input" className={`flex flex-col ${width} my-5 relative`}>
      <label for="countries" className="block mb-2  font-medium text-gray-900 ">
        {label}
      </label>
      <select
        placeholder={placeholder}
        id="countries"
        className="bg-inputColor placeholder:font-[600] focus:ring-1 border-none outline-none  ring-[#ffddbe]   rounded-lg  w-full px-2.5 py-4 "
      >
        <option selected>{placeholder}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};
export const CustomPasswordInput = ({
  label,
  value,
  onChange,
  placeholder,

  width = "w-full",
  textColor = "text-black",
}) => {
  const [type, setType] = React.useState(true);
  const style = {
    position: "absolute ",
    bottom: "15px",
    color: "grey",
    cursor: "pointer",
    right: "20px",
    fontSize: "25px",
  };
  // const placeholder = `Please insert your ${label.toLowerCase()}`;
  const inputStyle = `border-none bg-inputColor font-mulish appearance-none border ${textColor}  rounded-md px-4 py-4 placeholder-gray-300  focus:ring-1 ring-[#ffddbe] border-none outline-none `;
  return (
    <div id="input" className={`flex flex-col ${width} my-5 relative`}>
      <label htmlFor={label} className={` mb-2 font-semibold $`}>
        {label}
      </label>
      <input
        type={type ? "password" : "text"}
        value={value}
        onChange={onChange}
        autoComplete="off"
        id={label}
        placeholder={placeholder}
        className={inputStyle}
      />
      <div onClick={() => setType(!type)}>
        {type ? (
          <AiOutlineEyeInvisible style={style} />
        ) : (
          <AiOutlineEye style={style} />
        )}
      </div>
    </div>
  );
};
