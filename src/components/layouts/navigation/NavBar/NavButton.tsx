import React from "react";
import { Button, Typography } from "@material-tailwind/react";

interface INavButton {
  home: string;
  contact: string;
}

function NavButton(props: string) {
  return (
    <Typography as="li" variant="small" className="p-1 font-normal">
      <Button className="flex items-right">${props}</Button>
    </Typography>
  );
}

export { NavButton };
