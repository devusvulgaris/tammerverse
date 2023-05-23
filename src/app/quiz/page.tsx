'use client'
const quizData = [
  {
    question: 'What is population of Tampere',
    variants: ['200 thousands', '100 thousand', '600 thousands']
  }
]

type Props = {}

const QuizPage = (props: Props) => {
  return (
    <div>
      Here be quizzes
      <div>
        <p>Quiz:</p>
        <div>
          {quizData.map((item, i) => (
            <div key={i}>
              <p>{item.question}</p>

              <div>{
                item.variants.map(variant => <p key={variant}>{variant}</p>)
              }</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuizPage
