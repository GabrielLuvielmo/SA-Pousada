import React, { useState } from 'react';
import './Principal.css';
import Carrossel from '../../components/Carrossel.jsx';
import Cadastro from '../Login/cadastro.jsx'
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Principal() {

    return (
        <div className='main-inicio'>
            <div>
                <Carrossel/>
            </div>
            <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/domo.jpeg" />
                    <div className='texto-aco'>
                        <h2><bold>Domo</bold></h2>
                        <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                            Nos feriados e datas comemorativas o valor da diária também é diferenciado.</p>
                        <li>Camas: 1 Casal</li>
                        <hr />
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <button className='Valor'>R$590</button>
                    </div>
            </div>

            <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/charuabus.jpeg" />
                    <div className='texto-aco'>
                        <h2><bold>Charua</bold></h2>
                        <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                            Nos feriados e datas lllcomemorativas o valor da diária também é diferenciado.</p>
                        <li>Camas: 1 Casal</li>
                        <hr />
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <button className='Valor'>R$450</button>
                    </div>
            </div>
            <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/suitecozinha.jpg" />
                    <div className='texto-aco'>
                        <h2><bold>Suíte com cozinha</bold></h2>
                        <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                            Nos feriados e datas lllcomemorativas o valor da diária também é diferenciado.</p>
                        <li> Camas: 1 Solteiro, 1 Casal</li>
                        <hr />
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <button className='Valor'>R$380</button>
                    </div>
            </div>   
            <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/chalefamilia.jpg" />
                    <div className='texto-aco'>
                        <h2><bold>Chalé família</bold></h2>
                        <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                            Nos feriados e datas lllcomemorativas o valor da diária também é diferenciado.</p>
                        <li>Camas: 1 Solteiro, 2 Casal</li>
                        <hr />
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <button className='Valor'>R$250</button>
                    </div>
            </div>
            <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/cabana.jpg" />
                    <div className='texto-aco'>
                        <h2><bold>Cabana</bold></h2>
                        <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                            Nos feriados e datas lllcomemorativas o valor da diária também é diferenciado.</p>
                        <li> Camas: 1 Solteiro, 1 Casal</li>
                        <hr />
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <button className='Valor'>R$620</button>
                    </div>
                      
            </div>
           </div>



    )
}


export default Principal;