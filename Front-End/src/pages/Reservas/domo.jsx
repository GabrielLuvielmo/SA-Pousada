import React from 'react';
import './Reservas.css';
import { Link } from 'react-router-dom';

const Domo = () => {
  return (
    <div className="container-principal">
      <div className="image-container">
        <img 
          className="img-acomodacao" 
          src="../../../images/domo.jpeg" 
          alt="Domo" 
        />
      </div>

      <div className="details-container">
        <h2 className="title-domo">Domo</h2>
        <p className="description">
          Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
          Nos feriados e datas comemorativas, o valor da diária também é diferenciado.
        </p>
        <ul className="features-list">
          <li>Camas: 1 Casal</li>
          <li>Capacidade: 3 pessoas</li>
          <li>Banheiro privativo</li>
          <li>Ar-condicionado</li>
          <li>Wi-Fi gratuito</li>
          <li>Cozinha</li>
          <li>Ducha</li>
          <li>Toalhas</li>
          <li>TV Inclusa</li>
        </ul>
      </div>

      {/* Seção de Reserva */}
      <div className="reservation-container">
        <h3 className="reservation-title">Reservar o Domo</h3>
        <p className="price">Preço da diária: <strong>R$ 500,00</strong></p>
        <Link to="/pagamento">
          <button className="reserve-button">Reservar Agora</button>
        </Link>
      </div>
    </div>
  );
};

export default Domo;
