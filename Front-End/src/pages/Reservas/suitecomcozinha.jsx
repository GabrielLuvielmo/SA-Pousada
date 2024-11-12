import React from 'react';
import './Reservas.css'; // Supondo que você tenha um arquivo CSS para estilização
import { Link } from 'react-router-dom';

const SuiteComCozinha = () => {
  return (
    <div className="container-principal">
      <img 
        className='img-acomodacao-outro' 
        src="../../../images/domo.jpeg" //alterar dps
        alt="Domo" 
      />
     <div className='pgn-domo'>
        <h2 className='h2-domo'><strong>Suíte Com Cozinha</strong></h2>
        <p>
          Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
          Nos feriados e datas comemorativas, o valor da diária também é diferenciado.
        </p>
        <ul>
          <li>Camas: 1 Casal e 1 Solteiro</li>
          <li>Capacidade: 3 pessoas</li>
          <li>Banheiro privativo</li>
          <li>Ar-condicionado</li>
          <li>Wi-Fi gratuito</li>
          <li>Tv Inclusa</li>
        </ul>

      </div>

      {/* Seção de Reserva */}
      <div className="reservar">
        <h3>Reservar o Domo</h3>
        <p>Preço da diária: R$ 500,00</p>
        <Link to="/pagamento">
      <button className="botao-reserva">Reservar Agora</button>
    </Link>
      </div>
    </div>
  );
};

export default SuiteComCozinha;
