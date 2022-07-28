import React, { useMemo } from "react";

import DefaultManagementLayout from "../DefaultManagementLayout";

const ProductManagement = () => {
  const columnsHeader = useMemo(
    () => [
      {
        id: 1,
        header: "Product ID",
      },
      {
        id: 2,
        header: "Product Name",
      },
      {
        id: 3,
        header: "Product Serial",
      },
      {
        id: 4,
        header: "brand",
      },
      {
        id: 5,
        header: "Category",
      },
      {
        id: 6,
        header: "Description",
      },
      {
        id: 7,
        header: "Status",
      },
      {
        id: 8,
        header: "Action",
      },
    ],
    [],
  );
  return (
    <DefaultManagementLayout
      title="Product Management"
      columnsHeader={columnsHeader}
      pageType="product"
    />
  );
};

export default ProductManagement;
