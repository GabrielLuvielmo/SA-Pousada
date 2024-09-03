import React, { useState } from 'react';
import './home.css'
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home(){
        
    return(
        <div className='CaixaHome'>
            <h3>aaaa</h3>
            <h5>teste para tela cadastro ou sla <Link to="/cadastro" className='entrar'>Entrar</Link></h5>
        </div>
    )
}


export default Home