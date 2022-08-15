import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import {
  CheckoutDetailsCard,
  OrderSummaryContent,
} from "../../components/index";
import DefaultLayout from "../DefaultLayout";

const CheckoutPage = () => {
  return (
    <DefaultLayout>
      <Grid
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(6, 2fr)"
        gap={6}
      >
        <GridItem colSpan={3} rowSpan={2} rowStart={1} colStart={2} colEnd={4}>
          <OrderSummaryContent />
          <div className="flex flex-row justify-center">
            <Button width="max-content" colorScheme="red" size="lg">
              Confirm and Pay
            </Button>
          </div>
        </GridItem>
        <GridItem colSpan={3} rowSpan={2} rowStart={1} colStart={4} colEnd={6}>
          <CheckoutDetailsCard />
        </GridItem>
      </Grid>
    </DefaultLayout>
  );
};

export default CheckoutPage;
