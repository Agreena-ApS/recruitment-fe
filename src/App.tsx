import React from "react";
import { Center, Heading } from "@chakra-ui/react";
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
    <>
      <Heading textAlign="center" my="2rem">
        Agreena
      </Heading>
      <Center mt="5rem" alignItems="flex-start" height="100vh">
        <DataTable />
      </Center>
    </>
  );
}

export default App;
