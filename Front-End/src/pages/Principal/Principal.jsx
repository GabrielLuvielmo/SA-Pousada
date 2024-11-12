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
                    <img className='img-acomodacao' src="../../../images/domo.png" alt="Imagem do Domo" />
                    <div className='texto-aco'>
                        <h2><strong>Domo</strong></h2>
                            <br />
                        <p>Uma experiência única em formato de domo! Com janelas panorâmicas, este espaço moderno e aconchegante 
                        oferece uma visão de tirar o fôlego das montanhas e do céu estrelado.
                        Perfeito para quem busca uma conexão autêntica com a natureza, 
                        o Domo é um refúgio para sonhos e descanso, com design inovador 
                        que traz conforto e sustentabilidade em harmonia.</p>
                    
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento-domo'>A partir de </p>
                        <p className='Valor-domo'>R$590</p>
                        <br />
                        <Link to="/domo">
                            <button className='Valor-domo-botao'>Reservar</button>
                        </Link>
                    
                    </div>
                </div>

                <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/charuabus.jpeg" alt="Imagem do Charua" />
                    <div className='texto-aco'>
                        <h2><strong className='charrua-strong'>Charrua</strong></h2>
                        <p className='p-charrua'>Transformada a partir de um antigo ônibus, a Charrua Sobre Rodas oferece uma experiência única e criativa para quem busca um toque de aventura e nostalgia. Com interiores cuidadosamente adaptados, a acomodação combina o charme rústico com o conforto moderno, proporcionando um refúgio aconchegante em um ambiente exclusivo.</p>
                    
                    
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento-domo'>A partir de </p>
                        <p className='Valor-domo'>R$450</p>
                        <br />
                        <Link to="/charua">
                            <button className='Valor-domo-botao'>Reservar</button>
                        </Link>
                    </div>
                </div>

                <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/suitecozinha.jpg" alt="Imagem da Suíte com cozinha" />
                    <div className='texto-aco'>
                        <h2><strong>Suíte com cozinha</strong></h2>
                        <p className='p-suite'>Com todo o charme de uma suíte exclusiva e a praticidade de uma cozinha completa, este espaço é perfeito para quem gosta de preparar refeições enquanto aprecia a tranquilidade ao redor. A cozinha é equipada com tudo o que você precisa para um jantar especial ou um café da manhã preguiçoso. Cada detalhe foi pensado para que você se sinta em casa, mas com o toque especial de uma pousada acolhedora.</p>
                
                    
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <p className='Valor-geral'>R$380</p>
                        <br />
                        <Link to="/suitecomcozinha">
                            <button className='Valor-domo-botao'>Reservar</button>
                        </Link>
                    </div>
                </div>

                <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/chalefamilia.jpg" alt="Imagem do Chalé família" />
                    <div className='texto-aco'>
                        <h2><strong>Chalé família</strong></h2>
                        <p className='p-chale'>Espaçoso e acolhedor, o Chalé Família é ideal para quem busca momentos especiais em família, cercado pela natureza. Com uma decoração rústica e charmosa, o chalé oferece dois quartos, sala ampla e uma varanda onde todos podem relaxar juntos ao som dos pássaros. É o refúgio perfeito para criar memórias inesquecíveis, com o conforto que você merece e espaço para todos se sentirem em casa.</p>
                    
                    
                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <p className='Valor-geral'>R$250</p>
                        <br />
                        <Link to="/chalefamilia">
                        <button className='Valor-domo-botao'>Reservar</button>
                        </Link>
                    </div>
                </div>

                <div className="container-principal">
                    <img className='img-acomodacao' src="../../../images/cabana.jpg" alt="Imagem da Cabana" />
                    <div className='texto-aco'>
                        <h2><strong>Cabana</strong></h2>
                        <p className='p-cabana'>Romântica e charmosa, a Cabana é o esconderijo ideal para quem busca momentos a dois, rodeado pela serenidade da natureza. Com uma vista para a natureza, é o lugar perfeito para uma noite aconchegante ou uma manhã preguiçosa. Rústica e acolhedora, a cabana convida você a relaxar e aproveitar o melhor da simplicidade em meio à natureza."</p>
                    

                    </div>
                    <div className='valordiv'>
                        <p className='Pagamento'>A partir de </p>
                        <p className='Valor-geral'>R$590</p>
                        <br />
                        <Link to="/cabana">
                            <button className='Valor-domo-botao'>Reservar</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    export default Principal;
