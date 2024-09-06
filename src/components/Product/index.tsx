import game1 from '../../assets/images/resident.png'
import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src={game1} alt="Jogo" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag size="small">Categoria</Tag>
    <Tag size="small">Windows</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam
      explicabo laudantium omnis vero amet quisquam, fugiat aliquid ducimus
      minima dolores odio molestias molestiae nam. Minima eum quo placeat
      deleniti.
    </Descricao>
  </Card>
)

export default Product
