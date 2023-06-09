'use client'
import React from 'react'
import { Grid, Heading, Text, Flex, Box, Container, GridItem, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faVrCardboard, faClipboardQuestion } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const MetaverseSection = (props: Props) => {
  return (
    <Box width='100%' bgColor="blackAlpha.900" color="white" py={[5, 6]}>
      <Container textAlign="center" maxW="container.lg">
        <Heading
          bgGradient='linear(to-r, #cc2b5e, #753a88)'
          bgClip="text"
          fontWeight="bold"
          fontSize='5xl'
          mb={[5, 6]}
        >
          Metaverse
        </Heading>
        <Box mb={4}>
          <FontAwesomeIcon size='2x' icon={faVrCardboard} />
          <Text fontSize='xl' mt={5}>
            Immersive 3D map of Tampere city with provided manufacturing companies and presented industries.
          </Text>
          <Text fontSize='xl'>
            Partner companies can select scene or mini game relevant to their technology and place it on the map.

            App visitors are able to explore loaded scenes and learn about the industry in the new way.
          </Text>
        </Box>
        <Button fontSize='xl' as={Link} href='/metaverse' color="white" bgGradient='linear(to-r, #cc2b5e, #753a88)'>Enter</Button>
      </Container>
    </Box>
  )
}

export default MetaverseSection
