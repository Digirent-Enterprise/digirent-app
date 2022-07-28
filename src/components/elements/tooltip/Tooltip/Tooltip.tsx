import { Tooltip } from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";

const TooltipC = () => {
  const iconStyles = { color: "white" };

  return (
    <Tooltip label="Top end" placement="top-end">
      <span className="bg-blue-100">
        <AiFillInfoCircle style={iconStyles} />
      </span>
    </Tooltip>
  );
};

export default TooltipC;
