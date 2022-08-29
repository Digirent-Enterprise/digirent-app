import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { CheckoutDetailsCard, OrderSummaryContent } from "../../components";
import DefaultLayout from "../DefaultLayout";

const CheckoutPage = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={6}
        m={6}
      >
        <GridItem
          colSpan={{
            base: 2,
            lg: 3,
          }}
          colStart={{
            base: 0,
            lg: 2,
          }}
          colEnd={{
            base: 3,
            lg: 4,
          }}
        >
          <CheckoutDetailsCard />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            lg: 3,
          }}
          colStart={{
            base: 0,
            lg: 4,
          }}
          colEnd={{
            base: 3,
            lg: 6,
          }}
          className="flex flex-col justify-between"
        >
          <OrderSummaryContent />
          <div className="flex flex-row justify-center float-down">
            <Button width="max-content" colorScheme="red" size="lg">
              {t("Confirm&Pay")}
            </Button>
          </div>
        </GridItem>
      </Grid>
    </DefaultLayout>
  );
};

export default CheckoutPage;
