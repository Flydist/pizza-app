import React from 'react'
// import { useSelector } from 'react-redux'
// import { Row, Col } from 'react-bootstrap'
// import ItemCard from '../ItemCard/ItemCard'
import PizzaList from '../PizzaList/PizzaList'
import DrinksList from '../DrinksList/DrinksList'
import DessertsList from '../DessertsList/DessertsList'
import Reviews from '../Reviews/Reviews'
import Cart from '../Cart/Cart'

import { Switch, Redirect, Route } from 'react-router-dom'

const Menu = () => {
  return (
    <Switch>
      <Route path='/' exact component={PizzaList} />
      <Route path='/drinks' exact component={DrinksList} />
      <Route path='/desserts' exact component={DessertsList} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/reviews' exact component={Reviews} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Menu;