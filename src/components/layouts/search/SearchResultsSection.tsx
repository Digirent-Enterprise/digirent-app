import React from "react";

function SearchResultsSection() {
  return (
    <div className="px-4 space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="flex items-center text-base font-medium text-gray-400">
          Found productsCount results
        </div>
        <div className="flex-1" />
        <div className="flex items-center text-sm text-gray-500">
          <label
            htmlFor="sort"
            className="inline-block w-auto pr-2 text-base font-medium text-gray-400"
          >
            Sort by:
          </label>
          <select
            id="sort"
            name="sort"
            className="block w-auto py-2 pl-3 pr-10 text-base font-bold text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Views</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsSection;
