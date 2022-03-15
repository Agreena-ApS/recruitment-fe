import { Text } from "@chakra-ui/react";
import { PRIMARY_COLOR } from "../styles";

export const ErrorMessage = () => {
	return (
		<Text
			textAlign="center"
			width="90%"
			backgroundColor="#fff"
			borderRadius="10px"
			padding="200px"
			mb="20px"
			fontWeight="bold"
			color={PRIMARY_COLOR}
		>
			There is no data to show, come back later!
		</Text>
	);
};
