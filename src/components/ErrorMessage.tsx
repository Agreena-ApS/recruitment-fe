import { Text } from "@chakra-ui/react";
import { PRIMARY_COLOR } from "../styles";

export const ErrorMessage = () => {
  return (
    <Text
      textAlign="center"
      width="1300px"
      backgroundColor="#fff"
      borderRadius="10px"
      padding="200px"
      mb="20px"
      fontWeight="bold"
      color={PRIMARY_COLOR}
      data-testid="error-message"
    >
      There is no data to show, come back later!
    </Text>
  );
};
