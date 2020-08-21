import React from 'react'
import { Block, PeopleName, TextBlock, Stars } from './Review.styled'

const Review = ({ name, text, stars }) => {
  return (
    <Block>
      <PeopleName>
        {name}
      </PeopleName>
      <TextBlock>
        {text}
      </TextBlock>
      <Stars>
        Оценка: {stars} из 5
      </Stars>
    </Block>
  )
}

export default Review