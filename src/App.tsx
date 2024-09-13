import { BrowserRouter } from 'react-router-dom'

import { Container, GlobalStyle } from './styles'
import Header from './components/Header'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
