const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="pl-20 font-semibold tracking-tight text-black ptext-3xl xl:text-4xl">
          Join us and get the update from anywhere
        </h2>

        <div className="mt-8 lg:mt-0">
          <div className="flex flex-col pr-20 space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border border-[#d1d5db] rounded-md sm:mx-2 dark:bg-gray-900 dark:text-[#d1d5db] dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address"
            />

            <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#3b82f6] rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-[#2563eb] focus:outline-none focus:bg-[#2563eb]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
