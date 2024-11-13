import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="body-header">
      <Container>
        <Navbar.Brand href="/" className="navbar-logo">Quinta do Ypuã</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/inicio" className="nav-link">Página Inicial</Nav.Link>
            <Nav.Link href="/contato" className="nav-link">Contato</Nav.Link>
            <Nav.Link href="/feedback" className="nav-link">Feedback</Nav.Link>
            <Nav.Link href="/cadastro" className="nav-link btn-login3">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
