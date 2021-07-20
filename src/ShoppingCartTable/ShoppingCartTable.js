import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { ButtonsBlock, YourCart, TotalPriceBlock, Table, PromocodeContainer, DiscountSetBlock } from './ShoppingCartTable.styled'

import { addItem, minusItem, deleteItem, setDiscount10, } from '../actions/actions'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf"

const ShoppingCartTable = () => {

  const shoppingCart = useSelector(state => state.shoppingCart)
  const orderTotal = useSelector(state => state.orderTotal)
  const discount = useSelector(state => state.discount)
  const dispatch = useDispatch()

  const promoRef = React.createRef()

  const setDiscount = (ref) => {
    if (ref.current.value === "DISCOUNT10" && !discount) {
      dispatch(setDiscount10())
    }
  }

  const createPdf = () => {
    const canvas = document.getElementById('divToPrint');
    html2canvas(canvas, {
      scale: 0.75,
      width: window.screen.availWidth,
      height: window.screen.availHeight,
      windowWidth: 1100,
      windowHeight: canvas.offsetHeight,
      x: 0,
      y: window.pageYOffset
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");
      })
      ;
  }

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
    <div id='divToPrint'>
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

      <PromocodeContainer>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Промокод"
            aria-label="Промокод"
            ref={promoRef}
          />
          <InputGroup.Append>
            <Button variant="outline-danger" onClick={() => setDiscount(promoRef)}>Применить</Button>
            <Button variant="outline-danger" onClick={() => dispatch({ type: 'RESET_DISCOUNT' })}>RESET</Button>
          </InputGroup.Append>
        </InputGroup>
        {discount !== 0 && <DiscountSetBlock>
          Промокод применен
        </DiscountSetBlock>}
      </PromocodeContainer>
      <Button variant="outline-danger" onClick={createPdf}>Выгрузить корзину в документ</Button>


    </div>
  )
}

export default ShoppingCartTable