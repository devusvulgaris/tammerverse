'use client'
import NextLink from 'next/link'
import { IconButton, useColorMode, Box, Link, Flex } from '@chakra-ui/react'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex>
      <Flex as="nav" gap={4}>
        <Link as={NextLink} href="/">Home</Link>
        <Link as={NextLink} href="/map">Map</Link>
        <Link as={NextLink} href="/quiz">Quiz</Link>
        <Link as={NextLink} href="/scene">Scene</Link>
      </Flex>
      <Box>
        <IconButton icon={<FontAwesomeIcon icon={faSun} />} onClick={toggleColorMode} />
      </Box>

    </Flex>
  )
}

export default Navigation
