import './App.css';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        {/*Caminho para a Pagina de Cadastro*/}
        <Route path="/cadastro" element={<Cadastro />} />    

        {/*Caminho para a Pagina de Login*/}
        <Route path="/login" element={<Login />} />  
      </Routes>
    </Router>
    </>
  );
}

export default App;







