import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface PageProps {
  page: string;
}

const BackToPreviousPage = ({ page }: PageProps) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="flex">
      <div className="text-black">
        {" "}
        <AiOutlineArrowLeft />
      </div>
      <span className="ml-2 -mt-1 text-black">Back to {page}</span>
    </button>
  );
};

export default BackToPreviousPage;
