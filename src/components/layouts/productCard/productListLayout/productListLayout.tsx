import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ProductCardListing from "../Item/productCardListing";
import "../../../../index.css";

interface Products {
  id: number;
  images: string[];
  title: string;
  price: number;
}

const ProductListLayout = (props: { products: any }) => {
  const { products } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  console.log("products", products);
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
      <div className="grid grid-cols-3">
        {currentItems.map((product: Products) => {
          return (
            <ProductCardListing
              key={product.id}
              title={product.title}
              images={product.images}
              price={product.price}
            />
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="pagination container flex justify-center mx-auto"
        pageLinkClassName="age-num z-10 border-black relative inline-flex items-center px-4 py-2 border text-sm font-medium border-r-0 hover:bg-blue-100 hover:text-white"
        previousLinkClassName="age-num z-10 border-black text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium border-r-0 hover:bg-blue-100 hover:text-white"
        nextLinkClassName="page-num z-10 border-black text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium hover:bg-blue-100 hover:text-white"
        activeLinkClassName="page-num text-white bg-blue-300"
      />
    </>
  );
};

export default ProductListLayout;
