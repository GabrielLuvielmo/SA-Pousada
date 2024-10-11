import Carousel from 'react-bootstrap/Carousel';
import './Carrossel.css';

function Carrossel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/fundo-pousada.png" //Link do diretorio da primeira imagem do carrossel
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/cabana.jpg" //Link do diretorio da segunda imagem do carrossel
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/chalefamilia.jpg" //Link do diretorio da terceira imagem do carrossel
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Chalé Fámilia</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrossel-imagem"
          src="/images/cabana.jpg" //Link do diretorio da segunda imagem do carrossel
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;