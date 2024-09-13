class Game {
  id: number
  title: string
  category: string
  description: string
  image: string
  system: string
  infos: string[]

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    image: string,
    system: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.system = system
    this.infos = infos
  }
}

export default Game
