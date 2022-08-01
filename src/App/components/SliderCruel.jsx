/**
 * External dependencies
 */
import { Container, Stack, Text, Box, Image, Flex, Heading } from '@chakra-ui/react'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


const SliderCruel = ({ sliderContent }) => {

    return (
        <Flex
            justifyContent={'center'}
            w="100%"
        >
            <Swiper
                grabCursor={true}
                effect={"creative"}
                pagination={{
                    type: "fraction",
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[Pagination, EffectCreative]}
                className="mySwiper"
            >
                {
                    sliderContent.map(({ image, title, description, price }, index) =>
                        <SwiperSlide
                            key={index}
                        >
                            <Image
                                w="80%"
                                mx="auto"
                                src={image}
                                alt={title}
                                position={'relative'}
                                borderRadius="10px"
                            />
                            <Box
                                position={'absolute'}
                                bottom={'10px'}
                                borderRadius="10px"
                                w={'100%'}
                                color="primary"
                            >
                                <Stack
                                    py={6}
                                    px={5}
                                    direction="row"
                                    justifyContent={'space-between'}
                                    w={'80%'}
                                    mx="auto"
                                >
                                    <Box
                                        w="60%"
                                    >
                                        <Heading
                                            textTransform={'uppercase'}
                                            fontSize="16px"
                                            fontWeight={500}
                                        >
                                            {title}
                                        </Heading>
                                        <Text
                                            fontSize="14px"
                                            fontFamily={"'Open Sans'"}
                                        >
                                            {description}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="lg"
                                        >${price}</Text>
                                    </Box>
                                </Stack>
                            </Box>

                        </SwiperSlide>
                    )
                }
            </Swiper>
        </Flex>
    )
}

export default SliderCruel