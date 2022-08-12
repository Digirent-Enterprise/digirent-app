import "./TechnologyCard.css";

interface ITechnologyCardProps {
  title: string;
  alt?: string;
  description: string;
  imageUrl: string;
  detailUrl: string;
}

const TechnologyCard = ({
  title,
  alt,
  description,
  imageUrl,
  detailUrl,
}: ITechnologyCardProps) => {
  return (
    <div className="p-6">
      <img
        className="object-cover object-center w-full mb-8 duration-500 ease-in scale-100 lg:h-48 md:h-36 rounded-xl hover:scale-125"
        src={imageUrl}
        alt={alt}
      />
      <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
        {description}
      </h2>
      <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {title}
      </h1>

      <div className="mt-4">
        <a
          href={detailUrl}
          className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
          title="read more"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <span className="arrow-animate"> Read More {"->"} </span>
        </a>
      </div>
    </div>
  );
};

export default TechnologyCard;
