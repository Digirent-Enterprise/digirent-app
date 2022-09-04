// import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Transition } from "../../components";

import Helmet from "../../Helmet";
import { getUserInfoSelector } from "../../store/selectors/user.selector";

const EmailSentPage = () => {
  const { t } = useTranslation();
  const userInfo = useSelector(getUserInfoSelector);

  return (
    <Transition>
      <Helmet
        title={t("EmailSentHelmetTitle")}
        addPostfixTitle
        description={t("EmailSentHelmetDes")}
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen py-6 overflow-hidden bg-white sm:py-12">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold">Check your inbox</h2>
          <p className="mb-2 text-lg">
            {t("EmailSentPageTitle")}{" "}
            <span className="font-medium text-[#6366f1]">{userInfo.email}</span>
          </p>
          <a
            href="/login"
            className="inline-block px-5 py-3 mt-3 font-medium text-white bg-[#6366f1] rounded shadow-md w-96 shadow-blue-500/20 hover:bg-[#4f46e5]"
          >
            {t("OpenTheApp")}
          </a>
        </div>
      </div>
    </Transition>
  );
};

export default EmailSentPage;
