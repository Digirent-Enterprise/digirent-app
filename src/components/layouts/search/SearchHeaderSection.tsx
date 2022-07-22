import React from "react";

function SearchHeaderSection() {
  return (
    <div className="py-10 bg-gray-900 sm:py-16 lg:py-8 lg:pb-14 lg:overflow-hidden">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-0 mx-auto sm:max-w-2xl sm:text-center lg:text-left lg:flex lg:items-center">
            <div className="py-0">
              <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-6xl">
                <span className="block">Find yourself something</span>
              </h1>
            </div>
          </div>
          <div className="hidden mt-12 -mb-16 lg:block sm:-mb-48 lg:m-0 lg:relative">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0" />
          </div>
        </div>

        <div className="mt-0">
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
                  className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full px-4 py-3 font-medium text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                >
                  Search
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchHeaderSection;
