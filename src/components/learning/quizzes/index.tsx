'use client'
import { Grid, GridItem, Text, Box } from '@chakra-ui/react'

type Props = {}


const data = [
  {
    title: 'History of Tampere',
    description: 'Check how well you know industrial history of the city'
  },
  {
    title: 'Industrial megatrends',
    description: 'Megatrends that will shape the future of manufacturing jobs'
  },
  {
    title: 'Industrial megatrends',
    description: 'Megatrends that will shape the future of manufacturing jobs'
  },
]

const Quizzes = (props: Props) => {
  return (
    <div>
      <Text fontSize="2xl">Check your knowledge</Text>
      <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gap={5}>
        {data.map(item => (
          <GridItem key={item.title}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </GridItem>
        ))}
      </Grid>

    </div>
  )
}

export default Quizzes
