import React, { Dispatch, SetStateAction, useContext } from "react";
import { SearchSectionContext } from "../../../pages/Product/ProductSearchPage";

interface SearchHeaderSectionProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

const SearchHeaderSection = ({
  setSearchQuery,
  setIsSearching,
}: SearchHeaderSectionProps) => {
  const searchContext = useContext(SearchSectionContext);

  return (
    <div>
      <div className="px-20 py-10">
        <form action="#" className="w-full sm:mx-auto lg:mx-0">
          <div className="sm:flex">
            <div className="flex-1 min-w-0">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search for an item"
                className="border-black/30	block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                value={searchContext.searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                disabled={searchContext.isSearching}
                onClick={() => {
                  setIsSearching(true);
                }}
                className="block w-full px-4 py-3 font-medium text-white bg-blue-200 rounded-md shadow hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchHeaderSection;
