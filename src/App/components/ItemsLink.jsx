import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'
import CustomLink from './CustomLink'



const ItemsLink = ({ childLinks, title }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem border={'none'}>
                <Text                >
                    <AccordionButton pl={0}>
                        <Box
                            flex='1'
                            textAlign='start'
                            color="black"
                            fontSize={'2xl'}
                            w="100%"
                            cursor={'pointer'}
                            textTransform='capitalize'
                        >
                            {title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Text>
                {childLinks.map(({ name, to }) =>
                    <AccordionPanel key={name} pb={4} bgColor={'blackAlpha.50'} >
                        <Box flex='1' textAlign='start'>
                            <CustomLink name={name} to={`/menu${to}`} />
                        </Box>
                    </AccordionPanel>
                )
                }
            </AccordionItem>
        </Accordion>
    )
}


export default ItemsLink