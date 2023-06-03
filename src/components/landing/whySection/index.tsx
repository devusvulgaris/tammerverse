'use client'
import React from 'react'
import { Grid, Flex, Heading, Text, Box, Container, GridItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBrain, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

type Props = {}

const Web3Section = (props: Props) => {
  return (
    <Box bgColor="blackAlpha.900" color="white">
      <Container maxW="container.lg">
        <Heading
          bgGradient='linear(to-r, #cc2b5e, #753a88)'
          bgClip="text"
          fontWeight="bold"
          fontSize='5xl'
          mb={[4, 5]}
          textAlign="center"
        >
          Why Tammerverse
        </Heading>
      </Container>

      <Grid gridTemplateColumns={['1fr', '1fr 1fr']} width='100%' py={[4, 5]}>
        <Container py={3}>
          <Grid gap={5}>
            <GridItem textAlign="center">
              <Flex alignItems="center" gap={4}>
                <FontAwesomeIcon size='3x' icon={faVrCardboard} />
                <Text fontSize="2xl" mb={2}>Online courses and interviews</Text>
              </Flex>
            </GridItem>
            <GridItem textAlign="center">
              <Flex alignItems="center" gap={4}>
                <FontAwesomeIcon size='3x' icon={faVrCardboard} />
                <Text fontSize="2xl" mb={2}>Questionnairs to help students learn about career paths</Text>
              </Flex>
            </GridItem>
            <GridItem textAlign="center">
              <Flex alignItems="center" gap={4}>
                <FontAwesomeIcon size='3x' icon={faBrain} />
                <Text fontSize="2xl" mb={2}>Immersive XR experience of Tampere&apos;s industry</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
        <Box position='relative'>
          <Image fill src="/why-project.jpg" alt="Why Tammerverse" objectFit='cover' />
        </Box>
      </Grid>
    </Box>
  )
}

export default Web3Section
