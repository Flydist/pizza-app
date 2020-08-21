import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, PriceTag, AddButton, TextBlock } from './ItemCard.styled'
import { Image } from 'react-bootstrap'
import { addItem } from '../actions/actions'

const ItemCard = ({ id, name, description, price }) => {

  const dispatch = useDispatch()

  return (
    <Card key={id}>
      <Image src={`images/${id}.jpg`} alt={name} rounded width={220} height={220} />
      <TextBlock>
        <h5>{name}</h5>
        <p>{description}</p>
        <PriceTag>{price} ₽</PriceTag>
        <AddButton onClick={() => dispatch(addItem(id))}>Добавить</AddButton>
      </TextBlock>
    </Card>
  )
}

export default ItemCard;