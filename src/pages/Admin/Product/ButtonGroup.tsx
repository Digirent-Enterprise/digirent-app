import { IconContext } from "react-icons";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ButtonGroup = () => {
  return (
    <>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#6366F1] rounded-md hover:bg-[#4F46E5] mr-2">
        <IconContext.Provider value={{ className: "w-5 h-5 mr-2" }}>
          <div>
            <AiOutlineEdit />
          </div>
        </IconContext.Provider>
        Edit
      </button>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#DC2626] rounded-md hover:bg-[#B91C1C]">
        <IconContext.Provider value={{ className: "w-5 h-5 mr-2" }}>
          <div>
            <AiOutlineDelete />
          </div>
        </IconContext.Provider>
        Delete
      </button>
    </>
  );
};

export default ButtonGroup;
