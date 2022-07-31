import { ChatLeftSide, ChatRightSide } from "../../../components";
import DefaultLayout from "../DefaultLayout";

const ChatViewPage = () => {
  return (
    <DefaultLayout>
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        <ChatLeftSide />
        <ChatRightSide />
      </div>
    </DefaultLayout>
  );
};

export default ChatViewPage;
