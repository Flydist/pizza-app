import React from 'react'
import { useHistory } from 'react-router-dom'
import { SuccessImage, SuccessText, GoMainPageButton } from './SuccessOrder.styled'

const SuccessOrder = () => {

  const history = useHistory()

  return (
    <React.Fragment>
      <SuccessImage src='images/checkmark.svg' />
      <SuccessText>Заказ отправлен на кухню! Ожидайте звонка с подтверждением вашего заказа</SuccessText>
      <GoMainPageButton onClick={() => history.push('/')}>Вернуться на главную</GoMainPageButton>
    </React.Fragment>
  )
}

export default SuccessOrder