import React from 'react'
import { useSelector } from 'react-redux'

import { Row, Col } from 'react-bootstrap'
import { EmptyCart, MinPay } from './Cart.styled'
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable'
import SauceList from '../SauceList/SauceList'
import Contacts from '../Contacts/Contacts'

const Cart = ({ isMadeOrder }) => {
  const orderTotal = useSelector(state => state.orderTotal)
  return (
    <Row>
      {orderTotal === 0 ?
        <Col xs={12}>
          <EmptyCart src='images/cart_empty.png' />
        </Col>
        :
        <>
          <Col xs={12}>
            <SauceList />
          </Col>
          <Col xs={12}>
            <ShoppingCartTable />
          </Col>
          <Col xs={12}>
            {orderTotal >= 400 ? <Contacts isMadeOrder={isMadeOrder} /> : <MinPay>Минимальная сумма заказа - 400 рублей!</MinPay>}

          </Col>
        </>
      }
    </Row>
  )
}

export default Cart;