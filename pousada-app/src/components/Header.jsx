import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='body-header'>
        <Container>
          <Navbar.Brand href="#home">Quinta do Ypuã</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contato</Nav.Link>
            <Nav.Link href="#pricing">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;