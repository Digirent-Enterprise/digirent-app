import { useTranslation } from "react-i18next";

type FaqProps = {
  id: string;
  question: string;
  answer: string;
};

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0F172A]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("frequentlyAsked")}
          </h2>
          <p className="mt-4 text-[#9CA3AF]">{t("frequentlyAskedBody")}</p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {t<string, FaqProps[]>("faqs", { returnObjects: true }).map(
              (faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-[#9CA3AF]">{faq.answer}</dd>
                </div>
              ),
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
