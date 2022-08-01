/**
 * External dependencies
 */
import { Box, Heading, Divider, Spinner, Container, Flex } from '@chakra-ui/react'
import Layout from '../../App/components/layout'
import React, { useRef, useState, useEffect } from "react";
import SliderCruel from '../../App/components/SliderCruel'
import { useProducts } from '../../App/hooks';
import { useParams } from 'react-router-dom';

/**
 * Internal dependencies
 */

export default function Menu(props) {

    console.log('useParams()', useParams());
    const { id } = useParams();
    const { products } = useProducts();


    if (!id || !Boolean(products.length)) {
        return (
            <Layout>
                <Container pt={'100px'} maxW="4xl" >
                    <Flex justifyContent={'center'} alignItems='center' h="60vh">
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='orange.100'
                            color='white'
                            size='xl' />
                    </Flex>
                </Container>
            </Layout>
        )
    }


    const actualSlider = products.filter(({ category }) => category == id)


    return (
        <>
            <Layout>
                <Box pt={'100px'} >
                    <Box
                        py={'30px'}
                        px={'30px'}
                    >
                        <Heading
                            maxW="250px"
                            fontWeight={400}
                            textAlign={'start'}
                            color="primary"
                            textTransform={'capitalize'}
                        >
                            {id.split('_').join(' ')}
                        </Heading>
                        <Divider w="60px" />
                    </Box>

                    <SliderCruel
                        sliderContent={actualSlider}
                    />
                </Box>
            </Layout>

        </>
    )
}
