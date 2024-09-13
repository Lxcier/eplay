import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'Windows',
    infos: ['10%', 'R$ 150'],
    image: resident
  },
  {
    id: 2,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'Windows',
    infos: ['10%', 'R$ 150'],
    image: diablo
  },
  {
    id: 3,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'Windows',
    infos: ['10%', 'R$ 150'],
    image: zelda
  },
  {
    id: 4,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'PS5',
    infos: ['5%', 'R$ 290'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'Windows',
    infos: ['10%', 'R$ 150'],
    image: resident
  },
  {
    id: 6,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'Windows',
    infos: ['10%', 'R$ 150'],
    image: diablo
  },
  {
    id: 7,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'Windows',
    infos: ['10%', 'R$ 150'],
    image: zelda
  },
  {
    id: 7,
    title: 'Resident Evil 4 Remake',
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.',
    system: 'Windows',
    infos: ['10%', 'R$ 150'],
    image: resident
  }
]

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}

export default Home
