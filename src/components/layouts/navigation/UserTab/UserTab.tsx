import React from "react";
import { Tabs, TabList, Box, Flex } from "@chakra-ui/react";
import TabButton from "./TabButton";

const UserTab = () => {
  return (
    <Box>
      <Flex alignContent="center" justifyContent="center">
        <Tabs alignItems="center">
          <TabList>
            <TabButton directUrl="/user/my-profile" tabItem="Profile" />
            <TabButton
              directUrl="/transaction/transaction-history"
              tabItem="Order"
            />
            <TabButton directUrl="/user/favorite-product" tabItem="Favorite" />
          </TabList>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default UserTab;
