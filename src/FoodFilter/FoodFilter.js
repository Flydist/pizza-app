import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { StyledNavLink, LinksContainer } from './FoodFilter.styled'

const FoodFilter = () => {
  return (
    <Row>
      <Col xs={12}>
        <LinksContainer>
          <Row>
            <Col xs={6} sm={6} md={3}>
              <StyledNavLink to='/'>
                <p>Пицца</p>
              </StyledNavLink>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <StyledNavLink to='drinks'>
                <p>Напитки</p>
              </StyledNavLink>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <StyledNavLink to='desserts'>
                <p>Десерты</p>
              </StyledNavLink>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <StyledNavLink to='reviews'>
                <p>Отзывы</p>
              </StyledNavLink>
            </Col>
          </Row>
        </LinksContainer>
      </Col>
    </Row>
  )
}

export default FoodFilter