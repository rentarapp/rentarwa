import styled from '@emotion/styled'
import { THEME } from './Theme'

const { main, secondary, tertiary, success, alert, text, text_secondary } = THEME

export const Button = styled.a`
  color: ${text_secondary};
  display: block;
  background-color: ${tertiary};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  padding: 1rem 0;
`

export const Input = styled.input`
  color: ${text};
  padding: 0.6rem 0;
  display: block;
`
