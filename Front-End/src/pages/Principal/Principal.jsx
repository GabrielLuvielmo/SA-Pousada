import React from 'react';
import './Principal.css';
import Carrossel from '../../components/Carrossel.jsx';
import { Link } from 'react-router-dom';

function Principal() {
    return (
        <div className='main-inicio'>
            <div>
                <Carrossel />
            </div>
            <div className="container-principal">
                <img className='img-acomodacao' src="../../../images/domo.jpeg" alt="Imagem do Domo" />
                <div className='texto-aco'>
                    <h2><strong>Domo</strong></h2>
                    <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                        Nos feriados e datas comemorativas o valor da diária também é diferenciado.</p>
                    <li>Camas: 1 Casal</li>
                    <hr />
                </div>
                <div className='valordiv'>
                    <p className='Pagamento'>A partir de </p>
                    <p className='Valor-domo'>R$590</p>
                    <br />
                    <Link to="/domo">
                        <button className='Valor'>Reservar</button>
                    </Link>
                
                </div>
            </div>

            <div className="container-principal">
                <img className='img-acomodacao' src="../../../images/charuabus.jpeg" alt="Imagem do Charua" />
                <div className='texto-aco'>
                    <h2><strong>Charrua</strong></h2>
                    <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                        Nos feriados e datas comemorativas o valor da diária também é diferenciado.</p>
                    <li>Camas: 1 Casal</li>
                    <hr />
                </div>
                <div className='valordiv'>
                    <p className='Pagamento'>A partir de </p>
                    <p className='Valor-domo'>R$450</p>
                    <br />
                    <Link to="/charua">
                        <button className='Valor'>Reservar</button>
                    </Link>
                </div>
            </div>

            <div className="container-principal">
                <img className='img-acomodacao' src="../../../images/suitecozinha.jpg" alt="Imagem da Suíte com cozinha" />
                <div className='texto-aco'>
                    <h2><strong>Suíte com cozinha</strong></h2>
                    <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                        Nos feriados e datas comemorativas o valor da diária também é diferenciado.</p>
                    <li>Camas: 1 Solteiro, 1 Casal</li>
                    <hr />
                </div>
                <div className='valordiv'>
                    <p className='Pagamento'>A partir de </p>
                    <p className='Valor-domo'>R$380</p>
                    <br />
                    <Link to="/suitecomcozinha">
                        <button className='Valor'>Reservar</button>
                    </Link>
                </div>
            </div>

            <div className="container-principal">
                <img className='img-acomodacao' src="../../../images/chalefamilia.jpg" alt="Imagem do Chalé família" />
                <div className='texto-aco'>
                    <h2><strong>Chalé família</strong></h2>
                    <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                        Nos feriados e datas comemorativas o valor da diária também é diferenciado.</p>
                    <li>Camas: 1 Solteiro, 2 Casal</li>
                    <hr />
                </div>
                <div className='valordiv'>
                    <p className='Pagamento'>A partir de </p>
                    <p className='Valor-domo'>R$250</p>
                    <br />
                    <Link to="/chalefamilia">
                    <button className='Valor'>Reservar</button>
                    </Link>
                </div>
            </div>

            <div className="container-principal">
                <img className='img-acomodacao' src="../../../images/cabana.jpg" alt="Imagem da Cabana" />
                <div className='texto-aco'>
                    <h2><strong>Cabana</strong></h2>
                    <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                        Nos feriados e datas comemorativas o valor da diária também é diferenciado.</p>
                    <li>Camas: 1 Solteiro, 1 Casal</li>
                    <hr />
                </div>
                <div className='valordiv'>
                    <p className='Pagamento'>A partir de </p>
                    <p className='Valor-domo'>R$590</p>
                    <br />
                    <Link to="/cabana">
                        <button className='Valor'>Reservar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Principal;
