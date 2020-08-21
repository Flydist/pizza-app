import React from 'react';
import './App.css'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import FoodFilter from './FoodFilter/FoodFilter';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <FoodFilter />
        <Menu />
      </Container>
    </React.Fragment>
  )

}

export default App;
