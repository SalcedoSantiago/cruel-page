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
                <AccordionButton pl={0} w="100%">
                    <Box
                        flex='1'
                        textAlign='start'
                        color="secondary"
                        fontSize={'2xl'}
                        w="100%"
                        cursor={'pointer'}
                        textTransform='capitalize'
                        borderBottomWidth={'2px'}
                        borderBottomStyle={'solid'}
                        borderBottomColor={'secondary'}
                    >
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                {childLinks.map(({ name, to }) =>
                    <AccordionPanel key={name} pb={4} bgColor={'#2e3b4eb8'} >
                        <Box flex='1' textAlign='start'>
                            <CustomLink name={name} to={to} isChild={true}/>
                        </Box>
                    </AccordionPanel>
                )
                }
            </AccordionItem>
        </Accordion>
    )
}


export default ItemsLink