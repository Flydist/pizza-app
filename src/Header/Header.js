import React from 'react'

import pizzaLogo from '../assets/logos/logo.png'
import timerLogo from '../assets/logos/timer.svg'
import phoneLogo from '../assets/logos/phone.svg'
import cartLogo from '../assets/logos/cart.svg'
import { LogoContainer, StyledLink, StyledCol, StyledNavLink } from './Header.styled'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const orderTotal = useSelector(state => state.orderTotal)

  return (
    <Container className='header-container'>
      <Row>
        <StyledCol lg md={12} className='text-center'>
          <NavLink to='/'>
            <Image src={pizzaLogo} alt="logo" width={100} height={100} />
          </NavLink>
        </StyledCol>
        <Col lg md sm xs={12}>
          <StyledLink href='/'>
            <LogoContainer>
              <img src={timerLogo} alt="timer" width={32} height={32} />
              <div>
                <h5>60 минут</h5>
                <span>или пицца бесплатно!</span>
              </div>
            </LogoContainer >
          </StyledLink>
        </Col>
        <Col lg md sm xs={12}>
          <StyledLink href='tel:+79063782001'>
            <LogoContainer>
              <img src={phoneLogo} alt="phone" width={32} height={32} />
              <div>
                <h5>25-88-77</h5>
                <span>c 10:00 до 22:00</span>
              </div>
            </LogoContainer >
          </StyledLink>
        </Col>
        <Col lg md sm xs={12}>
          <StyledNavLink to='/cart'>
            <LogoContainer>
              <img src={cartLogo} alt="shopping-cart" width={32} height={32} />
              <div>
                <h5>Ваша корзина:</h5>
                <span>{orderTotal === 0 ? 'пусто' : `${orderTotal} ₽`}</span>
              </div>
            </LogoContainer >
          </StyledNavLink>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;