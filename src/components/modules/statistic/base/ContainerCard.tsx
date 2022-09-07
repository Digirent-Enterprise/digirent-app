import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ICompProps {
  chart: ReactNode;
}
const ContainerCard = (props: ICompProps) => {
  const { chart } = props;
  return (
    <Box
      minW="30%"
      padding="3%"
      margin="1.5%"
      borderRadius="14"
      boxShadow="2xl"
      backgroundColor="#fff"
      textAlign="center"
      rounded='lg'
    >
      {chart}
    </Box>
  );
};

export default ContainerCard;
