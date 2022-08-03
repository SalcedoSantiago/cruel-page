/**
 * External dependencies
 */
import React from 'react'
import { Stack, Text, Box, Image, Heading, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const CardGrid = ({ title, image, index }) => {

    const config = {
        0: 0.5,
        1: 1,
        2: 1.5,
        3: 2
    }


    return (
        <Box
            w={'calc(50% - 1rem)'}
            cursor="pointer"
            transition={'all .3s '}
            position="relative"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: config[index] }}
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
            </motion.div>
        </Box>
    )
}

export default CardGrid;