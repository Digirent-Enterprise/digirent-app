import { ChatLeftSide, ChatRightSide } from "../../../components";
import DefaultAdminLayout from "../DefaultAdminLayout";

const ChatViewPage = () => {
  return (
    <DefaultAdminLayout>
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        <ChatLeftSide />
        <ChatRightSide />
      </div>
    </DefaultAdminLayout>
  );
};

export default ChatViewPage;
