import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
// import 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';

function Home(){

    return (
        <div className='main-home'>
            <div>
                <img className='ibagem-fundo' src='../../../images/FundoPousadaSA.png'/>
            </div>
            <br />
                
            <div className="container-texto">
            <h3 className='texto'>
                A pousada Quinta do Ypuã oferece ao seus clientes um recanto de aconchego e lazer, em ambiente  
                rústico e agradável.  Ideal para quem gosta de fugir da rotina e procura um local de paz para descansar e curtir a natureza.
                 <b>"O Ypuã tem tudo a ver com a natureza, dá para sentir a energia do lugar. Eu me preocupo se você vai comer bem,
                  dormir bem e se vai se sentir em casa.</b> Vou te mostrar onde encontrar os melhores frutos do mar,
                   onde curtir a melhor praia e as melhores ondas. Mas se você não quiser fazer nada eu também conheço o melhor lugar."
                    HEITOR, Anfitrião da pousada.</h3>
            <br />
            </div>
            <Link to="/inicio" className='btn-7'>Veja mais!</Link>
            <br />
        </div>
       
        
    )
}

export default Home;