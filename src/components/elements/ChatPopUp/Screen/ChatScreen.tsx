/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import ChatBody from "./ChatBody";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";
import { IUser } from "../../../../store/types/user.types";

const TO = "6308e6902e4e5d313cb11215";
type MessageProps = {
  content: string;
  from: IUser;
  to: IUser;
  at: string;
};
const ChatScreen = (props: any) => {
  const userDetail = useSelector(getCurrentUserSelector);
  const [receiverName, setReceiverName] = useState("Admin");
  const [content, setContent] = useState<MessageProps[]>([]);

  // const socket = io("http://localhost:8000");
  // useEffect(() => {
  //   if (userDetail._id) {
  //     socket.on("connect", () => {
  //       socket.emit("create-chat-room", {
  //         from: userDetail._id,
  //         to: TO,
  //         message: [],
  //       });
  //       socket.on("create-room-success", (data) => {
  //         setReceiverName(`${data.to.email} - ${data.to.role}`);
  //         setContent(data.messages as MessageProps[]);
  //       });
  //       socket.on("send-success", (data) => {
  //         setContent(data as MessageProps[]);
  //       });
  //     });
  //     socket.on("disconnect", () => {
  //       return socket.disconnect();
  //     });
  //   }
  // }, [socket]);
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
        ...{ display: props.visible ? "block" : "none" },
      }}
    >
      <ChatContainer>
        <div className="flex flex-col h-full">
          <ChatHeader receiver={receiverName} />
          <ChatBody content={content} from={userDetail._id} />
          <ChatInput from={userDetail._id} to={TO} />
        </div>
      </ChatContainer>
    </Box>
  );
};

export default ChatScreen;
