import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setError('');

    // Envio dos dados para o backend
    try {
      const response = await fetch('http://localhost:3333/Usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify({
          email,
          senha: password,
          confirmar_senha: confirmPassword,
        }),
      });

      // Verifica se a resposta foi bem-sucedida
      if (response.ok) {
        const data = await response.json(); // Opcional: processar a resposta JSON
        setSubmitted(true);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const errorData = await response.json(); // Captura a mensagem de erro do backend
        setError(errorData.message || 'Erro ao cadastrar. Tente novamente.');
      }
    } catch (err) {
      console.error(err);
      setError('Erro ao cadastrar. Tente novamente.');
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
          <h1>Cadastro</h1>
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
            <label className='Login-label'>Confirmar Senha:</label>
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
            <h5 className="ja">Já Possui Conta? <Link to="/login" className='entrar'>Entrar</Link></h5>
          </form>
          {submitted && !error && <div className='success-message'>Cadastro realizado com sucesso!</div>}
          {error && <div className='error-message'>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;