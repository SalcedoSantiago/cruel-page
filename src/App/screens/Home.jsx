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

const Home = () => {

    const { products } = useProducts();

    if (!products || !Boolean(products.length)) {
        return (
            <Box>
                <Spinner />
            </Box>
        )
    }

    const cocteles = products.reduce((acc, curr) => !acc.includes(curr.category) && curr.type == 'coctel' ? [...acc, curr.category] : acc, [])

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
                            <Heading
                                maxW="250px"
                                fontWeight={400}
                                textAlign={'center'}
                                fontSize="24px"
                            >
                                La mejor coctelería de autor y las mejores tapas de la ciudad
                            </Heading>
                        </Flex>
                    </Box>
                    <GridCotecels cocteles={cocteles} />
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


            </Layout>
        </>
    )
}

export default Home
