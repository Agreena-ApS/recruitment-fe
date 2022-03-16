import {
  Tooltip,
  Flex,
  IconButton,
  Text,
  UseToastOptions,
} from "@chakra-ui/react";
import { AiOutlineCopy } from "react-icons/ai";
import { BsStarFill, BsStar } from "react-icons/bs";
import { PRIMARY_COLOR } from "../styles";

type Props = {
  favoriteList?: Certificate[];
  setFavorite: React.Dispatch<React.SetStateAction<Certificate[] | undefined>>;
  toast: (options?: UseToastOptions) => void;
};

export const createColumns = ({ favoriteList, setFavorite, toast }: Props) => {
  return [
    {
      Header: "UNIQUE ID",
      accessor: "uniqueNumber",
      width: "50px",
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
          <Flex
            gap="0.3rem"
            alignItems="center"
            cursor="pointer"
            onClick={() => {
              navigator.clipboard.writeText(value);
              toast({
                description: "Copied!",
                duration: 2000,
                isClosable: true,
                status: "success",
                position: "top",
                variant: "solid",
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
              textColor={PRIMARY_COLOR}
            />
          </Flex>
        </Tooltip>
      ),
    },
    {
      Header: "ORIGINATOR",
      accessor: "companyName",
      width: "150px",
    },
    {
      Header: "ORIGINATOR COUNTRY",
      accessor: "countryCode",
      width: "150px",
    },
    {
      Header: "OWNER",
      accessor: "carbonCertificateOwnerAccount.carbonUser.company.name",
      width: "150px",
    },
    {
      Header: "OWNER COUNTRY",
      accessor:
        "carbonCertificateOwnerAccount.carbonUser.company.address.country",
      width: "150px",
    },
    {
      Header: "STATUS",
      accessor: "status",
      width: "150px",
      Cell: ({ value }: any) => <Text textTransform="capitalize">{value}</Text>,
    },
    {
      accessor: "bookmark",
      Header: "",
      width: "150px",
      Cell: ({ row: { original } }: { row: { original: Certificate } }) => {
        const favoriteCertificate = favoriteList?.find(
          (cert) => cert.uniqueNumber === original.uniqueNumber
        );

        const removeFavoriteFromList = () =>
          favoriteList?.filter(
            (cert) => cert.uniqueNumber !== favoriteCertificate?.uniqueNumber
          );
        const addFavoriteToList = () => [
          ...((favoriteList as Certificate[]) ?? []),
          original,
        ];

        const addOrRemoveFavorite = () =>
          setFavorite(() =>
            favoriteCertificate ? removeFavoriteFromList() : addFavoriteToList()
          );

        return (
          <IconButton
            data-testid="add-favorite"
            onClick={addOrRemoveFavorite}
            aria-label="Add to favorites"
            variant="unstyled"
            fontSize="2xl"
            display="flex"
            justifyContent="flex-end"
            width="100%"
            _focus={{ outline: "none" }}
            icon={
              favoriteCertificate ? (
                <BsStarFill fill={PRIMARY_COLOR} />
              ) : (
                <BsStar fill={PRIMARY_COLOR} />
              )
            }
          />
        );
      },
    },
  ];
};
