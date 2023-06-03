'use client'
import { Box, Flex, Container, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box bgColor="blackAlpha.900" color="white" py={[4, 5]} as="footer">
      <Container>
        <Text textAlign='center' mb={3}>{new Date().getFullYear()} | Tammerverse</Text>
        <Flex justifyContent='center' gap={3}>
          <a href=''>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
