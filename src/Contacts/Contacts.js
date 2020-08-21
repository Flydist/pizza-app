import React, { useState, useEffect, useCallback } from 'react'

import { ContactsHeader, Form, MakeOrder } from './Contacts.styled'
import { Col, Row } from 'react-bootstrap'

const Contacts = () => {

  const [buttonDisabled, setDisabled] = useState(true)
  const [validPeople, setValidPeople] = useState(false)
  const [validAddress, setValidAddress] = useState(false)
  const [validPhone, setValidPhone] = useState(false)
  const [isHidden, setHidden] = useState(false)

  const payType = React.createRef();
  const checkboxRef = React.createRef();

  const handlePeopleChange = (e) => {
    const validPeople = e.target.value !== '' ? true : false
    setValidPeople(validPeople)
  }

  const handleAddressChange = (e) => {
    const validAddress = e.target.value !== '' ? true : false
    setValidAddress(validAddress)
  }

  const handlePhoneChange = (e) => {
    // eslint-disable-next-line no-useless-escape
    const validatePhone = (/^\d[\d\(\)\ -]{9,9}\d$/).test(e.target.value)

    if (validatePhone) {
      setValidPhone(true)
    }
    else {
      setValidPhone(false)
    }

  }

  const validate = useCallback(() => {
    if (validPeople && validPhone && (validAddress || isHidden) && checkboxRef.current.checked === true) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }, [checkboxRef, isHidden, validAddress, validPeople, validPhone])

  useEffect(() => {
    validate()
  }, [validPeople, validAddress, validPhone, validate]);


  const handleDeliveryChange = (e) => {
    if (e.target.value === 'Самовывоз') {
      return (
        payType.current.value = 'Наличными',
        setHidden(true)
      )
    }
    else {
      setHidden(false)
    }
  }

  return (
    <React.Fragment>
      <ContactsHeader>Доставка и оплата:</ContactsHeader>
      <Form>
        <Row>
          <Col sm={6} xs={12}>
            <select className="form-control" onChange={handleDeliveryChange}>
              <option>Курьером</option>
              <option>Самовывоз</option>
            </select>
          </Col>
          <Col sm={6} xs={12}>
            <select className="form-control" ref={payType}>
              <option>Наличными</option>
              <option hidden={isHidden}>Картой курьеру</option>
              <option>Картой онлайн</option>
            </select>
          </Col>
          <Col sm={6} xs={12}>
            <div className="form-group">
              <label>Имя:</label>
              <input type="text" onChange={handlePeopleChange} className="form-control" id="customerName" name='people' />
              <small className="form-text text-muted">Обязательно для заполнения</small>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <div className="form-group">
              <label>Телефон (без +):</label>
              <input type="text" onChange={handlePhoneChange} className="form-control" id="customerPhoneNumber" name='phone' defaultValue='7' />
              <small className="form-text text-muted">Обязательно для заполнения</small>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <div className="form-group" hidden={isHidden}>
              <label>Адрес доставки:</label>
              <input type="text" onChange={handleAddressChange} className="form-control" id="customerAddress" name='address' />
              <small className="form-text text-muted" >Обязательно для заполнения</small>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <div className="form-group">
              <label>Комментарий:</label>
              <input type="text" className="form-control" id="comment" />
            </div>
          </Col>
          <Col xs={6}>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="checkButton" onClick={validate} ref={checkboxRef} defaultChecked={true} />
              <label className="form-check-label" htmlFor="checkButton">Я согласен с условиями использования</label>
            </div>
          </Col>
          <Col xs={6}>
            <MakeOrder disabled={buttonDisabled}>Заказать</MakeOrder>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  )
}

export default Contacts