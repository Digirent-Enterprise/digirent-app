const partners = [
  {
    id: 1,
    image: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
    alt: "Tuple",
  },
  {
    id: 2,
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    alt: "Mirage",
  },
  {
    id: 3,
    image: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
    alt: "StaticKit",
  },
  {
    id: 4,
    image: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    alt: "Transistor",
  },
  {
    id: 5,
    image: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
    alt: "Workcation",
  },
];

const Partner = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              key={partner.id}
            >
              <img className="h-12" src={partner.image} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
