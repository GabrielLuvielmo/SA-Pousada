import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirecionar o usuário

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');

  
  // Envio dos dados para o backend
  try {
    const response = await fetch('http://localhost:3333/Usuario/login', {  // Altere para o endpoint de login
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        senha: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login bem-sucedido:', data);

      // Exibe mensagem de sucesso
      alert('Usuário logado com sucesso!');
      
      // Redireciona para a página principal
      navigate('/');
    } else {
      const errorData = await response.json();
      setError(errorData.message || 'Erro ao fazer login. Tente novamente.');
    }
  } catch (err) {
    console.error(err);
    setError('Erro ao fazer login. Tente novamente.');
  }
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
          {error && <div className='error-message'>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
