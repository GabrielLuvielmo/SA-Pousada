import Carousel from 'react-bootstrap/Carousel';
import './Carrossel.css';

function Carrossel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/chale-familia.jpg" //Link do diretorio da primeira imagem do carrossel
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Chalé Família</h5>
          <p>Um chalé acolhedor, perfeito para criar memórias inesquecíveis ao lado de quem você ama.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/suitecozinha-carrossel.jpg" //Link do diretorio da segunda imagem do carrossel
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Suíte com cozinha</h5>
          <p>Suíte rústica e aconchegante, perfeita para relaxar e se reconectar com a natureza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/domo.png" //Link do diretorio da terceira imagem do carrossel
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Domo</h5>
          <p>
          Domo elegante e diferenciado, projetado para quem busca uma conexão profunda com a natureza sem abrir mão do conforto.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/charuabus.jpeg" //Link do diretorio da segunda imagem do carrossel
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Charrua</h5>
          <p>Charrua acolhedora, onde tradição e charme se unem para momentos especiais em meio à tranquilidade do campo.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;