import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabList, Box, Flex } from "@chakra-ui/react";
import TabButton from "./TabButton";

const UserTab = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Flex alignContent="center" justifyContent="center">
        <Tabs alignItems="center">
          <TabList>
            <TabButton directUrl="/user/my-profile" tabItem={t("Profile")} />
            <TabButton
              directUrl="/transaction/transaction-history"
              tabItem={t("Order")}
            />
            <TabButton directUrl="/user/favorite-product" tabItem={t("Fav")} />
          </TabList>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default UserTab;
