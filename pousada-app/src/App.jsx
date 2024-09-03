import './App.css';
import Cadastro from './pages/Login/cadastro';
import Login from './pages/Login/login';
import Home from './pages/Home-Page/home';
import Header from './components/Header';
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

      </Routes>
    </Router>
    </>
  );
}

export default App;







