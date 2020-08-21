import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import ItemCard from '../ItemCard/ItemCard'

const DrinksList = () => {
  const menu = useSelector(state => state.menu)

  return (
    <Row>
      {menu.filter(item => item.category === 'drinks').map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            <Col lg={4} md={6} sm={6} xs={12}>
              <ItemCard id={item.id} name={item.name} description={item.description} price={item.price} />
            </Col>
          </React.Fragment>
        )
      })}
    </Row>
  )
}

export default DrinksList;