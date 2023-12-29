import './Header.css'
import Logo from '/image/Logo-fundo-preto.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className='bg-light-cl' expand='lg'>
      <Container>
        <Navbar.Brand className='logo-name' href=''>
          <img src={Logo} className='logo-image' alt='Logo Helper Board' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav className='nav-items'><Link className='header-link' to={'/'}>Página Inicial</Link></Nav>
            <Nav className='nav-items'><Link className='header-link' to={'/detetive'}>Detetive</Link></Nav>
            <Nav className='nav-items'><Link className='header-link' to={'/about-us'}>Sobre Nós</Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
