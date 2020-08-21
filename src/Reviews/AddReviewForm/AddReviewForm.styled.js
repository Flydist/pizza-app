import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const Block = styled.div`
  margin: 10px auto 20px auto;
  width: 50%;
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  /* position: relative; */

  select {
    display: inline-block;
    margin: 0 5px;
    width: auto;
  }

  @media screen and (max-width: 991px) {
    width: 75%
  }
  @media screen and (max-width: 576px) {
    width: 90%
  }

`

export const StyledTextarea = styled(TextareaAutosize)`
  padding: 10px;
  width: 100%;
  margin: 5px 0;
  border: none;
  outline: none;
  resize: none;
`

export const StarsBlock = styled.div`
  /* position: absolute;
  bottom: 5px;
  left: 10px; */
`

export const SendButton = styled.button`
  background-color: #d30d0d;
  color: white;
  width: 130px;
  border-radius: 10px;
  border: none;
  opacity: 1;
  /* position: absolute;
  bottom: 7px;
  right: 10px; */

  :hover {
    opacity: .7;
  }
`

export const AbsoluteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0 10px;
`