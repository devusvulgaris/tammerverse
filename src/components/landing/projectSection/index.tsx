'use client'
import React from 'react'
import { Grid, Heading, Text, Flex, Box, Container, GridItem, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faVrCardboard, faClipboardQuestion } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const ProjectSection = (props: Props) => {
  return (
    <Box fontSize='xl' width='100%' bgColor="blackAlpha.900" color="white" py={[4, 5]}>
      <Container textAlign="center">
        <Heading
          bgGradient='linear(to-r, #cc2b5e, #753a88)'
          bgClip="text"
          fontWeight="bold"
          fontSize='5xl'
          mb={[5, 6]}
        >
          About project
        </Heading>
        <Box mb={[5, 6]}>
          <FontAwesomeIcon size="2x" icon={faClipboardQuestion} />
          <Text mt={5}>
            Young students would have possibility to answer questionnaire about their vision of manufacturing industry.
            
            AI powered helper classifies answers and provides tailored materials related to industrial scene.
          </Text>
          <Text>
         
           It also preselects fitting industries and companies and chooses VR scene from prebuilt examples.
          </Text>
        </Box>

        <Button as={Link} href="/metaverse" fontSize="xl" color="white" bgGradient='linear(to-r, #cc2b5e, #753a88)'>See demo</Button>

      </Container>
    </Box>
  )
}

export default ProjectSection
