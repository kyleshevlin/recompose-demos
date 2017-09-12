import React from 'react'
import { mapProps, withProps } from 'recompose'

const QuestionAndAnswer = ({ question, answer }) => (
  <div>
    <div>Question: {question}</div>
    <div>Answer: {answer}</div>
  </div>
)

const FortyTwo = mapProps(({ question, answer }) => ({ question, answer: 42 }))(QuestionAndAnswer)

const HowIsKyleDoing = withProps(({ question }) => ({
  question: 'How is Kyle doing?'
}))(QuestionAndAnswer)

const MapAndWithPropsExample = () => (
  <div>
    <QuestionAndAnswer question={'What is the meaning of life?'} answer={'To be happy.'} />
    <br />
    <FortyTwo
      question={'What is the meaning of life?'}
      answer={'It does not matter what answer you give!'}
    />
    <br />
    <HowIsKyleDoing
      question={'What is the meaning of life'}
      answer={'He is doing fine... hopefully :)'}
    />
  </div>
)

export default MapAndWithPropsExample
