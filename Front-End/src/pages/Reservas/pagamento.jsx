import React, { useState } from 'react';
import './pagamento.css'; 
import { Link } from 'react-router-dom';

const Pagamento = () => {
  const [cartaoNumero, setCartaoNumero] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de pagamento pode ser inserida aqui
    alert('Pagamento realizado com sucesso!');
  };

  return (
    <div className="container-pagamento">
      <h2><strong>Página de Pagamento</strong></h2>
      <form onSubmit={handleSubmit} className="form-pagamento">
        <div className="campo">
          <label htmlFor="nome-titular">Nome do Titular</label>
          <input 
            type="text" 
            id="nome-titular" 
            value={nomeTitular} 
            onChange={(e) => setNomeTitular(e.target.value)} 
            required 
          />
        </div>
        <div className="campo">
          <label htmlFor="cartao-numero">Número do Cartão</label>
          <input 
            type="text" 
            id="cartao-numero" 
            value={cartaoNumero} 
            onChange={(e) => setCartaoNumero(e.target.value)} 
            required 
          />
        </div>
        <div className="campo">
          <label htmlFor="data-validade">Data de Validade (MM/AA)</label>
          <input 
            type="text" 
            id="data-validade" 
            value={dataValidade} 
            onChange={(e) => setDataValidade(e.target.value)} 
            required 
          />
        </div>
        <div className="campo">
          <label htmlFor="cvv">CVV</label>
          <input 
            type="text" 
            id="cvv" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="botao-pagar">
          Pagar
        </button>
      </form>
      <Link to="/chalefamilia" className="botao-voltar">
        Voltar para o Chalé Família
      </Link>
    </div>
  );
};

export default Pagamento;
