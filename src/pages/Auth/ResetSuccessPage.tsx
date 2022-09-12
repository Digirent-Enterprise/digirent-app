import React from "react";
import { Transition } from "../../components";
import Helmet from "../../Helmet";

const ResetSuccessPage = () => {
  return (
    <Transition>
      <Helmet
        title="Reset Password Success"
        addPostfixTitle
        description="reset password successfully"
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen py-6 overflow-hidden bg-white sm:py-12">
        <svg
          viewBox="0 0 24 24"
          className="w-16 h-16 mx-auto my-6 text-[#16a34a]"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          />
        </svg>
        <div className="text-center">
          <h3 className="text-base font-semibold text-center text-gray-900 md:text-2xl">
            Reset password successfully!
          </h3>
          <p className="my-2 text-[#4b5563]">
            Your password have been changed.
          </p>
          <p className="font-medium text-[#6366f1]"> Have a great day! </p>
          <div className="py-10 text-center">
            <a
              href="/login"
              className="inline-block px-5 py-3 mt-3 font-medium text-white bg-[#6366f1] rounded shadow-md w-96 shadow-blue-500/20 hover:bg-[#4f46e5]"
            >
              Go back to login
            </a>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ResetSuccessPage;
