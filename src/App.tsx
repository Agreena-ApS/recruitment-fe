import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { DataTable } from "./components/AgreenaTable";
//TODO: ADD PAGINATION TO TABLE
//TODO: ADD AXIOS AND SERVICE LAYER
//TODO: ADD REACT-QUERY AND INTREGRATE WITH API
//TODO: ADD NAVBAR ADD Favorites and List tabs
//TODO: ADD TESTS
//TODO: Configure setupTests file
//TODO: BONUS -> ADD SENTRY, REACT ERROR BOUNDARY
function App() {
  return (
    <Flex width="100%" height="100vh" flexDirection="column">
      <Heading textAlign="center" my="2rem">
        Agreena
      </Heading>
      <Flex mt="5rem" alignItems="flex-start" justifyContent="center">
        <DataTable />
      </Flex>
    </Flex>
  );
}

export default App;
