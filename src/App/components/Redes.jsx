import { Stack, Box } from '@chakra-ui/react'
import React from 'react'

import Instagram from '../icons/instagram'
import Facebook from '../icons/facebook'


const Redes = ({ color = 'secondary' }) => {

    return (
        <Stack
            direction={'row'}
            spacing={3}
            px={3}
            color={'secondary'}
            align='center'
        >
            <Box
                as="a"
                href='https://www.instagram.com/cruel.barramorfi/?hl=es'
                target={'_blank'}
                cursor="pointer"
                color={color}
                className='normalize-link'
            >
                <Facebook />
            </Box>
            <Box
                cursor="pointer"
                as="a"
                className='normalize-link'
                href='https://www.facebook.com/Cruelbarramorfi/'
                target={'_blank'}
                color={color}
            >
                <Instagram />
            </Box>
        </Stack>
    )
}

export default Redes