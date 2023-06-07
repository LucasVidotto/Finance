import Carrossel from './Carrocel'
import { Destaque } from './Pages/Destaque/Destaque';
import { Footer } from './Components/Footer/Footer';
import './global.css';
import { NovoProjeto } from './Pages/Comece/NovoProjeto';

function App() {


  return (
    <>
      <Carrossel />
      {/* <Destaque color={'#ffffff'}/>
      <Destaque color={'#ecf0f0'}/> */}
      <NovoProjeto />
      {/* <Footer /> */}
    </>
  )
}

export default App
