import React, { useState } from 'react';
import '../App.css'



function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
  
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || password === "") {
        setError(true);
      } else {
        setSubmitted(true);
        setError(false);
      }
    };
  
    const successMessage = () => {
      return (
        <div>
          Usuário {name} Cadastrado com sucesso
        </div>
      );
    };
  
    const errorMessage = () => {
      return (
        <div>
          Preencha todos os espaços por favor
        </div>
      );
    };
  
    return (
    
      <div className='CaixaCadastro'>
        <div>
        <h1>Cadastrar</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input className='input-cadastro' type="email" value={email} onChange={handleEmail} />
          <br />
          <label>Senha:</label>
          <input className='input-cadastro' type="password" value={password} onChange={handlePassword} />
          <br />
          <label>Confirmar Senha:</label>
          <input className='input-cadastro' type="password" value={password} onChange={handlePassword} />
          <br />
          <button className='botao-cadastro' type="submit">Cadastrar</button>
        </form>
        {submitted && successMessage()}
        {error && errorMessage()}
        </div>
      </div>
    
    );
  }

export default Cadastro;
