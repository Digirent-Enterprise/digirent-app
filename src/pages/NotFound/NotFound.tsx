import { useTranslation } from "react-i18next";
import Helmet from "../../Helmet";

const NotFound = () => {
  const {t} = useTranslation();
  return (
    <>
      <Helmet
        title={t("NotFoundHelmetTitle")}
        addPostfixTitle
        description={t("NotFoundHelmetDes")}
      />
      <div className="min-h-full px-4 py-16 bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-[#4F46E5] sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-[#E5E7EB] sm:pl-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-[#6B7280]">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#4F46E5] border border-transparent rounded-md shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1]"
                >
                  Go back home
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#4338CA] bg-[#E0E7FF] border border-transparent rounded-md hover:bg-[#C7D2FE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1]"
                >
                  Contact support
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NotFound;
