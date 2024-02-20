import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './Containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoThemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoThemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoThemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema}></Sidebar>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
