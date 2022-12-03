import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import Dot from "../../../../asssets/icons/Dot.png";
import Avatar from "../../../../asssets/images/chat avatar.png";

const Content = () => {
  const [text, setText] = useState("");
  const [textInput, setTextInput] = useState("");

  function handleOnEnter(text) {
    setTextInput(text);
    console.log("enter", text);
  }

  return (
    <section className="my-6">
      <div className="flex mb-7 gap-3">
        <div>
          <img
            className="md:w-[38px] w-[92px]"
            src={Avatar}
            alt="chat-avatar"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="font-[600]">Kolade Miracle</h3>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4" src={Dot} alt="dot" />
              <p className="font-[400] text-[14px]">40 mins ago </p>
            </div>
          </div>
          <p className="text-[14px]">
            Hello Everyone. Let’s get today’s class started. I’ll be muting
            everyone now and unmute whenever i ask question or i need audience
            from the class.
          </p>
          <div className="gap-3 flex text-base_range text-[14px]">
            <p className="cursor-pointer">Reply</p>
            <p className="cursor-pointer">Like (10)</p>
          </div>
          <p className="text-[14px] text-lightGrey cursor-pointer">
            View 2 replies
          </p>
          <div className="gap-2">
            <div className="space-y-3">
              <div className="flex  gap-3">
                <div>
                  <img src={Avatar} alt="chat-avatar" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-[600]">Dare Wonuola</h3>
                    <div className="flex items-center gap-1">
                      <img className="h-4 w-4" src={Dot} alt="dot" />
                      <p className="font-[400] text-[14px]">40 mins ago </p>
                    </div>
                  </div>
                  <p className="text-[14px]">
                    Okay sir. Thank you sir. {textInput}
                  </p>
                  <div className="gap-3 flex  text-lightGrey text-[14px]">
                    <p className="cursor-pointer">Reply</p>
                    <p className="cursor-pointer">Like (10)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Write a message"
      />
    </section>
  );
};

export default Content;
