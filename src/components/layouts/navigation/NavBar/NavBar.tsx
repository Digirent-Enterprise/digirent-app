import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Logo from "./Logo";
import NavButton from "./NavButton";
import AvatarMenu from "./AvatarMenu";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 4px;
  margin: 7px;
  padding-right: 10px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 50;
  width: 100vw;
  background: #222;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 500;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

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
        <Menu>
          <NavButton navItem="Home" directUrl="/" />
          <NavButton navItem="About" directUrl="/about" />
          <NavButton navItem="Contact" directUrl="/contact" />
          {!currentUser.email ? (
            <NavButton navItem="Login" directUrl="/login" />
          ) : (
            <AvatarMenu />
          )}
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line
            style={{
              width: toggle ? "100%" : "100%",
            }}
          />
          <Line
            style={{
              width: toggle ? "40%" : "100%",
            }}
          />
          <Line
            style={{
              width: toggle ? "100%" : "100%",
            }}
          />
        </NavIcon>
      </Flex>

      <Overlay style={{ height: toggle ? "400px" : 0 }}>
        <OverlayMenu style={{ opacity: toggle ? 1 : 0 }}>
          <NavButton navItem="Home" directUrl="/" />
          <NavButton navItem="About" directUrl="/about" />
          <NavButton navItem="Contact" directUrl="/contact" />
          {!currentUser.email ? (
            <NavButton navItem="Login" directUrl="/login" />
          ) : (
            <AvatarMenu />
          )}
        </OverlayMenu>
      </Overlay>
    </Box>
  );
};

export default NavBar;
