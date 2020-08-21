import styled from 'styled-components'

export const Block = styled.div`
  min-height: 100px;
  width: 50%;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  position: relative;
  color: white;
  background-color: #d30d0d;
  opacity: .8;

  @media screen and (max-width: 991px) {
    width: 75%
  }
  @media screen and (max-width: 576px) {
    width: 90%
  }
`

export const PeopleName = styled.h5`
  display: block;
  border-bottom: 1px solid #eaeaea;
  padding: 10px 5px;
  margin: 0 10px;
  font-size: 17px;
`

export const TextBlock = styled.p`
  padding: 10px 5px;
  margin: 0 10px 30px 10px;
  min-height: 100px;

`

export const Stars = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
`