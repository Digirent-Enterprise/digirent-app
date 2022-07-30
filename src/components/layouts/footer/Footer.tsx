import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";
import { Typography } from "@material-tailwind/react";

const Logo = () => {
  return (
    <Typography
      as="a"
      href="#"
      variant="small"
      className="mr-4 cursor-pointer py-1.5 font-bold text-3xl"
    >
      Digirent
    </Typography>
  );
};

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
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
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
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="#">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="Linkedin" href="#">
            <FaLinkedin />
          </SocialButton>
          <SocialButton label="Facebook" href="#">
            <FaFacebook />
          </SocialButton>
          <SocialButton label="Instagram" href="#">
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export { Footer };
