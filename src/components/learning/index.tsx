'use client'
import { Container, Grid, GridItem } from '@chakra-ui/react'

import Materials from './materials'
import Quizzes from './quizzes'

type Props = {}

const LearningPage = (props: Props) => {
  return (
    <Container maxW="container.xl">
      <Grid py={[3, 4]}>
        <GridItem>
          <Materials />
        </GridItem>
        <GridItem>
          <Quizzes />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default LearningPage
