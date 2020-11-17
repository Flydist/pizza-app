import React from 'react'
import loader from '../assets/logos/loader.svg'
import { LoaderImage } from './Loader.styled'

const Loader = () => {
  return (
    <LoaderImage src={loader} width={50} />
  )
}

export default Loader