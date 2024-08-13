import React, { useState } from 'react';
import '../App.css';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Lógica de validação
    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
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
    <div className='CaixaCadastro'>
      <div>
        <h1>Cadastro</h1>
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
          <button type="submit" className="btn-6">
            Cadastrar
          </button>
          <h5>Já Possui Conta? <a className='entrar'href="./login.jsx">Entrar</a></h5>
          <div className='entrar-conta'>
          <img className='logo1' src='/images/google.png' alt='gugol'/>
          <img className='logo1' src='/images/Facebook.png' alt='cara-livro'/>
          </div>
        </form>
        {submitted && !error && <div className='success-message'>Cadastro realizado com sucesso!</div>}
        {error && <div className='error-message'>{error}</div>}
      </div>
    </div>
  );
};

export default Cadastro;
