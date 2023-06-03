'use client'
import Navigation from '@/components/layout/navigation'
import NavigationRight from '@/components/layout/navigationRight'
import { Box, Flex, Container } from '@chakra-ui/react'
import Logo from '@/components/layout/logo'

type Props = {}

const Header = (props: Props) => {
  return (
    <Box as="header" bgColor="blackAlpha.900" color="white">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap={3}>
            <Logo />
            <Navigation />
          </Flex>
          <NavigationRight />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
