/**
 * External dependencies
 */
import React, { useState } from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

/**
 * Internal dependencies
 */
import Copa from '../icons/copa';
import Cubiertos from '../icons/cubiertos';




const GridCotecels = () => {

    const [currentTab, setCurrentTab] = useState('coctel');

    const Cocteles = [
        {
            title: 'de_autor',
            image: 'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163815/Cruel/Cocteles_fify97_x1ccxv.png'
        },
        {
            title: 'tonicos',
            image: 'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163821/Cruel/Tonicos_j6wdog_qs5sqa.png'
        },
        {
            title: 'clasicos',
            image: 'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163815/Cruel/Clasicos_vin7c1_p4h0lk.png'
        },
        {
            title: 'whiskys',
            image: 'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163821/Cruel/Whiskys_din2xx_bjdzsh.png'
        },
    ];


    const Platos = [
        {
            title: 'tapas',
            image: 'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163820/Cruel/Tapas_ue78wj_nxgamd.png'
        },
        {
            title: 'principales',
            image: 'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163821/Cruel/Principales_t2q4q4_mdnyrb.png'
        },
        {
            title: 'postres',
            image: 'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163818/Cruel/Postres_qqyw6n_gswboq.png'
        },
    ]


    return (
        <Box pt={'60px'} bg="#121212" pb="60px">
            <Flex
                justifyContent={'center'}
                align='center'
                wrap={'wrap'}
                pb={'40px'}
            >
                <Flex
                    w="100%"
                    justify={'center'}
                    align='center'
                    gap={3}
                >
                    <Box onClick={() => { setCurrentTab('coctel') }}>
                        <Copa />
                    </Box>
                    <Heading
                        textAlign={'center'}
                        pb={3}
                        display={currentTab != 'coctel' ? 'none' : 'block'}
                    >
                        Cócteles
                    </Heading>
                    <Box onClick={() => { setCurrentTab('platos') }}>
                        <Heading
                            textAlign={'center'}
                            pb={3}
                            display={currentTab == 'coctel' ? 'none' : 'block'}
                        >
                            Platos
                        </Heading>
                        <Cubiertos />
                    </Box>
                </Flex>

                <Divider
                    w={"50%"}
                    color="primary"
                />
            </Flex>
            <Flex
                direction={'row'}
                wrap="wrap"
                justifyContent={'center'}
                gap={'20px'}
            >
                {[currentTab == 'coctel' ? Cocteles : Platos][0].map(({ title, image }) =>
                    <Box
                        key={title}
                        w={'calc(48% - 1rem)'}
                        cursor="pointer"
                        position="relative"
                        borderRadius={'10px'}
                    >
                        <Link
                            key={title}
                            to={`/menu/${title}`}
                        >
                            <Image
                                w="100%"
                                h="100%"
                                src={image}
                                alt={title}
                                borderRadius={'10px'}

                            />
                            <Heading
                                textTransform={'uppercase'}
                                position="absolute"
                                top={'50%'}
                                fontSize='lg'
                                color={'primary'}
                                zIndex={2}
                                textAlign='center'
                                w="100%"
                            >
                                {title.split('_').join(' ')}
                            </Heading>
                        </Link>

                    </Box>
                )
                }

            </Flex >
        </Box >


    )
}

export default GridCotecels