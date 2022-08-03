import React, { useState } from 'react'
import {
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'
import CustomLink from './CustomLink';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons'

const ItemsLink = ({ childLinks, title }) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <motion.div>
                <AnimatePresence>
                    <motion.div
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div>
                            <Box
                                px={3}
                            >
                                <Text
                                    color={'secondary'}
                                    fontSize={'lg'}
                                    textAlign='start'
                                    cursor={'pointer'}
                                    textTransform='capitalize'
                                    borderBottomWidth={isOpen ? '0px' : '2px'}
                                    borderBottomStyle='solid'
                                    borderBottomColor={'secondary'}
                                    py={4}
                                    px={3}
                                >
                                    {title} <ChevronDownIcon />
                                </Text>
                            </Box>
                        </motion.div>
                    </motion.div>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                },
                            }}
                            exit={{ opacity: 0 }}
                        >
                            {childLinks.map(({ name, to }) =>
                                <Box key={name} lineHeight='1' textAlign='start' h={'auto'} bgColor={'#2e3b4eb8'} px={3} _hover={{ bgColor: '#657792b8' }}>
                                    <CustomLink name={name} to={to} isChild={true} />
                                </Box>
                            )
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}


export default ItemsLink