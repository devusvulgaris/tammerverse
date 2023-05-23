const quizData = [
  {
    question: 'What is population of Tampere',
    variants: ['200 thousands', '100 thousand', '600 thousands']
  }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(quizData)
  } else {
    res.status(500).end()
  }
}
