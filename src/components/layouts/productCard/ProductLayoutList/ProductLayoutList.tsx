import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import ProductCard from "../Item/ProductCard";

import "../../../../index.css";
import { IProduct } from "../../../../store/types/product.types";

const ProductListLayout = (props: { products: any }) => {
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
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
        {currentItems.map((product: IProduct) => (
          <Link to={`/product/${product.id}`}>
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.images[0]}
              rentalCost={product.rentalCost}
              rentalCostType={product.rentalCostType}
            />
          </Link>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
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