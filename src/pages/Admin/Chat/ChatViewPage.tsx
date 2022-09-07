import { useTranslation } from "react-i18next";
import { ChatLeftSide, ChatRightSide } from "../../../components";
import Helmet from "../../../Helmet";
import DefaultAdminLayout from "../DefaultAdminLayout";

const ChatViewPage = () => {
  const { t } = useTranslation();
  return (
    <DefaultAdminLayout>
      <Helmet
        title={t("ChatPageHelmetTitle")}
        addPostfixTitle
        description={t("ChatPageHelmetDes")}
      />
      <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
        <ChatLeftSide />
        <ChatRightSide />
      </div>
    </DefaultAdminLayout>
  );
};

export default ChatViewPage;
