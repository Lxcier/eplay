import { title } from 'process'
import Product from '../Product'
import { Container as Master, List } from './styles'
import { Container as Inner } from '../../styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <Master>
      <Inner>
        <h2>{title}</h2>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </Inner>
    </Master>
  )
}

export default ProductsList
