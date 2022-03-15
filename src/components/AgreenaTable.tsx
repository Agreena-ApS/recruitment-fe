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
} from "@chakra-ui/react";
import { useTable, useSortBy, usePagination } from "react-table";
import styled from "@emotion/styled";
import { BsBookmarkHeart } from "react-icons/bs";
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      //@ts-ignore
      { columns, data },
      useSortBy,
      usePagination
    );

  return (
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
        {rows.map((row) => {
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
  );
};
