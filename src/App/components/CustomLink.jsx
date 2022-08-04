import { Link } from 'react-router-dom'
import { Text, Box } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

const CustomLink = ({ name, to, isChild = false }) => {

    return (
        <Box
            as={name == 'reserva' ? HashLink : Link}
            to={to}
            w="100%"
            px={3}
            className='normalize-link'
        >
            <Text
                color={isChild ? 'primary' : 'secondary'}
                fontSize={'lg'}
                textAlign='start'
                cursor={'pointer'}
                textTransform='capitalize'
                borderBottomWidth={!isChild && '2px'}
                borderBottomStyle='solid'
                borderBottomColor={'secondary'}
                px={3}
                py={4}
            >
                {name}
            </Text>
        </Box>

    )
}

export default CustomLink;
