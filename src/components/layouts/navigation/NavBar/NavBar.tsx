import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
// import {
//   Avatar,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   Center,
// } from "@chakra-ui/react";
import { NavButton } from "./NavButton";

function NavBar() {
  return (
    <Navbar className="mx-auto max-w-screen bg-black">
      <div className="container flex items-center justify-between text-blue-grey-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold text-3xl"
        >
          Digirent
        </Typography>
        <ul className="flex items-right gap-6">
          <NavButton />
        </ul>
      </div>
      <div className="flex items-right gap-6 h-12 w-12 mb-4 lg:mb-0 mr-4">
        <img
          src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_0.png"
          alt=""
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    </Navbar>
  );
}

export { NavBar };
