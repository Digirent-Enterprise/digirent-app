import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabList, Box, Flex } from "@chakra-ui/react";
import TabButton from "./TabButton";

interface IUserTab {
  tabIndex: number;
}
const UserTab = ({ tabIndex }: IUserTab) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Flex alignContent="center" justifyContent="center">
        <Tabs index={tabIndex} alignItems="center">
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
