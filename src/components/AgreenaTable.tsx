import { useMemo } from "react";
import {
  Table,
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
} from "@chakra-ui/react";
import { useTable, usePagination } from "react-table";
import styled from "@emotion/styled";
import {
  BsBookmarkHeart,
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronRight,
} from "react-icons/bs";

const StyledTable = styled(Table)`
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const DataTable = () => {
  const data = useMemo(
    () => [
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
      {
        XQ: "inches",
        W: "millimetres (mm)",
        E: "ASDSAD",
        R: `1212`,
        T: "121212",
        Y: "4141414",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "UNIQUE ID",
        accessor: "XQ",
      },
      {
        Header: "ORIGINATOR",
        accessor: "W",
      },
      {
        Header: "ORIGINATOR COUNTRY",
        accessor: "E",
      },
      {
        Header: "OWNER",
        accessor: "R",
      },
      {
        Header: "OWNER COUNTRY",
        accessor: "T",
      },
      {
        Header: "STATUS",
        accessor: "Y",
      },
      {
        accessor: "color",
        Header: "",
        Cell: () => (
          <IconButton
            aria-label="Add to favorites"
            variant="unstyled"
            fontSize="2xl"
            display="flex"
            icon={<BsBookmarkHeart />}
          />
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      //@ts-ignore
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
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
              {headerGroup.headers.map((column) => (
                <Th>
                  <Text color="#8D8D8D" fontWeight="bold">
                    {column.render("Header")}
                  </Text>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} bgColor="#FFFFFF" borderRadius="20px">
                {row.cells.map((cell) => (
                  //@ts-ignore
                  <Td
                    {...cell.getCellProps()}
                    border="1px solid transparent"
                    _last={{
                      borderRightRadius: "10px",
                    }}
                    _first={{
                      borderLeftRadius: "10px",
                    }}
                  >
                    <Text fontWeight="500" fontSize="large">
                      {cell.render("Cell")}
                    </Text>
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </StyledTable>

      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              onClick={() => gotoPage(0)}
              aria-label="First Page"
              isDisabled={!canPreviousPage}
              icon={<BsChevronLeft />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              onClick={previousPage}
              aria-label="Previous page"
              isDisabled={!canPreviousPage}
              icon={<BsChevronDoubleLeft />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink="0" mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <Text flexShrink="0">Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={pageOptions.length}
            onChange={(value: any) => {
              const page = value ? value - 1 : 0;
              gotoPage(page);
            }}
            defaultValue={pageIndex + 1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              onClick={nextPage}
              isDisabled={!canNextPage}
              aria-label="Next Page"
              icon={<BsChevronDoubleRight />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              onClick={() => gotoPage(pageCount - 1)}
              aria-label="Last Page"
              isDisabled={!canNextPage}
              icon={<BsChevronRight />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
