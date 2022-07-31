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
import { Logo } from "../navigation/NavBar/Logo";

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
      h="90px"
      color="white"
      position="relative"
      mt="45em"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Logo />
        <Stack direction="row" spacing={6}>
          <SocialButton
            label="Twitter"
            href="https://www.facebook.com/nguyenthi.quynhgiang.52"
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label="Linkedin"
            href="https://www.facebook.com/vogia.bao.12"
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label="Facebook"
            href="https://www.facebook.com/profile.php?id=100008659242682"
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label="Instagram"
            href="https://www.facebook.com/profile.php?id=100001087908267"
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
        <Text>@2022 Digirent. All Right Reserved</Text>
      </Flex>
    </Box>
  );
};

export { Footer };
