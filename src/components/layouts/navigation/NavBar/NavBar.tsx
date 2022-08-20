import React, { useState } from "react";
import { Box, Flex, Show } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavButton from "./NavButton";
import AvatarMenu from "./AvatarMenu";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";

const NavBar = () => {
  const currentUser = useSelector(getCurrentUserSelector);
  const [toggle, toggleNav] = useState(false);
  return (
    <Box className="z-500">
      <Flex
        pt="0px"
        pr="20px"
        minH="9vh"
        bgColor="#222"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />
        <Show above="md">
          <ul className="list-none flex">
            <NavButton navItem="Home" directUrl="/" />
            <NavButton navItem="About" directUrl="/about" />
            <NavButton navItem="Contact" directUrl="/contact" />
            {!currentUser.email ? (
              <NavButton navItem="Login" directUrl="/login" />
            ) : (
              <AvatarMenu />
            )}
          </ul>
        </Show>
        <Show below="md">
          <button
            className="bg-transparent cursor-pointer border-none outline-none"
            onClick={() => toggleNav(!toggle)}
          >
            <span
              className="transition duration-300 ease-in-out block rounded-3xl w-6 h-1 m-2 pr-3 bg-white"
              style={{
                width: toggle ? "100%" : "100%",
              }}
            />
            <span
              className="transition-width duration-700 ease-in-out block rounded-3xl w-6 h-1 m-2 pr-3 bg-white "
              style={{
                width: toggle ? "40%" : "100%",
              }}
            />
            <span
              className="transition duration-300 ease-in-out block rounded-3xl w-6 h-1 m-2 pr-3 bg-white"
              style={{
                width: toggle ? "100%" : "100%",
              }}
            />
          </button>
        </Show>
      </Flex>
      <Show below="md">
        <div
          className="transition-height duration-300 ease-in-out z-50 w-full bg-black"
          style={{ height: toggle ? "400px" : 0 }}
        >
          <ul
            className="transition-opacity duration-300 ease-in-out list-none absolute z-500 left-1/3 translate-x-1/2"
            style={{ opacity: toggle ? 1 : 0 }}
          >
            <div className="text-2xl mt-10 pl-3 pt-2">
              <NavButton navItem="Home" directUrl="/" />
            </div>
            <div className="text-2xl mt-10 pl-3 pt-2">
              <NavButton navItem="About" directUrl="/about" />
            </div>
            <div className="text-2xl mt-10 pl-2 pt-2">
              <NavButton navItem="Contact" directUrl="/contact" />
            </div>
            <div className="text-2xl mt-10 pl-6">
              {" "}
              {!currentUser.email ? (
                <NavButton navItem="Login" directUrl="/login" />
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
