import React, { useState } from 'react'
import './login.css';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Lógica de validação
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
    // Adicione a lógica de autenticação aqui
  };

  const handleFocus = (e) => {
    e.target.classList.add('focused');
  };

  const handleBlur = (e) => {
    e.target.classList.remove('focused');
  };

  return (
    <div className='CaixaCadastro'>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
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
          <label>Senha:</label>
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

          <h5>Não Possui uma Conta? <Link to="/cadastro" className='entrar'>Cadastre-se</Link></h5>
        
          <div className='container-logos'>
            <FaGoogle /> 
            <FaFacebook />
          </div>
          
        </form>
        {submitted && !error && <div className='success-message'>Login realizado com sucesso!</div>}
        {error && <div className='error-message'>{error}</div>}
      </div>
    </div>
  );
};

export default Login;
