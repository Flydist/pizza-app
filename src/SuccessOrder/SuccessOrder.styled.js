import styled from 'styled-components'
import { Image } from 'react-bootstrap'

export const SuccessImage = styled(Image)`
  display: block;
  margin: 20px auto;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`

export const SuccessText = styled.h5`
  text-align: center;
`

export const GoMainPageButton = styled.button`
  background-color: #d30d0d;
  color: white;
  width: 100%;
  border-radius: 10px;
  margin: 20px auto;
  border: none;
  padding: 2px;
  width: 40%;
  display: block;

  :hover {
    opacity: .8;
  }
  :focus {
    outline: none;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
  }
` 