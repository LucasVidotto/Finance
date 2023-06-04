import Carrossel from './Carrocel'
import { Destaque } from './Pages/Destaque/Destaque';
import './global.css';

function App() {


  return (
    <>
      <Carrossel />
      <Destaque color={'#ffffff'}/>
      <Destaque color={'#ecf0f0'}/>
    </>
  )
}

export default App
