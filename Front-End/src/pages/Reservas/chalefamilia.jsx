import React from 'react';
import './Reservas.css'; 
import { Link } from 'react-router-dom';

const ChaleFamilia = () => {
  return (
    <div className="container-principal">
      <img 
        className='img-acomodacao-outro' 
        src="../../../images/chalefamilia.jpg" 
        alt="Domo" 
      />
      <div className='texto-aco-outro'>
        <h2><strong>Chalé Família</strong></h2>
        <p>
          Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
          Nos feriados e datas comemorativas, o valor da diária também é diferenciado.
        </p>
        <ul className="amenities-list">
          <li>2 Quartos</li>
          <li>Camas: 1 Casal e 1 de Solteiro</li>
          <li>Capacidade: 5 pessoas</li>
          <li>Banheiro privativo</li>
          <li>Ar-condicionado</li>
          <li>Wi-Fi gratuito</li>
          <li>Cozinha Incluída</li>
        </ul>
        <hr />
      </div>

      {/* Seção de Reserva */}
      <div className="reservar">
        <h3>Reservar o Chalé </h3>
        <p className="preco-diaria">Preço da diária: <strong>R$ 500,00</strong></p>
        <Link to="/pagamento" className="botao-reserva">
          Reservar Agora
        </Link>
      </div>
    </div>
  );
};

export default ChaleFamilia;
