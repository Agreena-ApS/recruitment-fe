import { Button } from "@chakra-ui/react";
import { LinkProps, useResolvedPath, useMatch, Link } from "react-router-dom";

export const CustomLink = ({ children, to }: LinkProps) => {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Button
			fontWeight="bold"
			bg={match ? "#1b6765" : "#a6cfce"}
			_hover={{
				bg: "#1b6765",
				textColor: "#fff",
			}}
			textColor={match ? "#fff" : "#1b6765"}
		>
			<Link to={to}>{children}</Link>
		</Button>
	);
};
