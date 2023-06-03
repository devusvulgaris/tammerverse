'use client'
import React from 'react'
import { Grid, Heading, Text, Flex, Box, Container, GridItem, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faVrCardboard, faClipboardQuestion, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const QuizzesSection = (props: Props) => {
  return (
    <Box width='100%' bgColor="blackAlpha.900" color="white" py={[4, 5]}>
      <Container textAlign="center" maxW="container.xl">
        <Heading
          bgGradient='linear(to-r, #cc2b5e, #753a88)'
          bgClip="text"
          fontWeight="bold"
          fontSize='5xl'
          mb={[2, 3]}
        >
          Rewarded Learning
        </Heading>
        <Box mb={[4, 5]}>
          <FontAwesomeIcon size='2x' icon={faTrophy} />
          <Text mt={[4, 5]}>
           Learn about Tampere&apos;s learnng and working opportunity in Industrial field.
           Answer quizzes and earn NFT awards.
          </Text>
          <Text>
            Earned NFTs are powered by Solana blockchain and would be available in user&apos;s wallets.
          </Text>
        </Box>

        <Button as={Link} href="/learn" color="white" bgGradient='linear(to-r, #cc2b5e, #753a88)'>Learn more</Button>

      </Container>
    </Box>
  )
}

export default QuizzesSection
