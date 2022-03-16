import { useMemo, useState } from "react";
import { Flex, useToast } from "@chakra-ui/react";

import { DataTable } from "../../components/AgreenaTable";
import { useLocalStorage } from "react-use";
import { createColumns } from "../../utils/createColumn";

const FavoriteList = () => {
  const toast = useToast();
  const [favoriteList, setFavorite] =
    useLocalStorage<Certificate[]>("favorites");

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const columns = useMemo(
    () => createColumns({ favoriteList, setFavorite, toast }),
    [favoriteList, setFavorite, toast]
  );

  return (
    <Flex mt="5rem" alignItems="flex-start" justifyContent="center">
      <DataTable
        data={favoriteList || []}
        columns={columns}
        fetchNextPage={setCurrentPage}
        currentPage={currentPage}
        perPage={perPage}
        perPageChange={setPerPage}
        hidePagination
      />
    </Flex>
  );
};

export default FavoriteList;
