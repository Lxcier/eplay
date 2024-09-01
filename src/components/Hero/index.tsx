import React from 'react'
import { Imagem, Precos, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import { Container } from '../../styles'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <Tag size="big">Destaque do dia</Tag>
      <Titulo>Marvel&apos;s Spider-man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Precos>
      <Button title="Clique aqui e aproveite!" type="link" to="/produto">
        Aproveitar
      </Button>
    </Container>
  </Imagem>
)

export default Hero
