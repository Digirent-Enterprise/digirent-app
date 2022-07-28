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
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              Sort Options
            </MenuButton>
          </div>

          <MenuList className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                <a href="/" className="text-gray-700 block px-4 py-2 text-sm">
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
