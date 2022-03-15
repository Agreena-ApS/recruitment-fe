import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Flex, IconButton, Text, Tooltip, useToast } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

import { fetchCertificateList } from "../api";
import { DataTable } from "../components/AgreenaTable";

const CertificateList = () => {
  const toast = useToast();

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
        Cell: ({ value }: any) => (
          <Tooltip
            label={
              <Flex p={1} alignItems="center" justifyContent="center">
                <Text mr={1} fontSize="md">
                  Click to copy the certificate ID -
                </Text>
                <AiOutlineCopy size={24} />
              </Flex>
            }
            hasArrow
            p="0.5rem"
            borderRadius="0.5rem"
          >
            <Text
              cursor="pointer"
              onClick={() => {
                navigator.clipboard.writeText(value);
                toast({
                  title: "ID Copied.",
                  description: "ID copied to the clipboard.",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                  position: "top-right",
                });
              }}
            >
              {value}
            </Text>
          </Tooltip>
        ),
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
        Cell: ({ value }: any) => (
          <Text textTransform="capitalize">{value}</Text>
        ),
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
