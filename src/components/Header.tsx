import { Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
    return (

        <Flex
            as='header'
            w="100%"
            h="100"
            alignSelf="center"
            justifyContent="center"
        >
            <Link href={{ pathname: '/' }}>
                <Image
                    src="worldtrip.svg"
                    alt='worldtrip'
                    boxSize={100}
                />
            </Link>
        </Flex>

    )
}