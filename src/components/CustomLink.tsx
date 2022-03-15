import { Button } from "@chakra-ui/react";
import { LinkProps, useResolvedPath, useMatch, Link } from "react-router-dom";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../styles";

export const CustomLink = ({ children, to }: LinkProps) => {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Button
			fontWeight="bold"
			bg={match ? PRIMARY_COLOR : SECONDARY_COLOR}
			_hover={{
				bg: PRIMARY_COLOR,
				textColor: "#fff",
			}}
			textColor={match ? "#fff" : PRIMARY_COLOR}
		>
			<Link to={to}>{children}</Link>
		</Button>
	);
};
