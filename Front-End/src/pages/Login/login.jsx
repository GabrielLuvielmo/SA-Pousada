import React, { useState } from 'react';
import './login.css';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Login from './login';
import { Link } from 'react-router-dom';


const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
  };

  const handleFocus = (e) => {
    e.target.classList.add('focused');
  };

  const handleBlur = (e) => {
    e.target.classList.remove('focused');
  };
    
  return (
    <div className='fundo'>
      <br /><br />
      <div className='CaixaCadastro'>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label className='Login-label'>Email:</label>
            <div className='input-line'>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder=" "
              />
            </div>
            <br />
            <label className='Login-label'>Senha:</label>
            <div className='input-line'>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder=" "
              />
            </div>
            <br />
            <button type="submit" className="btn-6">
              Entrar
            </button>
            <h5 className="ja">Não Possui Conta? <Link to="/cadastro" className='entrar'>Cadastrar-se</Link></h5>
          
          
          </form>
          {submitted && !error && <div className='success-message'>Cadastro realizado com sucesso!</div>}
          {error && <div className='error-message'>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
