/**
 * External dependencies
 */
import { extendTheme, theme } from "@chakra-ui/react";

/**
 * Internal dependencies
 */


export default extendTheme({
    colors: {
        primary: '#f2ecd3',
        secondary: '#114b56',
        slate: '#99B0A8',
        dark: '#1e202c'
    },
    fonts: {
        body: `Maharlika, sans-serif`,
        heading: `Maharlika, sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: '#232427',
                color: '#ffffff',
            },
            a: {
                color: '#5EECBF',
                _hover: {
                    textDecoration: 'underline',
                },
            },
        }
    }
})