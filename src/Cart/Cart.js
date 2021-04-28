import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Row, Col } from 'react-bootstrap'
import { EmptyCart, MinPay } from './Cart.styled'
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable'
import SauceList from '../SauceList/SauceList'
import Contacts from '../Contacts/Contacts'
import { resetDiscount } from '../actions/actions'

const Cart = ({ isMadeOrder }) => {
  const orderTotal = useSelector(state => state.orderTotal)
  const shoppingCart = useSelector(state => state.shoppingCart)
  const dispatch = useDispatch()

  useEffect(() => {
    if (shoppingCart.length === 0)
      dispatch(resetDiscount())
  }, [shoppingCart, dispatch])

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