import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`
