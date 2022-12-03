import React, { useState } from "react";
import Content from "./content";

const Chat = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div>
      <Content />
      {/* <NothingToDisplay
        image={ChatImage}
        title={"No Messages."}
        paragraph={
          "  Start a conversation here and reach out to your tutors and collegues."
        }
      />
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Write a message"
      /> */}
    </div>
  );
};

export default Chat;
