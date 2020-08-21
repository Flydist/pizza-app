import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  border-radius: 10px;
  background-color: #d30d0d;
  color: white;

  :hover {
    text-decoration: none;
    color: white;
    opacity: .8;
  }

  span {
    padding: 10px;
  }

`

export const LinksContainer = styled.div`
  text-align: center;
  margin: 40px auto;
  width: 60%;
`