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

import tonicos from '../../assets/tonicos.png'
import clasicos from '../../assets/clasicos.png'
import whiskys from '../../assets/whiskys.png'
import de_autor from '../../assets/de-autor.png'
import tapas from '../../assets/tapas.png'
import principales from '../../assets/principales.png'
import postres from '../../assets/postres.png'


const GridCotecels = () => {

    const [currentTab, setCurrentTab] = useState('coctel');

    const Cocteles = [
        {
            title: 'de_autor',
            image: de_autor
        },
        {
            title: 'tonicos',
            image: tonicos
        },
        {
            title: 'clasicos',
            image: clasicos
        },
        {
            title: 'whiskys',
            image: whiskys
        },
    ];


    const Platos = [
        {
            title: 'tapas',
            image: tapas
        },
        {
            title: 'principales',
            image: principales
        },
        {
            title: 'postres',
            image: postres
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
                            key={title}
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