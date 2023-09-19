import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin: 5px;
  border-width: 0px;
  color: ${props => (!props.active ? '#f1f5f9' : '#faff00')};
`

export const TextArea = styled.textarea`
  background-color: transparent;
  height: 50vh;
  cursor: pointer;
  outline: none;
  border-color: #ffffff;
  border-style: solid;
  color: #ffffff;
  font-size: 24px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`
