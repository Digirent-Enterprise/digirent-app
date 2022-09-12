import { useTranslation } from "react-i18next";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChatLeftSide, ChatRightSide } from "../../../components";
import Helmet from "../../../Helmet";
import DefaultAdminLayout from "../DefaultAdminLayout";
import { getCurrentUserSelector } from "../../../store/selectors/user.selector";
import { IUser } from "../../../store/types/user.types";

type MessageProps = {
  from: IUser;
  messages: {
    from: IUser;
    to: IUser;
    content: string;
  }[];
}[];

const ChatViewPage = () => {
  const { t } = useTranslation();
  const userDetail = useSelector(getCurrentUserSelector);
  const socket = io("http://localhost:8000");
  const [users, setUsers] = useState<MessageProps>([]);
  useEffect(() => {
    socket.emit("get-chat-users");
  }, []);
  useEffect(() => {
    if (userDetail._id) {
      socket.on("connect", () => {
        socket.on("get-chat-users-success", (data) => {
          setUsers(data);
        });
        socket.on("change-chat-log", (data) => {
          console.log("changee");
          setUsers(data);
        });
      });

      socket.on("disconnect", () => {
        return socket.disconnect();
      });
    }
  }, [socket]);
  return (
    <DefaultAdminLayout>
      <Helmet
        title={t("ChatPageHelmetTitle")}
        addPostfixTitle
        description={t("ChatPageHelmetDes")}
      />
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        <ChatLeftSide users={users} />
        <ChatRightSide users={users} />
      </div>
    </DefaultAdminLayout>
  );
};

export default ChatViewPage;
