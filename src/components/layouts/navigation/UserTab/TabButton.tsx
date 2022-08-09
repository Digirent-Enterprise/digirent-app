import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ITabButton {
  tabItem: string;
  directUrl: string;
}

const TabButton = ({ tabItem, directUrl }: ITabButton) => {
  return (
    <Tab>
      <Link to={directUrl}>{tabItem}</Link>
    </Tab>
  );
};

export default TabButton;
