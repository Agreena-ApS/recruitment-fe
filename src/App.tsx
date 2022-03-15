import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificateList from "./pages/CertificateList";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CertificateList />} />
        </Routes>
      </BrowserRouter>
      ,
    </Flex>
  );
}

export default App;
