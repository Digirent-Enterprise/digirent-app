import React from "react";
import { useToast } from "@chakra-ui/react";

interface ParentCompProps {
  childCompToasterTitle: React.ReactNode;
  childCompToasterDescription: React.ReactNode;
  childCompStatusColor?: any;
}
const StatusToaster: React.FC<ParentCompProps> = (props) => {
  const {
    childCompToasterTitle,
    childCompToasterDescription,
    childCompStatusColor,
  } = props;
  const SuccessToast = useToast();

  return (
    <div>
      {SuccessToast({
        position: "top-right",
        title: `${childCompToasterTitle}`,
        description: `${childCompToasterDescription}`,
        status: childCompStatusColor,
        duration: 9000,
        isClosable: true,
      })}
    </div>
  );
};

export default StatusToaster;
