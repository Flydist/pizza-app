import styled from 'styled-components'

export const Card = styled.div`
  margin: 10px auto;
  max-width: 270px;
  border-radius: 10px;
  border: 1px solid #eaeaea;

  p {
    font-size: 12px;
  }

  img {
    display: block;
    margin: 5px auto 10px auto;
  }
`

export const PriceTag = styled.h5`
  color: red;
  font-weight: bold;
`

export const AddButton = styled.button`
  background-color: #d30d0d;
  color: white;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0 15px 0;
  border: none;
  padding: 2px;
  opacity: 1;
  transition: opacity 0.3s ease;

  :hover {
    opacity: .8;
  }
  :focus {
    outline: none;
  }
`

export const TextBlock = styled.div`
  padding: 0 10px;
  min-height: 100px;

  p {
    height: 60px;
  }

  h5 {
    min-height: 42px;
    font-size: 18px;
  }
`