// Style your elements here

import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  cursor: pointer;
  border: 0px;
  height: 20px;
  width: 60px;
  border-radius: 4px;
  margin: 10px;
  background-color: ${props => (props.isActive ? '#ffffff' : '#ededed')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
