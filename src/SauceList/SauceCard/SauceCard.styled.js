import styled from 'styled-components'

export const Card = styled.div`
  width: 130px;
  min-height: 150px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  display: block;
  margin-right: 10px;
  padding: 0 5px;

  img {
    width: 90px;
    height: 90px;
    display: block;
    margin: 5px auto 0 auto;
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

  :hover {
    opacity: .8;
  }
`