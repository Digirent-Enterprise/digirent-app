import { Button } from "@chakra-ui/react";
import { IoEarth } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";

interface Props {
  [key: string]: { nativeName: string };
}
const lngs: Props = {
  en: { nativeName: "English" },
  vi: { nativeName: "Vietnam" },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center justify-center my-4">
      <IconContext.Provider value={{ className: "w-5 h-5 mr-2" }}>
        <div className="text-[#6B7280]">
          <IoEarth />
        </div>
      </IconContext.Provider>
      {Object.keys(lngs).map((lng) => (
        <Button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            marginRight: "5px",
            display: "flex",
          }}
          variant="unstyled"
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
