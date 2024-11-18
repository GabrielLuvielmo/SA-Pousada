import React from 'react';
import './Reservas.css'; 
import { Link } from 'react-router-dom';
import Carrossel from '../../components/Carrossel.jsx';

const Domo = () => {
  return (
    <div className="container-domo">
      <img 
        className='img-acomodacao-domo' 
        src="../../../images/domo.jpeg" 
        alt="Domo" 
      />
      <div className='texto-aco-domo'>
        <h2 className='h2-domo'><strong >Domo</strong></h2>
        <p>
          Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
          Nos feriados e datas comemorativas, o valor da diária também é diferenciado.
        </p>
        <ul className=' pontos-domo'>
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
      <div className="reservar">
        <h3>Reservar o Domo</h3>
        <p>Preço da diária: R$ 590,00</p>
        <Link to="/pagamento" className="botao-reserva">
        Reservar Agora
      </Link>
      </div>
    </div>
  );
};

export default Domo;
