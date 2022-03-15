import React from "react";
import { Flex } from "@chakra-ui/react";
import { DataTable } from "../components/AgreenaTable";

const CertificateList = () => {
  return (
    <Flex mt="5rem" alignItems="flex-start" justifyContent="center">
      <DataTable />
    </Flex>
  );
};

export default CertificateList;
