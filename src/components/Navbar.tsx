import React from "react";
import { Stack, Flex, Heading, Image, Button } from "@chakra-ui/react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

import Logo from "../static/agreena-logo.svg";

const CustomLink = ({ children, to }: LinkProps) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Button
			fontWeight="400"
			bg={match ? "#1b6765" : "gray.200"}
			_hover={{
				bg: "#1b6765",
				textColor: "#fff",
			}}
			textColor={match ? "#fff" : ""}
		>
			<Link to={to}>{children}</Link>
		</Button>
	);
};

const Navbar = () => {
	return (
		<Flex flexDirection="column" width="100%" align="center" mt="2rem">
			<Flex justifyContent="flex-start" width="90%">
				<Heading textAlign="left" my="2rem">
					<Link to="/">
						<Image src={Logo} />
					</Link>
				</Heading>
			</Flex>
			<Stack
				spacing={4}
				width="90%"
				align="center"
				justify={"flex-end"}
				direction={["column", "row", "row", "row"]}
			>
				<CustomLink to="/">All</CustomLink>
				<CustomLink to="/certification/favorites">Favorites</CustomLink>
			</Stack>
		</Flex>
	);
};

export default Navbar;
