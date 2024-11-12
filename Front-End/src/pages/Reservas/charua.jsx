import React from 'react';
import './Reservas.css'; // Supondo que você tenha um arquivo CSS para estilização
import { Link } from 'react-router-dom';

const Charua = () => {
  return (
    <div className="container-principal">
      <img 
        className='img-acomodacao-outro' 
        src="../../../images/domo.jpeg" //alterar dps
        alt="Domo" 
      />
      <div className='pgn-domo'>
        <h2 className='h2-domo'><strong>Charrua</strong></h2>
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
          <li>Tv Inclusa</li>
          <li>Ducha</li>
          <li>Cozinha Inclusa</li>
          <li>Frigobar</li>
          <li>Banheira</li>
          <li>Toalhas</li>
        </ul>
      </div>

      {/* Seção de Reserva */}
      <div className="reservar">
        <h3>Reservar Charrua</h3>
        <p>Preço da diária: R$ 500,00</p>
        <Link to="/pagamento">
      <button className="botao-reserva">Reservar Agora</button>
    </Link>
      </div>
    </div>
  );
};

export default Charua;
