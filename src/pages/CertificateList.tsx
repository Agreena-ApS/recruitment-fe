import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Flex, Text, useToast } from "@chakra-ui/react";

import { fetchCertificateList } from "../api";
import { DataTable } from "../components/AgreenaTable";
import { useLocalStorage } from "react-use";
import { createColumns } from "../utils";

const CertificateList = () => {
	const toast = useToast();
	const [favoriteList, setFavorite] = useLocalStorage<Certificate[]>("favorites");

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { data, isLoading, error } = useQuery(["certifications", currentPage, perPage], () =>
		fetchCertificateList(currentPage, perPage)
	);

	const columns = useMemo(
		() => createColumns({ favoriteList, setFavorite, toast }),
		[favoriteList, setFavorite, toast]
	);

	if (error) {
		return (
			<Flex mt="5rem" alignItems="flex-start" justifyContent="center">
				<Text>Something went wrong!!!</Text>
			</Flex>
		);
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
