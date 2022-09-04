import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Helmet from "../../Helmet";
import { getCurrentUserSelector } from "../../store/selectors/user.selector";
import { IMAGES } from "../../utils/constants/image.constant";
import DefaultLayout from "../DefaultLayout";

const UserViewInfo = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(getCurrentUserSelector);
  return (
    <DefaultLayout>
      <Helmet
        title={t("UserViewInfoHelmetTitle")}
        addPostfixTitle
        description={t("UserViewInfoHelmetDes")}
      />
      <section className="relative block h-[500px] -mt-5">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-50"
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-[#D1D5DB] fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-[#D1D5DB]">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                  <div className="relative">
                    <img
                      alt="avatar"
                      src={
                        currentUser.profileImage
                          ? currentUser.profileImage
                          : IMAGES.defaultAvatar
                      }
                      className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-20 text-center">
                <h3 className="mb-2 text-4xl font-semibold leading-normal text-[#1F2937]">
                  {currentUser.name}
                </h3>
                <div className="mt-0 mb-2 text-sm font-bold leading-normal text-[#6B7280] uppercase">
                  <i className="mr-2 text-lg text-[#6B7280] fas fa-map-marker-alt" />{" "}
                  {currentUser.location}
                </div>
              </div>
              <div className="py-10 mt-10 text-center border-t border-[#D1D5DB]">
                <div className="flex flex-wrap justify-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default UserViewInfo;
