import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Container, GlobalStyle } from './styles'
import Header from './components/Header'
import Hero from './components/Hero'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
