/**
 * External dependencies
 */
import React, { useState } from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Divider, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

/**
 * Internal dependencies
 */
import Copa from '../icons/copa';
import Cubiertos from '../icons/cubiertos';
import CardGrid from './CardGrid'



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
        <Box pt={'60px'} bg="#121212" pb="60px" minH={'90vh'}>
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
                    pb={'60px'}
                >
                    {['coctel', 'platos'].map((title) =>
                        <Flex
                            gap="15px"
                            alignItems='center'
                            w="auto"
                            px={'30px'}
                            fontSize={'18px'}
                            fontWeight={700}
                            py={'15px'}
                            borderRadius={'15px'}
                            onClick={() => { title != currentTab && setCurrentTab(title) }}
                            bgColor={title == currentTab ? 'primary' : 'transparent'}
                            color={title == currentTab ? 'dark' : 'primary'}
                            textTransform="capitalize"
                            cursor="pointer"
                        >
                            {title == 'coctel' ? <Cubiertos /> : <Copa />}   {title == 'coctel' ? 'Cocteles' : 'Platos'}
                        </Flex>
                    )
                    }
                </Flex>


                {

                    currentTab == 'coctel' &&
                    <Flex
                        w={'100%'}
                        wrap="wrap"
                        justifyContent={'space-between'}
                        gap={'15px'}
                        px={3}
                    // display={currentTab == 'coctel' ? 'flex' : 'none'}
                    >
                        {Cocteles.map(({ title, image }, index) =>
                            <CardGrid key={title} title={title} image={image} index={index} />
                        )
                        }
                    </Flex>
                }
                {
                    currentTab == 'platos' &&

                    <Flex
                        wrap="wrap"
                        justifyContent={'space-between'}
                        gap={'15px'}
                        w={'100%'}
                        px={3}
                    // display={currentTab == 'platos' ? 'flex' : 'none'}
                    >
                        {Platos.map(({ title, image }, index) =>
                            <CardGrid key={title} title={title} image={image} index={index} />
                        )
                        }
                    </Flex>
                }


            </Flex>

        </Box >


    )
}

export default GridCotecels