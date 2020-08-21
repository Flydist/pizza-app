import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  text-decoration: none;

  h5 {
    margin: 0;
    padding: 0;
  }

  img {
    margin-right: 15px;
  }

  @media (max-width: 576px) {
    padding-left: 20px;
    margin-bottom: 10px;
  }
`

export const StyledLink = styled.a`
  color: inherit;

  :hover {
    color: red !important;
    cursor: pointer;
    text-decoration: none;
  }
`
export const StyledNavLink = styled(NavLink)`
  color: inherit;

  :hover {
    text-decoration: none;
    color: red;
  }

`

export const StyledCol = styled(Col)`

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`
