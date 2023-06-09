'use client'
import React from 'react'
import { Grid, Heading, Text, Box, Container, GridItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBrain, faVrCardboard, faImage } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Web3Section = (props: Props) => {
  return (
    <Box fontSize='xl' width='100%' bgColor="blackAlpha.900" color="white" py={[4, 5]}>
      <Container textAlign="center">
        {/* <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  Welcome to Chakra UI
</Text> */}
        <Heading bgGradient='linear(to-r, #cc2b5e, #753a88)' bgClip="text" fontWeight="bold" fontSize='5xl' mb={[2, 3]}>The best of Web 3</Heading>
        <Text mb={3}>Tammerverse uses best of web 3 technologies for immersive and transparent experience</Text>
        <Grid gridTemplateColumns="1fr 1fr 1fr">
          <GridItem textAlign="center">
            <FontAwesomeIcon size='3x' icon={faVrCardboard} />
            <Text my={4}>Metaverse</Text>
          </GridItem>
          <GridItem textAlign="center">
          <FontAwesomeIcon size='3x' icon={faBrain} />
            <Text my={4}>Artificial intelligence</Text>
          </GridItem>
          <GridItem textAlign="center">    
            <FontAwesomeIcon size='3x' icon={faImage} />
            <Text my={4}>NFT based transparense</Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Web3Section
