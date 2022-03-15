import React from "react";
import { Stack, Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Link to="/certifications"> Agreena</Link>
      </Heading>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-start", "flex-start"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Box>
          <Link to="/">Certifications</Link>
        </Box>
        <Box>
          <Link to="/favorites">Favorites</Link>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navbar;
