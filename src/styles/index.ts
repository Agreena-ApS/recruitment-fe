import { extendTheme } from "@chakra-ui/react";

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
});

export default themeOptions;
