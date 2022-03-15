import { theme as origTheme, extendTheme } from "@chakra-ui/react";

export const PRIMARY_COLOR = "#1b6765";
export const SECONDARY_COLOR = "#a6cfce";

const themeOptions = extendTheme({
	styles: {
		global: {
			"html, body": {
				color: "#212529",
				bg: "#F7F7F7",
			},
		},
	},
	fonts: {
		body: `Roboto, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
		heading: `Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
	},
	components: {
		Alert: {
			variants: {
				solid: (props: any) => {
					const { colorScheme: c } = props;
					if (c !== "green") {
						return origTheme.components.Alert.variants.solid(props);
					}
					return {
						container: {
							bg: SECONDARY_COLOR,
							color: PRIMARY_COLOR,
						},
					};
				},
			},
		},
	},
});

export default themeOptions;
