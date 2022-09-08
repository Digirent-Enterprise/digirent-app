import React from "react";
import {
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

const UnderDevelopmentPage = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center px-4 py-24 lg:px-14 lg:py-24 md:py-20 md:px-24 lg:flex-row">
      <div className="relative w-full pb-12 xl:pt-24 xl:w-1/2 lg:pb-0">
        <div className="relative">
          <div className="">
            <h1 className="flex my-2 text-2xl font-bold text-gray-800">
              Sorry, this feature is currently under development{" "}
            </h1>

            <p className="flex my-2 text-gray-800 text-2lg">
              Please redirect to our most visited page!{" "}
            </p>
            <div className="flex">
              <span className="pb-4 pr-4 text-4xl animate-waving-hand">👋🏻</span>
              <Menu>
                <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
                  Most visited page
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem as={Link} href="/">
                      Home Page
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem as={Link} href="/about">
                      About page
                    </MenuItem>
                    <MenuItem as={Link} href="/contact">
                      Contact sales page
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center align-center">
        <Image boxSize="350px" objectFit="cover" src="/figma-logo.png" alt="" />
        <p className="pt-6 text-2xl italic font-medium text-center px-auto">
          "This is Digirent"
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopmentPage;
