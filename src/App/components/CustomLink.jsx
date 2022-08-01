import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react';

const CustomLink = ({ name, to }) => {

    return (
        <Link
        to={to}
        >
            <Text
                as="a"
                color="black"
                fontSize={'2xl'}
                textAlign='start'
                w="100%"
                cursor={'pointer'}
                textTransform='capitalize'
            >{name}</Text>
        </Link>
    )
}

export default CustomLink;
