import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme<Theme>({
    colors: {
        yellow: {
            "500": "#FFBA08",
        },
        gray: {
            "50": "#F5F8FA",
            "700": "#47585B",
            "900": "#1D1D1D",
        }
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins'  
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.900'
            }
        }
    }
})