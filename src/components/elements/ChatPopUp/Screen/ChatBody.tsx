import React from "react";
// import ScrollableFeed from "react-scrollable-feed";

const ChatBody = () => {
  return (
    <div className="relative overflow-auto h-24">
      <div className="flex flex-col p-4">
        <div className="flex shrink-1 bg-light rounded py-2 px-3 ml-3">
          Messages
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
