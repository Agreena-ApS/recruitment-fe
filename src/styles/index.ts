import { theme as origTheme, extendTheme } from "@chakra-ui/react";

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
					// only applies to `subtle` variant
					const { colorScheme: c } = props;
					if (c !== "green") {
						// use original definition for all color schemes except "blue"
						return origTheme.components.Alert.variants.solid(props);
					}
					return {
						container: {
							bg: `#a6cfce`,
							color: `#1b6765`,
						},
					};
				},
			},
		},
	},
});

export default themeOptions;
