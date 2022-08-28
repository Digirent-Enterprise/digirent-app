import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import qs from "qs";
import { CheckoutDetailsCard, OrderSummaryContent } from "../../components";
import DefaultLayout from "../DefaultLayout";
import { getTransactionSelector } from "../../store/selectors/transaction.selector";
import { customAxios } from "../../http-common";

const CheckoutPage = () => {
  const transactionData: any = useSelector(getTransactionSelector);
  const transaction = {
    ...transactionData,
    productId: transactionData.productId._id,
  };
  const handleCheckout = () => {
    return customAxios()
      .post("transaction/create-transaction", qs.stringify(transaction))
      .then((res) => console.log("res.status :>> ", res.status));
  };
  return (
    <DefaultLayout>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        templateRows={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
        h="max-content"
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
          rowSpan={{
            base: 1,
            lg: 1,
          }}
          className="flex flex-col justify-between"
        >
          <CheckoutDetailsCard transactionData={transactionData} />
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
          rowSpan={{
            base: 1,
            lg: 1,
          }}
          className="flex flex-col justify-between"
        >
          <OrderSummaryContent transactionData={transactionData} />
          <div className="flex flex-row justify-center float-down">
            <Button
              onClick={handleCheckout}
              width="max-content"
              colorScheme="red"
              size="lg"
            >
              Confirm and Pay
            </Button>
          </div>
        </GridItem>
      </Grid>
    </DefaultLayout>
  );
};

export default CheckoutPage;
function productId(productId: any, _id: any) {
  throw new Error("Function not implemented.");
}
