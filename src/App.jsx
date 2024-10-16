import './App.css';
import Cadastro from './pages/Login/cadastro';
import Login from './pages/Login/login';
import Home from './pages/Home-Page/home';
import Feedback from './pages/Feedback/Feedback.jsx';
import Contato from './pages/Contato/Contato.jsx';
import Header from './components/Header';
import Principal from './pages/Principal/Principal.jsx'
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

        {/*Caminho Para a Pagina de Feedback - Atualmente não Implementada no Site*/}
        <Route path="/feedback" element={<Feedback/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;







