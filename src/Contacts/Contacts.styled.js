import styled, { css } from 'styled-components'

export const ContactsHeader = styled.h3`
  margin: 20px 0;
`

export const Form = styled.form`
  select {
    margin-bottom: 10px;
  }

  margin-bottom: 20px;
`

export const MakeOrder = styled.button`
  background-color: #d30d0d;
  color: white;
  width: 130px;
  border-radius: 10px;
  border: none;
  opacity: 1;

  ${props => props.disabled === true && css`
    opacity: .7;
  `}

  :hover {
    opacity: .7;
  }
`