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
                <span>Пицца</span>
              </StyledNavLink>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <StyledNavLink to='drinks'>
                <span>Напитки</span>
              </StyledNavLink>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <StyledNavLink to='desserts'>
                <span>Десерты</span>
              </StyledNavLink>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <StyledNavLink to='reviews'>
                <span>Отзывы</span>
              </StyledNavLink>
            </Col>
          </Row>
        </LinksContainer>
      </Col>
    </Row>
  )
}

export default FoodFilter