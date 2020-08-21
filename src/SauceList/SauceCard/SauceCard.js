import React from 'react'
import { useDispatch } from 'react-redux'

import { Card, PriceTag, AddButton } from './SauceCard.styled'
import { Image } from 'react-bootstrap'
import { addItem } from '../../actions/actions'

const SauceCard = ({ name, id }) => {

  const dispatch = useDispatch()
  return (
    <Card>
      <Image src={`images/${id}.png`} />
      <p>Соус Heinz {name}</p>
      <PriceTag>15 ₽</PriceTag>
      <AddButton onClick={() => { dispatch(addItem(id)) }}>Добавить</AddButton>
    </Card>
  )
}

export default SauceCard