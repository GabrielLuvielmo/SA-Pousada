import React, { useState } from 'react';
import '../App.css'

  const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      // Lógica de validação e envio aqui
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
          <h1>CADASTRAR</h1>
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
            <label>Confirmar Senha:</label>
            <div className='input-line'>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder=" "
              />
            </div>
            <br />
            <a href="#" class="btn-6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          
          </a>
          <br />
          <a href="#" class="btn-7">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          
          </a>
          </form>
          {submitted && <div className='success-message'>Cadastro realizado com sucesso!</div>}
          {error && <div className='error-message'>Erro no cadastro!</div>}
        </div>
      </div>
    );
  };
export default Login;