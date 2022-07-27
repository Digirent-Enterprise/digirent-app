import React from "react";
import { useToast } from "@chakra-ui/react";

interface ParentCompProps {
  childCompToasterTitle?: React.ReactNode;
  childCompToasterDescription?: React.ReactNode;
}
const SuccessToaster: React.FC<ParentCompProps> = (props) => {
  const { childCompToasterTitle, childCompToasterDescription } = props;
  const SuccessToast = useToast();

  return (
    <div>
      {SuccessToast({
        position: "top-right",
        title: `${childCompToasterTitle}`,
        description: `${childCompToasterDescription}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      })}
    </div>
  );
};

export default SuccessToaster;
