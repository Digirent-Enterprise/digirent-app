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
    <div className="lg:px-14 lg:py-24 md:py-20 md:px-24 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="">
            <h1 className="flex my-2 text-gray-800 font-bold text-2xl">
              Sorry, the website is currently under development{" "}
            </h1>

            <p className="flex my-2 text-gray-800 text-2lg">
              Please redirect to our most visited page!{" "}
            </p>
            <div className="flex">
              <span className="animate-waving-hand text-4xl pb-4 pr-4">👋🏻</span>
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
      <div className="align-center justify-center">
        <Image boxSize="350px" objectFit="cover" src="/figma-logo.png" alt="" />
        <p className="italic font-medium text-2xl px-auto text-center pt-6">
          "This is Digirent"
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopmentPage;
