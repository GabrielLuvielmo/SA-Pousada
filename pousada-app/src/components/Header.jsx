import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        
      <Navbar.Brand href="#home"></Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">  {/* Alterado de me-auto para mx-auto */}
            <Nav.Link path="/" className='home'>Inicio</Nav.Link>
            <Nav.Link href="#link">Pagamento</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
            <Nav.Link href="#link">Feedback</Nav.Link>
            {/* <Nav.Link href="#imagem"><img src="../../images/POUSADA-LOGO.png" alt="pousada" /> </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    


  );
}
export default Header;