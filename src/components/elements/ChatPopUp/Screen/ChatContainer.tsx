import React from "react";

const ChatContainer = (props: any) => {
  return (
    <div className="w-full h-full">
        <div className="flex flex-col h-full">
          <div className="grid-rows h-full">{props.children}</div>
        </div>
    </div>
  );
};

export default ChatContainer;
