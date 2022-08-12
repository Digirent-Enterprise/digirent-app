import { teamsMember } from "../../../utils/constants/helper.constant";
import TeamsMember from "./TeamsMember";

const Teams = () => {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
            Meet our Team
          </h2>

          <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
          {teamsMember.map((value) => (
            <TeamsMember
              name={value.name}
              position={value.position}
              alt={value.alt}
              imageUrl={value.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
