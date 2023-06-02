
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavContact = () => {
  return (
    <Navbar className='fixed-top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Contact List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/ListContact'>Contacts</Nav.Link>
            <Nav.Link as={Link} to='/AddContact'>Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavContact