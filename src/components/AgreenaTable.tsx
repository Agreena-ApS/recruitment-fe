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
} from "@chakra-ui/react";
import { useTable, usePagination, Column } from "react-table";
import {
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronRight,
} from "react-icons/bs";
import { StyledTable } from "./styled";

type Props = {
  columns: Column<object>[];
  data: any[];
  paginationInfo: Meta;
  perPage: number;
  currentPage: number;
  fetchNextPage: React.Dispatch<React.SetStateAction<number>>;
  perPageChange: React.Dispatch<React.SetStateAction<number>>;
};

export const DataTable = ({
  columns,
  data,
  paginationInfo,
  fetchNextPage,
  perPageChange,
  perPage,
  currentPage,
}: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    pageCount,
    setPageSize,
  } = useTable(
    {
      //@ts-ignore
      columns,
      data,
      manualPagination: true,
      pageCount: paginationInfo.totalPages,
      initialState: { pageIndex: currentPage - 1, pageSize: perPage },
    },
    usePagination
  );
  console.log({ perPage });
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
              <Tr
                {...row.getRowProps()}
                key={(row.original as any).uniqueNumber}
                bgColor="#FFFFFF"
                borderRadius="20px"
              >
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
      {/*PAGINATION */}
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              onClick={() => {
                fetchNextPage(1);
              }}
              aria-label="First Page"
              isDisabled={currentPage === 1}
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
              isDisabled={currentPage === 1}
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
              {pageOptions.length}
            </Text>
          </Text>
          <Text flexShrink="0">Go to page:</Text>
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={pageOptions.length}
            onChange={(value: any) => {
              console.log({ value });
              fetchNextPage(value);
            }}
            value={currentPage}
            defaultValue={currentPage}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
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

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              onClick={() => {
                fetchNextPage(currentPage + 1);
              }}
              isDisabled={currentPage >= paginationInfo.totalPages}
              aria-label="Next Page"
              icon={<BsChevronDoubleRight />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              onClick={() => fetchNextPage(pageCount)}
              aria-label="Last Page"
              isDisabled={currentPage >= paginationInfo.totalPages}
              icon={<BsChevronRight />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
