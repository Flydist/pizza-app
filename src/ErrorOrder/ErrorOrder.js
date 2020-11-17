import React from 'react'
import { useHistory } from 'react-router-dom'
import { ErrorImage, ErrorText, GoMainPageButton } from './ErrorOrder.styled'

const ErrorOrder = () => {

  const history = useHistory()

  return (
    <React.Fragment>
      <ErrorImage src='images/errorcross.png' />
      <ErrorText>Что-то пошло не так... Попробуйте сделать заказ по телефону!</ErrorText>
      <GoMainPageButton onClick={() => history.push('/')}>Вернуться на главную</GoMainPageButton>
    </React.Fragment>
  )
}

export default ErrorOrder