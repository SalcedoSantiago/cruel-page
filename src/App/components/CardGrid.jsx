/**
 * External dependencies
 */
import React from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const CardGrid = ({ title, image }) => {
    return (
        <Box
            w={'calc(50% - 1rem)'}
            cursor="pointer"
            position="relative"
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

export default CardGrid;