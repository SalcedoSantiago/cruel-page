/**
 * External dependencies
 */
import React, { useState } from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Divider, UnorderedList, ListItem, DrawerFooter } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import CustomLink from './CustomLink';
import ItemsLink from './ItemsLink';
import Redes from './Redes';
import Logo from '../icons/logo';

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
            name: 'reserva',
            to: '/#reserva'
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
                                    <Logo />
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
                                <Stack
                                    px={3}
                                    pr={'30px'}
                                    color='secondary'
                                    pt={'40px'}
                                    direction={'row'} justifyContent='space-between' alignItems={'center'}>
                                    <Redes />
                                    <CloseIcon
                                        onClick={() => { toggleOpen(!isOpen) }}
                                        cursor="pointer"
                                        fontSize={'xl'}
                                    />
                                </Stack>
                                <DrawerBody pt={'15px'}>
                                    <Stack
                                        direction={'column'}
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
                                <DrawerFooter>
                                    <Flex
                                        w="100%"
                                        justifyContent={'center'}
                                        align='center'
                                    >
                                        <Link to="/">
                                            <Image
                                                src={'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163816/Cruel/Frame_3_fvknac_mo1y7j.svg'}
                                                alt="logo footer"
                                                w="200px"
                                            />
                                        </Link>
                                    </Flex>
                                </DrawerFooter>
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