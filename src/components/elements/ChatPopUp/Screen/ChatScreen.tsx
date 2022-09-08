import { Box } from "@chakra-ui/react";
import React from "react";
import ChatBody from "./ChatBody";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const ChatScreen = (props: any) => {
  return (
    <Box
      style={{
        zIndex: "100",
        // Position
        position: "fixed",
        bottom: "116px",
        right: "150px",
        // Size
        width: "420px",
        height: "530px",
        maxWidth: "calc(100% - 48px)",
        maxHeight: "calc(100% - 48px)",
        backgroundColor: "white",
        // Border
        borderRadius: "12px",
        border: "2px solid black",
        overflow: "hidden",
        // Shadow
        boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <ChatContainer>
        <div className="flex flex-col h-full">
          <ChatHeader />
          <ChatBody />
          <ChatInput />
        </div>
      </ChatContainer>
    </Box>
  );
};

export default ChatScreen;
