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
import { ErrorMessage } from "./ErrorMessage";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../styles";

type Props = {
  columns: Column<object>[];
  data: any[];
  paginationInfo?: Meta;
  perPage: number;
  currentPage: number;
  fetchNextPage: React.Dispatch<React.SetStateAction<number>>;
  perPageChange: React.Dispatch<React.SetStateAction<number>>;
  loading?: boolean;
  hidePagination?: boolean;
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
  hidePagination,
}: Props) => {
  const tableData = React.useMemo(
    () => (loading ? Array(perPage).fill("") : data),
    [loading, perPage, data]
  );
  const tableColumns = React.useMemo(
    () =>
      loading
        ? columns.map((column) => ({
            ...column,
            Cell: (
              <Skeleton
                height="40px"
                endColor="#cddcdc"
                startColor={SECONDARY_COLOR}
              />
            ),
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
      columns: tableColumns,
      data: tableData,
      manualPagination: true,
      pageCount: paginationInfo?.totalPages ?? DEFAULT_PAY_NUMBER,
    },
    usePagination
  );

  const changeHandler = useCallback(
    (event: string) => {
      fetchNextPage(Number(event));
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
      <StyledTable {...getTableProps()} width="90%" data-testid="agreena-table">
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <Th key={index}>
                  <Text
                    color="#8D8D8D"
                    fontWeight="bold"
                    verticalAlign="bottom"
                    fontSize="16px"
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
                        width="100%"
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

      {!data.length && !loading ? <ErrorMessage /> : null}

      {!hidePagination && (
        <Flex justifyContent="space-between" m={4} alignItems="center">
          <Flex>
            <Tooltip label="First Page">
              <IconButton
                data-testid="first-page"
                onClick={() => {
                  fetchNextPage(1);
                }}
                aria-label="First Page"
                isDisabled={loading || currentPage === 1}
                icon={<BsChevronLeft />}
                mr={4}
                textColor={PRIMARY_COLOR}
                backgroundColor={SECONDARY_COLOR}
                _hover={{
                  bg: PRIMARY_COLOR,
                  textColor: "#fff",
                }}
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                data-testid="previous-page"
                onClick={() => {
                  fetchNextPage(currentPage - 1);
                }}
                aria-label="Previous page"
                isDisabled={loading || currentPage === 1}
                icon={<BsChevronDoubleLeft />}
                textColor={PRIMARY_COLOR}
                backgroundColor={SECONDARY_COLOR}
                _hover={{
                  bg: PRIMARY_COLOR,
                  textColor: "#fff",
                }}
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
                {paginationInfo?.totalPages ?? "\u00a0\u00a0"}
              </Text>
            </Text>
            <Text flexShrink="0">Go to page:</Text>
            <NumberInput
              isDisabled={loading}
              ml={2}
              mr={8}
              w={28}
              min={1}
              max={paginationInfo?.totalPages ?? DEFAULT_PAY_NUMBER}
              onChange={changeHandler}
              value={currentPage}
              defaultValue={currentPage}
              keepWithinRange
              errorBorderColor="blue"
              borderColor={SECONDARY_COLOR}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper
                  textColor={PRIMARY_COLOR}
                  backgroundColor={SECONDARY_COLOR}
                  _hover={{
                    bg: { PRIMARY_COLOR },
                    textColor: "#fff",
                  }}
                />
                <NumberDecrementStepper
                  textColor={PRIMARY_COLOR}
                  backgroundColor={SECONDARY_COLOR}
                  _hover={{
                    bg: { PRIMARY_COLOR },
                    textColor: "#fff",
                  }}
                />
              </NumberInputStepper>
            </NumberInput>
            <Select
              borderColor={SECONDARY_COLOR}
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

          {paginationInfo && (
            <Flex>
              <Tooltip label="Next Page">
                <IconButton
                  data-testid="next-page"
                  onClick={() => {
                    fetchNextPage(currentPage + 1);
                  }}
                  isDisabled={
                    loading || currentPage >= paginationInfo.totalPages
                  }
                  aria-label="Next Page"
                  icon={<BsChevronDoubleRight />}
                  textColor={PRIMARY_COLOR}
                  backgroundColor={SECONDARY_COLOR}
                  _hover={{
                    bg: { PRIMARY_COLOR },
                    textColor: "#fff",
                  }}
                />
              </Tooltip>
              <Tooltip label="Last Page">
                <IconButton
                  data-testid="last-page"
                  onClick={() => fetchNextPage(pageCount)}
                  aria-label="Last Page"
                  isDisabled={
                    loading || currentPage >= paginationInfo.totalPages
                  }
                  icon={<BsChevronRight />}
                  ml={4}
                  backgroundColor={SECONDARY_COLOR}
                  textColor={PRIMARY_COLOR}
                  _hover={{
                    bg: { PRIMARY_COLOR },
                    textColor: "#fff",
                  }}
                />
              </Tooltip>
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};
