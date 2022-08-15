const Content = () => {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-md px-4 mx-auto md:px-8">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-6">
          Our competitive advantage
        </h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text. The
          important factor when using filler text is that the text looks
          realistic otherwise it will not look very good.
          <br />
          <br />
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is{" "}
          <a
            href="/maintain"
            className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            random
          </a>{" "}
          or otherwise generated. It may be used to display a sample of fonts or
          generate text for testing. Filler text is dummy text which has no
          meaning however looks very similar to real text.
        </p>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
          About us
        </h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text.
        </p>

        <ul className="mb-6 text-gray-500 list-disc list-inside sm:text-lg md:mb-8">
          <li>This is a section of some simple filler text</li>
          <li>Also known as placeholder text</li>
          <li>It shares some characteristics of a real written text</li>
        </ul>

        <blockquote className="pl-4 mb-6 italic text-gray-500 border-l-4 sm:text-lg md:pl-6 md:mb-8">
          “This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.”
        </blockquote>

        <div className="relative mb-6 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:mb-8">
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
            loading="lazy"
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
          Features
        </h2>

        <p className="text-gray-500 sm:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text.
        </p>
      </div>
    </div>
  );
};

export default Content;
