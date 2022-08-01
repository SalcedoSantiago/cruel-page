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
        slate: '#99B0A8',
        dark: '#1e202c'
    },
    fonts: {
        body: `'Karla', sans-serif`,
        heading: `'League Spartan',sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: '#121212',
                color: 'white',
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