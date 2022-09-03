import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, AlertIcon, Switch } from "@chakra-ui/react";
import DefaultLayout from "../DefaultLayout";
import Helmet from "../../Helmet";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ContactUsPage = () => {
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);

  const options = [
    { value: "us", text: "US" },
    { value: "vn", text: "VN" },
  ];

  const [selected, setSelected] = useState("");

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  const handleSubmit = () => {
    if (agreed) {
      // submit form
      console.log(agreed);
    } else {
      <Alert status="error">
        <AlertIcon />
        {t("YouNeedToAgree")}
      </Alert>;
    }
  };

  return (
    <DefaultLayout>
      <Helmet
        title={t("ContactPageHelmetTitle")}
        addPostfixTitle
        description={t("ContactPageHelmetDes")}
      />
      <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute transform translate-x-1/2 left-full"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute bottom-0 transform -translate-x-1/2 right-full"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t("ContactSales")}
            </h2>
            <div className="mt-4 text-lg leading-6 text-gray-500">
              {t("AskUs")}
            </div>
          </div>
          <div className="mt-12">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("FirstName")}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6366F1] focus:border-[#6366F1] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("LastName")}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6366F1] focus:border-[#6366F1] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Company")}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6366F1] focus:border-[#6366F1] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6366F1] focus:border-[#6366F1] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("PhoneNum")}
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      {t("Country")}
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={selected}
                      onChange={handleChange}
                      className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-[#6366F1] focus:border-[#6366F1] rounded-md"
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full pl-20 focus:ring-[#6366F1] focus:border-[#6366F1] border-gray-300 rounded-md"
                    placeholder={
                      selected === "us"
                        ? "+1 (555) 987-6543"
                        : "+84 (555) 987-6543"
                    }
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#374151]"
                >
                  {t("Message")}
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6366F1] focus:border-[#6366F1] border border-[#D1D5DB] rounded-md"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                      className={classNames(
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1]",
                      )}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">
                      {t("BySelecting")}{" "}
                      <a
                        href="/privacy"
                        className="font-medium text-gray-700 underline"
                      >
                        {t("PrivacyPolicy")}
                      </a>{" "}
                      {t("And")}{" "}
                      <a
                        href="/privacy"
                        className="font-medium text-gray-700 underline"
                      >
                        {t("CookiePolicy")}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#4F46E5] hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1]"
                >
                  {t("LetsTalk")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContactUsPage;
