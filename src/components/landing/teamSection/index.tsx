'use client'
import React from 'react'
import { Grid, Heading, Text, Flex, Box, Container, GridItem, Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

type Props = {}

const teamData = [
  {
    id: '1',
    name: 'Oleg',
    description: 'Developer, Web3 enthusiast',
    imageSrc: '/myAva.jpg',
    contacts: [
      {
        id: 'linkedin',
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/olegelizarov'
      },
      {
        id: 'email',
        icon: faEnvelope,
        href: 'mailo:elizaroff.oleg@gmail.com'
      }
    ]
  },
  {
    id: '2',
    name: 'Devontay',
    description: 'Entrepreneur, Startups, Web3',
    imageSrc: '/devontay-cross.jpg',
    contacts: [
      {
        id: 'linkedin',
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/devontay-cross'
      },
      {
        id: 'email',
        icon: faEnvelope,
        href: 'mailo:devontaycross.oleg@gmail.com'
      }
    ]
  }
]

const TeamSection = (props: Props) => {
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
          Team
        </Heading>
        <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gap={5} >
          {teamData.map(({ id, name, description, contacts, imageSrc }) => (
            <GridItem key={id}>
              <Box borderRadius='50%' maxW={300} overflow='hidden' position='relative' width="100%" minHeight='200px' aspectRatio={1} filter="grayscale(100%)" margin='0 auto 2rem'>
                <Image src={imageSrc} alt={name} fill />
              </Box>
              <Text mb={4} fontSize="3xl">{name}</Text>
              <Text fontSize="xl" mb={2}>{description}</Text>
              <Flex gap={3} justifyContent="center">
                {contacts.map(({ id, href, icon }) => (
                  <Link key={id} href={href} target='_blank'>
                    <FontAwesomeIcon size='lg' icon={icon} />
                  </Link>
                ))}
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default TeamSection
