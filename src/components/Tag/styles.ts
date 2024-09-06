import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 8px')};
  border-radius: 8px;
  color: ${cores.branca};
  background-color: ${cores.verde};
  font-weight: bold;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
`
