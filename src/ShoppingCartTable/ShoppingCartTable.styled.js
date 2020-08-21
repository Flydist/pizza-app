import styled from 'styled-components'

export const ButtonsBlock = styled.div`
  @media screen and (max-width: 800px) {
    display: inline-block;
  }

  button {
    margin-left: 5px;
  }
`

export const YourCart = styled.h3`
  margin: 20px 0;
`

export const TotalPriceBlock = styled.div`
  text-align: right;
`

export const Table = styled.div`
  @media screen and (max-width: 800px) {
    thead {
      display: none;
    }
    tr {
      display: block;
      margin-bottom: 10px;
      border-bottom: 2px solid #eaeaea
    }
    td {
      display: block;
      text-align: right;
    }
    td:before {
    content: attr(aria-label);
    float: left;
    font-weight: bold;
  }

  }
`