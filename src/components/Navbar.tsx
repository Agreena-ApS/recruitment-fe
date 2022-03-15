import { Link, useLocation } from "react-router-dom";
import { Flex, Heading, Image } from "@chakra-ui/react";

import Logo from "../static/agreena-logo.svg";
import { PATHS } from "../constants";
import { CustomLink } from "./CustomLink";

const Navbar = () => {
	const location = useLocation();
	const currentPageName =
		location.pathname === PATHS.HOME ? "All Certifications" : "Favorite Certifications";

	return (
		<Flex flexDirection="column" width="100%" align="center" mt="2rem">
			<Heading textAlign="left" my="2rem">
				<Link to={PATHS.HOME}>
					<Image src={Logo} />
				</Link>
			</Heading>
			<Flex justifyContent="space-between" width="90%" alignItems="center">
				<Heading as="h1" fontSize="3xl" color="#1b6765">
					{currentPageName}
				</Heading>
				<Flex gap="1rem">
					<CustomLink to={PATHS.HOME}>All</CustomLink>
					<CustomLink to={PATHS.FAVORITES}>Favorites</CustomLink>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;
