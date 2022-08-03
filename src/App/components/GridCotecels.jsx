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
                    <Tabs variant='soft-rounded'>
                        <TabList justifyContent={'center'} alignItems='center'>
                            <Tab>
                                <Flex gap="15px" alignItems='center'>
                                    <Copa />  Cócteles
                                </Flex>
                            </Tab>
                            <Tab color={'primary'} >
                                <Flex gap="15px" alignItems='center'>
                                    <Cubiertos />  Platos
                                </Flex>
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel w={'full'}>
                                <Flex
                                    direction={'row'}
                                    wrap="wrap"
                                    justifyContent={'space-between'}
                                    gap={'20px'}
                                >
                                    {Cocteles.map(({ title, image }) =>
                                        <CardGrid key={title} title={title} image={image} />
                                    )
                                    }
                                </Flex>

                            </TabPanel>

                            <TabPanel w={'full'}>
                                <Flex
                                    direction={'row'}
                                    wrap="wrap"
                                    justifyContent={'space-between'}
                                    gap={'20px'}
                                >
                                    {Platos.map(({ title, image }) =>
                                        <CardGrid key={title} title={title} image={image} />
                                    )
                                    }
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Flex>
         
        </Box >


    )
}

export default GridCotecels