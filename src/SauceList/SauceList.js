import React from 'react'

import SauceCard from './SauceCard/SauceCard'
import { Container, SaucesHeader } from './SauceList.styled'

const SauceList = () => {
  return (
    <React.Fragment>
      <SaucesHeader>Соусы: </SaucesHeader>
      <Container>
        <SauceCard name={'сырный'} id={19} />
        <SauceCard name={'кисло-сладкий'} id={20} />
        <SauceCard name={'чесночный'} id={21} />
        <SauceCard name={'томатный'} id={22} />
      </Container>
    </React.Fragment>
  )
}

export default SauceList