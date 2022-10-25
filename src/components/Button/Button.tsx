import * as React from 'react'
import styled from 'styled-components'

export default styled.button`
  background-color: white;
  color: #000000;
  outline: 0;
  font-size: 20px;
  padding: 5px 20px;
  margin: 0 auto;
  border-radius: 100px;
  border: 2px solid black;
  cursor: pointer;
  box-shadow: 0 2px 2px lightgray;
  
  &:hover {
    background-color: #000000;
    color: #FFFFFF
  }

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`