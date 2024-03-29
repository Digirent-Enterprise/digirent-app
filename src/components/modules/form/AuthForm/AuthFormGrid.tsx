import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

// import { getGoogleUrl } from "../../../utils";

interface ParentCompProps {
  childCompForm?: ReactNode;
  childCompSideContent?: ReactNode;
  childTitle?: ReactNode;
  childOAuthButtonsVisibility?: Boolean;
}

const AuthFormGrid: React.FC<ParentCompProps> = (props) => {
  const {
    childCompForm,
    childCompSideContent,
    childTitle,
    childOAuthButtonsVisibility,
  } = props;

  return (
    <div className="flex items-center min-h-screen bg-cover bg-auth">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              loading="lazy"
              className="object-cover w-full h-full opacity-100 brightness-50"
              src={`${childCompSideContent}`}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="p-3 mb-2 text-5xl italic font-bold text-center text-blue-100">
                Digirent
              </h1>
              <h1 className="mb-3 text-2xl font-bold text-center text-[#374151]">
                {childTitle}
              </h1>
              <div>{childCompForm}</div>

              {childOAuthButtonsVisibility && (
                <div>
                  <div className="relative flex items-center justify-between">
                    <hr className="w-full" />
                    <span className="p-4 mb-1 text-black">or</span>
                    <hr className="w-full" />
                  </div>
                  <div className="flex flex-col items-center justify-between">
                    <Link to="/maintain">
                      <button
                        type="button"
                        className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-full justify-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2 -ml-1 text-center"
                          aria-hidden="true"
                          data-prefix="fab"
                          data-icon="google"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 488 512"
                        >
                          <path
                            fill="currentColor"
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                          />
                        </svg>
                        Sign in with Google
                      </button>
                    </Link>
                    <Link to="/maintain">
                      <button
                        type="button"
                        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-full justify-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2 -ml-1"
                          aria-hidden="true"
                          data-prefix="fab"
                          data-icon="facebook-f"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                          />
                        </svg>
                        Sign in with Facebook
                      </button>
                    </Link>
                    <Link to="/maintain">
                      <button
                        type="button"
                        className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 w-full justify-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2 -ml-1"
                          aria-hidden="true"
                          data-prefix="fab"
                          data-icon="twitter"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                          />
                        </svg>
                        Sign in with Twitter
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormGrid;
