import Product from '../Product'
import { Container as Master, List } from './styles'
import { Container as Inner } from '../../styles'

import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {
  return (
    <Master background={background}>
      <Inner>
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              title={game.title}
              description={game.description}
              category={game.category}
              system={game.system}
              infos={game.infos}
              image={game.image}
            />
          ))}
        </List>
      </Inner>
    </Master>
  )
}

export default ProductsList
