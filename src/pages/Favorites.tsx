import React, { useMemo, useState } from "react";
import { Center, Flex, IconButton, Text, Tooltip, useToast } from "@chakra-ui/react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

import { DataTable } from "../components/AgreenaTable";
import { useLocalStorage } from "react-use";

const CertificateList = () => {
	const toast = useToast();
	const [value, setValue] = useLocalStorage<Certificate[]>("favorites");

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const columns = useMemo(
		() => [
			{
				Header: "UNIQUE ID",
				accessor: "uniqueNumber",
				width: "220px",
				Cell: ({ value }: any) => (
					<Tooltip
						label={
							<Flex p={1} alignItems="center" justifyContent="center">
								<Text mr={1} fontSize="md">
									Click to copy the certificate ID
								</Text>
							</Flex>
						}
						hasArrow
						p="0.5rem"
						borderRadius="0.5rem"
					>
						<Center
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
							<Text isTruncated>{value}</Text>
							<IconButton
								variant="unstyled"
								aria-label="Copy ID"
								fontSize="xl"
								_focus={{ outline: "none" }}
								icon={<AiOutlineCopy />}
							/>
						</Center>
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
				accessor: "carbonCertificateOwnerAccount.carbonUser.company.address.country",
			},
			{
				Header: "STATUS",
				accessor: "status",
				Cell: ({ value }: any) => <Text textTransform="capitalize">{value}</Text>,
			},
			{
				accessor: "bookmark",
				Header: "",
				Cell: ({ row: { original } }) => {
					const isFavorite = value?.find((cert) => cert.uniqueNumber === original.uniqueNumber);

					return (
						<IconButton
							onClick={() => setValue(() => [...((value as Certificate[]) ?? []), original])}
							aria-label="Add to favorites"
							variant="unstyled"
							fontSize="2xl"
							display="flex"
							_focus={{ outline: "none" }}
							icon={isFavorite ? <BsStarFill fill="#f6ef02" /> : <BsStar />}
						/>
					);
				},
			},
		],
		[setValue, toast, value]
	);

	return (
		<Flex mt="5rem" alignItems="flex-start" justifyContent="center">
			<DataTable
				data={value || []}
				columns={columns}
				fetchNextPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				perPageChange={setPerPage}
			/>
		</Flex>
	);
};

export default CertificateList;
