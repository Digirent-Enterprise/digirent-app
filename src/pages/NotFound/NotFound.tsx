import Helmet from "../../Helmet";

const NotFound = () => {
  return (
    <>
      <Helmet title="Not Found" addPostfixTitle description="Not Found Page" />
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 mx-auto md:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="overflow-hidden bg-gray-100 rounded-lg shadow-lg h-80 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="banner"
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-4 text-sm font-semibold text-indigo-500 uppercase md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl sm:text-left">
                Page not found
              </h1>

              <p className="mb-4 text-center text-gray-500 md:text-lg sm:text-left md:mb-8">
                The page you’re looking for doesn’t exist.
              </p>

              <nav className="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
                <div>
                  <a
                    href="/"
                    className="inline-block text-sm text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 md:text-base"
                  >
                    Home
                  </a>
                </div>

                <div>
                  <a
                    href="/products"
                    className="inline-block text-sm text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 md:text-base"
                  >
                    Search
                  </a>
                </div>

                <div>
                  <a
                    href="/contact"
                    className="inline-block text-sm text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 md:text-base"
                  >
                    Help
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
