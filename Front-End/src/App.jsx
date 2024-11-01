import './App.css';
import Cadastro from './pages/Login/cadastro';
import Login from './pages/Login/login';
import Home from './pages/Home-Page/home';
import Feedback from './pages/Feedback/Feedback.jsx';
import Contato from './pages/Contato/Contato.jsx';
import Header from './components/Header';
import Principal from './pages/Principal/Principal.jsx'
import Cabana from './pages/Reservas/cabana.jsx'
import ChaleFamilia from './pages/Reservas/chalefamilia.jsx'
import SuiteComCozinha from './pages/Reservas/suitecomcozinha.jsx'
import Charrua from './pages/Reservas/charua.jsx'
import Domo from './pages/Reservas/domo.jsx'
import Pagamento from './pages/Reservas/pagamento.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>

        {/*Caminho Para a Pagina de Cadastro*/}
        <Route path="/cadastro" element={<Cadastro />} />    

        {/*Caminho Para a Pagina de Login*/}
        <Route path="/login" element={<Login />} />  

        {/*Caminho Para a Home Page*/}
        <Route path="/" element={<Home/>}/>

        {/*Caminho Para a Home Page*/}
        <Route path="/inicio" element={<Principal/>}/>

        {/*Caminho Para a Pagina de Contato*/}
        <Route path="/contato" element={<Contato/>}/>

        {/*Caminho Para a Pagina de Feedback - Atualmente Implementada no Site*/}
        <Route path="/feedback" element={<Feedback/>}/>

        {/*Caminho Para a Pagina da cabana*/}
        <Route path="/cabana" element={<Cabana/>}/>

        {/*Caminho Para a Pagina do Chalé*/}
        <Route path="/chalefamilia" element={<ChaleFamilia/>}/>

        {/*Caminho Para a Pagina da Suite Com Cozinha*/}
        <Route path="/suitecomcozinha" element={<SuiteComCozinha/>}/>
        
        {/*Caminho Para a Pagina do Domo*/}
        <Route path="/domo" element={<Domo/>}/>

        {/*Caminho Para a Pagina da Charrua*/}
        <Route path="/charua" element={<Charrua/>}/>

          {/*Caminho Para a Pagina do Pagamento*/}
          <Route path="/pagamento" element={<Pagamento/>}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;







