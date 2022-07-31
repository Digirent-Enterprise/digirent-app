import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  initialPage?: number;
  marginPageDisplayed?: number;
  pageRangeDisplayed?: number;
}

export const onChange = () => {
  console.log("hello");
};

const Pagination: React.FC<PaginationProps> = ({
  initialPage,
  marginPageDisplayed,
  pageRangeDisplayed,
}) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      marginPagesDisplayed={marginPageDisplayed}
      pageCount={25}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName="Pagination relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      activeClassName="Pagination-active z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      pageLinkClassName="Pagination-page-link"
      breakLinkClassName="Pagination-break-link"
      nextLinkClassName="Pagination-next-link"
      previousLinkClassName="Pagination-previous-link"
      pageClassName="Pagination-page-item bg-white border-gray-300 text-gray-500 hover:bg-green relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      breakClassName="Pagination-break-item relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
      nextClassName="Pagination-next-item"
      previousClassName="Pagination-previous-item"
      previousLabel={
        <p className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-green">
          Previous
        </p>
      }
      nextLabel={
        <p className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-green">
          Next
        </p>
      }
    />
  );
};

export default Pagination;
