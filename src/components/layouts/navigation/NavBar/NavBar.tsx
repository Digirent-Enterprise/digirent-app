import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Show } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavButton from "./NavButton";
import AvatarMenu from "./AvatarMenu";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";

const NavBar = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(getCurrentUserSelector);

  const [toggle, toggleNav] = useState(false);
  return (
    <Box className="z-50">
      <Flex
        pt="0px"
        pr="20px"
        minH="9vh"
        bgColor="#222"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className="fixed w-full  "
      >
        <Logo />
        <Show above="md">
          <ul className="flex list-none">
            {currentUser.role === "admin" && (
              <NavButton navItem={t("Dashboard")} directUrl="/admin" />
            )}
            <NavButton navItem={t("Home")} directUrl="/" />
            <NavButton navItem={t("About")} directUrl="/about" />
            <NavButton navItem={t("Contact")} directUrl="/contact" />
            {!currentUser.email ? (
              <NavButton navItem={t("Login")} directUrl="/login" />
            ) : (
              <AvatarMenu />
            )}
          </ul>
        </Show>
        <Show below="md">
          <button
            className="bg-transparent border-none outline-none cursor-pointer"
            onClick={() => toggleNav(!toggle)}
          >
            <span
              className="block w-6 h-1 pr-3 m-2 transition duration-300 ease-in-out bg-white rounded-3xl"
              style={{
                width: toggle ? "100%" : "100%",
              }}
            />
            <span
              className="block w-6 h-1 pr-3 m-2 duration-700 ease-in-out bg-white transition-width rounded-3xl "
              style={{
                width: toggle ? "40%" : "100%",
              }}
            />
            <span
              className="block w-6 h-1 pr-3 m-2 transition duration-300 ease-in-out bg-white rounded-3xl"
              style={{
                width: toggle ? "100%" : "100%",
              }}
            />
          </button>
        </Show>
      </Flex>
      <Flex minH="9vh" bgColor="#222"></Flex>
      <Show below="md">
        <div
          className="z-50 w-full duration-300 ease-in-out bg-black transition-height fixed"
          style={{ height: toggle ? "400px" : 0 }}
        >
          <ul
            className="absolute list-none transition-opacity duration-300 ease-in-out translate-x-1/2 z-500 left-1/3"
            style={{ opacity: toggle ? 1 : 0 }}
          >
            {currentUser.role === "admin" && (
              <div
                className="pt-2 pl-3 mt-10 text-2xl"
                style={{ visibility: toggle ? "visible" : "hidden" }}
              >
                <NavButton navItem={t("Dashboard")} directUrl="/admin" />
              </div>
            )}
            <div
              className="pt-2 pl-3 mt-10 text-2xl"
              style={{ visibility: toggle ? "visible" : "hidden" }}
            >
              <NavButton navItem={t("Home")} directUrl="/" />
            </div>
            <div
              className="pt-2 pl-3 mt-10 text-2xl"
              style={{ visibility: toggle ? "visible" : "hidden" }}
            >
              <NavButton navItem={t("About")} directUrl="/about" />
            </div>
            <div
              className="pt-2 pl-2 mt-10 text-2xl"
              style={{ visibility: toggle ? "visible" : "hidden" }}
            >
              <NavButton navItem={t("Contact")} directUrl="/contact" />
            </div>
            <div
              className="pl-6 mt-10 text-2xl"
              style={{ visibility: toggle ? "visible" : "hidden" }}
            >
              {" "}
              {!currentUser.email ? (
                <NavButton navItem={t("Login")} directUrl="/login" />
              ) : (
                <AvatarMenu />
              )}
            </div>
          </ul>
        </div>
      </Show>
    </Box>
  );
};

export default NavBar;
