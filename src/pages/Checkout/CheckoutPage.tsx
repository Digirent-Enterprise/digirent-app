import React, { useEffect, useMemo } from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CheckoutDetailsCard, OrderSummaryContent } from "../../components";
import DefaultLayout from "../DefaultLayout";
import { getTransactionSelector } from "../../store/selectors/transaction.selector";
import { customAxios } from "../../http-common";
import { getProductByID } from "../../store/actions/product.action";
import { getProductByIdSelector } from "../../store/selectors/product.selector";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productByIDFetchData = useSelector(getProductByIdSelector);
  useEffect(() => {
    if (id) dispatch(getProductByID(id));
  }, [id]);
  const productDataById = useMemo(
    () => productByIDFetchData,
    [productByIDFetchData],
  );
  const transactionData = useSelector(getTransactionSelector);
  console.log("transactionData :>> ", transactionData);
  const handleCheckout = () => {
    return customAxios("application/json")
      .post("transaction/create-transaction", transactionData)
      .then((res) => console.log("res.status :>> ", res.status));
  };
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
          <CheckoutDetailsCard
            transactionData={transactionData}
            productDataById={productDataById}
          />
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
          <OrderSummaryContent
            transactionData={transactionData}
            productDataById={productDataById}
          />
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
