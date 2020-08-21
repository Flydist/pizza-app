import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ButtonsBlock, YourCart, TotalPriceBlock, Table } from './ShoppingCartTable.styled'

import { addItem, minusItem, deleteItem } from '../actions/actions'

const ShoppingCartTable = () => {

  const shoppingCart = useSelector(state => state.shoppingCart)
  const orderTotal = useSelector(state => state.orderTotal)
  const dispatch = useDispatch()

  const renderRow = (item, idx) => {
    const { id, name, count, price } = item;
    return (
      <tr key={id}>
        <td aria-label="№">{idx + 1}</td>
        <td aria-label="Товар">{name}</td>
        <td aria-label="Количество">{count}</td>
        <td aria-label="Цена">{price}</td>
        <td aria-label="Действия">
          <ButtonsBlock>
            <button
              onClick={() => dispatch(minusItem(id))}
              className="btn btn-outline-warning btn-sm float-left">
              <i className="fa fa-minus-circle" />
            </button>
            <button
              onClick={() => dispatch(addItem(id))}
              className="btn btn-outline-success btn-sm float-left">
              <i className="fa fa-plus-circle" />
            </button>
            <button
              onClick={() => dispatch(deleteItem(id))}
              className="btn btn-outline-danger btn-sm float-left">
              <i className="fa fa-trash-o" />
            </button>
          </ButtonsBlock>
        </td>
      </tr>
    )
  }

  return (
    <React.Fragment>
      <YourCart>Ваша Корзина: </YourCart>
      <Table>
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Товар</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Действия</th>
            </tr>
          </thead>

          <tbody>
            {
              shoppingCart.map(renderRow)
            }
          </tbody>
        </table>
      </Table>

      <TotalPriceBlock>
        <h4>Итого: {orderTotal} ₽</h4>
      </TotalPriceBlock>
    </React.Fragment>
  )
}

export default ShoppingCartTable