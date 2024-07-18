import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Estiloglobal, Corpo, Tamanho } from './global'

function App() {
  return (
    <>
      <Estiloglobal />
      <Corpo>
        <Header />
        <Hero />
        <Tamanho>
          <ListaVagas />
        </Tamanho>
      </Corpo>
    </>
  )
}

export default App
