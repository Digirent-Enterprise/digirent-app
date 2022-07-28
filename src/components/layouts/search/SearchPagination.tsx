/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext } from "react";
import { IconContext } from "react-icons";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { SearchSectionContext } from "../../../pages/Product/ProductSearchPage";

interface PaginationProps {
  triggerSearch: any;
  setPageNumber: any;
  pageMaxValue: number;
}

function SearchPagination({
  triggerSearch,
  setPageNumber,
  pageMaxValue,
}: PaginationProps) {
  const searchContext = useContext(SearchSectionContext);
  const pageOffset = 2;
  const goToPage = (page: number) => {
    setPageNumber(page);
    triggerSearch();
  };
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        {searchContext.pageNumber > 1 ? (
          <button
            onClick={() => {
              setPageNumber(searchContext.pageNumber - 1);
              triggerSearch();
            }}
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            <IconContext.Provider
              value={{
                size: "2em",
                className: "mr-3 h-5 w-5 text-gray-400",
              }}
            >
              <div>
                <AiOutlineArrowLeft />
              </div>
            </IconContext.Provider>
            Previous
          </button>
        ) : null}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {searchContext.pageNumber > pageOffset + 1 ? (
          <>
            <button
              onClick={() => goToPage(1)}
              className="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              1
            </button>
            {searchContext.pageNumber > pageOffset + 2 && (
              <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
              </span>
            )}
          </>
        ) : null}
        {[...Array(2 * pageOffset + 1)].map((x, i) =>
          searchContext.pageNumber + (i - pageOffset) > 0 &&
          searchContext.pageNumber + (i - pageOffset) <= pageMaxValue ? (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              onClick={() => {
                goToPage(searchContext.pageNumber + (i - pageOffset));
              }}
              disabled={i == pageOffset}
              className={`${
                i == pageOffset
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 "
              }
                            border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
            >
              {searchContext.pageNumber + (i - pageOffset)}
            </button>
          ) : null,
        )}
        {searchContext.pageNumber < pageMaxValue - 2 ? (
          <>
            {searchContext.pageNumber < pageMaxValue - 3 && (
              <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
              </span>
            )}
            <button
              onClick={() => goToPage(pageMaxValue)}
              className="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              {pageMaxValue}
            </button>
          </>
        ) : null}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        {searchContext.pageNumber < pageMaxValue ? (
          <button
            onClick={() => {
              setPageNumber(searchContext.pageNumber + 1);
              triggerSearch();
            }}
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <IconContext.Provider
              value={{
                size: "2em",
                className: "ml-3 h-5 w-5 text-gray-400",
              }}
            >
              <div>
                <AiOutlineArrowRight />
              </div>
            </IconContext.Provider>
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default SearchPagination;
