import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, PriceTag, AddButton, TextBlock } from './ItemCard.styled'
import { Image, Overlay, Tooltip } from 'react-bootstrap'
import { addItem } from '../actions/actions'

const ItemCard = ({ id, name, description, price }) => {

  const dispatch = useDispatch()
  const target = useRef(null);
  const [show, setShow] = useState(false);

  return (
    <Card key={id}>
      <Image src={`images/${id}.jpg`} alt={name} rounded width={220} height={220} />
      <TextBlock>
        <h5>{name}</h5>
        <p>{description}</p>
        <PriceTag>{price} ₽</PriceTag>
        <AddButton ref={target} onClick={() => {
          dispatch(addItem(id))
          setShow(true)
          setTimeout(() => setShow(false), 3000)
        }}>Добавить</AddButton>
      </TextBlock>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Добавлено!
          </Tooltip>
        )}
      </Overlay>
    </Card>
  )
}

export default ItemCard;