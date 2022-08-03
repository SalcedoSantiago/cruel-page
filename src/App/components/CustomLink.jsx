import { Link } from 'react-router-dom'
import { Text, Box } from '@chakra-ui/react';

const CustomLink = ({ name, to, isChild = false }) => {

    return (
        <Box as={Link} to={to} w="100%" className='normalize-link'
            px={3}
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
