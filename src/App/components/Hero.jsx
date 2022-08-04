/**
 * External dependencies
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Pagination } from "swiper";
/**
 * Internal dependencies
 */

import Hero1 from '../../assets/hero1.png';
import Hero2 from '../../assets/hero2.png';
import Hero3 from '../../assets/hero3.png';



const Hero = () => {
    return (
        <Box
            maxH="100vh"
            h="100vh"
        >
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src={Hero1}
                        w="100%"
                        h="100vh"
                        alt="banner 1"
                        objectFit="cover"
                    />

                    <Text
                        position={'absolute'}
                        color='#f2ecd3'
                        fontSize={'14px'}
                        letterSpacing='1px'
                        maxW={'180px'}
                        top="20vh"
                        left={0}
                        right={0}
                        m="auto"
                        fontWeight={600}
                    >
                        2X1 EN TÓNICOS DE MARTES A JUEVES
                    </Text>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={Hero2}
                        w="100%"
                        h="100vh"
                        alt="banner 1"
                        objectFit="cover"
                    />

                    <Stack
                        direction={'row'}
                        justifyContent='center'
                        position={'absolute'}
                        maxW={'180px'}
                        top="20vh"
                        right={'50px'}
                        m="auto"
                        pr={6}
                    >
                        <Text
                            color='#f2ecd3'
                            fontSize={'14px'}
                            letterSpacing='1px'
                            fontWeight={600}
                        >
                            LOS MENÚ DEL DÍA ESTÁN EN CRUEL
                        </Text>
                        <Divider
                            orientation='vertical'
                            h="50px"
                            borderWidth={1}
                            w="2px"
                        />
                    </Stack>

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={Hero3}
                        w="100%"
                        h="100vh"
                        alt="banner 1"
                        objectFit="cover"
                    />
                    <Stack
                        m="auto"
                        position={'absolute'}
                        top="80vh"
                        width={'100%'}
                        direction={'column'}
                        alignItems='center'
                    >
                        <Heading m="0">MAZBE</Heading>
                        <Text
                            color={'#616161'}
                        >TECH HOUSE | MINIMAL | PROGRESSIVE</Text>
                    </Stack>
                </SwiperSlide>
            </Swiper>

        </Box>
    )
}

export default Hero;
