import React from "react";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificateList from "./pages/CertificateList";
import Navbar from "./components/Navbar";

//TODO: ADD DEBOUNCE TO PAGE SETING
//TODO: FIX JUMPY page total count
//TODO: ADD NAVBAR ADD Favorites and List tabs
//TODO: ADD TESTS
//TODO: Configure setupTests file
//TODO: BONUS -> ADD SENTRY, REACT ERROR BOUNDARY
function App() {
  return (
    <Flex width="100%" height="100vh" flexDirection="column">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CertificateList />} />
        </Routes>
      </BrowserRouter>
      ,
    </Flex>
  );
}

export default App;
