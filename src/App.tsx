import Projetos from './Containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar></Sidebar>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
