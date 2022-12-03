import {Nav, Navbar, Container} from 'react-bootstrap';

const Menu = () => {
    
    return (
        <div>
        <Navbar bg="danger" variant="danger">
            <Container>
            <Navbar.Brand href="#home">Pizza Panucci</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/catalogo_pizzas">Catalogo de Pizzas</Nav.Link>
                <Nav.Link href="/bebidas">Bebidas</Nav.Link>
                <Nav.Link href="/postres">Postres</Nav.Link>

            </Nav>
            </Container>
        </Navbar>
        </div>
    );
    
}
export default Menu;