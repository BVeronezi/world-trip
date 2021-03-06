import { extendTheme, Theme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const theme = extendTheme<Theme>({
    colors: {
        highlight: {
            "highlight": "#FFBA08",
            "highlight.200": "#ffdb7d",
          },
          dark: {
            "black": "#000000",
            "headings-and-text": "#47585B",
            "info": "#999999",
          },
          light: {
            "headings-and-text": "#F5F8FA",
            "info": "#DADADA",
          }
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins'  
    },
    styles: {
        global: {
          body: {
            bg: 'light.headings-and-text',
            color: 'dark.headings-and-text',
            lineHeight: "160%",
          }
        }
    }
})

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
});