import React from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import NavButton from "./NavButton";
import AvatarMenu from "./AvatarMenu";
import { getCurrentUser } from "../../../../store/selectors/user.selector";

const NavBar = () => {
  const currentUser = useSelector(getCurrentUser);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <Box
      bgColor="#222"
      alignItems="center"
      justifyContent="space-between"
      px={7}
      py={3}
      mb={3}
      // className="relative flex flex-wrap "
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={4}
        mx="auto"
        className="flex flex-wrap"
      >
        <Flex
          justifyContent="space-between"
          className="relative flex w-full lg:w-auto lg:static lg:block lg:justify-start"
        >
          <Logo />
          <button
            className="block px-3 py-1 leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none lg:hidden focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {/* <img
              src="../../../../../public/images/plus-5-xxl.png"
              alt=""
            /> */}

            <Text fontSize="5xl" color="white">
              +
            </Text>
          </button>
        </Flex>
        <div
          className={`lg:flex flex-grow items-center justify-center${
            navbarOpen ? " flex" : " hidden"
          }`}
          id="example-navbar-danger"
        >
          <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            <NavButton navItem="Home" directUrl="/" />
            <NavButton navItem="Contact" directUrl="/contact" />
            {!currentUser.email ? (
              <NavButton navItem="Login" directUrl="/login" />
            ) : (
              <AvatarMenu />
            )}
          </ul>
        </div>
      </Flex>
    </Box>
  );
};

export default NavBar;
