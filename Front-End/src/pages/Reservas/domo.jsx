import React, { useState } from 'react';
import './Reservas.css'; // Arquivo CSS com os estilos
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Domo = () => {
  const [dataEntrada, setDataEntrada] = useState(null);
  const [dataSaida, setDataSaida] = useState(null);
  const [mensagemReserva, setMensagemReserva] = useState('');
  const valorDiaria = 590; // Preço da diária em reais (R$)

  const calcularCustoTotal = () => {
    if (!dataEntrada || !dataSaida) return 0;

    const diasEstadia = Math.ceil((dataSaida - dataEntrada) / (1000 * 60 * 60 * 24));
    return diasEstadia > 0 ? diasEstadia * valorDiaria : 0;
  };

  const realizarReserva = () => {
    if (!dataEntrada || !dataSaida) {
      setMensagemReserva('Por favor, selecione as datas de entrada e saída.');
      return;
    }

    const diasEstadia = Math.ceil((dataSaida - dataEntrada) / (1000 * 60 * 60 * 24));

    if (diasEstadia <= 0) {
      setMensagemReserva('A data de saída deve ser posterior à data de entrada.');
      return;
    }

    const custoTotal = calcularCustoTotal();

    setMensagemReserva(`Reserva confirmada de ${dataEntrada.toLocaleDateString()} até ${dataSaida.toLocaleDateString()} para ${diasEstadia} dias.\nCusto total: R$${custoTotal.toFixed(2)}`);
  };

  const custoTotal = calcularCustoTotal();

  return (
    <div className="container-domo">
      <img 
        className="imagem-acomodacao1" 
        src="../../../images/domo.jpeg" 
        alt="Domo" 
      />
      <div className="texto-acomodacao">
        <h2 className="titulo-acomodacao"><strong>Domo</strong></h2>
        <p>
          Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
          Nos feriados e datas comemorativas, o valor da diária também é diferenciado.
        </p>
        <ul>
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
      <div className="sessao-reserva">
        <h3>Reservar o Domo</h3>
        <p>Preço da diária: R$ 590,00</p>

        {/* Seleção de Datas */}
        <div className="campo-data">
          <label>Entrada:</label>
          <DatePicker
            selected={dataEntrada}
            onChange={(data) => setDataEntrada(data)}
            minDate={new Date()}
            placeholderText="Selecione a data de entrada"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="campo-data" style={{ marginTop: '10px' }}>
          <label>Saída:</label>
          <DatePicker
            selected={dataSaida}
            onChange={(data) => setDataSaida(data)}
            minDate={dataEntrada || new Date()}
            placeholderText="Selecione a data de saída"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {/* Botão de Reserva */}
        <button
          onClick={realizarReserva}
          className="botao-reserva"
        >
          Reservar Agora
        </button>

        {/* Mensagem de Reserva */}
        {mensagemReserva && (
          <div className="mensagem-reserva">
            <strong>Mensagem de Reserva:</strong>
            <p>{mensagemReserva}</p>
          </div>
        )}
        
        {/* Link para Pagamento */}
        {dataEntrada && dataSaida && custoTotal > 0 && (
          <Link 
            to={{
              pathname: '/pagamento',
              state: {
                dataEntrada,
                dataSaida,
                custoTotal: custoTotal.toFixed(2),
              }
            }}
            className="botao-pagamento"
          >
            Ir para o Pagamento
          </Link>
        )}
      </div>
    </div>
  );
};

export default Domo;
