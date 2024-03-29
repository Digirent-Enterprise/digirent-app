import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

import ProductCard from "../Item/ProductCard";

import "../../../../index.css";
import { IProduct } from "../../../../store/types/product.types";

const ProductListLayout = (props: { products: any }) => {
  const { t } = useTranslation();
  const { products } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="grid grid-cols-1 w-full px-2 sm:px-6 sm:grid-cols-2 gap-x-6 md:w-11/12 md:mx-auto lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
        {currentItems &&
          currentItems.map((product: IProduct) => (
            <ProductCard
              id={product._id}
              key={product._id}
              name={product.name}
              image={product.images && product.images[0]}
              rentalCost={product.rentalCost}
              rentalCostType={product.rentalCostType}
            />
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={t("Next")}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={t("Previous")}
        containerClassName="pagination container flex justify-center mx-auto py-10"
        pageLinkClassName="age-num z-10 border-black relative inline-flex items-center px-4 py-2 border text-sm font-medium border-r-0 hover:bg-blue-100 hover:text-white"
        previousLinkClassName="age-num z-10 border-black text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium border-r-0 hover:bg-blue-100 hover:text-white"
        nextLinkClassName="page-num z-10 border-black text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium hover:bg-blue-100 hover:text-white"
        activeLinkClassName="page-num text-white bg-blue-300"
      />
    </>
  );
};

export default ProductListLayout;
