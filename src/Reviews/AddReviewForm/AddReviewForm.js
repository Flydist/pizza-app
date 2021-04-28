import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Block, StyledTextarea, StarsBlock, SendButton, AbsoluteContainer } from './AddReviewForm.styled'
import { addReview } from '../../actions/actions'
import database from '../../firebase/firebase'

const AddReviewForm = () => {

  const dispatch = useDispatch();

  const [peopleName, setPeopleName] = useState('')
  const [text, setText] = useState('')
  const [starsCount, setStarsCount] = useState(5)

  const onNameChange = ({ target: { value } }) => {
    setPeopleName(value)
  }
  const onTextChange = ({ target: { value } }) => {
    setText(value)
  }

  const handleStarsChange = ({ target: { value } }) => {
    setStarsCount(value)
  }

  const onSendClick = () => {
    if (peopleName && text !== '') {
      dispatch(addReview({ peopleName, text, starsCount }))
      database.ref('reviews').push({
        peopleName,
        text,
        starsCount
      })
      setPeopleName('')
      setText('')
      setStarsCount(5)
    }
  }

  return (
    <Block>
      <StyledTextarea placeholder='Ваше имя' onChange={onNameChange} value={peopleName} />
      <StyledTextarea placeholder='Ваш отзыв' onChange={onTextChange} value={text} />
      <AbsoluteContainer>
        <StarsBlock>
          <span>Оценка:</span>
          <select className="form-control" onChange={handleStarsChange} value={starsCount}>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            <option>0</option>
          </select>
        </StarsBlock>
        <SendButton onClick={onSendClick}>Отправить</SendButton>
      </AbsoluteContainer>
    </Block>
  )
}

export default AddReviewForm