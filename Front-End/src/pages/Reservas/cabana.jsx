import React from 'react';
import './Reservas.css'; // Supondo que você tenha um arquivo CSS para estilização
import { Link } from 'react-router-dom';

const Cabana = () => {
  return (
    <div className="container-cabana">
      <img 
        className='img-acomodacao-outro' 
        src="../../../images/cabana.jpg" //alterar dps
        alt="Domo" 
      />
      <div className='texto-aco-outro'>
        <h2><strong>Cabana</strong></h2>
        <p>
          Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
          Nos feriados e datas comemorativas, o valor da diária também é diferenciado.
        </p>
        <ul>
          <li>Camas: 1 Casal</li>
          <li>Capacidade: 2 pessoas</li>
          <li>Banheiro privativo</li>
          <li>Ar-condicionado</li>
          <li>Wi-Fi gratuito</li>
        </ul>
      </div>

      {/* Seção de Reserva */}
      <div className="reservar">
        <h3>Reservar a Cabana</h3>
        <p>Preço da diária: R$ 490,00</p>
        <button className="custom-btn-btn-5"><span>Reservar</span></button>
      </div>
    </div>
  );
};

export default Cabana;
