import React, { useState } from 'react'
import PizzaList from '../PizzaList/PizzaList'
import DrinksList from '../DrinksList/DrinksList'
import DessertsList from '../DessertsList/DessertsList'
import Reviews from '../Reviews/Reviews'
import Cart from '../Cart/Cart'

import { Switch, Redirect, Route } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import SuccessOrder from '../SuccessOrder/SuccessOrder'
import ErrorOrder from '../ErrorOrder/ErrorOrder'

const Menu = () => {

  const [madeOrder, isMadeOrder] = useState(false)

  return (
    <Switch>
      <Route path='/' exact component={PizzaList} />
      <Route path='/drinks' exact component={DrinksList} />
      <Route path='/desserts' exact component={DessertsList} />
      <Route path='/cart' render={() => <Cart isMadeOrder={isMadeOrder} />} />
      <Route path='/reviews' exact component={Reviews} />
      <PrivateRoute component={SuccessOrder} path="/success" isMadeOrder={madeOrder} exact />
      <PrivateRoute component={ErrorOrder} path="/err" isMadeOrder={madeOrder} exact />
      <Redirect to='/' />
    </Switch>
  )
}

export default Menu;