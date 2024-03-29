import { Grid, GridItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutDetailsCard, OrderSummaryContent } from "../../components";
import DefaultLayout from "../DefaultLayout";
import { getTransactionSelector } from "../../store/selectors/transaction.selector";
import Helmet from "../../Helmet";

const CheckoutPage = () => {
  const { t } = useTranslation();
  const transactionData: any = useSelector(getTransactionSelector);
  const navigate = useNavigate();

  const unloadCallback = (event: any) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.returnValue = "";
    return "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      window.removeEventListener("beforeunload", unloadCallback);
    };
  }, []);

  useEffect(() => {
    if (!transactionData.userEmail) {
      navigate(-1);
    }
  }, []);

  return (
    <DefaultLayout>
      <Helmet
        title={t("CheckoutPageHelmetTitle")}
        addPostfixTitle
        description={t("CheckoutPageHelmetDes")}
      />
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
        </GridItem>
      </Grid>
    </DefaultLayout>
  );
};

export default CheckoutPage;
