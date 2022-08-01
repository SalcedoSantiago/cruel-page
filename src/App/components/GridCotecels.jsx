import React from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const GridCotecels = () => {



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
    ]

    return (
        <Box pt={'60px'} bg="#121212" pb="60px">
            <Heading
                pb={'40px'}
                textAlign={'center'}
            >
                Cocteles
            </Heading>
            <Flex
                direction={'row'}
                wrap="wrap"
                justifyContent={'center'}
                gap={'20px'}
            >
                {Cocteles.map(({ title, image }) =>

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