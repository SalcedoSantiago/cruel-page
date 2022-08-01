import { Link } from 'react-router-dom'
import { Text, Box } from '@chakra-ui/react';

const CustomLink = ({ name, to, isChild = false }) => {

    return (
        <Box as={Link} to={to} w="100%" className='normalize-link'>
            <Text
                color={isChild ? 'primary' : 'secondary'}
                fontSize={'2xl'}
                textAlign='start'
                cursor={'pointer'}
                textTransform='capitalize'
                borderBottomWidth={'2px'}
                borderBottomStyle='solid'
                borderBottomColor={'secondary'}
            >{name}</Text>
        </Box>

    )
}

export default CustomLink;
