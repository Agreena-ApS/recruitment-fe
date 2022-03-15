import React from "react";
import { Stack, Flex, Heading, Image, Button } from "@chakra-ui/react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

import Logo from "../static/agreena-logo.svg";

const CustomLink = ({ children, to }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Button
      bg="#fff"
      fontWeight="400"
      backgroundColor={match ? "#1b6765" : ""}
      textColor={match ? "#fff" : ""}
    >
      <Link to={to}>{children}</Link>
    </Button>
  );
};

const Navbar = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      justifyContent="center"
      align="center"
      mt="2rem"
    >
      <Heading textAlign="center" my="2rem">
        <Link to="/">
          <Image src={Logo} />
        </Link>
      </Heading>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-start", "flex-start"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <CustomLink to="/">Certifications</CustomLink>
        <CustomLink to="/favorites">Favorites</CustomLink>
      </Stack>
    </Flex>
  );
};

export default Navbar;
