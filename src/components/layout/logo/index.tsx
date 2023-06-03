import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Box py={[2, 3]}>
      <Heading textTransform="uppercase">
        <Link href="/">
          Tammerverse
        </Link>
      </Heading>
    </Box>
  )
}

export default Logo
