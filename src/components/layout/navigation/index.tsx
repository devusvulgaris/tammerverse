'use client'
import NextLink from 'next/link'
import { Link, Flex } from '@chakra-ui/react'

const Navigation = () => {

  return (
    <Flex as="nav" gap={4}>
      <Link as={NextLink} href="/">Home</Link>
      <Link as={NextLink} href="/metaverse">Metaverse</Link>
      <Link as={NextLink} href="/learn">Learning Hub</Link>
      <Link as={NextLink} href="/scene">Scene</Link>
    </Flex>
  )
}

export default Navigation
