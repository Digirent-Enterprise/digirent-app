const Search = () => {
  return (
    <div className="bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-[#4F46E5]">Start your rental now.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4F46E5] hover:bg-[#4338CA]"
            >
              Search all products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
