import React from "react";

const ChatHeader = ({ receiver }: any) => {
  return (
    <div className="items-start py-2 px-4 w-full border-b sticky-top bg-white">
      <div className="flex items-center py-1">
        <div className="flex-grow-1">
          <strong>{receiver}</strong>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
