import React from "react";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificateList from "./pages/CertificateList";
import Navbar from "./components/Navbar";
import FavoriteList from "./pages/Favorites";

//TODO: BONUS -> ADD SENTRY, REACT ERROR BOUNDARY
const App = () => {
  return (
    <Flex width="100%" height="100vh" flexDirection="column">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CertificateList />} />
          <Route path="/certification/favorites" element={<FavoriteList />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  );
};

export default App;
