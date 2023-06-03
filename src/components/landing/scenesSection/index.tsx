'use client'
import React from 'react'
import { Grid, Heading, Text, Flex, Box, Container, GridItem, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faVrCardboard, faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const ScenesSection = (props: Props) => {
  return (
    <Box width='100%' bgColor="blackAlpha.900" color="white" py={[4, 5]}>
      <Container textAlign="center" maxW="container.l">
        <Heading
          bgGradient='linear(to-r, #cc2b5e, #753a88)'
          bgClip="text"
          fontWeight="bold"
          fontSize='5xl'
          mb={[4, 5]}
        >
          3D Scenes and Mini games
        </Heading>
        <Box mb={4}>
          <FontAwesomeIcon size="2x" icon={faDiceD20} />
          <Text mt={[4, 5]} fontSize='xl'>
           Various 3D scenes and mini games with immersive XR experience.
          </Text>
          <Text fontSize='xl'>
           Help young student to understand the present state of manufacturing industry in fun and interactive way. 
          </Text>
        </Box>
        <Button fontSize='xl' as={Link} href='/scene' color="white" bgGradient='linear(to-r, #cc2b5e, #753a88)'>Check demo scene</Button>
      </Container>
    </Box>
  )
}

export default ScenesSection
