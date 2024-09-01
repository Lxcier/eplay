import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${cores.branca};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 16px;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  transition: all 0.3s ease-in-out;
  :hover {
    text-decoration: underline;
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
`
