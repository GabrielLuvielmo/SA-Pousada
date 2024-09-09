import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    {/* REPENSAR O MECANISMO DA NAVBAR */}
      <Navbar bg="dark" data-bs-theme="dark" className='body-header'>
        <Container>
          <Navbar.Brand href="/">Quinta do Ypuã</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/inicio">Pagina Inicial</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/cadastro">Entrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;