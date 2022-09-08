import React from "react";

const ChatHeader = () => {
  return (
    <div className="items-start py-2 px-4 w-full border-b sticky-top bg-white">
      <div className="flex items-center py-1">
        <div className="flex-grow-1">
          <strong> Admin</strong>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
