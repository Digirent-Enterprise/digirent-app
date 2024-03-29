import {
  Box,
  Flex,
  chakra,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";
import Logo from "../navigation/NavBar/Logo";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={10}
      h={10}
      cursor="pointer"
      as="a"
      href={href}
      target="_blank"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bgColor="#222"
      px={7}
      py={3}
      color="white"
      width="100%"
      left="0"
      className="p-2.5 h-40 md:h-24"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        className="rounded-lg md:flex md:items-center md:justify-between md:p-4"
      >
        <Logo />
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="/maintain">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="Linkedin" href="/maintain">
            <FaLinkedin />
          </SocialButton>
          <SocialButton label="Facebook" href="/maintain">
            <FaFacebook />
          </SocialButton>
          <SocialButton label="Instagram" href="/maintain">
            <FaInstagram />
          </SocialButton>
        </Stack>
        <Text>
          {" "}
          Digirent • &copy; {new Date().getFullYear()} • All right reserved{" "}
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
