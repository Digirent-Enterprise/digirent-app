import { ChatLeftSide, ChatRightSide } from "../../components";

const ChatViewPage = () => {
  return (
    <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
      <ChatLeftSide />
      <ChatRightSide />
    </div>
  );
};

export default ChatViewPage;
