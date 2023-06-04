'use client'
import React from 'react'
import { Grid, Heading, Flex, Text, Button, Box, Container, GridItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBrain, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { Text3D, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Link from 'next/link'

type Props = {}

const HeroSection = (props: Props) => {

  // const frame = useFrame()
  return (
    <Grid gridTemplate="'container' 1fr">
      <GridItem gridArea='container' position='relative' width="100%" aspectRatio={2 / 1} bg="blackAlpha.900">
        <Image src="/hero-bg.jpg" fill alt="Tammerverse" />
      </GridItem>
      <GridItem gridArea="container" bgColor="blackAlpha.800" zIndex={1}>
        {/* <Box width='100%' color="white" py={[4, 5]}> */}
        <Flex textAlign="center" justifyContent="center" alignItems="center" flexDir="column" height="100%">
          {/* <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  Welcome to Chakra UI
</Text> */}
          <Heading
            // bgGradient='linear(to-r, #cc2b5e, #753a88)'
            color="white"
            // bgClip="text"
            fontWeight="bold" fontSize='5xl' mb={[2, 3]}>
            Welcome to Tammerverse
          </Heading>
          <Text fontSize="2xl" color="white" mb={[5, 6]}>
            Immersive metaverse of Tampere industrial fields
          </Text>
          <Button fontSize="2xl" as={Link} href='/metaverse' color="white" bgGradient='linear(to-r, #cc2b5e, #753a88)'>Enter</Button>
          {/* <Text mb={3}>Tammerverse uses best of web 3 technologies for immersive and transparent experience</Text>
        <Grid gridTemplateColumns="1fr 1fr 1fr">
          <GridItem textAlign="center">
            <Text mb={2}>Metaverse</Text>
            <FontAwesomeIcon size='3x' icon={faVrCardboard} />
          </GridItem>
          <GridItem textAlign="center">
            <Text mb={2}>Artificial intelligence</Text>
            <FontAwesomeIcon size='3x' icon={faBrain} />
          </GridItem>
        </Grid> */}
          {/* <Canvas>
            <Text3D font={'/roboto-font.json'}>
              TAMMERVERSE
              <meshNormalMaterial />
            </Text3D>
            <OrbitControls />
          </Canvas> */}

        </Flex>
        {/* </Box> */}
      </GridItem>
    </Grid>
  )
}

export default HeroSection
