import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";

import { fetchCertificateList } from "../api";
import { DataTable } from "../components/AgreenaTable";

const CertificateList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data, isLoading, error } = useQuery(
    ["certifications", currentPage, perPage],
    () => fetchCertificateList(currentPage, perPage)
  );

  const columns = useMemo(
    () => [
      {
        Header: "UNIQUE ID",
        accessor: "uniqueNumber",
        width: "250px",
      },
      {
        Header: "ORIGINATOR",
        accessor: "companyName",
        width: "250px",
      },
      {
        Header: "ORIGINATOR COUNTRY",
        accessor: "countryCode",
      },
      {
        Header: "OWNER",
        accessor: "carbonCertificateOwnerAccount.carbonUser.company.name",
      },
      {
        Header: "OWNER COUNTRY",
        accessor:
          "carbonCertificateOwnerAccount.carbonUser.company.address.country",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        accessor: "bookmark",
        Header: "",
        Cell: () => (
          <IconButton
            aria-label="Add to favorites"
            variant="unstyled"
            fontSize="2xl"
            display="flex"
            icon={<BsStar />}
          />
        ),
      },
    ],
    []
  );

  if (error) {
    <Flex mt="5rem" alignItems="flex-start" justifyContent="center">
      <Text>Something went wrong!!!</Text>
    </Flex>;
  }

  return (
    <Flex mt="5rem" alignItems="flex-start" justifyContent="center">
      <DataTable
        data={data?.result.data || []}
        columns={columns}
        paginationInfo={data?.result.meta}
        fetchNextPage={setCurrentPage}
        currentPage={currentPage}
        perPage={perPage}
        perPageChange={setPerPage}
        loading={isLoading}
      />
    </Flex>
  );
};

export default CertificateList;
