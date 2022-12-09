
import Card from '../Components/Card';
import {Row, Col, Container} from 'react-bootstrap';
import '../App.css';

const Pizzas = () => {

    return (
        <div >
            <h1 style={{textAlign: 'center', backgroundColor: "danger", opacity: "0.3"}} >Lista de Pizzas</h1>
                <Container style= {{justify: 'center', marginTop: '30px'}}>
                <div>
                <Row>
                    <Col>
                        <Card name='BBQ CHICKEN' description='Rica pizza estilo BBQ con pollo y cebolla' image='./Pizzas/BBQ_CHICKEN.jpg' price='25000'/>
                    </Col>
                    <Col>
                        <Card name='AMERICANA' description='Exquisita pizza estilo americano con jamon salchicha y pepperoni' image='./Pizzas/AMERICANA.jpeg' price='25000'/>
                    </Col>
                    <Col >
                        <Card name='CAMPESINA' description='Pizza estilo campesino con pollo, pimiento y champiñones' image='./Pizzas/CAMPESINA.jpeg' price='25000'/>
                    </Col>
                    <Col >
                        <Card name='HAWAIANA' description='Deliciosa pizza estilo Hawaii con pollo, jamon y piña' image='./Pizzas/HAWAIANA.jpeg' price='25000'/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Card name='VEGAN QUEEN' description='Pizza estilo vegano' image='./Pizzas/VEGAN_QUEEN.jpg' price='25000'/>
                    </Col>
                </Row>
            </div>

                </Container>
        </div>
    );
}

export default Pizzas;