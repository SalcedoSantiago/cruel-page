/**
 * External dependencies
 */
import { Stack, Box, Image, Flex, Text, Heading, Spinner, Divider } from '@chakra-ui/react'
import Hero from '../components/Hero'
import GridCotecels from '../components/GridCotecels'
import Layout from '../components/layout'
import Form from '../components/Form'
import Maps from '../components/Maps'
import { useProducts } from '../hooks'
import { Link } from "react-router-dom";
import { useState } from 'react'

const Home = () => {
    const { products } = useProducts();

    if (!products || !Boolean(products.length)) {
        return (
            <Box>
                <Spinner />
            </Box>
        )
    }


    return (
        <>
            <Layout>
                <Box >
                    <Hero />
                    <Box
                        bgColor={'#232427'}
                        py={'50px'}
                    >
                        <Flex
                            justifyContent={'center'}
                            wrap='wrap'
                        >
                            <Image
                                src={'https://cruel.com.ar/static/media/iconosbebidas.a67091085e861e6e81ddfcbedee04f69.svg'}
                                alt="tragos"
                                display={'block'}
                                pb="22px"
                                px="130px"
                            />
                            <Box
                                w="100%"
                            >
                                <Heading
                                    mx="auto"
                                    maxW="250px"
                                    fontWeight={400}
                                    textAlign={'center'}
                                    fontSize="24px"
                                >
                                    La mejor coctelería de autor y las mejores tapas de la ciudad
                                </Heading>
                            </Box>
                        </Flex>
                    </Box>
                    <GridCotecels />
                    <Form />
                    <Image
                        src={'https://cruel.com.ar/static/media/bar.79b0ea638b56808408e9.png'}
                        width="100%"
                        alt="image host"
                    />

                    <Stack spacing={4} justify='center' align={'center'} py="60px">
                        <Divider w="140px" />
                        <Heading>Nuestra ubicacion</Heading>
                        <Text>calle 45 e/ 13 y 14 n940</Text>
                        <Box>
                            <Text>Martes - Jueves open doors 18hs</Text>
                            <Text>Viernes - Sabados open doors 20hs</Text>
                        </Box>
                        <Text>+542216056051 </Text>
                    </Stack>
                </Box>


                <Box>
                    <Maps />
                </Box>

                <Box as="footer" pt="30px" pb="60px">
                    <Stack align={'center'} justify='center' color="#f2ecd3">
                        <Divider width={'70%'} />
                        <Link to="/">
                            <Image
                                src={'https://res.cloudinary.com/dxazbcpkr/image/upload/v1658163818/Cruel/logo_footer_viyftc_umtzbp.svg'}
                                alt="logo footer"
                                w="250px"
                            />
                        </Link>
                        <Text>la mejor coctelería y tapas de la ciudad</Text>

                        <Stack direction={'row'} spacing={4}>
                            <Text>
                                INS
                            </Text>
                            <Text>FBOK</Text>
                        </Stack>

                        <Flex
                            maxW={'70%'}
                            gap={3}
                            wrap="wrap"
                            justifyContent={'center'}
                            fontSize="14px"
                            pt="20px"
                        >
                            <Box>Cocteles</Box>
                            <Box>Tónicos</Box>
                            <Box>Clásicos</Box>
                            <Box>Wiskys</Box>
                            <Box>Tapas</Box>
                            <Box>Principales</Box>
                            <Box>Postres</Box>
                        </Flex>
                    </Stack>


                </Box>

            </Layout>
        </>
    )
}

export default Home
