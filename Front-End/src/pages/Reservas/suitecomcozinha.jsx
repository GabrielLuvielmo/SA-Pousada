import React from 'react';
import './Reservas.css'; // Arquivo de estilo CSS
import { Link } from 'react-router-dom'; // Caso precise de navegação

const SuiteComCozinha = () => {
  return (
    <div className="container-domo"> {/* Alterado para seguir o padrão de classe */}
      <img 
        className="img-acomodacao-domo" 
        src="../../../images/suitecozinha.jpg" //alterar dps
        alt="Suíte com Cozinha" 
      />
      <div className="texto-aco-domo"> {/* Classe unificada */}
        <h2 className="h2-domo"><strong>Suíte Com Cozinha</strong></h2>
        <p>
          Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
          <br /> Nos feriados e datas comemorativas, o valor da diária também é diferenciado.
        </p>
        <ul className="pontos-domo"> {/* Mesma classe do Domo */}
          <li>Camas: 1 Casal e 1 Solteiro</li>
          <li>Capacidade: 3 pessoas</li>
          <li>Banheiro privativo</li>
          <li>Ar-condicionado</li>
          <li>Wi-Fi gratuito</li>
          <li>TV Inclusa</li>
        </ul>
      </div>

      {/* Seção de Reserva */}
      <div className="reservar"> {/* Mesma classe usada no Domo */}
        <h3>Reservar Suíte</h3>
        <p>Preço da diária: R$ 390,00</p>
        <Link to="/pagamento" className="botao-reserva">
          Reservar Agora
        </Link>
      </div>
    </div>
  );
};

export default SuiteComCozinha;
