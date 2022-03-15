import React, { useCallback } from "react";
import {
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  IconButton,
  Flex,
  Tooltip,
  NumberInput,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  Select,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import { useTable, usePagination, Column } from "react-table";
import {
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronRight,
} from "react-icons/bs";

import { StyledTable } from "./styled";
import { DEFAULT_PAY_NUMBER } from "../constants";

type Props = {
  columns: Column<object>[];
  data: any[];
  paginationInfo?: Meta;
  perPage: number;
  currentPage: number;
  fetchNextPage: React.Dispatch<React.SetStateAction<number>>;
  perPageChange: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
};

export const DataTable = ({
  columns,
  data,
  paginationInfo,
  fetchNextPage,
  perPageChange,
  perPage,
  currentPage,
  loading,
}: Props) => {
  const latestPageCount = React.useRef(
    !!paginationInfo?.totalPages
      ? paginationInfo?.totalPages
      : DEFAULT_PAY_NUMBER
  ).current;

  const tableData = React.useMemo(
    () => (loading ? Array(perPage).fill("") : data),
    [loading, perPage, data]
  );
  const tableColumns = React.useMemo(
    () =>
      loading
        ? columns.map((column) => ({
            ...column,
            Cell: <Skeleton height="40px" />,
          }))
        : columns,
    [loading, columns]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    setPageSize,
  } = useTable(
    {
      //@ts-ignore
      columns: tableColumns,
      data: tableData,
      manualPagination: true,
      pageCount: paginationInfo?.totalPages ?? latestPageCount,
    },
    usePagination
  );

  const changeHandler = useCallback(
    (value: string) => {
      fetchNextPage(Number(value));
    },
    [fetchNextPage]
  );
  return (
    <Flex
      flexDirection="column"
      width="100%"
      justifyContent="center"
      align="center"
    >
      <StyledTable {...getTableProps()} width="90%">
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <Th key={index}>
                  <Text
                    color="#8D8D8D"
                    fontWeight="bold"
                    verticalAlign="bottom"
                    letterSpacing="wide"
                  >
                    {column.render("Header")}
                  </Text>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr
                {...row.getRowProps()}
                key={(row.original as any).uniqueNumber || index}
                bgColor={loading ? "transparent" : "#fff"}
              >
                {row.cells.map((cell) => {
                  return (
                    <Td
                      width={cell.column.width ?? ""}
                      {...cell.getCellProps()}
                      border="1px solid transparent"
                      _last={{
                        borderRightRadius: "10px",
                      }}
                      _first={{
                        borderLeftRadius: "10px",
                      }}
                    >
                      <Box
                        fontWeight="500"
                        fontSize="large"
                        isTruncated
                        width={cell.column.width}
                      >
                        {cell.render("Cell")}
                      </Box>
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </StyledTable>

      {/*PAGINATION */}
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              onClick={() => {
                fetchNextPage(1);
              }}
              aria-label="First Page"
              isDisabled={loading || currentPage === 1}
              icon={<BsChevronLeft />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              onClick={() => {
                fetchNextPage(currentPage - 1);
              }}
              aria-label="Previous page"
              isDisabled={loading || currentPage === 1}
              icon={<BsChevronDoubleLeft />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink="0" mx={10}>
            Page
            <Text fontWeight="bold" as="span" mx={1}>
              {currentPage}
            </Text>
            of
            <Text fontWeight="bold" as="span" mx={1}>
              {paginationInfo?.totalPages ?? latestPageCount}
            </Text>
          </Text>
          <Text flexShrink="0">Go to page:</Text>
          <NumberInput
            isDisabled={loading}
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={paginationInfo?.totalPages ?? latestPageCount}
            onChange={changeHandler}
            value={currentPage}
            defaultValue={currentPage}
            keepWithinRange
            errorBorderColor="blue"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            disabled={loading}
            value={perPage}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              perPageChange(Number(e.target.value));
            }}
            mx={10}
          >
            {[10, 20, 30, 40, 50].map((perPage) => (
              <option key={perPage} value={perPage}>
                Show {perPage}
              </option>
            ))}
          </Select>
        </Flex>
        {paginationInfo ? (
          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                onClick={() => {
                  fetchNextPage(currentPage + 1);
                }}
                isDisabled={loading || currentPage >= paginationInfo.totalPages}
                aria-label="Next Page"
                icon={<BsChevronDoubleRight />}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                onClick={() => fetchNextPage(pageCount)}
                aria-label="Last Page"
                isDisabled={loading || currentPage >= paginationInfo.totalPages}
                icon={<BsChevronRight />}
                ml={4}
              />
            </Tooltip>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
};
