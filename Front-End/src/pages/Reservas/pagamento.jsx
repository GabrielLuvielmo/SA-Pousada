import React, { useState } from 'react';
import './pagamento.css'; 
import { Link } from 'react-router-dom';

const Pagamento = () => {
  const [cartaoNumero, setCartaoNumero] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCartaoNumero(formattedValue);
  };

  const handleDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{2})(\d{2})/, '$1/$2');
    setDataValidade(formattedValue);
  };

  const validateInputs = () => {
    if (!nomeTitular || !cartaoNumero || !dataValidade || !cvv) {
      setError('Todos os campos são obrigatórios.');
      return false;
    }
    if (!/^\d{16}$/.test(cartaoNumero.replace(/\s+/g, ''))) {
      setError('O número do cartão deve ter 16 dígitos.');
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(dataValidade)) {
      setError('A data de validade deve estar no formato MM/AA.');
      return false;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      setError('O CVV deve ter 3 ou 4 dígitos.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      alert('Pagamento realizado com sucesso!');
      setCartaoNumero('');
      setNomeTitular('');
      setDataValidade('');
      setCvv('');
    }
  };

  return (
    <div className="pagamento-container">
      <h2 className="pagamento-titulo"><strong>Página de Pagamento</strong></h2>
      {error && <div className="pagamento-erro">{error}</div>}
      <form onSubmit={handleSubmit} className="pagamento-formulario">
        <div className="pagamento-campo">
          <label htmlFor="nome-titular">Nome do Titular</label>
          <input 
            type="text" 
            id="nome-titular" 
            value={nomeTitular} 
            onChange={(e) => setNomeTitular(e.target.value)} 
            required 
          />
        </div>
        <div className="pagamento-campo">
          <label htmlFor="cartao-numero">Número do Cartão</label>
          <input 
            type="text" 
            id="cartao-numero" 
            value={cartaoNumero} 
            onChange={handleCardNumberChange} 
            required 
            maxLength="19"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div className="pagamento-campo">
          <label htmlFor="data-validade">Data de Validade (MM/AA)</label>
          <input 
            type="text" 
            id="data-validade" 
            value={dataValidade} 
            onChange={handleDateChange} 
            required 
            maxLength="5"
            placeholder="MM/AA"
          />
        </div>
        <div className="pagamento-campo">
          <label htmlFor="cvv">CVV</label>
          <input 
            type="text" 
            id="cvv" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))} 
            required 
            maxLength="3"
            placeholder="000"
          />
        </div>
        <button type="submit" className="pagamento-botao">
          Pagar
        </button>
      </form>
      <Link to="/inicio" className="pagamento-voltar">
        Voltar
      </Link>
    </div>
  );
};

export default Pagamento;
