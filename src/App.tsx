import Carrossel from './Carrocel'
import { Destaque } from './Pages/Destaque/Destaque';
import { Footer } from './Components/Footer/Footer';
import './global.css';
import { NovoProjeto } from './Pages/Comece/NovoProjeto';
import { Recorrente } from './Pages/Plano/Recorrente';
import { Singup } from './Pages/Log-Reg/Singup';

function App() {


  return (
    <>
       <Carrossel /> 
       <Destaque color={'#ffffff'}/>
      <Destaque color={'#ecf0f0'}/> 
      {/* <NovoProjeto /> */}
      {/* <Recorrente /> */}
       <Footer /> 

      {/* <Singup /> */}
    </>
  )
}

export default App
