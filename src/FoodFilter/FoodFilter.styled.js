import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`

  :hover {
    text-decoration: none;
  }

  p {
    border-radius: 10px;
    background-color: #d30d0d;
    color: white;
    min-width: 80px;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  p:hover {
    text-decoration: none;
    color: white;
    opacity: .8;
  }

`

export const LinksContainer = styled.div`
  text-align: center;
  margin: 40px auto;
  width: 60%;
`