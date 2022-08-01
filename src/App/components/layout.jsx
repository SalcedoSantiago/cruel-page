/**
 * External dependencies
 */
import React, { useState } from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Divider, UnorderedList, ListItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import CustomLink from './CustomLink';
import ItemsLink from './ItemsLink';

/**
 * Internal dependencies
 */


const Layout = ({ children }) => {
    const [isOpen, toggleOpen] = useState(false);


    const links = [
        {
            name: 'home',
            to: '/'
        },
        {
            name: 'cocteles',
            to: [
                {
                    name: 'Coctelería de autor',
                    to: '/menu/de_autor'
                },
                {
                    name: 'Tónicos',
                    to: '/menu/tonicos'
                },
                {
                    name: 'Clásicos',
                    to: '/menu/clasicos'
                },
                {
                    name: 'Whiskys',
                    to: '/menu/whiskys'
                },
            ]
        },
        {
            name: 'platos',
            to: [
                {
                    name: 'Tapas',
                    to: '/menu/tapas'
                },
                {
                    name: 'Principales',
                    to: '/menu/principales'
                },
                {
                    name: 'Postres',
                    to: '/menu/postres'
                },

            ]
        },
        {
            name: 'Reserva',
            to: '/home#reserva'
        },

    ]


    return (
        <div>
            <Box
                display={['none', 'none', 'block']}
                h="100vh"
                w="100vw"
                bgImage="https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163816/Cruel/cruel_escritorio_nzo9b1_dvopw0.jpg"
                bgSize={'cover'}
            >
            </Box>

            <Box display={['block', 'block', 'none']}>
                <header>
                    <Container maxW={'6xl'} px={'30px'} py={'30px'} position="fixed" top={0} w="100vw" bgColor={'#121212b2'} zIndex={3}>
                        <Stack direction={'row'} justifyContent='space-between' align={'center'}>
                            <Box cursor={'pointer'}>
                                <Link to="/">
                                    <Image
                                        src={'https://cruel.com.ar/static/media/logo.afcaceeebf1bd75aed2b41c59ef29a77.svg'}
                                        alt="Picture of the author"
                                        width={'160px'}
                                    />
                                </Link>
                            </Box>
                            <Box cursor={'pointer'}>
                                <Button
                                    zIndex={1}
                                    onClick={() => { toggleOpen(!isOpen) }}
                                    colorScheme="dark"
                                >
                                    <HamburgerIcon
                                        w={'30px'}
                                        color="primary"
                                        h={'30px'}
                                    />
                                </Button>
                            </Box>
                        </Stack>
                        <Drawer onClose={() => { toggleOpen(!isOpen) }} isOpen={isOpen} size={'xs'}>
                            <DrawerOverlay />
                            <DrawerContent
                                borderStartRadius={'33px'}
                                shadow="xl"
                                boxShadow={'xl'}
                                bgColor={'#d9d2c8'}
                                zIndex={999999}
                                px={0}
                            >
                                <DrawerCloseButton />
                                <DrawerBody py={'50px'}>
                                    <Stack
                                        direction={'column'}
                                        spacing={6}
                                    >
                                        {
                                            links.map(({ name, to }, index) => {
                                                if (Array.isArray(to)) {
                                                    return (<ItemsLink key={name + index} title={name} childLinks={to} />)
                                                }

                                                return (<CustomLink key={name + index} name={name} to={to} />)


                                            }
                                            )
                                        }
                                    </Stack>

                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Container>
                </header>
                <Box>
                    {children}
                </Box>
            </Box>
        </div >
    )
}

export default Layout