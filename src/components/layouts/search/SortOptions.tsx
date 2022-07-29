// import React, { Fragment } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

import { FiChevronDown } from "react-icons/fi";

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }

// interface SortOptionsProps {
//   isOpen: boolean;
// }

const SortOptions = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <div>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<FiChevronDown />}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              Sort Options
            </MenuButton>
          </div>

          <MenuList className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700">
                  Recently Updated
                </a>
              </MenuItem>
              <MenuItem>Create a Copy</MenuItem>
            </div>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SortOptions;
