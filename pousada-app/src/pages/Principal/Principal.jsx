import React, { useState } from 'react';
import './Principal.css';
import Cadastro from '../Login/cadastro.jsx'
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Principal(){

    return (
        <div className='main-inicio'>
            <div>
                <img className='imagem-fundo' src='../../../images/FundoPousadaSA.png'/>
            </div>  
            <div className="container-principal">
                <div className='DOMO'>
                    <img className='img-acomodacao' src="../../../images/domo.jpeg"/>
                    <div className='texto-aco'>
                    <h2><bold>Domo</bold></h2>
                    <p>Obs: Os valores exibidos no site estão sujeitos a constantes atualizações.
                       Nos feriados e datas comemorativas o valor da diária também é diferenciado.</p>
                    <li>Camas: 1 Casal</li>
                    </div>
                    <p className='Pagamento'>A partir de </p>
                    <h1 className='Valor'>R$590</h1>
                </div>    

                <br />
                
            </div>  
        </div>
       
        
    )
}

export default Principal;