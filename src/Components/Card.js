
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({name, price, image, description}) {

    return (
    <Card style={{ width: '18rem' ,backgroundColor: 'red'}}>
        <Card.Header>Precio: ${price}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>
    );
}

export default BasicExample;