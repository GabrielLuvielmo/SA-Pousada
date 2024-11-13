import React, { useState } from 'react';
import './Principal.css';
import Carrossel from '../../components/Carrossel.jsx';
import { Link } from 'react-router-dom';

function Principal() {
  // Lista de acomodações com dados integrados
  const accommodations = [
    { id: 1, name: 'Domo', price: 590, type: 'moderno', img: '../../../images/domo.png', link: '/domo', description: 'Uma experiência única em formato de domo...' },
    { id: 2, name: 'Charrua', price: 490, type: 'rústico', img: '../../../images/charuabus.jpeg', link: '/charua', description: 'Transformada a partir de um antigo ônibus...' },
    { id: 3, name: 'Suíte com Cozinha', price: 390, type: 'prático', img: '../../../images/suitecozinha.jpg', link: '/suitecomcozinha', description: 'Com todo o charme de uma suíte exclusiva...' },
    { id: 4, name: 'Chalé família', price: 590, type: 'familiar', img: '../../../images/chalefamilia.jpg', link: '/chalefamilia', description: 'Espaçoso e acolhedor, o Chalé Família...' },
    { id: 5, name: 'Cabana', price: 490, type: 'romântico', img: '../../../images/cabana.jpg', link: '/cabana', description: 'Romântica e charmosa, a Cabana...' },
  ];

  // Estados para filtros
  const [maxPrice, setMaxPrice] = useState('');
  const [type, setType] = useState('');

  // Aplicação dos filtros
  const filteredAccommodations = accommodations.filter(
    (accommodation) =>
      (maxPrice === '' || accommodation.price <= maxPrice) &&
      (type === '' || accommodation.type === type)
  );

  return (
    <div className='main-inicio'>
      {/* Carrossel de imagens */}
      <div>
        <Carrossel />
      </div>

      {/* Filtros de Acomodações */}
      <div className="filter-section">
        <label>
          Preço máximo:
          <input 
            type="number" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
            placeholder="Digite o preço máximo" 
          />
        </label>
        <label>
          Tipo de acomodação:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Todos</option>
            <option value="moderno">Moderno</option>
            <option value="rústico">Rústico</option>
            <option value="prático">Prático</option>
            <option value="familiar">Familiar</option>
            <option value="romântico">Romântico</option>
          </select>
        </label>
      </div>

      {/* Exibição das Acomodações Filtradas */}
      {filteredAccommodations.map((accommodation) => (
        <div className="container-principal" key={accommodation.id}>
          <img className='img-acomodacao' src={accommodation.img} alt={`Imagem de ${accommodation.name}`} />
          <div className='texto-aco'>
            <h2><strong>{accommodation.name}</strong></h2>
            <p>{accommodation.description}</p>
          </div>
          <div className='valordiv'>
            <p className='Pagamento'>A partir de </p>
            <p className='Valor-geral'>R${accommodation.price}</p>
            <br />
            <Link to={accommodation.link}>
              <button className='Valor'>Reservar</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Principal;
