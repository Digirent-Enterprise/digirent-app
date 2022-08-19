import Helmet from "../../Helmet";
import DefaultLayout from "../DefaultLayout";

const PrivacyPolicy = () => {
  return (
    <DefaultLayout>
      <Helmet
        title="Privacy Policy"
        addPostfixTitle
        description="Privacy Policy of Digirent"
      />
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 mx-auto md:px-8">
          <h1 className="mb-8 text-4xl font-bold text-center text-black sm:text-6xl md:mb-10">
            Privacy Policy
          </h1>

          <p className="mb-6 text-black sm:text-lg md:mb-8">
            At Digirent, accessible from digirent.dev, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Digirent and how we use it.
            <p className="py-6">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in digirent.dev. This policy is
              not applicable to any information collected offline or via
              channels other than this website.
            </p>
          </p>
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:mb-8">
            Consent
          </h1>
          <p className="mb-6 text-black sm:text-lg md:mb-8">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:mb-8">
            Information we collect
          </h1>
          <p className="mb-6 text-black sm:text-lg md:mb-8">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
            <p className="py-6">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;
